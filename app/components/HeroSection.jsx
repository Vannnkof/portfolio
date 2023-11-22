"use client"
import react, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    window.location.href = '/CV_Khutorovyi_Ivan_Kyiv.pdf';
    setButtonClicked(true);
  };

  return (
    <section id="hero" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
              Hello I`m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Ivan Khutorovyi',
                3000,
                'Front-end Dev',
                800,
                'Full-stack Dev',
                800,
                'Good guy',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            &quot;A web developer and just a good guy who creates in the world of bits and pixels. Passionate about web technologies, I craft functional and stylish websites. Let&apos;s make the Internet better together!&quot;
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 to-primary-500 hover:text-slate-200 text-white"
            >
              Hire Me
            </Link>
            <button
              onClick={handleButtonClick}
              disabled={buttonClicked}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to bg-orange-500 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#202020] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section >
  );

}

export default HeroSection;

