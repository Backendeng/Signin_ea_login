import logo from "./logo.svg";
import "./App.css";

function Third() {
  return (
    <div className="a">
      <div className="form-container">
        <form method="post" id="loginForm">
          <div id="tfa-login" className="views">
            <section id="verificationGate" className="">
              <a
                href="/"
                role="button"
                id="backToLoginBtn"
                className="back-btn"
              >
                <i className="otkicon"></i>
                <span className="quantum-input-icon back-btn-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="injected-svg css-ojkidl"
                    data-src="/static/media/ARROW_LEFT.e40e5952.svg"
                  >
                    <g
                      id="Icons/SM/Navigation/Arrow-Left"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path id="Bounding-Box" d="M0 0h16v16H0z"></path>
                      <path
                        id="Primary"
                        fill="#FFF"
                        d="M5.293 4.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.415l-4 4a1 1 0 1 1-1.414-1.415L8.586 8 5.293 4.707z"
                        transform="matrix(-1 0 0 1 16 0)"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                Back{" "}
              </a>
              <br/>
              <br/>
              <br/>
              <img
                className="header"
                aria-hidden="true"
                src="./SIGN IN_files/EALogo-New.svg"
              />
              <br/>
              <h1 className="otktitle otktitle-2">Identity verified</h1>
              <br/>
              <br/>
              <div className="otkc verify">
                {" "}
                 You can pick your ICON soon!
                {" "}
              </div>
              <br/>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Third;
