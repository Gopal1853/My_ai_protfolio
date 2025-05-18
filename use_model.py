from transformers import AutoTokenizer, AutoModelForQuestionAnswering
import torch
import re

def load_model():
    # Load the tokenizer and model from Hugging Face
    model_name = "Gopal1853/Agam_is_here"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForQuestionAnswering.from_pretrained(model_name)
    return tokenizer, model

def clean_text(text):
    # Remove extra whitespace and normalize text
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def get_answer(question, context, tokenizer, model):
    # Clean the question and context
    question = clean_text(question)
    context = clean_text(context)
    
    # Format the input properly
    inputs = tokenizer(
        question,
        context,
        add_special_tokens=True,
        return_tensors="pt",
        truncation="only_second",
        max_length=512,
        padding="max_length"
    )
    
    # Get model predictions
    with torch.no_grad():
        outputs = model(**inputs)
        
        # Get the most probable start and end positions
        start_scores = torch.softmax(outputs.start_logits, dim=1)
        end_scores = torch.softmax(outputs.end_logits, dim=1)
        
        # Get the top 5 start and end positions
        start_positions = torch.topk(start_scores, k=5, dim=1).indices[0]
        end_positions = torch.topk(end_scores, k=5, dim=1).indices[0]
        
        # Find the best start-end pair
        best_score = -1
        best_answer = ""
        
        for start in start_positions:
            for end in end_positions:
                if end >= start and end - start < 100:  # Ensure reasonable answer length
                    score = start_scores[0][start] * end_scores[0][end]
                    if score > best_score:
                        best_score = score
                        # Get the answer tokens
                        answer_tokens = inputs["input_ids"][0][start:end+1]
                        answer = tokenizer.decode(answer_tokens, skip_special_tokens=True)
                        answer = clean_text(answer)
                        
                        # Only keep the answer if it's meaningful
                        if (answer.lower() not in question.lower() and 
                            len(answer.split()) > 3 and 
                            len(answer) < 500 and
                            not answer.startswith(question.lower())):
                            best_answer = answer
    
    if not best_answer:
        # If no good answer found, try to find a relevant section from context
        context_sections = context.split('. ')
        for section in context_sections:
            section = clean_text(section)
            if any(word in section.lower() for word in question.lower().split()):
                if section.lower() not in question.lower():
                    return section
    
    return best_answer if best_answer else "I'm sorry, I couldn't find a specific answer to your question in my knowledge base."

def main():
    # Load the model and tokenizer
    tokenizer, model = load_model()
    
    # Context about R. Gopalram
    context = """
    R. Gopalram is a 23-year-old professional from Haryana, currently based in Bangalore. He completed his B.Tech in Electronics and Communication Engineering from Puducherry Technological University in July 2024. He is known for his compassionate and persevering nature, strong problem-solving and communication skills, and a solution-oriented mindset. He values integrity, adaptability, and continuous growth.

    Gopalram has formal diplomas in Music and Tabla from Pracheen Sangeet Samiti and Pracheen Kala Kendra. He enjoys geopolitical news, hardware tinkering, and cooking. His musical preferences include Classical and Soft genres.

    Technical Skills: Programming Languages: Python, C++, JavaScript, C, MATLAB, Emu8086, Arduino. Web Development: HTML, CSS, Tailwind CSS, JavaScript, ReactJS, NodeJS, Express.js, Flask. Databases & Data Engineering: MongoDB, SQL, NoSQL, PySpark, ETL, Data Warehouse, Snowflake. AI/ML: PyTorch, TensorFlow, Scikit-Learn, Pandas, NumPy, SciPy, Data Science, Machine Learning, Deep Learning, NLP, Generative AI, HuggingFace, BERT, Transformers, CNN, RNN, LSTM. Cloud Platforms: AWS (EC2, S3), Azure. OS & Tools: Linux (Ubuntu), Windows OS, Shell Scripting, GitHub, Docker, DevOps (Basics), DSA, OOP. ECE Core: Embedded Systems, Circuit Design, VLSI, Microcontrollers, Communication Systems.

    Projects: Healthcare Website at PIMS: Full-stack healthcare website using React, Node.js, MongoDB; integrated OpenAI's Whisper API; developed ETL pipelines using PySpark and SQL; deployed on AWS. Multilingual Offline Translator at L&T: REST APIs in Flask, fine-tuned NLP models using PyTorch, processed multilingual datasets using PySpark, C-based CLI for real-time translation. Disaster Management System: LoRaWAN-based mine safety system with CH4, O2, temperature, and SpO2 sensors; real-time health monitoring and automated SOS alerts. Automated Pet Tracker: Real-time pet tracking system using Arduino Nano, GPS, and GSM modules with geofencing alerts.

    Professional Experience: Web Developer & Data Engineer at PIMS (June – December 2024). Project Intern at L&T Precision Engineering (January – May 2024).

    Agam is a personalized BERT-based chatbot created by Gopalram to provide information about his background, skills, projects, and career goals. Agam is designed to be helpful, accurate, and efficient in answering questions about Gopalram's professional journey.
    """
    
    print("Agam: Hello! I'm Agam, an AI assistant created by Gopalram. I can answer questions about his background, skills, projects, and professional experience. How can I help you today?")
    
    # Example usage
    while True:
        question = input("\nYou: ")
        if question.lower() == 'quit':
            break
            
        # Get answer
        answer = get_answer(question, context, tokenizer, model)
        
        # Print the answer
        print(f"\nAgam: {answer}")

if __name__ == "__main__":
    main() 