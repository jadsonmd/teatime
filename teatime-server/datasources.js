const MongoClient = require("mongodb").MongoClient;
const mongoURL = "mongodb://localhost:27017/";

module.exports = {
  mongoDB: async function () {
    return await MongoClient.connect(mongoURL);
  },
  queryMongoDB: async function(query) {
    let client = await MongoClient.connect(mongoURL);
    try{
      let dbo = client.db("teatime");
      return await query(dbo)

    } catch (e) {
      //throw new ApolloError(e.message, e.statusCode, e);
      console.log('errouuuuuuuuuuuuuuuuu', e.message);
    } finally {
      client.close();
    }
  }
}