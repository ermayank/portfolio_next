import Footer from "@/components/Footer"
import { client } from "../../utils/sanityLib/client"
import Link from "next/link"

export const revalidate = 30 // revalidate every 30 seconds

async function getBlogs() {
  const query = `
  *[_type == "post"] | order(_createdAt desc) {
    title,
      "currentSlug":slug.current,
      "imageUrl":mainImage.asset->url,
      "creationDate":_createdAt
  }`

  const data = await client.fetch(query)
  return data
}

const Blog = async () => {
  const blogs = await getBlogs()
  return (
    <>
      <div className="page-container">
        <div className="container">
          <div className="section-title">
            <h2>Latest Blogs</h2>
            {/* <p>{router.query.name}</p> */}
          </div>
          <div className="row">
            {blogs.map((post, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sm-6 mt-5">
                <Link
                  href={`/blog/${post.currentSlug}`}
                  target="parent"
                  className="blog-card-link"
                >
                  <div className="post-card">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="post-image"
                    />
                    <div className="post-content">
                      <h3 className="post-title">{post.title}</h3>
                      {/* <p className="post-text">{post.text}</p> */}
                      <p className="post-date">{post.creationDate}</p>
                      {/* <button>Read More</button> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Blog
