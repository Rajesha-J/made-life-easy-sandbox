import loginRegisterDao from "../../../DAO/login-register/login-register.dao.js";

export default class searchController{
  static async getSampleVendor(req, res, next){
    try {
      const sample = await loginRegisterDao.sampleVendor();
      res.json({success : true, data: sample})
    } catch (error) {
      res.status(500).json({success : false, message : `Error accured : ${error}`})
    }
  }

  static async vendorRegister(req, res, next){
    try {
      let itemId = req.params.sku;
      let itemDetails = await loginRegisterDao.getItem(itemId);
      if (!itemDetails) {
        res.status(404).json({success: false, message: 'Item not found'});
        return;
      }
      res.json(itemDetails);
    } catch (error) {
      res.status(500).json({success: false, message: `Error accured in getItem ${error}`});
    }
  }
  // static async apiUpdateItem(req, res, next){
  //   try {
  //     const itemId = req.params.sku;
  //     const itemName = req.body.name;
  //     const itemDescript = req.body.description;
  //     const timestamp = req.body.timestamp;

  //     const itemResponse = await loginRegisterDao.updateItem(itemId, itemName, itemDescript, timestamp);
  //     var { error } = itemResponse;
  //     if (error) {
  //       res.status(400).json({success: false, message : 'Not found'});
  //     }

  //     if (itemResponse.modifiedCount == 0) {
  //       throw new Error('Unable to update item.');
  //     }
  //     res.json({success : true});
  //   } catch (error) {
  //     res.status(500).json({success: false, message: `Error accured in updateItem ${error}`})
  //   }
  // }
  // static async apiRemoveItem(req, res, next){
  //   try {
  //     const sku = req.params.sku;
  //     const response = await loginRegisterDao.deleteItem(sku);
  //     res.json({success: true, message: 'Item is deleted successfully...'})
  //   } catch (error) {
  //     res.status(500).json({success: false, message: `Error accured in removeItem ${error}`})
  //   }
  // }
  // static async apiGetItems(req, res, next){
  //   try {
  //     const sku = req.params.sku || {};
  //     const response = await loginRegisterDao.getItems(sku);
  //     if (!response) {
  //       res.status(404).json({success: false, message: `Items not found`});
  //       return;
  //     }
  //     res.json(response);
  //   } catch (error) {
  //     req.status(500).json({success: false, message: `Error accured in getItems ${error}`})
  //   }
  // }
}