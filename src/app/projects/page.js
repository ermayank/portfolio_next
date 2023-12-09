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
    // console.log(projectDetail)
    return projectDetail
    //
    // const querySnapshot = await getDocs(collection(db, "projects_updated"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });



  } catch (e) {
    console.log(e)
  }
}

const Portfolio = async () => {
  // const router = useRouter()
  // const [loading, setLoading] = useState(true)
  // const [projectData, setProjectData] = useState([])
  // const collectionRef = collection(db, "projects_updated")
  // try {
  //   const querySnapshot = await getDocs(collection(db, "projects_updated"));
  //   // const q = query(collectionRef, where(true))
  //   // const querySnapshot = await getDocs(q)
  //   const projectDetail = querySnapshot.docs.map((doc) => doc.data())
  //   console.log(projectDetail)
  //   setProjectData(projectDetail)
  //   setLoading(false)
  //   return projectDetail
  //
  // } catch (e) {
  //   console.log(e)
  // }

  const mayankProjectsData = await getAllProjects();


  // const handleClick = (slug) => {
  //   router.push(`/projects/${slug}`)
  // }



  // const fetchProjects = async () => {
  //   // await new Promise((resolve) => setTimeout(resolve, 3000));
  //   const url = process.env["NEXT_PUBLIC_URL"]
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   setProjectData(data.documents)
  //   setLoading(false)
  // }

  //
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   // fetchProjects()
  // }, [])

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
