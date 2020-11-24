# Aufgabe 2 
willkommen zum 2. Teil! 
* machen weiter wo wir das letzte mal aufgehört haben.
* Status quo , tests grün
* aufgabenstellung lesen
* lass und überlegen , was wie die lösung ausehen könnte
* Componente braucht eine properity 
* TDD: 
  1. "Classe , Methoden, Properties anlegen"; 
  2. Dann Test, 
  3. Dann implemtierung
* die Darstellung  z.B Liste , jeder Film in einem html-li element
* DOM - Tree prüfung -> Testbed
* wir ergänzen also unsere vorhandenen test in spec-datei
* describe kann beliebig hierarchisch geschachtelt verwendet werden um ähnliche Tests mit einer gemeinsamen Beschreibung zusammenzufassen.
* key: `fixture.debugElement.queryAll(By.css('li'))``
* **fixture** : Herkunft des Begriffs (Halterahmen, Halterung) In Software: reproduzierbare Ausgangsbedingungen. 
* zuerst anzahl li elemente
* dann erstes und letztes : content vergleich