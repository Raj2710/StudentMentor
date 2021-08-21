var express = require('express');
var router = express.Router();
const {dbUrl,mogodb,MongoClient}=require("../bin/config.js");

//it gives all the students data
router.get('/all-students', async function(req, res) {

  const client = await MongoClient.connect(dbUrl);
  try {
    const db = client.db("student-mentor");
    const user = await db.collection("student").find().toArray();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.json({message:"Error Occured in DB"});
  }finally{
    client.close();
  }

});


//it gives all the mentor data
router.get('/all-mentors',async(req,res)=>{
  const client = await MongoClient.connect(dbUrl);
  try {
    const db = client.db("student-mentor");
    const user = await db.collection("mentor").find().toArray();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.json({message:"Error Occured in DB"});
  }finally{
    client.close();
  }

})


//add-mentor
router.post('/add-mentor',async(req,res)=>{
  const client = await MongoClient.connect(dbUrl);
    try{
      const db = client.db("student-mentor");
      const user =  await db.collection("mentor").insertOne(req.body);
      if(req.body.mentorStudents){//if mentor exist we have to update the mentor db
          req.body.mentorStudents.map(async(e)=>{
              const stud = await db.collection("student").updateOne({"studentName":e},{$set:{"studentMentor":req.body.mentorName}});
          })
      }
      res.status(200).json({
        message:"Mentor Added Successfully"
      })
    }
    catch(err){
      console.log(err);
      res.status(500).json(err);
    }
})


//add student
router.post('/add-student',async(req,res)=>{
    const client = await MongoClient.connect(dbUrl);
    try{
      const db = client.db("student-mentor");
      const user =  await db.collection("student").insertOne(req.body);
      if(req.body.studentMentor){//if mentor exist we have to update the mentor db
        const men = await db.collection("mentor").findOne({"mentorName":req.body.studentMentor});
        men.mentorStudents.push(req.body.studentName);
        //console.log(men);
        const update = await db.collection("mentor").updateOne({"mentorName":req.body.studentMentor},{$set:{"mentorStudents":men.mentorStudents}});
      }
      res.status(200).json({
        message:"Student Added Successfully"
      })
    }
    catch(err){
      console.log(err);
      res.status(500).json(err);
    }
    finally{
      client.close();
    }
})


router.post('/assign-students',(req,res)=>{

})

router.post('/change-mentor',(req,res)=>{

})


//getting the mentor details of a particular student
router.post('/mentor',async(req,res)=>{
  const client = await MongoClient.connect(dbUrl);
  try {
    const db = client.db("student-mentor");
    const user = await db.collection("student").findOne({"studentName":req.body.studentName});
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.json({message:"Error Occured in DB"});
  }finally{
    client.close();
  }


})



//getting the students details of a particular mentor
router.post('/students',async(req,res)=>{
  const client = await MongoClient.connect(dbUrl);
  try {
    const db = client.db("student-mentor");
    const user = await db.collection("mentor").findOne({"mentorName":req.body.mentorName});
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.json({message:"Error Occured in DB"});
  }finally{
    client.close();
  }


})

module.exports = router;
