const myDomain = "https://testdatoidc.sandbox.signicat.com";
const redirUri = "http://localhost:3000/successfull";
const clientId = "sandbox-comfortable-cake-475";
const authUrl = `${myDomain}/auth/open/connect/authorize?client_id=${clientId}&response_type=code&scope=openid+profile+nin&prompt=login&redirect_uri=${redirUri}`;

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