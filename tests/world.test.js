process.env.NODE_ENV = 'test';

const {
  post
} = require('./util/httpRequests.js');

describe('/api/world', () => {

  it('POST', async (done) => {
    const response = await post(`/api/world`, {
        post: 'test'
      })
      .expect(200);

    expect(response.text).toStrictEqual(`I received your POST request. This is what you sent me: test`);
    done();
  });

});
