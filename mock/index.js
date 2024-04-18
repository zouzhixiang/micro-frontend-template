import Mock from 'mockjs'

Mock.setup({
  timeout: 1500
})

const responseBody = data => {
  return {
    code: '200',
    data,
    message: '成功',
    status: true
  }
}

Mock.mock('/mock/getData', 'get', () => {
  const { data } = Mock.mock({
    'data|20-30': [
      {
        user: '@cname',
        code: '@word',
        id: '@id',
        name: '@ctitle',
        username: '@string',
        'value|+1': 1,
        avatar: Mock.Random.image('32*32', '#50B347')
      }
    ]
  })
  return responseBody(data)
})
