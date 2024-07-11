"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "1",
  },
];

const AchievementsSection = () => {
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const { top } = document
        .getElementById("Statistics")
        ?.getBoundingClientRect();
      if (top <= window.innerHeight && !startCount) {
        console.log("Reached Statistics!");
        setStartCount(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  return (
    <div id="Statistics" className="py-4 px-4 xl:gap-8 sm:py-8 xl:px-8">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-center gap-5 w-fit mx-auto">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <CountUp
                  start={0}
                  end={startCount ? achievement.value : 0}
                  duration={5}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
