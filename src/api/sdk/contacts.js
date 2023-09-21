// Import necessary modules and constants
import { CONTACTS } from "../routing/route";
import { request } from '../request/axios.request';

// Define the asynchronous function to make a request to the contacts API
// The function accepts a 'params' object to conditionally include parameters in the request
export async function contactsJsonApi(params) {
  // Destructure parameters from the 'params' object
  const { companyId, query, page, countryId } = params;
  
  // Initialize an empty object to store query parameters
  let queryParams = {};

  // Check if 'companyId' is provided and add it to the 'queryParams' object if true
  if (companyId) {
    queryParams.companyId = companyId;
  }

  // Check if 'query' is provided and add it to the 'queryParams' object if true
  if (query) {
    queryParams.query = query;
  }

  // Check if 'page' is provided and add it to the 'queryParams' object if true
  if (page) {
    queryParams.page = page;
  }

  // Check if 'countryId' is provided and add it to the 'queryParams' object if true
  if (countryId) {
    queryParams.countryId = countryId;
  }
  // Make a GET request to the CONTACTS URL with the constructed query parameters
  return request({ url: CONTACTS, method: 'get', params: queryParams });
}
