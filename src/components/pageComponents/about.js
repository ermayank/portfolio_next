'use client';
import Head from "next/head"
import Image from 'next/image'
import links from "../../staticData/links.json"
import { color, motion } from "framer-motion"

import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiFirebase,
} from "react-icons/si"
import {
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaDocker,
  FaJava,
  FaLinux,
  FaWordpress,
} from "react-icons/fa"
import { DiGit } from "react-icons/di"

import Link from "next/link"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export default function About() {
  let currentAge
  const year = new Date().getFullYear()
  const month = new Date().getMonth()

  if (month <= 8) {
    currentAge = year - 1998 - 1
  } else {
    currentAge = year - 1998
  }
  return (
    <>
      <Head>
        <title>About Mayank Gupta</title>
        <meta
          name="description"
          content="About mayank gupta and his intrestes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<Link rel="icon" href="/favicon.ico" />*/}
      </Head>

      {/* <!-- ======= About Section ======= --> */}

      <div className="page-container" id="about-section">
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={"/img/me_about.png"} width="600" height="680" alt="Picture of the mayank gupta" className="img-fluid" priority={true.toString()}></img>
              {/* <Image*/}
              {/*  src="/img/me_about.png"*/}
              {/*  alt="Picture of the mayank gupta"*/}
              {/*  className="img-fluid"*/}
              {/*  width="600"*/}
              {/*  height="680"*/}
              {/*  priority*/}
              {/*/> */}
            </div>

            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
                <h3>Full Stack Software Developer</h3>
              </motion.div>
              <p className="fst-italic">
                Creating Innovation for Everyday people around me
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Website:</strong>
                      <span>
                        <Link href="/" className="about_link">
                          www.mayankgupta.tech
                        </Link>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Languages:</strong>
                      <span>English, Hindi, Français (débutant)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Montreal, CA</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong> <span>Post Graduation</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>{links.email}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I am a passionate FullStack Software Development Engineer with
                hands-on experience in creating web applications in personal,
                academic and professional environments using Agile
                methodologies. I&apos;m also familiar with AWS cloud practices with
                sufficient knowledge of cloud technologies. While I was enrolled
                in the Master of Engineering in Gina Cody School of Computing
                program at Concordia University, Montreal, Canada. I worked on
                several academic projects involving diversity of technologies
                from the topic areas such as Programming on Cloud, Neural
                Networks, and Software Testing and Validation.
              </p>
              <p>
                As a Full Stack Web Developer, I have the skills and knowledge
                necessary to create and maintain complex web applications. My
                expertise extends to both the client-side and server-side
                components of a web application, and I am comfortable working
                with a range of programming languages and technologies.
              </p>
              <p>
                In addition to my technical skills, I am also adept at working
                collaboratively with other members of a development team. I am
                comfortable working with project managers, designers, and other
                developers to ensure that the web applications I create meet the
                needs of all stakeholders. Overall, my expertise as a Full Stack
                Web Developer allows me to create robust, scalable, and
                user-friendly web applications that provide value to businesses
                and end-users alike.
              </p>
              <p>
                Please don&apos;t hesitate to contact me over the over the platform
                you love and I&apos;ll try to get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End About Me --> */}

        {/* <!-- ======= Interests ======= --> */}
        <div className="interests container">
          <div className="section-title">
            <h2>Interests</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i style={{ color: "#ffbb2c" }}>
                  <SiJavascript />
                </i>

                <h3>JavaScript</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i style={{ color: "#3C873A" }}>
                  <FaNodeJs />
                </i>
                <h3>Node.js</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i style={{ color: "#61DBFB" }}>
                  <FaReact />
                </i>
                <h3>React</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <motion.div
                className="icon-box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{
                  ease: "linear",
                  duration: 0,
                }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
              >
                <i style={{ color: "#589636" }}>
                  <SiMongodb />
                </i>
                <h3>MongoDB</h3>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#589636" }}>
                  <FaVuejs />
                </i>
                <h3>Vue.js</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#0db7ed" }}>
                  <FaDocker />
                </i>
                <h3>Docker</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#f89820" }}>
                  <FaJava />
                </i>
                <h3>Java</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#007acc" }}>
                  <SiTypescript />
                </i>
                <h3>TypeScript</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#F1502F" }}>
                  <DiGit />
                </i>
                <h3>Git</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#FFFFFF" }}>
                  <FaLinux />
                </i>
                <h3>Linux</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#00749C" }}>
                  <FaWordpress />
                </i>
                <h3>Wordpress</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#F5820D" }}>
                  <SiFirebase />
                </i>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
