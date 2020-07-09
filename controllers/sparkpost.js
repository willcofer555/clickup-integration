const Post = require("../models/post");
const clickup = require("./clickup");
const fetch = require("node-fetch");

//fetch data from sparkpost endpoint('url'), format json recipient, subject, message, timestamp


exports.testSparkControl = (req, res, next) => {
 
    res.json(req.body);
    let sender = req.body[0].msys.message_event.msg_from;
    let subject = req.body[0].msys.message_event.subject;
    let messageId = req.body[0].msys.message_event.message_id;
    let body = '';
    console.log('Email From -- sender : ' + sender + ' , subject :  ' + subject + ' , ID : ' + messageId);


    let sparkObs = clickup.clickupObjectMapper(messageId, sender, subject, body);
    
    console.log(sparkObs);

    clickup.ClickupSender(sparkObs);


    //console.log(req.headers);
    //res.status(200).send("test working");

  };



/*exports.testSparkControl = (req, res, next) => {
  if (req.body) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        JSON.parse(body);
        console.log(body);
        res.end(body);
    });

    //console.log(req.headers);
    //res.status(200).send("test working");
    
  }
}; */

exports.sparkControl = (req, res, next) => {
  if (req.body.email && req.body.subject && req.body.date && req.body.text) {
    req.body.sender = sender;
    req.body.subject = subject;
    req.body.message = message;
    req.body.date = date;

    const post = new Post({
      sender: sender,
      subject: subject,
      message: message,
      date: date
    });
    post
      .save()
      .then(result => {
        res.status(201).json({
          message: "Post created successfully!",
          post: result
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
