angular.module('bereichA', [])
    .config(function () {
        console.log('Configuring bereichA module ...');
    })
    .run(function() {
        console.log('Starting bereichA module ...');
    });
