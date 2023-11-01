import mongodb, { ObjectId } from "mongodb";
const objectId = mongodb.ObjectId;

let user;

export default class loginRegisterDao{
  static async injectDB(conn){
    try {
      if (user) {
        return;
      }
      user = await conn.db('sandboxDb').collection('login-register');
    } catch (error) {
      console.error(`errors in injectDB ${error}`);
    }
  }
  static async sampleVendor(){
    try {
      return await user.findOne({});
    } catch (error) {
      console.error(`errors in addItem ${error}`);
    }
  }

  static async getItem(id){
    try {
      return await user.findOne({name: id});
    } catch (error) {
      console.error(`errors in getItem ${error}`);
    }
  }

  
  static async updateItem(id, name, description, timestamp){
    try {
      const response = await user.updateOne(
        { name : id},
        { $set : {name: name, description: description, timestamp: timestamp}}
      )
      return response;
    } catch (error) {
      console.error(`errors in updateItem ${error}`);
    }
  }

  static async deleteItem(id){
    try {
      const response = await user.deleteOne({ name : id});
      return response;
    } catch (error) {
      console.error(`errors in updateItem ${error}`);
    }
  }

  static async getuser(id){
    try {
      const response = await user.find({ name : id});
      return response.toArray();
    } catch (error) {
      console.error(`errors in updateItem ${error}`);
    }
  }
}