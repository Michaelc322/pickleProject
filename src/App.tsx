
import Navbar from "./Components/Navbar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import GetStarted from "./Pages/GetStarted.tsx";
import { Helmet } from "react-helmet";
import Footer from "./Components/Footer.tsx";
import Register from "./Pages/Register.tsx";
import LogIn from "./Pages/LogIn.tsx";

export default function App(){
  return(
    <>
    <Helmet>
      <title>pickleBOT</title>
      <link rel="icon" type="image/png" href="./images/pickleball.png"/>
    </Helmet>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/getstarted" element={<GetStarted/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<LogIn/>}/>
        </Routes>
    </BrowserRouter>

    <Footer/>
    </>
  )
}
