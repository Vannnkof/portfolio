"use client";
import React, { useState } from 'react';
import GithubIcon from "../../public/git-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import TelegramIcon from "../../public/telegram-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log('Message sent.')
      setEmailSubmitted(true);
    }
  }

  return (
    <section id='contact' className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 msx-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Wether you have a question or just want to say hi, I&apos;ll tru my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Vannnkof">
            <Image
              src={GithubIcon}
              alt='Github Icon'
              width={50}
              height={50}
              className="bg-white rounded-full border"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ivan-khutorovyi-35ba0a292/">
            <Image
              src={LinkedinIcon}
              alt='LinkedinIcon Icon'
              width={50}
              height={50}
              className="bg-white rounded-full border border-white"
            />
          </Link>
          <Link href="https://t.me/Vannnkof">
            <Image
              src={TelegramIcon}
              alt='TelegramIcon Icon'
              width={50}
              height={50}
              className="bg-white rounded-full border border-white"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Johnlock@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying Hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 resize-none"
              placeholder="Let's talk about..."
              rows={5}
            />
          </div>
          <button
            disabled
            type="submit"
            className="bg-orange-500 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-not-allowed"
          >
            Send Message
          </button>
          {
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div>
    </section>
  )
}

export default EmailSection