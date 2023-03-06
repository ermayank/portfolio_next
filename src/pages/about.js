import Head from "next/head"
import Image from "next/image"
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

import Header from "../../components/Header"

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about section-show">
        {/* <!-- ======= About Me ======= --> */}
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <Image
                src={"/img/me.jpg"}
                layout="responsive"
                alt="Picture of the mayank gupta"
                className="img-fluid"
                width="600"
                height="680"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full Stack Software Developer</h3>
              <p className="fst-italic">
                Creating Innovation for Everyday people around me
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>29 August</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <span>www.mayankgupta.tech</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Languages:</strong> <span>English, Hindi</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Montreal, CA</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>{currentAge}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>{" "}
                      <span>mayank.pkgupta@outlook.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I'm a Canada based full stack web developer & Electrical
                Engineer by education focused on crafting clean & user‑friendly
                experiences, I am passionate about building excellent software
                that improves the lives of those around me.
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
                <i style={{ color: "#5578ff" }}>
                  <FaNodeJs />
                </i>
                <h3>Node.js</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i style={{ color: "#e80368" }}>
                  <FaReact />
                </i>
                <h3>React</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i style={{ color: "#e361ff" }}>
                  <SiMongodb />
                </i>
                <h3>MongoDB</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#47aeff" }}>
                  <FaVuejs />
                </i>
                <h3>Vue.js</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#ffa76e" }}>
                  <FaDocker />
                </i>
                <h3>Docker</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#11dbcf" }}>
                  <FaJava />
                </i>
                <h3>Java</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#b2904f" }}>
                  <SiTypescript />
                </i>
                <h3>TypeScript</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#b20969" }}>
                  <DiGit />
                </i>
                <h3>Git</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#ff5828" }}>
                  <FaLinux />
                </i>
                <h3>Linux</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#29cc61" }}>
                  <FaWordpress />
                </i>
                <h3>Wordpress</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i style={{ color: "#29cc61" }}>
                  <SiFirebase />
                </i>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Interests --> */}

        {/* <!-- ======= Testimonials ======= --> */}

        {/* <!-- End Testimonials  --> */}
      </section>
      {/* <!-- End About Section --> */}
    </>
  )
}
