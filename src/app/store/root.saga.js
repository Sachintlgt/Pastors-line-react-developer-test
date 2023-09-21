import { all } from "redux-saga/effects";
import { contactsListWatcher } from "../duck/contacts/contacts.saga";

export function* rootSaga() {
  yield all([
    contactsListWatcher()
  ]);
}