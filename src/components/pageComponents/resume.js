'use client';
import React from "react"
import resumeData from "../../staticData/experience.json"
import educationData from "../../staticData/education.json"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const resume = () => {
  return (
    <>
      <div id="resume" className="resume page-container">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Education</h3>
              {educationData.education.map((edu) => (
                <motion.div
                  className="resume-item"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0 }}
                  key={edu.id}
                >
                  <h4>{edu.degree}</h4>
                  <h5>
                    {edu.startDate} - {edu.endDate}
                  </h5>
                  <p></p>
                  <Link
                    href={edu.instituteWebsiteLink}
                    rel="nofollow"
                    target="parent"
                  >
                    <img src={edu.logo.image_link} alt={edu.logo.alt_text} className="img-fluid" width={edu.logo.width} height={edu.logo.height}/>
                  </Link>{" "}
                  <em className="institute-name">
                    {edu.institution}, {edu.location}
                  </em>
                  <p></p>
                  <ul>
                    {edu.description.map((eduPoint) => (
                      <li key={Math.random()}>{eduPoint}</li>
                    ))}
                  </ul>
                  <p></p>
                </motion.div>
              ))}
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>

              {resumeData.experiences.map((exp) => (
                <motion.div
                  className="resume-item"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0 }}
                  key={exp.id}
                >
                  <h4>{exp.title}</h4>
                  <h5>
                    {exp.startDate} - {exp.endDate}
                  </h5>
                  <p></p>
                  <img
                    src={exp.logo.image_link}
                    alt={exp.logo.alt_text}
                    className="img-fluid"
                    width={exp.logo.width}
                    height={exp.logo.height}
                  />
                  &nbsp; &nbsp;
                  <em className="institute-name">
                    {exp.company} , {exp.location}
                  </em>
                  <p></p>
                  <ul>
                    {exp.description.map((expPoint) => (
                      <li key={Math.random()}>{expPoint}</li>
                    ))}
                  </ul>
                  <p></p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default resume
