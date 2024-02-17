import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.tsx";


export default function App(){
  return(
    <>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>


        </Routes>
    </BrowserRouter>
    </>
  )
}
