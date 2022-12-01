import {authUrl} from "../partials/Url";
import getToken from "./GetToken";

function Successfull() {

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const responseCode = params.get('code');

    if(responseCode) {
       getToken(responseCode)
       const firstName = localStorage.getItem("firstName")
       const lastName = localStorage.getItem("lastName")
       return (
        <>
        <p>{firstName} {lastName} has ben added</p>
        </>
       )
    } else {
        return(
            <>
            <h1>Seems like there you havent authenticated</h1>
            <a href={authUrl}>Authenticate</a>
            </>
        ) 
    }
    
};

export default Successfull;