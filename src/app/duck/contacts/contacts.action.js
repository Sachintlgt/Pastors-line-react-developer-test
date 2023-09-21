// Action for fetching contacts list
export const CONTACTS_LIST = 'CONTACTS_LIST';
export const contactsList = (data) => ({ type: CONTACTS_LIST, data });
export const SUCCESS_CONTACTS_LIST = 'SUCCESS_CONTACTS_LIST';
export const ERROR_CONTACTS_LIST = 'ERROR_CONTACTS_LIST';
export const contactsListResponse = (type, data) => ({ type, data });

// Action for viewing a specific contact
export const VIEW_CONTACT = 'VIEW_CONTACT';
export const viewContact = (data) => ({ type: VIEW_CONTACT, data });
