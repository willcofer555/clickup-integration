//POST (email) json to Clickup api endpoint ('https://api.clickup.com/api/v2/list/list_id/task')
//mail.consultwebs.com

const fetch = require("node-fetch");

var headers = {
  Accept: 'application/json',
  Authorization: '54fc464627df84906505d914257295c3df2a63ab'
}


//Clickup Header 
var clickHeader = {
  'Authorization': '6384142_b2d89ffc8363f474fb8408bcfc869efea2e6b6c7',
  'Content-Type': 'application/json'
}


//POST new task to clickup task endpoint

exports.ClickupSender = (clickupObject) => {
  return fetch(`https://api.clickup.com/api/v2/list/27485736/task`, { method: "POST", headers: clickHeader, body: clickupObject })
    .then(res => res.json())
    
};



//Test Post to Clickup 
exports.testClickupSender = clickupObject => {
  return fetch("http://2d181c22ff26.ngrok.io/click/test", { method: "POST", headers: clickHeader, body: clickupObject })
    .then(response => {
      response.text()
    })
};



exports.clickupObjectMapper = (id, sender, subject, body) => {
  let mapObject = {
    
      "name": subject,
      "description": sender,
      "assignees": [ 
          1
      ],
      "tags": ["tag name 1"],
      "status": "",
      "priority": 3,
      "due_date": 1508369194377,
      "due_date_time": false,
      "time_estimate": 8640000,
      "start_date": 1567780450202,
      "start_date_time": false,
      "notify_all": true,
      "parent": null,
      "links_to": null,
      "custom_fields": [
          {
              "id": "0a52c486-5f05-403b-b4fd-c512ff05131c",
              "value": 23
          },
          {
              "id": "03efda77-c7a0-42d3-8afd-fd546353c2f5",
              "value": "Text field input"
          }
      ]
    } 
    return mapObject;
  };


//TEST get domains
exports.getDomains = () => {
  fetch("https://api.sparkpost.com/api/v1/inbound-domains"), { method: "GET", headers: headers}
}
