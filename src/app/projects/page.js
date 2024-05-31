import Loading from "../loading"
import Link from "next/link"
import { db } from "../../firebase/clientApp.js"
import { collection, getDocs } from "firebase/firestore"
import { notFound } from "next/navigation"
import NavLinks from "@/components/NavLinks"

export const revalidate = 30 // revalidate every 30 seconds

async function getAllProjects() {
  try {
    const querySnapshot = await getDocs(collection(db, "projects_updated"))
    const projectDetail = querySnapshot.docs.map((doc) => doc.data())
    return projectDetail
  } catch (e) {
    console.log(e)
  }
}

const Portfolio = async () => {
  const mayankProjectsData = await getAllProjects()

  if (!mayankProjectsData) {
    return notFound()
  }

  return (
    <>
      <div id="portfolio" className="portfolio page-container">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Projects</p>
            {/* <button onClick={addData}>Add</button> */}
          </div>

          <div className="row portfolio-container">
            {mayankProjectsData.map((project) => (
              // eslint-disable-next-line react/jsx-key
              <Link
                href={`/projects/${project.projectSlug}`}
                className="col-lg-4 col-md-6 portfolio-item filter-app"
              >
                <div className="portfolio-wrap">
                  <img
                    src={project.projectImages.default.storageUrl}
                    className="img-fluid"
                    alt="Project Image"
                    width={800}
                    height={600}
                    priority={true.toString()}
                  />
                  <div className="portfolio-info">
                    <h4>{project.projectTitle}</h4>
                    <p>{project.projectType}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
