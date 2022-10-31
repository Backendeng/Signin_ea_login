import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./firstpage";
import SecondPage from "./secondpage";
import ThirdPage from "./thirdpage";
import NotFound from "./notfound";


function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailcss, setEmailcss] = React.useState("none");
  const [passwordcss, setPasswordcss] = React.useState("none");
  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value == '') {
      setEmailcss("");
    } else {
      setEmailcss("none");
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value == '') {
      setPasswordcss("");
    } else {
      setPasswordcss("none");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' component={<NotFound/>} />
        <Route path="/" element={<FirstPage email={email} password={password} handleEmail={handleEmail} handlePassword={handlePassword}  emailcss={emailcss} passwordcss={passwordcss} handleEmailcss={setEmailcss} handlePasswordcss={setPasswordcss} />} />
        <Route path="second" element={<SecondPage email={email} password={password}/>}/>
        <Route path="third" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
