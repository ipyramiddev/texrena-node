# Node application middleware

## Usage

Every directory will have an index.js which is used solely for gathering exports

The services directory is for getting external data
The utils directory is for utility functions

## Running

Run for dev using
```
npm run dev
```


## Utility functions

### API utility functions

This code provides functions to make API calls using the Axios library. It contains the following functions:

1.  callApi          - a function that makes an API call using the URL and options provided. It returns the response from the server.
2.  createApiUrl     - a function that returns an API URL based on the baseUrl, endpoint and queryParams.
3.  createApiOptions - a function that returns the request api options, with default fallbacks.
4.  handleError      - a function that handles API call errors.
5.  handleErrorCode  - a function for handling error codes.
6.  handleResponse   - a function for handling API response.
7.  parseResponse    - a function for parsing API response data.

Example Usage - 

```
const thisUrl = useApi.createApiUrl(`https://example.com`, `example-dir`, `{ fb-tracking: 'abcd', google: 'efgh' }`);
const thisOptions = useApi.createApiOptions({method: 'post'});
const thisApiCall = await useApi.callApi(thisUrl, thisOptions); // Use inside async
```

### Date utility functions

This code provides date utilities, for formatting dates and getting future, past and current dates / datetimes

1. getCurrentDate        - a function to get the datetime now
2. getYesterdayDate      - a function to get the date yesterday
3. formatDateToIsoString - a function to format any date / datetime to ISO String format
4. minutesFromNow        - a function to generate a datetime for x minutes from now

Example Usage -

```
const now = getCurrentDate();
const isoNow = formatDateToIsoString(now);
```

### Encryption utility functions

This code provides encryption and tokenization utility functions

1. encrypt      - a function that encrypts a string
2. decrypt      - a function that decrypts a string
3. createToken  - a function that creates a random token (currently 20 characters long)

### Formatting utility functions

This code provides utility functions for formatting text and other inputs

1. isEqualLowerCase - a function that converts two strings to lowerCase and compares them