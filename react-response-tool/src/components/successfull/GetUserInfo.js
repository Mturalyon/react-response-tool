import {userUrl} from "../partials/Url";

async function getUser(myToken) {
    localStorage.clear();
    //We do a GET fetch request to the userUrl endpoint we created in the start, and store the result in "response" variable
    const response = await fetch(userUrl, {
        method: 'GET',
        //Headers uses Bearer authorization with the access token we extracted.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${myToken}`
        }
    });
    //We create json from the response we got from the GET request.
    const json = await response.json();
    //Check your browser console for a more detailed JSON object.
    console.log(json)
    if (json) {
        localStorage.setItem('firstName', json.given_name);
        localStorage.setItem('lastName', json.family_name);
    }
};

export default getUser;