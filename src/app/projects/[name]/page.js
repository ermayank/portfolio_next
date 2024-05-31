import Image from "next/image"
import { FaGithub, FaVideo, FaExternalLinkAlt } from "react-icons/fa"
// import { useRouter } from "next/router"
import { db } from "@/firebase/clientApp.js"
import { collection, query, where, getDocs } from "firebase/firestore"
import Loading from "../../../components/utils/LoadingUtil.js"
import { v4 as uuidv4 } from "uuid"
import Link from "next/link"

export const revalidate = 30 // revalidate every 30 seconds

async function getProject(projectSlug) {
  const collectionRef = collection(db, "projects_updated")
  try {
    const q = query(collectionRef, where("projectSlug", "==", projectSlug))
    const querySnapshot = await getDocs(q)
    const projectDetail = querySnapshot.docs.map((doc) => doc.data())
    return projectDetail
  } catch (e) {
    console.log(e)
  }
}

const PortfolioDetails = async ({ params }) => {
  const projectArray = await getProject(params.name)
  const project = projectArray[0]

  return (
    <>
      <div className="portfolio-details page-container">
        <div className="container">
          <div className="section-title">
            <h2>Here it is </h2>
            {/* <p>{router.query.name}</p> */}
          </div>

          <div className="row">
            <div className="col-lg-6 project-image">
              <div className="row">
                <img
                  src={project.projectImages.default.storageUrl}
                  alt={project.projectImages.default.altText}
                  className="img-fluid"
                  width="700"
                  height="500"
                  priority={true.toString()}
                />
              </div>
              <div className="row additional_files interests">
                <h3>Additional Files</h3>

                {project.additionalFiles ? (
                  project.additionalFiles.map((file) => (
                    <div className="additional_file_div" key={uuidv4()}>
                      <Link
                        href={file.fileLink}
                        target="parent"
                        className="remove_link_decoration "
                      >
                        <div className="icon-box">{file.fileName}</div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>Sorry nothing more exciting For this Project</p>
                )}
              </div>
            </div>
            <div className="col-lg-6 project-description">
              <h3 className="resume-title">{project.projectTitle}</h3>
              <p>{project.projectDetailTagline}</p>
              <hr></hr>

              <div className="interests row">
                {/* Github */}
                <div className="col">
                  <Link
                    href={project.projectLinks.github}
                    className="project_details_page_link"
                    target="parent"
                  >
                    <div className="icon-box">
                      <i style={{ color: "#ffffff" }}>
                        <FaGithub />
                      </i>
                      <h3>Code</h3>
                    </div>
                  </Link>
                </div>
                {/* Live Link */}
                <div className="col">
                  <Link
                    href={project.projectLinks.liveLink}
                    className="project_details_page_link"
                    target="parent"
                  >
                    <div className="icon-box">
                      <i style={{ color: "#ffffff" }}>
                        <FaExternalLinkAlt />
                      </i>
                      <h3>Live Preview</h3>
                    </div>
                  </Link>
                </div>
                {/* Watch Preview */}
                <div className="col">
                  <Link
                    href={project.projectLinks.videoLink}
                    className="project_details_page_link"
                    target="parent"
                  >
                    <div className="icon-box">
                      <i style={{ color: "#18d26e" }}>
                        <FaVideo />
                      </i>
                      <h3>Watch Demo</h3>
                    </div>
                  </Link>
                </div>
              </div>

              <hr></hr>
              <h4>Technologies Used</h4>

              <ul className="project-technologies">
                {project.projectTechnologies.map((tech) => (
                  <li key={uuidv4()}>{tech}</li>
                ))}
              </ul>
              <h4>Description</h4>
              <p>{project.projectDescription}</p>
              <h4>Details</h4>
              <ul>
                {project.projectDetailPoints.map((point) => (
                  <li key={uuidv4()}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioDetails
