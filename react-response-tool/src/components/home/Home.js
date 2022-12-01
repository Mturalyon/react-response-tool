import {authUrl} from "../partials/Url"

function Home() {
    return(
        <>
        <h1>This is the Home page</h1>
        <p>This is a pragraph</p>
        <a href={authUrl}>Authenticate</a>
        </>
    )
};

export default Home;