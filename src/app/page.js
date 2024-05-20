import Head from "next/head"
import Link from "next/link"
import links from "../staticData/links.json"

import About from "../components/pageComponents/about.js"
import Resume from "../components/pageComponents/resume"
import Portfolio from "./projects/page.js"
import Contact from "../components/pageComponents/contact"
import Footer from "@/components/Footer"

import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"
import { FaGooglePlay } from "react-icons/fa"

export default function Home() {
  return (
    <>
      <Head>
        <title>Mayank Gupta</title>
        <meta
          name="description"
          content="Get to know more about Mayank Gupta and his journey so far...."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/*/!*Google tag (gtag.js) *!/*/}
          {/*<script strategy="afterInactive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>*/}
          {/*<script strategy="afterInactive">*/}
          {/*    window.dataLayer = window.dataLayer || [];*/}
          {/*    function gtag(){dataLayer.push(arguments)}*/}
          {/*    gtag('js', new Date());*/}
          {/*    gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});*/}
          {/*</script>*/}

      </Head>



      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="container">
          <h1>
            <Link href="/">Mayank Gupta</Link>
          </h1>

          <h2>
            Coding Creativity, Crafting Solutions:{" "}
            <span>Explore My Digital Journey!</span>
          </h2>
          {/* <HeaderIndex /> */}

          <div className="social-links">
            <Link href={links.linkedin} title="Linkedin">
              <BsLinkedin />
            </Link>
            <Link href={links.github} title="Github">
              <BsGithub />
            </Link>
            <Link href={links.instagram} title="Instagram">
              <BsInstagram />
            </Link>
            <Link href={links.playStore} title="Google Play Store ">
              <FaGooglePlay />
            </Link>

          </div>
        </div>
      </header>
      {/* <!-- End Header --> */}

      <About />
      <Resume />
      <Portfolio />
      {/*/!* <Loading /> *!/*/}
      <Contact />
      <Footer />

    </>
  )
}
