// Needed Resources
const express = require('express');
const router = new express.Router();
const utilities = require('../utilities');
const invManCont = require('../controllers/managementController');
const inventoryValidate = require('../utilities/inventory-validation');

/* ***********************************
 * Deliver Add New Classification View
 * ******************************** */
router.get(
  '/add-classification',
  utilities.handleErrors(invManCont.addClassification)
);

/* ***********************************
 * Deliver Add New Vehicle View
 * ******************************** */
router.get('/add-inventory', utilities.handleErrors(invManCont.addInventory));

/* ***********************************
 * Process Add New Classification
 * ******************************** */
router.post(
  '/add-classification',
  inventoryValidate.classificationRules(),
  inventoryValidate.checkClassificationData,
  utilities.handleErrors(invManCont.addClassificationToFile)
);

/* ***********************************
 * Process Add New Inventory
 * ******************************** */
router.post(
  '/add-inventory',
  inventoryValidate.inventoryRules(),
  inventoryValidate.checkInventoryData,
  utilities.handleErrors(invManCont.addInventoryToFile)
);

module.exports = router;
