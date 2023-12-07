import './Statistics.css'
import React, {  useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Statistics = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { top } = document.getElementById("Statistics").getBoundingClientRect();
      if (top <= window.innerHeight && !startCount) {
        console.log("Reached Statistics!");
        setStartCount(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  return (
    <div id="Statistics"  data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
        <h1 className="title" >إحصائياتنا</h1>
      <div className="Statisticsontent">
        <div className="statisInfo" data-aos="fade-rigth" data-aos-delay="500" data-aos-duration="1000">
        <i class="fa-solid fa-calendar-plus"></i>
          <p className="stat-num ">
            <span >
              <CountUp start={0} end={startCount? 28 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <span className="stat-desc">Created jobs</span>
        </div>
        <div className="statisInfo"  >
          <i className="fa-solid fa-lightbulb"></i>
          <p className="stat-num ">
            <span >
              <CountUp start={0} end={startCount? 75 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <span className="stat-desc">finished projects</span>
        </div>
        <div className="statisInfo" >
          <i className="fa-solid fa-user"></i>
          <p className="stat-num ">
            <span >
              <CountUp start={0} end={startCount? 100 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <span className="stat-desc"> happy customers</span>
        </div>
        <div className="statisInfo"  >
          <i className="fa-solid fa-calendar-plus"></i>
          <p className="stat-num ">
            <span>
              <CountUp start={0} end={startCount? 13 : 0} duration={5} />
            </span>
            <span className="sign">+</span>
          </p>
          <span className="stat-desc">yearsOf experience</span>
        </div>
      </div>
    </div>
  )
}

export default Statistics;