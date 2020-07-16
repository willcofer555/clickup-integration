const SparkPost = require('sparkpost');
const client = new SparkPost('54fc464627df84906505d914257295c3df2a63ab');


exports.sparkSender = (recipient, subject, message) => {

    client.transmissions.send({
        options: {
          sandbox: false
        },
        content: {
          from: 'support@clickup.cw-admin.com',
          subject: subject,
          html:`<html><body><p>${message}</p></body></html>`
        },
        recipients: [
          {address: recipient}
        ]
      })
      .then(data => {
        console.log('Woohoo! Mail Sent');
        console.log(data);
      })
      .catch(err => {
        console.log('Whoops! Error');
        console.log(err);
      });

}

