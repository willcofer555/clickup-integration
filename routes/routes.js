const express = require("express");
const router = express.Router();
require("express-async-errors");
const clickMap = require("../constants/mapObj");

const sparkPost = require("../controllers/sparkPost");
const fetch = require("node-fetch");



async function testFetch(body) {
  try {
    console.log("Processing...");

    // the await eliminates the need for .then
    const res = await fetch(clickMap.clickUrl, {
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
    let sender = req.body[0].msys.message_event.msg_from;
    let subject = req.body[0].msys.message_event.subject;
    let messageId = req.body[0].msys.message_event.message_id;
    let body = "";
    console.log(
      "Email From -- sender : " +
        sender +
        " , subject :  " +
        subject +
        " , ID : " +
        messageId
    );

    const result = await testFetch(clickMap.dataMapper(subject, sender));
    //const taskResend = await resendTask(result);
    
    res.send(result);
  }
});






router.get("/api/emails", sparkPost.testSparkControl);

router.post("/click/test", (req, res) => {
  console.log("clicktest : " + req);
});

router.get("/click/test", (req, res) => {
  res.send("/click/test working");
});

module.exports = router;
