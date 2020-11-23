# Intro
( Anmerkung: Diese Datei und die anderen Dateien in diesem Verzeichniss enthalten den Text,  der im Workshop/Video  gesprochen wird/wurde/werden sollte. )

Als erstes werde ich gleich mal unsern Workspace und ein Angular Minimal-Projekt erzeugen lassen, das dauert nämlich einige Zeit.


`ng new tdd-angular-ws1`

Während das läuft, gebe ich euch ein kurze Einführung in den Workshop

Seht ihr alle meinen Bildschirm ? 
Ist die Schrift groß genug?
Wenn nicht bitte Einspruch erheben!
Felix wird den Chat mitlesen und die Fragen moderieren.



Willkommen zum ersten Teil unserer Serie über Test Driven Development mit Angular! 

## Warum ?
Warum Test Driven Development im allgemeinen eine gute Idee ist, wisst Ihr schon. 

Wenn nicht, haben wir unten nochmal den Blogpost  und das Video verlinkt.

In dieser Serie von Videos soll es jetzt konkret darum gehen, wie Ihr TDD in Angular umsetzten könnt.

TDD arbeite ja mit Unittest, daher erklären wir auch, wie man mit Angulars Jasmine und Karma solche Unittest erstellen kann.

Aber im Gegensatz zu eurer bisherigen Gewohnheit, werden wir die Unittest immer ZUERST implementiern und dann erst die eigentliche Classe.
## Wie ?
Jeder Teil der Workshop/Video-Serie besteht  aus jeweils einer Aufgabe. Wir beginnen immer damit, die nötigen Angular/Jasmine Grundlagen zu erklären. Dann schauen wir uns die jeweilige Aufgabenstellung an und entwickeln  die Musterlösung Schritt für Schritt.

Die Idee ist, dass Ihr euch dabei selbst Notizen auf ein Blatt Papier macht. Anschließend dürft Ihr selber die Aufgabe anhand der Aufgabenstellung und eurer Notizen selbst lösen.

Bei Fragen stehen wir gern zur Verfügung. Wenn Ihr eine Lösung fertig habt, solltet Ihr eure Lösung nochmal mit unserer Musterlösung vergleichen. Den Link findet Ihr am Ende den jeweiligen Aufgabestellung.

Wir werden auch von jedem Workshop-Teil ein Video bereitstellen und natürlich die Aufgabenstellung. Für beides bekommt ihr die Links im Anschluss per Email oder unten in der Videobeschreibung.

Wenn noch Wartezeit ist:
user Minimalprojet hat schon einen ersten Unittest, der für  app.component.ts testet ob die App überhaupt erzeugt werden kann und ob die Überschrift dem Projektnamen entspricht.

Dazu wird das "Testbed" verwendet, das ist **die** Api , mir der wir in unseren Tests auf den DOM-Tree, seine Elemente und Veränderungen im DOM-Tree abfragen können. 

In Unittest, die NICHT den DOM-Tree abfragen , brauchen wir demzufolgen das Testbed auch nicht




