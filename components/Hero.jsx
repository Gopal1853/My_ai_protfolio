"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import bgImg from "../public/hero/gopal.jpg";

const Hero = () => {
  const roles = ["Data Engineer", "ECE Engineer", "Software Developer", "Data Analyst"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000); // 1 second

    return () => clearInterval(interval);
  }, [roles.length]);

  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Data Engineer CV 30Dec2024.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <main className="min-h-[calc(100svh-5.03rem)] md:flex-row flex flex-col-reverse justify-center items-center gap-4">
      {/* Left Section */}
      <section className="max-w-3xl min-h-xl p-4 flex flex-col gap-3 m-4">
        <p className="lg:text-3xl text-2xl font-medium"> Hello, Myself</p>
        <h1 className="lg:text-5xl text-4xl font-bold text-emerald-700">
          R Gopalram
        </h1>
        <h2 className="lg:text-4xl text-3xl font-medium flex gap-2">
          I am a <span className="text-emerald-600">{roles[currentRoleIndex]}</span>
        </h2>
        <p className="lg:text-2xl text-lg text-gray-600">
          I am a skilled Data Engineer, Software Developer proficient in SQL, Python, NLP, Embedded system, MATLAB, EMU8086, Arduino, FPGA programming, VLSI, PyTorch, Tensorflow, Scikit-Learn, Pandas, NumPy, SciPy, JavaScript, React, Node.js, Express.js, and MongoDB. Seeking a full-time role to design and develop scalable, data-driven solutions by leveraging my skills in software
          engineering and system integration.
        </p>

        <section className="flex flex-col gap-6">
          {/* Social Media Icons */}
          <section className="flex items-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/rgopalram"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my linkedin profile"
            >
              <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
            </a>
            <a
              href="https://github.com/Gopal1853"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my github profile"
            >
              <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>
            <a
              href="https://huggingface.co/Gopal1853"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my huggingface profile"
            >
              <Image
                src="https://cdn.prod.website-files.com/657639ebfb91510f45654149/67cb2328a0f5afcb01adc404_66bbf2250478cce84c3c3760_66bbf21b7f0ee244a1589b75_c3635b59-a3d2-444a-b636-a9d0061dcdde.png"
                alt="Hugging Face Logo"
                width={48}
                height={48}
                className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 object-cover hover:bg-pink-500 p-1 hover:scale-105 transition-transform"
              />
            </a>
          </section>

          {/* Buttons */}
          <section className="flex gap-4">
            <Link href="mailto:rgopalram737@gmail.com">
              <button
                className="flex items-center px-3 py-2 bg-emerald-700 hover:bg-emerald-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
                aria-label="Contact Button"
              >
                <IoIosMail size={24} />
                <span className="ml-1.5 md:text-lg">Contact</span>
              </button>
            </Link>

            <button
              className="flex items-center px-3 py-2 bg-red-700 hover:bg-red-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
              onClick={handleDownloadResume}
              aria-label="Resume Download Button"
            >
              <IoDocumentText size={22} />
              <span className="ml-1.5 md:text-lg">Resume</span>
            </button>
          </section>
        </section>
      </section>

      {/* Right Section */}
      <section className="lg:max-w-lg p-4 max-lg:hidden">
        <Image
          className="max-w-xl rounded-xl"
          src={bgImg}
          alt="R Gopalram"
          priority={false}
          height={300}
          width={350}
          placeholder="blur"
          style={{
            width: "350px",
            height: "auto",
          }}
        />
      </section>
    </main>
  );
};

export default Hero;
