import React from "react"
import Link from "next/link"
import { HiMenu } from "react-icons/hi"

const Header = () => {
  return (
    <>
      <header id="header" className="header-top">
        <div className="container">
          <h1>
            <Link href="/">Mayank Gupta</Link>
          </h1>
          <nav id="navbar" className="navbar">
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
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <HiMenu className="mobile-nav-toggle" />
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
