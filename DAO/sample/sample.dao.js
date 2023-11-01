import mongodb, { ObjectId } from "mongodb";
const objectId = mongodb.ObjectId;

let sample;

export default class sampleDao{
  static async injectDB(conn){
    try {
      if (sample) {
        return;
      }
      sample = await conn.db('sandboxDb').collection('samples');
    } catch (error) {
      console.error(`errors in injectDB ${error}`);
    }
  }
  static async sampleVendor(){
    try {
      return await sample.findOne({type : 'vendor'});
    } catch (error) {
      console.error(`errors in addItem ${error}`);
    }
  }

  // static async getItem(id){
  //   try {
  //     return await user.findOne({name: id});
  //   } catch (error) {
  //     console.error(`errors in getItem ${error}`);
  //   }
  // }

  
  // static async updateItem(id, name, description, timestamp){
  //   try {
  //     const response = await user.updateOne(
  //       { name : id},
  //       { $set : {name: name, description: description, timestamp: timestamp}}
  //     )
  //     return response;
  //   } catch (error) {
  //     console.error(`errors in updateItem ${error}`);
  //   }
  // }

  // static async deleteItem(id){
  //   try {
  //     const response = await user.deleteOne({ name : id});
  //     return response;
  //   } catch (error) {
  //     console.error(`errors in updateItem ${error}`);
  //   }
  // }

  // static async getuser(id){
  //   try {
  //     const response = await user.find({ name : id});
  //     return response.toArray();
  //   } catch (error) {
  //     console.error(`errors in updateItem ${error}`);
  //   }
  // }
}