"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML/SCC(SCSS, TAILWIND)</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>JWT</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Kyiv Polytechnic Institute Computer sciences 2017 - 2023</li>
        <li>Mate Academy</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>Front-end developer at IT-Enterprise 2021 - 2023</li>
      </ul>
    )
  }
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section id='about' className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a full-stack developer with about two years of experience.
            My tech stack includes JavaScript, React, Node, Express, and SQL.
            I graduated from a technical university with a specialization in
            Automation and Computer-Integrated Sciences, where I was first introduced to programming.
            I have upper-intermediate knowledge of English and continue to attend
            English classes regularly several times a week. As for myself, I
            would describe myself as sociable, versatile, curious, and with a positive outlook on life. I pay close attention to details and constantly strive to improve my results.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              {" "}Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              {" "}Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}>
              {" "}Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection