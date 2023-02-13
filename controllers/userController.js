const { useApi } = require('../utils/index')

// Get all user
exports.getAllUser = async (req, res) => {
    try {
        const baseUrl = 'https://dev.mycadenzacloud.com/Thingworx/Things/CDZ.Core.AccountsAPI.Thing/Services';
        const endpoint = '/getUsers';
        const queryParams = req.query;

        const url = useApi.createApiUrl(baseUrl, endpoint, queryParams);
        
        const options = {
            headers: { 
                'apiKey': apiKey
            }
        };

        const config = useApi.createApiOptions(options);

        const users = await useApi.callApi(url, config);

        res.status(200).json({
            status: 'success',
            users: users
        });

        console.log('get all users');
    } catch (err) {
        res.status(500).json({ message: "Error getting users" });
    }
};

// Get user
exports.getUser = (req, res) => {
    console.log('getuser');
};

// Create user
exports.createUser = (req, res) => {
    console.log('createuser');
};

// Update user
exports.updateUser = (req, res) => {
    console.log('createuser');

};

// Delete user
exports.deleteUser = (req, res) => {
    console.log('deleteuser');

};
