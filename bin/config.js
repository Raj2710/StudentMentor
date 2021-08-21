const mongodb =require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbUrl = "mongodb+srv://faraz:12345@cluster0.lkjvp.mongodb.net/student-mentor?retryWrites=true&w=majority";
module.exports={dbUrl,mongodb,MongoClient};