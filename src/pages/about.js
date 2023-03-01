import Head from "next/head"
import Image from "next/image"
import { FaReact } from "react-icons/fa"
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
                alt="Picture of the mayank gupta"
                className="img-fluid"
                width="350"
                height="300"
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

        {/* <!-- ======= Counts ======= --> */}

        {/* <!-- End Counts --> */}

        {/* <!-- ======= Interests ======= --> */}
        <div className="interests container">
          <div className="section-title">
            <h2>Interests</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i style={{ color: "#ffbb2c" }}>
                  <FaReact />
                </i>

                <h3>ReactJs</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-bar-chart-box-line"
                  style={{ color: "#5578ff" }}
                ></i>
                <h3>Dolor Sitema</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-calendar-todo-line"
                  style={{ color: "#e80368" }}
                ></i>
                <h3>Sed perspiciatis</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i
                  className="ri-paint-brush-line"
                  style={{ color: "#e361ff" }}
                ></i>
                <h3>Magni Dolores</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-database-2-line"
                  style={{ color: "#47aeff" }}
                ></i>
                <h3>Nemo Enim</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-gradienter-line"
                  style={{ color: "#ffa76e" }}
                ></i>
                <h3>Eiusmod Tempor</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-file-list-3-line"
                  style={{ color: "#11dbcf" }}
                ></i>
                <h3>Midela Teren</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-price-tag-2-line"
                  style={{ color: "#4233ff" }}
                ></i>
                <h3>Pira Neve</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                <h3>Dirada Pack</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
                <h3>Moton Ideal</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-base-station-line"
                  style={{ color: "#ff5828" }}
                ></i>
                <h3>Verdo Park</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-fingerprint-line"
                  style={{ color: "#29cc61" }}
                ></i>
                <h3>Flavor Nivelanda</h3>
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
