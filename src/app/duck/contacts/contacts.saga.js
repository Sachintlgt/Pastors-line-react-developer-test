import { put, takeLatest } from 'redux-saga/effects';
import { contactsJsonApi } from '../../../api/index';
import { CONTACTS_LIST, ERROR_CONTACTS_LIST, SUCCESS_CONTACTS_LIST, contactsListResponse } from './contacts.action';

// This generator function handles the request to fetch contacts list
function* contactsListRequest(data) {
    // Call the API to fetch contacts data using the provided data parameter
    const getData = yield contactsJsonApi(data.data);
    // Check if the API request was successful and data is available
    if (getData.success && getData.data) {
        // Dispatch a success action with the fetched data
        yield put(contactsListResponse(SUCCESS_CONTACTS_LIST, getData.data));
    } else {
        // Dispatch an error action with the error data if the request fails
        yield put(contactsListResponse(ERROR_CONTACTS_LIST, getData.data));
    }
}

// This generator function watches for the CONTACTS_LIST action and triggers the contactsListRequest function
export function* contactsListWatcher() {
    // Take the latest occurrence of the CONTACTS_LIST action and call contactsListRequest when triggered
    yield takeLatest(CONTACTS_LIST, contactsListRequest);
}
