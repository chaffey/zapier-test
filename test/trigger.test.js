const App = require('../index');
const zapier = require('zapier-platform-core');
const appTester = zapier.createAppTester(App);

it('should not pass the type parameter in the request', (done) => {
    // I'm not passing anything in the bundle...
    appTester(App.triggers.test.operation.perform, {})
        .then((results) => {
            console.log(results);
            done();
        }).catch(e => done(e));
});
