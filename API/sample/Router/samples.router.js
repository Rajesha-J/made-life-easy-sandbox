import express from "express";
import sampleController from "../ServiceContoller/sample.controller.js"
const router = express.Router();


router.route('/vendor').get(sampleController.getSampleVendor);
// router.route('/create-item').post(searchController.apiCreateItem);
// router.route('/item/:sku')
//   .get(searchController.apiGetItem)
//   .put(searchController.apiUpdateItem)
//   .delete(searchController.apiRemoveItem)

export default router