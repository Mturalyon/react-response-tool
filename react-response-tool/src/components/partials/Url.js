import { myDomain, clientId, redirUri } from "./Credentials";

const authUrl = `${myDomain}/auth/open/connect/authorize?client_id=${clientId}&response_type=code&scope=openid+profile+nin&prompt=login&redirect_uri=${redirUri}`;
const tokenUrl = `${myDomain}/auth/open/connect/token`;
const userUrl = `${myDomain}/auth/open/connect/userinfo`;

const storageTokenUrl = "https://sg-api.saeteraas.one/wp-json/jwt-auth/v1/token";
const storageUserUrl = "https://sg-api.saeteraas.one/wp-json/wp/v2/users"

export {authUrl, tokenUrl, userUrl, storageTokenUrl, storageUserUrl};