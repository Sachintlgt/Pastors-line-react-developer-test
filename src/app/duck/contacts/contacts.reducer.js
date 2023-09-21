import { CONTACTS_LIST, ERROR_CONTACTS_LIST, SUCCESS_CONTACTS_LIST, VIEW_CONTACT } from "./contacts.action";
import { DEFAULT_STATE } from "./contacts.state";

export const contactsReducer = (state = DEFAULT_STATE, action = {
    type: {},
    data: {}
}) => {
    switch (action.type) {
        case CONTACTS_LIST:
            // Set loading state to true when fetching contacts list
            return { ...state, loading: true };
        case SUCCESS_CONTACTS_LIST:
            // Update contacts list data and set loading state to false on success
            const newContactsListData = action.data;
            const { contactsListData } = state;

            // If contactsListData already exists and the state length is less than the API total,
            // append new data to it and update the total
            if (
                contactsListData &&
                contactsListData.contacts_ids &&
                contactsListData.contacts_ids.length < newContactsListData.total
            ) {
                const updatedContactsIds = [...contactsListData.contacts_ids, ...newContactsListData.contacts_ids];
                const updatedContacts = {
                    ...contactsListData.contacts,
                    ...newContactsListData.contacts,
                };

                const updatedContactsListData = {
                    ...contactsListData,
                    contacts_ids: updatedContactsIds,
                    contacts: updatedContacts,
                };

                return { ...state, contactsListData: updatedContactsListData, loading: false };
            } else {
                return { ...state, contactsListData: newContactsListData || {}, loading: false };
            }

        case ERROR_CONTACTS_LIST:
            // Handle error in contacts list fetch and set loading state to false
            return { ...state, contactsListData: action.data, loading: false };
        case VIEW_CONTACT:
            // Handle viewing a specific contact by ID
            const contactId = action.data;
            const contactsList = state.contactsListData;
            if (contactId && contactsList && contactsList.contacts_ids) {
                const contactData = contactsList.contacts[contactId];
                // Set the viewContactData to the contact data for the given ID or an empty object if not found
                return { ...state, viewContactData: contactData || {} };
            }
            // Return the current state if the contact ID is not valid or not found in data
            return state;
        default:
            // Return the current state for unhandled actions
            return state;
    }
};
