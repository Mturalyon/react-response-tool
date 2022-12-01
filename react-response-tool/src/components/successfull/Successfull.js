import {authUrl} from "../partials/Url";
import getToken from "./GetToken";
import {Link} from "react-router-dom";

function Successfull() {

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const responseCode = params.get('code');

    if(responseCode) {
       getToken(responseCode)
       return (
        <div className="center home">
        <div className="response-container"></div>
        <Link to="/users" className="auth-btn">To Users</Link>
        </div>
       )
    } else {
        return(
            <div className="center home">
            <h2>You havent Authenticated</h2>
            <a href={authUrl} className="auth-btn">Authenticate</a>
            </div>
        ) 
    }
    
};

export default Successfull;