angular.module('myCommon', [])
    .config(function () {
        console.log('Configuring common module ...');
    })
    .run(function() {
        console.log('Starting common module ...');
    })
    .filter('noop', function () { return function () { return 'noop'} });
