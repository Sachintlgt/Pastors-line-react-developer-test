// Define a configuration function that returns an object with headers
export let config = () => {
  let withOutAuthconfig, authConfig;

  // Define configuration for authenticated requests
  authConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    },
  };

  // Define configuration for requests without authentication
  withOutAuthconfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Return the 'authConfig' object as the default configuration
  return process.env.REACT_APP_ACCESS_TOKEN ? authConfig : withOutAuthconfig;
}
