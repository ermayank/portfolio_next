import React from "react"
import Header from "../components/Header"
import { BsGithub, BsLink45Deg } from "react-icons/bs"

export const getStaticProps = async () => {
  const url = process.env.NEXT_PUBLIC_URL
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: { projects: data.documents },
  }
}

const portfolio = ({ projects }) => {
  return (
    <>
      <Header />
      <section id="portfolio" className="portfolio section-show">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Projects</p>
          </div>
          {/* 
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div> */}

          <div className="row portfolio-container">
            {/* ==== */}
            {projects.map((project) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-app"
                key={project.createTime}
              >
                <div className="portfolio-wrap">
                  <img
                    src={project.fields.fileLocation.stringValue}
                    className="img-fluid"
                    alt="Project Image"
                    width="800"
                    height="600"
                  />
                  <div className="portfolio-info">
                    <h4>{project.fields.projectTitle.stringValue}</h4>
                    <p>{project.fields.projectType.stringValue}</p>
                    <div className="portfolio-links">
                      <a
                        href={project.fields.projectGithubLink.stringValue}
                        className="portfolio-lightbox"
                        title="Github Link"
                      >
                        <i>
                          <BsGithub />
                        </i>
                      </a>
                      {project.fields.projectLink ? (
                        <a
                          href={project.fields.projectLink.stringValue}
                          data-gallery="portfolioDetailsGallery"
                          data-glightbox="type: external"
                          className="portfolio-details-lightbox"
                          title="Live Link "
                        >
                          <i>
                            <BsLink45Deg />
                          </i>
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* ==== */}
          </div>
        </div>
      </section>
    </>
  )
}

export default portfolio
