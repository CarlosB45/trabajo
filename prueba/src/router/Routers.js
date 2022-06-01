import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Password from "../pages/Password";

import { BrowserRouter, Route, Routes} from "react-router-dom";

const Allrouters = () =>{
    return(
     <>
     <BrowserRouter>
       <Routes>
           <Route path="/"element={<Login/>}></Route>
           <Route path="/Register"element={<Register/>}></Route>
           <Route path="/Password"element={<Password/>}></Route>
       </Routes>
     </BrowserRouter>
     </>
    );
}

export default Allrouters;