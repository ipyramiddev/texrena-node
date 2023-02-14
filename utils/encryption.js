const crypto = require('crypto');

/**
* 
* @desc      Simple functions to generate the key, iv and algorithm used for encryption
*
*/

const createKey = () => { return Buffer.from('xNRxA48aNYd33PXaODSutRNFyCu4cAe/InKT/Rx+bw0=', 'base64')};
const createIv = () => { return Buffer.from('81dFxOpX7BPG1UpZQPcS6w==', 'base64')};
const createAlgorithm = () => { return 'aes-256-cbc' };

/**
* @desc      Function to encrypt the string
* @param     data  user text
* @return    encrypted encrypted form of text
*/
const encrypt = (data) => {
    const cipher = crypto.createCipheriv(createAlgorithm(), createKey(), createIv());
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};



/**
* @desc      Function to decrypt the string
* @param     encrypted encrypted text
* @return    decrypted decrypted text
*/
const decrypt = (encrypted) => {
    const cipher = crypto.createDecipheriv(createAlgorithm(), createKey(), createIv());
    let decrypted = cipher.update(encrypted, 'hex', 'utf8');
    decrypted += cipher.final('utf8');

    return decrypted;
};

/**
* @desc      Function to create random token
* @param     none
* @return    random token
*/

const createToken = () => {
    return crypto.randomBytes(20).toString('hex');
}

module.exports = { 
    encrypt, 
    decrypt,
    createToken,
};