
angular.module('myApp', [])
  // Vglbar mit der Main-Funktion in vielen Programmmier-Umgebungen
  // Alle Module sind geladen, alle Dienste stehen bereit
  .run(function (counterSvc, $log) {
    $log.debug('Anwendung läuft.')
    counterSvc.inc();
  })
  // Mglkeit der Konfiguration von Dienst-Providern!
  // D.h. es gibt noch keine erzeugten Dienste, injected werden können
  // nur Provider und Dienst-Konstanten
  .config(function (counterSvcProvider, $logProvider) {
    $logProvider.debugEnabled(true);
    if (counterSvcProvider.setStart) {
      counterSvcProvider.setStart(11);
    }
  })
;

