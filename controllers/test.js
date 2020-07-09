const fetch = require("node-fetch");
let url = 'https://api.clickup.com/api/v2/list/27485736/task';
let headers = {
    'Authorization': '6384142_b2d89ffc8363f474fb8408bcfc869efea2e6b6c7',
    'Content-Type': 'application/json'
  };

let data = {
    
    "name": 'test name',
    "description": 'test@gmail.com',
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
  };

  
 async function testFetch(object) {
    try {
      console.log("Processing...");

      // the await eliminates the need for .then
      const res = await fetch(url, {
          method: "POST",
          headers: headers,
          body: data,
      })
      // this code is resumed once the fetch Promise is resolved.
      // res now has a value.
      console.log("Status: ", res.status);
      console.log("StatusText: ", res.statusText);
      return res;
   }
   catch(err) { 
     // because the promise could error, it is advised to use
     // try/catch. With a Promise, you would .then(cb).catch(errHandler)
     // but async/await doesn't utilize callbacks.

     // perform error handling or you can bubble it up.
    throw err
}};

