import { userUrl } from "../partials/Url";

async function getUser(myToken) {
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
        const responseContainer = document.querySelector(".response-container");
        responseContainer.innerHTML = `<h2>Success</h2>
        <h3>${json.given_name} ${json.family_name} has ben added</h3>`;
        const fullName = json.given_name + " " + json.family_name;

        localStorage.setItem("Person", fullName)

    } else {
        const responseContainer = document.querySelector(".response-container");
        responseContainer.innerHTML = `Not able to retrieve User information`;
    }
};

export default getUser;