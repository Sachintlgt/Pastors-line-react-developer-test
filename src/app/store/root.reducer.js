import { combineReducers } from 'redux';
import { modalReducer } from '../duck/modal/modal.reducer';
import { contactsReducer } from '../duck/contacts/contacts.reducer';

export const rootReducer = combineReducers({
    modal: modalReducer,
    contacts: contactsReducer
});