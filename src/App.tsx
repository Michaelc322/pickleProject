import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import GetStarted from "./Pages/GetStarted.tsx";
import { Helmet } from "react-helmet";

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

        </Routes>
    </BrowserRouter>
    </>
  )
}
