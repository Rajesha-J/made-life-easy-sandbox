import express from "express";
import loginRegisterController from "../ServiceController/login-register.controller.js"
const router = express.Router();


// router.route('/test').get(loginRegisterController.getSampleVendor);
router.route('/vendor#register').post(loginRegisterController.vendorRegister);
// router.route('/item/:sku')
//   .get(searchController.apiGetItem)
//   .put(searchController.apiUpdateItem)
//   .delete(searchController.apiRemoveItem)

export default router