import Footer from "@/components/Footer.js"
import { client } from "../../../utils/sanityLib/client"
import Image from "next/image"
import { PortableText } from "next-sanity"
import { notFound } from "next/navigation"
import Head from "next/head"
import NavLinks from "@/components/NavLinks"

export const revalidate = 30 // revalidate every 30 seconds

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

  if (!blogData) {
    return notFound()
  }
  return (
    <>
      <Head>
        <title>{blogData.title} | Mayank Gupta Blogs</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <meta property="og:title" content={blogData.title} />
        <meta
          property="og:url"
          content={`https://mayankgupta.tech/blog/${blogData.currentSlug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blogData.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogData.title} />
        <meta name="twitter:image" content={blogData.imageUrl} />
        <link
          rel="canonical"
          href={`https://yourwebsite.com/blog/${blogData.currentSlug}`}
        />
        <meta name="author" content={blogData.authorName} />
      </Head>
      <NavLinks></NavLinks>
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
            {!blogData.imageUrl ? (
              <p></p>
            ) : (
              <Image
                src={blogData.imageUrl}
                width={1000}
                height={500}
                alt={blogData.currentSlug}
                priority
              />
            )}
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
    </>
  )
}

export default BlogPage
