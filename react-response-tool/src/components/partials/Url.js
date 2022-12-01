import { myDomain, clientId, redirUri } from "./Credentials";

const authUrl = `${myDomain}/auth/open/connect/authorize?client_id=${clientId}&response_type=code&scope=openid+profile+nin&prompt=login&redirect_uri=${redirUri}`;
const tokenUrl = `${myDomain}/auth/open/connect/token`;
const userUrl = `${myDomain}/auth/open/connect/userinfo`;

export {authUrl, tokenUrl, userUrl};