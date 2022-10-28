import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="form-container">
        {/* <div
          className="otknotice-stripe otknotice-active"
          style="display: none;"
          id="junoBannerBox"
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
              <strong> </strong>
            </span>
          </div>
        </div> */}

        <div id="logViews" className="views">
          <section id="loginBase">
            <img
              className="header"
              aria-hidden="true"
              src="./SIGN IN_files/EALogo-New.svg"
            />

            <div
              className="panel"
              id="login-with-OriginId-or-Email-panel"
              style={{display: "block"}}
            >
              <h1
                id="loginWithOriginIDTitle"
                className="otktitle otktitle-2"
                style={{display: "block"}}
              >
                Sign in to your EA Account
              </h1>

              <form id="login-form" method="post">
                <div className="otkform otkform-inputgroup input-margin-bottom-error-message">
                  <div className="otkform-group">
                    <label className="otklabel label-uppercase" htmlFor="email">
                      Email Address
                    </label>
                    <div className="otkinput otkinput-grouped otkform-group-field input-margin-bottom-error-message">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        autoCorrect="off"
                        autoCapitalize="off"
                        autoComplete="off"
                      />
                    </div>
                    <div
                      id="online-input-error-email"
                      className="otkform-group-help"
                    >
                      <p className="otkinput-errormsg otkc"></p>
                    </div>
                  </div>
                  <label className="otklabel label-uppercase" htmlFor="password">
                    Password
                  </label>
                  <div className="otkinput otkinput-grouped input-margin-bottom-error-message">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      autoCorrect="off"
                      autoCapitalize="off"
                      autoComplete="off"
                    />
                    <i className="otkinput-capslock otkicon otkicon-capslock otkicon-capslock-position"></i>
                  </div>
                </div>

                <div id="online-general-error" className="otkform-group-help">
                  <p className="otkinput-errormsg otkc"></p>
                </div>
                <div id="offline-general-error" className="otkform-group-help">
                  <p className="otkinput-errormsg otkc">
                    You must be online when logging in for the first time.
                  </p>
                </div>
                <div id="offline-auth-error" className="otkform-group-help">
                  <p className="otkinput-errormsg otkc">
                    Your credentials are incorrect or have expired. Please try
                    again or reset your password.
                  </p>
                </div>

                <div id="captcha-container"></div>

                <div className="panel-action-area">
                  <input
                    type="hidden"
                    name="_eventId"
                    value="submit"
                    id="_eventId"
                  />
                  <input type="hidden" id="cid" name="cid" value="" />

                  <input
                    type="hidden"
                    id="showAgeUp"
                    name="showAgeUp"
                    value="true"
                  />

                  <input
                    type="hidden"
                    id="thirdPartyCaptchaResponse"
                    name="thirdPartyCaptchaResponse"
                    value=""
                  />

                  <input
                    type="hidden"
                    id="loginMethod"
                    name="loginMethod"
                    value=""
                  />

                  <span className="otkcheckbox checkbox-login-first">
                    <input type="hidden" name="_rememberMe" value="on" />
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                    />
                    <label htmlFor="rememberMe">
                      <span id="content" className="link-in-message">
                        Remember me
                      </span>
                    </label>
                  </span>
                  <div className="button-top-separator"></div>
                  <a
                    role="button"
                    className="otkbtn otkbtn-primary"
                    href="/second"
                    id="logInBtn"
                  >
                    Sign in
                  </a>
                  <input type="hidden" id="errorCode" value="" />
                  <input type="hidden" id="errorCodeWithDescription" value="" />
                  <input type="hidden" id="storeKey" value="" />
                  <input type="hidden" id="bannerType" value="" />
                  <input type="hidden" id="bannerText" value="" />
                </div>
              </form>
              <div className="separator-32"></div>
              <div id="forgot-password-section">
                <a
                  id="forget-password"
                  href="https://signin.ea.com/p/juno/resetPassword?fid=RlMxOjMuMDoyLjA6em9iMWtPVUxmcXhwdXpsZW9mVGM4MnU1OnFmcWJo&amp;initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Fhide_create%3Dtrue%26display%3Dweb2%252Flogin%26scope%3Dbasic.identity%2Boffline%2Bsignin%2Bbasic.entitlement%2Bbasic.persona%26release_type%3Dprod%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.ea.com%252Ffifa%252Fultimate-team%252Fweb-app%252Fauth.html%26accessToken%3D%26locale%3Den_US%26prompt%3Dlogin%26client_id%3DFIFA23_JS_WEB_APP"
                  className="otka otkc"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <p id="form-password-show-text" className="otkc otkform-group-help">
          SHOW
        </p>
        <p id="form-password-hide-text" className="otkc otkform-group-help">
          HIDE
        </p>
        <p id="email-invalid-text" className="otkc otkform-group-help">
          Email address is invalid
        </p>
        <p id="ea-id-invalid-text" className="otkc otkform-group-help">
          EA ID is invalid
        </p>
        <p id="email-password-empty-text" className="otkc otkform-group-help">
          Your credentials are incorrect or have expired. Please try again or
          reset your password.
        </p>
      </div>

      <link
        rel="stylesheet"
        type="text/css"
        href="chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/css/blur.css"
        className="loom-blur-styles"
      />
    </div>
  );
}
export default App;
