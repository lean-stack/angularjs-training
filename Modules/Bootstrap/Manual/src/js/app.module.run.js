angular.module('myApp')
  .run(function() {
    console.log('Angular App started ...');
    console.info('Version:', angular.version.full);
  });
