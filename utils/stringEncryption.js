const crypto = require('crypto');


const key = Buffer.from('xNRxA48aNYd33PXaODSutRNFyCu4cAe/InKT/Rx+bw0=', 'base64');
const iv = Buffer.from('81dFxOpX7BPG1UpZQPcS6w==', 'base64');
const algorithm = 'aes-256-cbc'

/**
* @desc   Function to encrypt the string
* @param     data  user text
* @return    encrypted encrypted form of text
*/
const encrypt = (data) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};



/**
* @desc   Function to decrypt the string
* @param     encrypted encrypted text
* @return    decrypted decrypted text
*/
const decrypt = (encrypted) => {
    const cipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = cipher.update(encrypted, 'hex', 'utf8');
    decrypted += cipher.final('utf8');

    return decrypted;
};

module.exports = { encrypt, decrypt };