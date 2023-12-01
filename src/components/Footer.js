import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import links from "../staticData/links.json";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Footer = () => {
  const year = new Date().getFullYear();
  const url = process.env.MAILCHIMP_URL;

  return (
    <>
      <div className="footer-container">
        <div className="container footer-container">
          <footer className="py-5">
            <div className="row">
              <div className="col-md-7 mb-3 mx-auto">


                <form>
                  <h5>Subscribe to my newsletter</h5>
                  <p>
                    Digest of what's new and exciting going on in technology.
                  </p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-success" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© {year} Mayank Gupta. All rights reserved.</p>
              <ul className="list-unstyled d-flex social-links">
                <li className="ms-3">
                  <Link href={links.linkedin} title="linkedin" rel="nofollow">
                    <BsLinkedin />
                  </Link>
                </li>
                <li className="ms-3">
                  <Link href={links.github} title="Github" rel="nofollow">
                    <BsGithub />
                  </Link>
                </li>
                <li className="ms-3">
                  <Link href={links.instagram} title="Instagram" rel="nofollow">
                    <BsInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>{" "}
    </>
  );
};

export default Footer;
