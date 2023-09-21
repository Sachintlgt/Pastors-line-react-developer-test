// Import necessary modules and libraries
import axios from "axios";
import { config as defaultConfig } from '../config/api.config';
import _ from 'lodash'

// Define the 'request' function for making HTTP requests
export const request = async (config) => {
  // Merge the default configuration with the provided 'config' object
  let requestData = {
    ...(defaultConfig()),
    ...config
  };

  let response;
  try {
    // Make an HTTP request using the merged 'requestData'
    response = await axios.request(requestData);
  } catch (error) {
    // Handle errors and return a response based on the error
    return createResponseFromAxiosError(error, config);
  }

  // Create a success response based on the Axios response
  return createResponseFromAxiosResponse(response);
};

// Define a function to create a response object from an Axios error
function createResponseFromAxiosError(error, config) {
  // Initialize variables to store status, message, and data
  let status, message, data;

  // Check if the error has a response object
  if (error.response) {
    if (error.response.status === 401) {
      // Handle unauthorized (401) response here
    }
    status = error.response.status;
    message = error.message;
    data = error.response.data;
  } else if (error.request) {
    // Handle errors related to the request (e.g., no response received)
    status = 0;
    message = error.message;
  } else {
    // Handle other errors (e.g., network issues)
    status = -1;
    message = error.message;
  }

  // Handle specific error codes or structures if needed
  if (data.statusCode === 412) {
    data.message = data.message.validation;
  }

  // Flatten error message if it has nested structures
  if (data.message && _.has(data.message, 'message')) {
    data.message = data.message.message;
  }
  if (data.message && _.has(data.message, 'validation')) {
    data.message = data.message.validation;
  }

  // Return a response object with 'success' set to 'false'
  return { success: false, data, error: { status, message } };
}

// Define a function to create a response object from an Axios response
function createResponseFromAxiosResponse(response) {
  // Return a success response object with data from the Axios response
  return { success: true, data: response.data };
}
