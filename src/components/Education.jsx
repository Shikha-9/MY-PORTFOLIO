import React from "react";
import { education } from "../constants";

const Education = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      {education.map((edu, index) => (
        <div key={`edu-${index}`} className="mb-6">
          <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
          <p className="text-gray-400 text-sm">{edu.school} — {edu.date}</p>
          <ul className="list-disc ml-5 mt-2">
            {edu.points.map((point, idx) => (
              <li key={`point-${idx}`} className="text-gray-300 text-sm">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Education;
