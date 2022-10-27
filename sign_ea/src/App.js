import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./firstpage";
import SecondPage from "./secondpage";
import ThirdPage from "./thirdpage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="second" element={<SecondPage />} />
        <Route path="third" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
