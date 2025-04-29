import { FaInstagram, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiLinkedinFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiMysql, SiMongodb, SiPython, SiCplusplus, SiFlask, SiPytorch, SiTensorflow, SiPandas, SiNumpy, SiScipy, SiScikitlearn, SiAmazonaws, SiApachespark, SiUbuntu, SiLinux, SiMicrosoftexcel, SiPostgresql } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "../app/globals.css";
import Link from "next/link";

const About = () => {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 justify-between items-center"
      id="about"
    >
      <section className="flex flex-col-reverse lg:flex-col lg:p-6 p-4 gap-6">
        {/* left Section */}
        <section className="w-full p-2 rounded-xl py-6 lg:py-0.5 shadow-sm flex flex-col max-md:gap-6 card lg:p-4">
          <section className="flex items-center gap-4 h-1/5 ">
            <hr className="h-1 w-16 bg-gray-800 rounded-full" />
            <p className="text-xl lg:text-2xl font-medium text-gray-900">
              &lt;My Skills &nbsp;/&gt;
            </p>
          </section>
          {/* Programming Languages */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Programming Languages</h3>
            <section className="flex gap-6 justify-center flex-wrap text-lg text-gray-800">
              <section className="flex justify-center items-center flex-col">
                <SiPython size={50} className="text-blue-500" /> Python
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiCplusplus size={50} className="text-blue-700" /> C++
              </section>
              <section className="flex justify-center items-center flex-col">
                <RiJavascriptFill size={50} className="text-yellow-500" />
                Javascript
              </section>
            </section>
          </section>

          {/* Operating Systems */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Operating Systems</h3>
            <section className="flex gap-6 justify-center flex-wrap text-lg text-gray-800">
              <section className="flex justify-center items-center flex-col">
                <SiUbuntu size={45} className="text-orange-500" /> Ubuntu
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiLinux size={45} className="text-yellow-600" /> Linux
              </section>
            </section>
          </section>

          {/* Databases */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Databases</h3>
            <section className="flex gap-6 justify-center flex-wrap text-lg text-gray-800">
              <section className="flex justify-center items-center flex-col">
                <SiMongodb size={45} className="text-green-500" /> MongoDB
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiMysql size={45} className="text-cyan-500" /> MySQL
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiPostgresql size={45} className="text-blue-400" /> PostgreSQL
              </section>
            </section>
          </section>

          {/* Web Development */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Web Development</h3>
            <section className="flex gap-6 justify-center flex-wrap text-lg text-gray-800">
              <section className="flex justify-center items-center flex-col">
                <FaReact size={50} className="text-sky-500" /> React JS
              </section>
              <section className="flex justify-center items-center flex-col">
                <FaNodeJs size={45} className="text-green-500" /> Node.js
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiFlask size={45} className="text-black" /> Flask
              </section>
              <section className="flex justify-center items-center flex-col">
                <FaHtml5 size={50} className="text-orange-500" /> HTML
              </section>
              <section className="flex justify-center items-center flex-col">
                <IoLogoCss3 size={50} className="text-blue-500" /> CSS
              </section>
            </section>
          </section>

          {/* Data Analysis & ML Tools */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Data Analysis & ML Tools</h3>
            <section className="flex gap-6 justify-center flex-wrap text-lg text-gray-800">
              <section className="flex justify-center items-center flex-col">
                <SiPytorch size={45} className="text-orange-600" /> PyTorch
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiTensorflow size={45} className="text-orange-500" /> TensorFlow
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiPandas size={45} className="text-purple-600" /> Pandas
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiNumpy size={45} className="text-blue-400" /> NumPy
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiScipy size={45} className="text-teal-500" /> SciPy
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiScikitlearn size={45} className="text-orange-500" /> Scikit-learn
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiMicrosoftexcel size={45} className="text-green-600" /> MS Excel
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiApachespark size={45} className="text-orange-600" /> PySpark
              </section>
              <section className="flex justify-center items-center flex-col">
                <SiAmazonaws size={45} className="text-yellow-500" /> AWS
              </section>
            </section>
          </section>
        </section>

        {/* Right Section - Experience */}
        <section className="w-full p-3 flex flex-col justify-start gap-4 text-xl rounded-xl py-6 shadow-sm lg:p-6 card">
          <section className="flex items-center gap-4">
            <hr className="h-1 w-16 bg-gray-800 rounded-full" />
            <p className="font-medium text-xl lg:text-2xl text-gray-900">
              &lt;Experience &nbsp;/&gt;
            </p>
          </section>
          <span className="lg:text-xl text-lg text-gray-800 font-normal">
            Data Engineer/Web Developer I 06/2024 – 12/2024
          </span>
          <span className="lg:text-xl text-lg text-gray-800 font-normal">
            PIMS Hospital Puducherry (Freelance)
          </span>
          <ul className="lg:text-xl text-lg text-gray-800 font-normal">
            <li>• Developed a website using React.js and the MERN stack, enabling a dynamic user interface and seamless interaction with MongoDB.</li>
            <li>• Implemented scalable ETL pipelines using PySpark and SQL queries to process patient medical data.</li>
            <li>• Developed data integration workflows to merge structured and unstructured data from multiple sources into MongoDB, ensuring data consistency.</li>
            <li>• Implemented data quality & validation checks in the ETL pipelines to maintain accuracy in patient records.</li>
            <li>• Created an automated data transformation process using Python scripting to standardize diverse medical datasets from different sources.</li>
            <li>• Designed MongoDB with a flexible schema to efficiently store and retrieve patient data.</li>
            <li>• Built monitoring dashboards using PySpark and MongoDB aggregation pipelines to track KPIs.</li>
            <li>• Deployed ETL workflows and data pipelines on AWS infrastructure, leveraging services like EC2 and S3.</li>
          </ul>
          <hr className="h-1 w-100 bg-gray-800 rounded-full mt-4" />
          <span className="lg:text-xl text-lg text-gray-800 font-normal">
            Project Intern I 01/2024 – 05/2024
          </span>
          <span className="lg:text-xl text-lg text-gray-800 font-normal">
            L&T Precision Engineering and Systems (Internship)
          </span>
          <ul className="lg:text-xl text-lg text-gray-800 font-normal">
            <li>• Created ETL pipelines using PySpark to process large multilingual datasets, reducing data preprocessing time while maintaining data quality for model training.</li>
            <li>• Implemented SQL queries to manage and retrieve training data, creating a streamlined data flow architecture.</li>
            <li>• Implemented data cleaning and validation procedures using Python and Spark, ensuring high-quality training data that improved model accuracy by 80% in final benchmarks.</li>
            <li>• Implemented data quality & validation checks in the ETL pipelines to maintain accuracy in patient records.</li>
            <li>• Collaborated with embedded systems engineers to optimize data processing architecture for resource-constrained environments while maintaining translation quality.</li>
            <li>• Developed Python scripts for model evaluation metrics and performance monitoring to ensure translation accuracy benchmarks were met.</li>
            <li>• Developed documentation for data pipelines & model deployment, facilitating knowledge transfer.</li>
            <li>• Implemented memory-efficient data structures and algorithms in C for embedded system implementation, optimizing runtime performance while working within hardware constraints.</li>
            <li>• Used Flask to fetch the model API they fine-tuned and interfaced the endpoint in C language using the Curl library.</li>
          </ul>
        </section>
      </section>
    </main>
  );
};
export default About;
