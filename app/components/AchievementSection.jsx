"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {
  return import ("react-animated-numbers")
}, { ssr: false })


const achievementsList = [
  {
    metric: "Hours",
    value: "2500",
    postfix: "+",
  },
  {
    metric: "Tasks",
    value: "150",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "algorithmic tasks",
    value: "250",
  },
  {
    metric: "Years",
    value: "2.5",
    postfix: "+",
  },
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center mx-4">
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers 
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={((_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    }
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AchievementSection