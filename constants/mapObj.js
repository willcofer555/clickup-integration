exports.clickHeader = {
  Authorization: '6384142_b2d89ffc8363f474fb8408bcfc869efea2e6b6c7',
  'Content-Type': 'application/json'
}

exports. v1clickHeader = {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo2Mzg0MTQyLCJ2YWxpZGF0ZWQiOnRydWUsIndzX2tleSI6NTM0MSwiaWF0IjoxNTkzNTI0MzcyLCJleHAiOjE1OTQxMjkxNzJ9._rT66d7850-X8XXEtm_PkAqmhoBbsSqjlOjxFtKku8A',
    'Content-Type': 'application/json'
}

exports.v1dataMap = (subject, sender) => {
    let retObj = {
        type: 'task',
        name: '',
        content: { ops: [{ insert: sender }] },
        status: 'Open',
        position: 1,
        project: { id: '6356554', name: '' },
        categoryId: '12863209',
        subcategoryId: '31726874',
        draft_uuid: '212aea7b-4e2c-446c-a07e-033cda4a3744',
        customFields: [
          { id: '29b70d24-dc20-4ed6-aee8-f482bbbfacea' },
          { id: '8b801986-1ecd-4c69-bb81-b000ecacd952' },
          { id: '52eb45d6-3fa5-4b99-a39b-282ed9c04c9d' },
          { id: 'b1bf47c7-1923-44e1-98ee-c7d66c8fa64f' },
          { id: '376f5e45-72fb-47dc-814b-d9630df900ec' },
          { id: 'fb30ca47-3fca-4fa5-aced-59da542a3742' },
          { id: 'e9b96c63-965e-49e2-bdf2-41766b832336' },
          { id: 'fe817bc9-85c2-470a-bf80-10412c701cac' }
        ],
        dependencies: [],
        linkedTasks: [],
        assignees: [6384142],
        dont_follow: false,
        followers: [],
        v2: true
      }

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

exports.v1clickUrl = 'https://app.clickup.com/v1/subcategory/31726874/task'
