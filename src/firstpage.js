import * as React from 'react';
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';

function App(props) {
  const [checked, setChecked] = React.useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSignin = () => {
    console.log(props.emailcss);
    console.log(props.passwordcss);
    if (props.email != '' && props.password != '') {
      navigate('/second', {replace: true});
    } else if (props.email == '') {
      props.handleEmailcss("");
    } else {
      props.handlePasswordcss("");
    }
    
  }

  return (
    <div className="App">
      <div className="form-container">
        

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
                        value={props.email}
                        onChange={props.handleEmail}
                      />
                    </div>
                    <div
                      id="online-input-error-email"
                      style={{ display: props.emailcss}}
                    >
                      <p className="otkinput-errormsg otkc" >Please enter email</p>
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
                      value={props.password}
                      onChange={props.handlePassword}
                    />
                    <i className="otkinput-capslock otkicon otkicon-capslock otkicon-capslock-position"></i>
                    <div
                      id="online-input-error-email"
                      style={{ display: props.passwordcss}}
                    >
                      <p className="otkinput-errormsg otkc">Please enter password</p>
                    </div>
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
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    />

                    <span id="content" className="link-in-message" style={{color:'white'}}>
                      Remember me
                    </span>
                  </span>
                  <div className="button-top-separator"></div>
                    <a
                      role="button"
                      className="otkbtn otkbtn-primary"
                      id="logInBtn"
                      onClick={handleSignin}
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
