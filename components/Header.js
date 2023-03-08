import React from "react"
import Link from "next/link"
import NavLinks from "./NavLinks"

const Header = () => {
  return (
    <>
      <header id="header" className="header-top">
        <div className="container">
          <h1>
            <Link href="/">Mayank Gupta</Link>
          </h1>
          <NavLinks />
        </div>
      </header>
    </>
  )
}

export default Header
