exports.clickHeader = {
  Authorization: '6384142_b2d89ffc8363f474fb8408bcfc869efea2e6b6c7',
  'Content-Type': 'application/json'
}

exports. v1clickHeader = {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo2Mzg0MTQyLCJ2YWxpZGF0ZWQiOnRydWUsIndzX2tleSI6NTM0MSwiaWF0IjoxNTkzNTI0MzcyLCJleHAiOjE1OTQxMjkxNzJ9._rT66d7850-X8XXEtm_PkAqmhoBbsSqjlOjxFtKku8A',
    'Content-Type': 'application/json'
}

exports.v1dataMap = (subject, sender, body) => {
  let retObj = {
          "name": subject,
          "content": sender + ' - ' + body ,
          "assignees": [
              2
          ],
          "status": "",
          "priority": 3,
          "due_date": "1508369194377"
    }
    return retObj

}

exports.dataMapper = (subject, sender) => {
  let retObj = {
    name: subject,
    description: sender,
    assignees: [1],
    tags: ['tag name 1'],
    status: '',
    priority: 3,
    due_date: 1508369194377,
    due_date_time: false,
    time_estimate: 8640000,
    start_date: 1567780450202,
    start_date_time: false,
    notify_all: true,
    parent: null,
    links_to: null,
    custom_fields: [
    ]
  }

  return retObj
}




exports.clickUrl = 'https://api.clickup.com/api/v2/list/27485736/task'

exports.v1clickUrl = 'https://api.clickup.com/api/v1/list/27416383/task'

//exports.taskUrl = `https://api.clickup.com/api/v2/task/${taskId}`

