const {MongoClient} = require("mongodb")
const uri = require("./atlas_url")

const client = new MongoClient(uri)

const ConnectToDatabase = async () => {
  try{
    await client.connect()
    console.log("Successful")
  }catch (e){
    console.error(`${e}`)
  }
};

const main = async () => {
  try{
    await ConnectToDatabase();
  } catch (e){
    console.error("Error connecting")
  }finally{
    await client.close()
  }
};

main();