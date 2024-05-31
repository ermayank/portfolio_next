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
import { SiLeetcode } from "react-icons/si"
import { HiExternalLink } from "react-icons/hi"
import NavLinks from "@/components/NavLinks"

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
            <Link href={links.linkedin} title="Linkedin" rel={"nofollow"}>
              <BsLinkedin />
            </Link>
            <Link href={links.github} title="Github" rel={"nofollow"}>
              <BsGithub />
            </Link>
            <Link href={links.instagram} title="Instagram" rel={"nofollow"}>
              <BsInstagram />
            </Link>
            <Link
              href={links.playStore}
              title="Google Play Store"
              rel={"nofollow"}
            >
              <FaGooglePlay />
            </Link>
            <Link
              href={links.leetcode}
              title="LeetCode Profile"
              rel={"nofollow"}
            >
              <SiLeetcode />
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
