const BASE_URL = process.env.REACT_APP_API_URL;
const URL = (uri) => `${BASE_URL}${uri}`;

/***** Contacts Routes*********/
export const CONTACTS = URL('/contacts.json');