import Link from "next/link"
import React from "react"
import { HiOutlineLocationMarker } from "react-icons/hi"
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsShareFill,
} from "react-icons/bs"
import { FaThumbsUp } from "react-icons/fa"
import Header from "../../components/Header"
import links from "../links.json"
import { useForm, ValidationError } from "@formspree/react"
const contact = () => {
  const [state, handleSubmit] = useForm("mdopqozl")

  if (state.succeeded) {
    return (
      <>
        <Header />
        <section id="contact" className="contact section-show">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Me</p>
            </div>
            <div className="content">
              <p className="content-contact">
                Feel free to get in touch with me. <br />I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>

            <div className="row mt-2">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="info-box">
                  <i>
                    <HiOutlineLocationMarker />
                  </i>
                  <h3>My Address</h3>
                  <p>Montreal, Quebec, Canada</p>
                </div>
              </div>

              <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                <div className="info-box">
                  <i>
                    <BsShareFill />
                  </i>
                  <h3>Social Profiles</h3>
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
                    <Link href={links.facebook} title="Facebook">
                      <BsFacebook />
                    </Link>
                    <Link href={links.twitter} title="Twitter">
                      <BsTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="message_after_submission">
              <p>
                Thanks for the Message
                <i style={{ color: "#3C873A" }}>
                  <FaThumbsUp />
                </i>
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Header />
      <section id="contact" className="contact section-show">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>
          <div className="content">
            <p className="content-contact">
              Feel free to get in touch with me. <br />I am always open to
              discussing new projects, creative ideas or opportunities to be
              part of your visions.
            </p>
          </div>

          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i>
                  <HiOutlineLocationMarker />
                </i>
                <h3>My Address</h3>
                <p>Montreal, Quebec, Canada</p>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i>
                  <BsShareFill />
                </i>
                <h3>Social Profiles</h3>
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
                  <Link href={links.facebook} title="Facebook">
                    <BsFacebook />
                  </Link>
                  <Link href={links.twitter} title="Twitter">
                    <BsTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form mt-4"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" disabled={state.submitting}>
                Send Message
              </button>
              <ValidationError errors={state.errors} />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default contact
