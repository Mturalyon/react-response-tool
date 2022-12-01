import {authUrl} from "../partials/Url"

function Home() {
    return(
        <div className="center home">
        <h1>Signicat Response Tool</h1>
        <div>
        <p>Using React, this tool is designed to use Signicats Authentication solution</p>
        <p>Available for Swedish and Norwegian test users</p>
        </div>
        <a href={authUrl} className="auth-btn">Authenticate with OIDC</a>
        </div>
    )
};

export default Home;