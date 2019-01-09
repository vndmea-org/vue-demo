const Mock = require('mockjs')

const users = Mock.mock(/^\/api\/user\/list/, 'get', (req, res) => {
  return {
    code: 200,
    data: [{ name: 'zhangsan', age: 19 }, { name: 'lisi', age: 20 }],
  };
});
