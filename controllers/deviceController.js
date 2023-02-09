const deviceDataController = {
    // Get power
    getPower: (req, res) => {
        console.log("Getting power data...");
    },

    // Get energy
    getEnergy: (req, res) => {
        console.log("Getting energy data...");
    },

    // Get dashboard
    getDashboard: (req, res) => {
        console.log("Getting dashboard data...");
    },

    // Update dashboard
    updateDashboard: (req, res) => {
        console.log("Updating dashboard data...");
    },

    // Get DR events
    getDREvents: (req, res) => {
        console.log("Getting DR events...");
    },

    // Create DR events
    createDREvents: (req, res) => {
        console.log("Creating DR events...");
    },

    // Update DR events
    updateDREvents: (req, res) => {
        console.log("Updating DR events...");
    },

    // Get asset data
    getAssetData: (req, res) => {
        console.log("Getting asset data...");
    },

    // Update asset data
    updateAssetData: (req, res) => {
        console.log("Updating asset data...");
    }
};

module.exports = deviceDataController;
