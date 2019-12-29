process.env.NODE_ENV = 'test';

const {
  get,
} = require('./util/httpRequests.js');

describe('/api/hello', () => {

  it('GET', async (done) => {
    const response = await get(`/api/hello`)
      .expect(200);

    expect(response.body).toStrictEqual({
      express: 'Hello From Express'
    });
    done();
  });

});
