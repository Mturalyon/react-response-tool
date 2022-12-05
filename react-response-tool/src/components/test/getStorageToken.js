import {storageTokenUrl} from "../partials/Url";
import {storagePassword, storageUsername} from "../partials/Credentials";
import createUser from "./createUser";

async function getStorageToken () {

    const data = {
        username : `${storageUsername}`,
        password : `${storagePassword}`
    }

    try {

        const response = await fetch(storageTokenUrl, {
            method: 'POST',
            //Headers uses the base64 encoded clientID:secret as authorization
            headers: {
                'Content-Type': 'application/json',
            },
            //Our body/payload, uses the stored value of the code we got from the parameters earlier.
            body: JSON.stringify(data)
        })
        const json = await response.json();
        const newToken = json.token;
        
        if(newToken) {
            console.log(newToken)
            createUser(newToken);
        }
        
    } catch (error) {
        console.log(error)
    }
}

export default getStorageToken;