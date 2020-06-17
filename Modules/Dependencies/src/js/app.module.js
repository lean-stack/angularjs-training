angular.module('myApp', ['ng', 'myFeature', 'myCommon', 'bereichA', 'bereichB'])
    .config(function () {
        console.log('Configuring app module ...');
    })
    .run(function() {
        console.log('Starting app module ...');
    });
