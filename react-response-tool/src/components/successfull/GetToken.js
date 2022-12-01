import {tokenUrl} from "../partials/Url";
import {encodedCred, clientId, redirUri} from "../partials/Credentials";

import getUser from "./GetUserInfo";

async function getToken (responseCode) {
    try {

        const response = await fetch(tokenUrl, {
            method: 'POST',
            //Headers uses the base64 encoded clientID:secret as authorization
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${encodedCred}`
            },
            //Our body/payload, uses the stored value of the code we got from the parameters earlier.
            body: new URLSearchParams({
                'client_id': clientId,
                'redirect_uri': redirUri,
                'grant_type': 'authorization_code',
                'code': `${responseCode}`
            })})
        const json = await response.json();
        const newToken = json.access_token;
        console.log(newToken);

        if(newToken) {
            getUser(newToken);
        }
        else {
            console.log("not a valid token")
        }
        
    } catch (error) {
        console.log(error)
    }
}

export default getToken;