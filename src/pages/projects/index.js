import { React, useEffect, useState } from "react";
import Loading from "../../components/utils/LoadingUtil";
import Link from "next/link";

import { BsGithub, BsLink45Deg } from "react-icons/bs";

const portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState([]);

  const fetchProjects = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const url = process.env.NEXT_PUBLIC_URL;
    const res = await fetch(url);
    const data = await res.json();
    setProjectData(data.documents);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      {loading ? (
        <div id="portfolio" className="portfolio page-container">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>My Projects</p>
            </div>

            <Loading></Loading>
          </div>
        </div>
      ) : (
        <div id="portfolio" className="portfolio page-container">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>My Projects</p>
            </div>

            <div className="row portfolio-container">
              {projectData.map((project) => (
                <Link
                  href={`/projects/${project.fields.projectSlug.stringValue}`}
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default portfolio;
