TESTING THE SERVER
beforeEach(done) // load up the test with a mock version of the data, call done after the bros
afterEach(done) // clear out the data, call done after the remove method is finished.
the test w/ chai-http
describe()
it()
chai
.request(server)
.get/post/update/delete('/path')
.end( (err, res) => {
done()
})
expect(res.body[0].name).to.eql(testData.name)
