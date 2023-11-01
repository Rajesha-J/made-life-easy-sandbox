import app from "./server.js";
import mongodb from "mongodb";
import loginRegisterDao from "./DAO/login-register/login-register.dao.js";
import sampleDao from "./DAO/sample/sample.dao.js";

const mongoClient = mongodb.MongoClient;
const mongo_username = 'RajeshaJagadeesh';
const mongo_password = 'Test%401234';
const url = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.c0wu3rt.mongodb.net/?retryWrites=true&w=majority`;
const port = 8000;

mongoClient.connect(
  url, 
  {
    useNewUrlParser: true
  }
  )
  .catch(error =>{
    console.error('Error @ mongoClient', error);
    process.exit(1);
  })
  .then(async client=>{
    await loginRegisterDao.injectDB(client);
    await sampleDao.injectDB(client);
    app.listen(port, ()=>{
      console.log('Listing @ the port');
    })
  })
