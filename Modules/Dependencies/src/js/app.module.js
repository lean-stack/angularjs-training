angular.module('myApp', ['myFeature'])
    .config(function () {
        console.log('Configuring app module ...');
    })
    .run(function() {
        console.log('Starting app module ...');
    });
