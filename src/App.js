import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";

import Choosetemplate from "./component/ChooseTemplate";
import Preview from "./component/Preview";
import Details from "./component/Details";
import Download from "./component/Download";
import Home from "./component/Home";
import Navbar from "./component/Navbar";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>

     <Route path="/"  element={<Home/>} ></Route>                                                  {/* Mainly show what is in about Component */}
     <Route path="/About"  element={<About/>} ></Route> 
     <Route path="/Choosetemplate" element = {<Choosetemplate/>} > </Route>
     <Route path="/Preview" element = {<Preview/>} > </Route>
     <Route path="/Details" element = {<Details/>} > </Route>
     <Route path="/Download" element = {<Download/>} > </Route>
     <Route path="*"  element={<h1> PAGE not found 404 </h1>}  />   
     </Routes>
       </BrowserRouter>
</>
  );
}

export default App;
