import Home from "./home/Home";
import Users from "./users/Users";
import Successfull from "./successfull/Successfull";

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
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
    
          <Routes>
            <Route path="/users" element={<Users/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/successfull" element={<Successfull/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
};

export default Navbar;