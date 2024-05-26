import Footer from "@/components/Footer.js";

const BlogPage = () => {
    return <>
        <div className="page-container">
            <div className="container">
                <div className="section-title">
                    <h2>Mayank Gupta Blogs</h2>

                </div>
{/*Blog Heading*/}
                <div className="row blog-page-heading">
                    <h1>“The biggest change to News Feed since 2013”: Facebook is making it easy to bypass its algorithm Feed since biggest</h1>
                </div>

                {/*Blog Image*/}
                <div className="row content blog-image">
                    <img src={"https://demo.gethugothemes.com/gofolium/site/images/publications/pub1.jpg"} />
                </div>
                {/*Author row*/}
                <div className={"row content blog-author-and-date"}>
                    <div>20 March 2023</div>
                    <div>Mayank gupta</div>
                    </div>
{/*Blog Content*/}
                <div className="row content blog-content">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    <br></br>
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    <br></br>
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    <br></br>
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                </div>

                <Footer></Footer>
            </div>
        </div>
    </>
}

export default BlogPage;