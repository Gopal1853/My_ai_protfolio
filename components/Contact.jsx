"use client";
import Image from "next/image";
import "../app/globals.css";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [submitting, setSubmitting] = useState(false);

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        toast.success("Message sent successfully!");
        form.current.reset();
      }, (error) => {
        toast.error("Message not sent. Please try again.");
        console.log(error.text);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <main className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4" id="contact">
      <section className="flex items-center gap-4 pt-2">
        <hr className="h-1 w-12 bg-gray-600 rounded-full" />
        <p className="text-2xl font-medium">&lt;Contact &nbsp;/&gt;</p>
      </section>

      {/* Contact Section */}
      <section className="flex justify-center items-center gap-12">
        <section className="p-1 lg:w-1/3 max-w-fit flex items-center max-lg:hidden">
          <Image
            src="/contact/email.svg"
            alt="email"
            priority={false}
            height={300}
            width={650}
            style={{ width: "650px", height: "auto" }}
          />
        </section>

        <section className="lg:w-2/4 md:w-3/4 sm:w-3/4 w-full p-6 rounded-xl card flex flex-col justify-center items-center max-sm:m-4 max-md:mt-8">
          <form ref={form} className="w-full p-1 lg:p-6" onSubmit={handleSubmit}>

            {/* Name Field */}
            <div className="mb-5">
              <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 outline-none"
                placeholder="Enter your name here"
                required
                aria-label="Name Input Field"
              />
            </div>

            {/* Email Field */}
            <div className="mb-5">
              <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 outline-none"
                placeholder="Enter your email here"
                required
                aria-label="Email Input Field"
              />
            </div>

            {/* Message Field */}
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 outline-none resize-none"
                placeholder="Enter your message here"
                required
                aria-label="Message Input Field"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              aria-label="Submit Button"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </section>

      {/* Fun Fact Section */}
      <section className="flex justify-center items-center">
        <section className="w-full lg:w-3/4 p-3 flex flex-col justify-start gap-4 text-xl rounded-xl py-6 shadow-sm lg:p-6 card">
          <section className="flex items-center gap-4">
            <hr className="h-1 w-16 bg-gray-800 rounded-full" />
            <p className="font-medium text-xl lg:text-2xl text-gray-900">
              &lt;Fun Fact &nbsp;/&gt;
            </p>
          </section>
          <p className="lg:text-xl text-lg text-gray-800 font-normal leading-relaxed">
            When I&apos;m not diving into tech projects, you&apos;ll find me with a tabla in hand — I completed a diploma in Music and Tabla from Sangeet Prayag Samiti. I&apos;m also passionate about geopolitical news and international relations, always keeping an eye on world affairs. A bit of a hands-on enthusiast, I enjoy working with hardware — whether it&apos;s tinkering with circuits, building tech prototypes, or exploring new gadgets. Oh, and I can cook up a storm in the kitchen, too!
          </p>
        </section>
      </section>

      <Toaster position="bottom-center" />
    </main>
  );
};

export default Contact;
