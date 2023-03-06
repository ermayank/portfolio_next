import React from "react"
import Header from "../../components/Header"

const resume = () => {
  return (
    <>
      <Header />
      <section id="resume" className="resume section-show">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Alice Barkley</h4>
                <p>
                  <em>
                    Innovative and deadline-driven Graphic Designer with 3+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable.
                  </em>
                </p>
                <p></p>
                <ul>
                  <li>Portland par 127,Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul>
                <p></p>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>MEngg. Electrical & Computer Engineering</h4>
                <h5>2021 - 2023</h5>
                <p>
                  <em>Concordia University, Montreal, CA</em>
                </p>
                <p>
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Technology Electrical Engineering</h4>
                <h5>2016 - 2020</h5>
                <p>
                  <em>D.C.R. University, Haryana, India</em>
                </p>

                <ul>
                  <li>
                    I spent the best 4 years and this university has transformed
                    me into a new and better version of myself, technically,
                    physically and mentally.
                  </li>
                  <li>
                    I was not only the part of extra-curricular and sports
                    events but also got various shots for organizing them.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Software Developer</h4>
                <h5>May 2022 - Present</h5>
                <p>
                  <em>Kaloom, Montreal, CA </em>
                </p>
                <p></p>
                <ul>
                  <li>
                    Working on Kaloom Test Framework (KTF) for creating test
                    cases, live monitoring for running test cases for the
                    product on test systems.
                  </li>
                  <li>
                    Created multiple views for the real time visualisation for
                    Internal Test Framework using Vue.js, Node.js and MongoDB
                    and TypeScript.
                  </li>
                  <li>
                    SDesigned and developed views for the dashing library in
                    Docker Containerized Architecture environment by fetching
                    data using RESTful APIs.
                  </li>
                </ul>
                <p></p>
              </div>
              <div className="resume-item">
                <h4>Full Stack Developer</h4>
                <h5>Oct 2020 - Aug 2021</h5>
                <p>
                  <em>WeExcel Technologies, Chandigarh, IN</em>
                </p>
                <p></p>
                <ul>
                  <li>
                    Designed and implemented scalable APIs and background
                    workers for managing first- and third-party proprietary
                    licenses using NodeJS, Firebase Functions, and other cloud
                    technologies that serve thousands of requests daily.
                  </li>
                  <li>
                    Reduced the loading time of website by 30% by removing
                    unused assets.
                  </li>
                  <li>
                    Automated and optimized business logic for the Advertisement
                    Platform using salable cloud technologies on AWS.
                  </li>
                  <li>
                    Coordinated team of 5 individuals to develop the server
                    architecture and increased Google Page Speed score to 98/100
                    and optimised product for search engines.
                  </li>
                </ul>
                <p></p>
              </div>

              <div className="resume-item">
                <h4>Software Developer Intern</h4>
                <h5>April 2020 - August 2020</h5>
                <p>
                  <em>Calinfo, Kurukshetra, IN</em>
                </p>
                <p></p>
                <ul>
                  <li>
                    Managed weekly email marketing campaigns for 14000+ users
                    which resulted in increase in revenue by 10%.
                  </li>
                  <li>
                    Reduced the loading time of website by 30% by removing
                    unused assets.
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default resume
