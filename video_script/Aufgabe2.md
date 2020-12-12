# Aufgabe 2 
willkommen zum 2. Teil! 
* machen weiter wo wir das letzte mal aufgehört haben.
* kleines Refactoring (describe - block)
  * describe kann beliebig hierarchisch geschachtelt verwendet werden um ähnliche Tests mit einer gemeinsamen Beschreibung zusammenzufassen.
* Status quo , tests grün
* aufgabenstellung lesen
* lass und überlegen , was wie die lösung ausehen könnte
* Componente braucht eine properity 
* TDD: 
  1. "Classe , Methoden, Properties anlegen"; 
  2. Dann Test im  Arrage, Act, Assert (AAA) Pattern
  3. Dann implemtierung
* die Darstellung  z.B Liste , jeder Film in einem html-li element mit zuerst dummy Value
* DOM - Tree prüfung -> Testbed
* wir ergänzen also unsere vorhandenen test in spec-datei

* key: `fixture.debugElement.queryAll(By.css('li'))``
* **fixture** : Herkunft des Begriffs (Halterahmen, Halterung) In Software: reproduzierbare Ausgangsbedingungen. 
* zuerst anzahl li elemente
* dann map() : content vergleich

* **Tip** : während `ng test`läuft,  KEINE automatische Speicherung in IDE 
  * Das macht häufig Probleme wenn unvollstädige Dateien
  * besser `save all` Short Cut verwenden (z.B. in VisualStudioCode Mac: Option+Command+'s') wenn fertig.