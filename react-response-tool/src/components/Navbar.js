import Home from "./home/Home";
import Users from "./users/Users";
import Successfull from "./successfull/Successfull";
import TestPage from "./test/TestPage";

import logo from "../img/logo.png"

import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <BrowserRouter>
        <div>
          <nav>
            <div className="flex-nav">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className="logo"/>
              </Link>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
            </div>
          </nav>
    
          <Routes>
            
            <Route path="/users" element={<Users/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/successfull" element={<Successfull/>}/>
            <Route path="/test" element={<TestPage/>}/>
         
          </Routes>
          
        </div>
      </BrowserRouter>
    )
};

export default Navbar;