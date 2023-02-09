
exports.getAllAccount = async (req, res) => {
    try {
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

