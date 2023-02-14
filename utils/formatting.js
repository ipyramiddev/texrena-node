/**
* @desc   Function that takes a string and returns it in lowercase
* @param   string   str       string to reduce to lowercase
* @return                     reduced string
*/

const isEqualIgnoreCase = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase();
}

module.exports = {
    isEqualIgnoreCase,
}