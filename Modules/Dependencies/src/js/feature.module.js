angular.module('myFeature', [])
    .config(function () {
        console.log('Configuring feature module ...');
    })
    .run(function() {
        console.log('Starting feature module ...');
    });
