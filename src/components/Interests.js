const Interests = () => {
  return (
    <>
      <div className="interests container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 mt-4">
            <div className="icon-box">
              <h2 className="skills-heading">Backend</h2>
              <ul className="individual-skills">
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Next Auth</li>
                <li>REST</li>
                <li>gRPC</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 mt-4">
            <div className="icon-box">
              <h2 className="skills-heading">Frontend</h2>
              <ul className="individual-skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React JS</li>
                <li>Next JS 13</li>
                <li>VueJS</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 mt-4">
            <div className="icon-box">
              <h2 className="skills-heading">Database</h2>
              <ul className="individual-skills">
                <li>MySql</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firestore</li>
                <li>SQLite</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 mt-4">
            <div className="icon-box">
              <h2 className="skills-heading">Devops & Tools</h2>
              <ul className="individual-skills">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Git</li>
                <li>Linux</li>
                <li>Jenkins</li>
                <li>AWS</li>
                <li>Jest</li>
                <li>Cucumber</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Interests
