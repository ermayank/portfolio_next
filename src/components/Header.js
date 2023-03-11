import React from "react"
import Link from "next/link"
import NavLinks from "./NavLinks"
import links from "../links.json"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

const Header = () => {
  return (
    <>
      <header id="header" className="header-top">
        <div className="container">
          <h1>
            <Link href="/">Mayank Gupta</Link>
          </h1>

          <div className="social-links">
            <Link href={links.linkedin} title="linkedin">
              <BsLinkedin />
            </Link>
            <Link href={links.github} title="github">
              <BsGithub />
            </Link>
            <Link href={links.instagram} title="instagram ">
              <BsInstagram />
            </Link>
            {/* <Link href={links.playStore} title="instagram ">
              <FaGooglePlay />
            </Link> */}
          </div>
          <NavLinks />
        </div>
      </header>
    </>
  )
}

export default Header
