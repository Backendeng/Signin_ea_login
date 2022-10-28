import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./firstpage";
import SecondPage from "./secondpage";
import ThirdPage from "./thirdpage";


function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage email={email} password={password} handleEmail={handleEmail} handlePassword={handlePassword} />} />
        <Route path="second" element={<SecondPage email={email} password={password}/>}/>
        <Route path="third" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
