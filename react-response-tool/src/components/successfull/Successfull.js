import {Link} from "react-router-dom"

function Successfull() {

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('code');

    if(foo) {
        return(
            <>
            <p>{foo}</p>
            </>
        )
    } else {
        return(
            <>
            <h1>Authenticate Yourself please</h1>
            <Link to="/">Authenticate</Link>
            </>
        ) 
    }
    
};

export default Successfull;