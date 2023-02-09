const express = require("express");
const router = express.Router();
const deviceDataController = require("../controllers/deviceController");

// Get Power
/**
 * @desc   Get Power
 * @route  /api/device-data/power
 * @method GET
 */
router.get("/power", deviceDataController.getPower);

// Get Energy
/**
 * @desc   Get Energy
 * @route  /api/device-data/energy
 * @method GET
 */
router.get("/energy", deviceDataController.getEnergy);

// Get Dashboard
/**
 * @desc   Get Dashboard
 * @route  /api/device-data/dashboard
 * @method GET
 */
router.get("/dashboard", deviceDataController.getDashboard);

// Update Dashboard
/**
 * @desc   Update Dashboard
 * @route  /api/device-data/dashboard
 * @method PUT
 */
router.put("/dashboard", deviceDataController.updateDashboard);

// Get DR Events
/**
 * @desc   Get DR Events
 * @route  /api/device-data/dr-events
 * @method GET
 */
router.get("/dr-events", deviceDataController.getDREvents);

// Create DR Events
/**
 * @desc   Create DR Events
 * @route  /api/device-data/dr-events
 * @method POST
 */
router.post("/dr-events", deviceDataController.createDREvents);

// Update DR Events
/**
 * @desc   Update DR Events
 * @route  /api/device-data/dr-events/:id
 * @method PUT
 */
router.put("/dr-events/:id", deviceDataController.updateDREvents);

// Get Data
/**
 * @desc   Get Data
 * @route  /api/device-data/asset-data
 * @method GET
 */
router.get("/asset-data", deviceDataController.getAssetData);

// Update Data
/**
 * @desc   Update Data
 * @route  /api/device-data/asset-data/:id
 * @method PUT
 */
router.put("/asset-data/:id", deviceDataController.updateAssetData);

module.exports = router;
