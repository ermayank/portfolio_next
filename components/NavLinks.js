import React, { useState } from "react"
import Link from "next/link"
import { HiExternalLink, HiMenu } from "react-icons/hi"
import { ImCross } from "react-icons/im"
const NavLinks = () => {
  const [styleUsed, setStyleUsed] = useState("navbar")
  const [currentIcon, setCurrentIcon] = useState("desktop")

  const mobileNavHandler = () => {
    setStyleUsed("navbar-mobile bi-list bi-x")
    setCurrentIcon("mobile")
  }
  const mobileNavCloseHandler = () => {
    setStyleUsed("navbar")
    setCurrentIcon("desktop")
  }

  return (
    <>
      <nav id="navbar" className={styleUsed}>
        <ul>
          <li>
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/resume">
              Resume
            </Link>
          </li>

          <li>
            <Link className="nav-link" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              target="parent"
              href="https://blog.mayankgupta.tech/"
            >
              My Blog &nbsp;
              <HiExternalLink />
            </Link>
          </li>
        </ul>
        {currentIcon == "desktop" ? (
          <HiMenu className="mobile-nav-toggle" onClick={mobileNavHandler} />
        ) : (
          <ImCross
            className="mobile-nav-toggle"
            onClick={mobileNavCloseHandler}
          ></ImCross>
        )}
      </nav>
    </>
  )
}

export default NavLinks
