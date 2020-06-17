angular.module('bereichB', ['myCommon'])
    .config(function () {
        console.log('Configuring bereichB module ...');
    })
    .run(function() {
        console.log('Starting bereichB module ...');
    });
