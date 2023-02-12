const axios = require('axios')


/**
* @desc   Function that returns response from external API
* @param   string   url       request URL - built from createApiUrl utility
* @param   object   options   request options - built from createApiOptions
* @return                     response from server
*/

const callApi = async (url, options) => {
  const config = {
    method: options.method,
    url: url,
  }

  // Refine the config based on the method
  const refinedConfig = (method === "post" || method === "put" || method === "patch") ? {...config, data: options.data} : {...config};

  try {
    const response = await axios({
      ...refinedConfig
    });

    const data = parseResponse(response);

    return data;
  } catch (err) {
    handleError(err);
  }
}

/**
* @desc   Function that returns apiURL
* @param   string   baseUrl                 base URL of server
* @param   string   endpoint                endpoint 
* @param   object   queryParams(optional)   request params 
* @return                           apiURL
*/

const createApiUrl = (baseUrl, endpoint, queryParams = {}) => {
  const basicUrl = `${baseUrl}/${endpoint}`;
  // Construct query string from queryParams object
  const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join("&");
  // Create final API url, depending on if there are query params or not
  const apiURL = Object.keys(queryParams.length === 0) ? basicUrl : `${basicUrl}?${queryString}`;
  
  return apiURL;
}

/**
* @desc   Function that returns request api options, with default fall backs. Options key matches newOptions key.
* @param   object   options   request api options
* @return                     request api options
*/

const createApiOptions = (options) => {
  const newOptions = {
    ...options,
    method: options.method || 'get',
    data: options.data || {}
  }

  return newOptions
}

/**
* @desc   Function that handles API call error
* @param     error     error object
* @return              error object
*/

const handleError = (error) => {
  const errorMessage = error.response ? handleErrorCode(error.response.status) : error.message;

  // For debug
  console.log(`Error: ${errorMessage});

  return {
    success: false,
    message: error
  }
}

/**
* @desc   Function for handling error codes
* @param     errorCode   error code from api call
* @return                human readable text
*/

const handleErrorCode = errorCode => {
  switch (errorCode) {
    case 400:
      return 'Bad Request';
      break;
    case 401:
      return 'Unauthorized';
      break;
    case 403:
      return 'Forbidden';
      break;
    case 404:
      return 'Not Found';
      break;
    case 500:
      return 'Internal Server Error';
      break;
    case 501:
      return 'The server does not support the functionality required to fulfill the request';
      break;
    case 502:
      return 'The server received an invalid response from an inbound server';
      break;
    case 503:
      return 'Service Unavailable';
      break;
    default:
      return `Error code: ${errorCode}`;
      break;
  }
}

/**
* @desc   Function for handling API response
* @param     response     response from server
* @return                 response
*/
const handleResponse = response => console.log(response);

/**
* @desc   Function for parsing API response data
* @param     response    response from server
* @return                response data
*/

const parseResponse = response => response.data;

module.exports = {
  callApi,
  createApiUrl,
  createApiOptions,
  handleResponse,
  parseResponse,
}