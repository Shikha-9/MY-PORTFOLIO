import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const EducationCard = ({ degree, school, date, points, image }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="bg-black-200 p-6 rounded-3xl w-full flex flex-col items-center">
      <img src={image} alt={degree} className="w-24 h-24 object-contain mb-4" />
      <h3 className="text-white font-bold text-center text-xl">{degree}</h3>
      <p className="text-secondary text-sm text-center">{school}</p>
      {date && <p className="text-secondary text-sm text-center">{date}</p>}
      <ul className="list-disc mt-2 text-sm text-gray-300">
        {points.map((point, idx) => (
          <li key={`point-${idx}`} className="ml-4">{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}>
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </div>
      <div className={`-mt-10 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10`}>
        {education.map((edu, index) => (
          <EducationCard key={`edu-${index}`} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");
