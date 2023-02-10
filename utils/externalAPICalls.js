const axios = require('axios')

/**
* @desc   Function that returns response from server
* @param     url     request URL 
* @param     options     request options 
* @return             response from server
*/

exports.callApi = async (url, options) => {
  try {
    let response;
    
    switch (options.method) {
      case 'get':
        response = await axios.get(url).then(handleResponse);
        break;
      case 'post':
        response = await axios.post(url, options.data).then(handleResponse);
        break;
      case 'put':
        response = await axios.put(url, options.data).then(handleResponse);
        break;
      case 'patch':
        response = await axios.put(url, options.data).then(handleResponse);
        break;
      case 'delete':
        response = await axios.delete(url).then(handleResponse);
        break;
      default:
        console.log('something went wrong')
        break;
    }
    response = parseResponse(response);

    return response
  } catch (err) {
    handleError(err);
  }
}

/**
* @desc   Function that returns apiURL
* @param     baseUrl     base URL of server
* @param     endpoint     endpoint 
* @param     queryParams(optional)     request params 
* @return             apiURL
*/

exports.createApiUrl = (baseUrl, endpoint, queryParams = '') => {
  let apiURL = baseUrl + endpoint;
  
  if (queryParams) {
    apiURL = `${baseUrl}/${endpoint}?${queryParams}`;
  }
  
  return apiURL;
}

/**
* @desc   Function that returns request api options
* @param     options     request api options
* @return             request api options
*/

exports.createApiOptions = (options) => {
  const newOptions = {
    method: options.method || 'get',
    data: options.data || {}
  }

  return newOptions
}

/**
* @desc   Function that returns error message
* @param     error     error object
* @return             error object
*/

exports.handleError = (error) => {
  if (error.response) {
    const errorCode = error.response.status;
    let errorMessage;
    
    switch (errorCode) {
        case 400:
          errorMessage = 'Bad Request';
          break;
        case 401:
          errorMessage = 'Unauthorized';
          break;
        case 403:
          errorMessage = 'Forbidden';
          break;
        case 404:
          errorMessage = 'Not Found';
          break;
        case 500:
          errorMessage = 'Internal Server Error';
          break;
        case 501:
          errorMessage = 'The server does not support the functionality required to fulfill the request';
          break;
        case 502:
          errorMessage = 'The server received an invalid response from an inbound server';
          break;
        case 503:
          errorMessage = 'Service Unavailable';
          break;
        default:
            errorMessage = `Error code: ${errorCode}`;
            break;
    }
    console.log(errorMessage, { errorCode, errorMessage: error.message });
    } else {
        console.log({ errorCode: -1, errorMessage: error.message });
    }
  return error;
}

/**
* @desc   Function that returns response
* @param     response     response from server
* @return             response
*/
exports.handleResponse = response => console.log(response);

/**
* @desc   Function that returns response data
* @param     response    response from server
* @return             response data
*/

exports.parseResponse = response => response.data;
