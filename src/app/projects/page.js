import Loading from "../../components/utils/LoadingUtil"
import Link from "next/link"
import { db } from "../../firebase/clientApp.js"
import { collection,getDocs } from "firebase/firestore"

import { BsGithub, BsLink45Deg } from "react-icons/bs"
// import {router} from "next/client.js";
// import addData from "../../../add_data.js"

async function getAllProjects() {
  // const collectionRef = collection(db, "projects_updated")
  try {
    const querySnapshot = await getDocs(collection(db, "projects_updated"));
    // const q = query(collectionRef, where(true))
    // const querySnapshot = await getDocs(q)
    const projectDetail = querySnapshot.docs.map((doc) => doc.data())
    console.log(projectDetail)
    return projectDetail

  } catch (e) {
    console.log(e)
  }
}

const Portfolio = async () => {

  const mayankProjectsData = await getAllProjects();
  console.log(mayankProjectsData)


  return (
    <>
      {mayankProjectsData == undefined ? (
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
                      src={
                        project.projectImages.default.storageUrl
                      }
                      className="img-fluid"
                      alt="Project Image"
                      width={800}
                      height={600}
                      priority
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
      )}
    </>
  )
}

export default Portfolio
