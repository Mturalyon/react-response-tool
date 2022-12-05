import {storageUserUrl} from "../partials/Url";


async function createUser (token) {

    const data = {
        "title": "steeein",
        "content": "test create user",
        "status": "publish",
        "fields": {
            "first_name": "Jenni",
            "last_name": "Selbu",
            "birthdate": "30 01 1993",
            "national_identity": "463786429"
        }
    }

    try {

        const response = await fetch(storageUserUrl, {
            method: 'POST',
            //Headers uses the base64 encoded clientID:secret as authorization
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            //Our body/payload, uses the stored value of the code we got from the parameters earlier.
            body: JSON.stringify(data)
        })
        const json = await response.json();
        const user = json;
        console.log(user);
        
    } catch (error) {
        console.log(error)
    }
}

export default createUser;