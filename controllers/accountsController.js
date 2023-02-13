const { useApi } = require('../utils/index')

/**
* @desc   Function that returns accounts from API
* @param   req   url       request object
* @param   res   options   response object
* @return                     accounts from server
*/

exports.getAllAccount = async (req, res) => {
    try {
        const baseUrl = 'https://dev.mycadenzacloud.com/Thingworx/Things/CDZ.Core.AccountsAPI.Thing/Services';
        const endpoint = '/getAccounts';
        const queryParams = req.query;

        const url = useApi.createApiUrl(baseUrl, endpoint, queryParams);
        
        const options = {
            headers: req.headers[appKey],
        };

        const config = useApi.createApiOptions(options);

        const account = await useApi.callApi(url, config);

        res.status(200).json({
            status: 'success',
            account: account
        });

        console.log('get all account');
    } catch (err) {
        res.status(500).json({ message: "Error getting account details" });
    }
};

exports.getAccount = async (req, res) => {
    try {
        console.log('getaccount');
    } catch (err) {
        res.status(500).json({ message: "Error getting account details" });
    }
};

exports.updateAccount = async (req, res) => {
    try {
        console.log('update account');
    } catch (err) {
        res.status(500).json({ message: "Error updating account" });
    }
};

exports.createAccount = async (req, res) => {
    try {
        console.log('create account');

    } catch (err) {
        res.status(500).json({ message: "Error creating account" });
    }
};

exports.deleteAccount = async (req, res) => {
    try {
        console.log('delete account');

    } catch (err) {
        res.status(500).json({ message: "Error deleting account" });
    }
};

