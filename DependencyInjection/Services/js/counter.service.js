// File: counter.service.js

angular.module('myApp')
  // Service-Muster: Konstruktor bzw Klasse
  // d.h.: bei der "ersten" Anforderung des Dienstes führt AngularJS
  // folgenden Code aus:
  // counterSvc = new CounterStd()
  .service('counterSvc', CounterStd)
  // Service-Muster: Factory
  // d.h. wir geben eine Funktion an (Factory, Hersteller), die/der
  // bei der ersten Dienstanforderung ausgeführt wird und das Dienst-Objekt
  // erstellt
  .factory('counterSvc2', function () {
    return new CounterVarStd(10,20);
  })
  .provider('counterSvc3', function () {
    var start = 0;
    return {
      setStart: function(wert) {start = wert;},
      $get: function () { return new CounterVarStd(start,100); }
    }
  })
  /*
  .value
  .constant
  */

// JavaScript-Constructor (weil Großbuchstabe vorne)
function CounterStd() {
  this.count = 0;
  this.inc = function() {
    this.count = this.count + 1;
    return this.count;
  }
}

function Counter10Std() {
  this.count = 0;
  this.inc = function() {
    this.count = this.count + 10;
    return this.count;
  }
}

function CounterVarStd(start, inc) {
  this.count = start;
  this.inc = function() {
    this.count = this.count + inc;
    return this.count;
  }
}
