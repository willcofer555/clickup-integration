const express = require("express");
const router = express.Router();
require("express-async-errors");
const clickMap = require("../constants/mapObj");
const sparkpost = require("../controllers/sparkpost");
const sparkEmail = require('../sparkpost/sparkhandle');
const fetch = require("node-fetch");



async function testFetch(body) {
  try {
    console.log("Processing...");

    // the await eliminates the need for .then
    const res = await fetch(clickMap.v1clickUrl, {
      method: "POST",
      headers: clickMap.clickHeader,
      body: JSON.stringify(body)
    });
    // this code is resumed once the fetch Promise is resolved.
    // res now has a value.
    let data = await res.json();
    console.log("Status: ", res.status);
    console.log("StatusText: ", res.statusText);
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}


async function resendTask(resBody) {
    if (resBody.id) {
        const res = await fetch(clickMap.clickUrl, {
            method: "POST",
            headers: clickMap.clickHeader,
            body: JSON.stringify(body)
          });
    }}

//Accepts sparkpost POSTS (redirects) emails to this endpoint

router.post("/api/emails", async (req, res) => {
  if (req) {
    let sender = req.body[0].msys.relay_message.msg_from;
    let subject = req.body[0].msys.relay_message.content.subject;
    let body = req.body[0].msys.relay_message.content.text; 
    console.log(sender + ' - ' + subject + ' - ' + body );
    console.log(
      "Email From -- sender : " +
        sender +
        " , subject :  " +
        subject +
        'body : ' + body
    ); 
    const result = await testFetch(clickMap.v1dataMap(subject, sender, body));
    //const taskResend = await resendTask(result);
    res.send(result);
    /*
    console.log('test post working');
    res.send('test post working');
    */
  } 
});



router.post("/api/tasks", (req,res) => {

  if (req) {
    let comment = req.body.history_items[0].comment.text_content;

    //async return task from id 
    //let taskId = req.body.task_id;
    //let fetchTask = await fetchTaskFunction(taskId);

    //input fetchTask --> subject

    if (comment.indexOf("@Derek") !== -1) {
      sparkEmail.sparkSender('wcofer@consultwebs-email.com','subject', comment);
      console.log('success');
    } 


    console.log(task);
    res.send('test post working');
  }
});

module.exports = router;
