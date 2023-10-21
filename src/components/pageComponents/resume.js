import React from "react";
import resumeData from "../../staticData/experience.json";
import educationData from "../../staticData/education.json";
import Link from "next/link";
import Image from "next/image";
import { color, motion } from "framer-motion";

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
              {/* <h3 className="resume-title">Sumary</h3> */}
              {/* <div className="resume-item pb-0">
                <h4>Full Stack Software Development</h4>
                <p>
                  <em>
                    My services includes the FullStack Website development and
                    are adaptive to the requirments of the project. I like to
                    work with the JavaScript stack mainly Nodejs, React, and
                    MongoDB but I am open to various opportunities and different
                    technologies to learn and work with.
                  </em>
                </p>
                <p></p>
                <ul>
                  <li>Full Stack Development</li>
                  <li>Software Development</li>
                  <li>Online Marketing</li>
                  <li>Software Consultation</li>
                  <li>Mobile Development</li>
                </ul>
                <p></p>
              </div> */}
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
                    <Image
                      src={edu.logo.image_link}
                      alt={edu.logo.alt_text}
                      className="img-fluid"
                      width={edu.logo.width}
                      height={edu.logo.height}
                    />
                  </Link>{" "}
                  <em className="institute-name">
                    {edu.institution}, {edu.location}
                  </em>
                  <p></p>
                  <ul>
                    {edu.description.map((eduPoint) => (
                      <li>{eduPoint}</li>
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
                  <Image
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
                      <li>{expPoint}</li>
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
  );
};

export default resume;
