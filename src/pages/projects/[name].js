import Image from "next/image";
import { React, useEffect, useState } from "react";
import { FaGithub, FaVideo, FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const PortfolioDetails = () => {
  const router = useRouter();
  return (
    <>
      <div className="portfolio-details page-container">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>{router.query.name}</p>
          </div>

          <div className="row">
            <div className="col-lg-6 project-image">
              <Image
                src={"/img/me_about.png"}
                alt="Picture of the mayank gupta"
                className="img-fluid"
                width="400"
                height="400"
              />
            </div>
            <div className="col-lg-6 project-description">
              <h3 className="resume-title">Eventy</h3>
              <p>An Event Management System</p>
              <hr></hr>

              <div className="interests row">
                {/* Github */}
                <div className="col">
                  <div className="icon-box">
                    <i style={{ color: "#ffffff" }}>
                      <FaGithub />
                    </i>
                    <h3>Code</h3>
                  </div>
                </div>
                {/* Live Link */}
                <div className="col">
                  <div className="icon-box">
                    <i style={{ color: "#ffffff" }}>
                      <FaExternalLinkAlt />
                    </i>
                    <h3>Live Preview</h3>
                  </div>
                </div>
                {/* Watch Preview */}
                <div className="col">
                  <div className="icon-box">
                    <i style={{ color: "#18d26e" }}>
                      <FaVideo />
                    </i>
                    <h3>Watch Demo</h3>
                  </div>
                </div>
              </div>

              <hr></hr>
              <h4>Technologies Used</h4>

              <ul className="project-technologies">
                <li>Javascript</li>
                <li>Mongo</li>
                <li>Express</li>
                <li>Docker</li>
                <li>mayank gupta</li>

                <li>asdf</li>
                <li>asdfghjk</li>
                <li>Docker</li>
              </ul>
              <h4>Description</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h4>Details</h4>
              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </li>
                <li>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </li>
                <li>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;
