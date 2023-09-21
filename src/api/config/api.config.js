// Define a configuration function that returns an object with headers
export let config = () => {
  let withOutAuthconfig, authConfig;

  // Define configuration for authenticated requests
  authConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4`
    },
  };

  // Define configuration for requests without authentication
  withOutAuthconfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Return the 'authConfig' object as the default configuration
  return authConfig;
}
