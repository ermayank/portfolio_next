import Footer from "@/components/Footer.js"
import { client } from "../../../utils/sanityLib/client"
import Image from "next/image"
import { PortableText } from "next-sanity"
import Loading from "@/components/utils/LoadingUtil"

const getSingleBlogData = async (slug) => {
  const query = `
  *[_type == "post" && slug.current == "${slug}"]{
    "currentSlug":slug.current,
      title,
      "imageUrl":mainImage.asset->url,
      "creationDate":_createdAt,
      "authorName": author->name,
      "authorImage": author->image.asset->url,
      body,
  }[0]
  `
  const data = await client.fetch(query)
  return data
}

const BlogPage = async ({ params }) => {
  const blogData = await getSingleBlogData(params.slug)
  return (
    <>
      {blogData == undefined || blogData == null ? (
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
        <div className="page-container">
          <div className="container">
            <div className="section-title">
              <h2>Mayank Gupta Blogs</h2>
            </div>
            {/*Blog Heading*/}
            <div className="row blog-page-heading">
              <h1>{blogData.title}</h1>
            </div>

            {/*Blog Image*/}
            <div className="row content blog-image">
              <Image
                src={blogData.imageUrl}
                width={1000}
                height={500}
                alt={blogData.currentSlug}
                priority
              />
            </div>
            {/*Author row*/}
            <div className={"row content blog-author-and-date"}>
              <div>{blogData.creationDate}</div>
              <div>{blogData.authorName}</div>
            </div>
            {/*Blog Content*/}
            <div className="row content blog-content">
              <PortableText value={blogData.body} />
            </div>

            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  )
}

export default BlogPage
