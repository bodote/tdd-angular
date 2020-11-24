Die [Aufgabe 1 findet Ihr hier](https://bodote.github.io/blog/TDD-mit-Angular/#aufgabe-1) 

# Aufgabe 1 
## Vorbereitung unseres Testprojekts
* Wir legen ein neues Angular Projekt an mit `ng new <projektname>``
* und prüfen ob damit sowohl `ng serve --open` als auch `ng test` funktioniert.
* dann vereinfachen wir das von `ng new` angelegte HTML-Template `src/app/app.component.html` indem wir alles bis auf die Zeile
```typescript
<div class="content" role="main">
   <span> {{ title }} app is running! </span> 
</div>
 ``` 
 rauslöschen. 
* nochmal mit  `ng serve` als auch `ng test` prüfen, ob das noch funktioniert und der test noch "grün" ist.
## Testbed Verwendung.
* Bevor wir mit der eigentlichen Aufgabe beginnen, schauen wir uns das Unittest-Template an. Das wird von der Angular CLI beim Erzeugen des Projekts und beim Erzeugen von neuen Componenten automatisch angelegt wird.
Schaun wir uns erstmal das Ergebnis dieser Tests in unserem Projekt an. das geht mit `ng test` compiliert unser projekt incl der tests und startet nach einiger Zeit einen Browser, der die Testergebnisse anzeigt. 
Die Testdatei die, zu der Ausgabe gehört und die  die Angular CLI beim erzeugen des Projekts angelegt hat ist  `app.component.spec.ts`: darin ist enthalten : 
* eine `describe` Block, der fasst mehrere Einzeltests zusammen
* 3 `it` - Blöcke sind diese Einzeltest und ein 
* `beforeEach` wird vor jedem der Einzeltests ausgeführt und enthält Setup-Code für den Test
So und hier im Browserfenster sehen wir auch die testergebnisse, die grün sein müsste, wenn sie automatisch erzeugt wurden.

* Zurück zum dieser Test-datei  `app.component.spec.ts` und zwar das `beforeEach`
* Das enthält nämlich die Initialiserung des Angular Testbeds. Dieses Testbed ist **der** Weg, der von Angular vorgesehene ist, um in Unittest und Integrationstests auf den DOM tree und die Änderungen des DOM-Tree zuzugreifen. Damit werden  die meisten Integrationstest und manche Unittests überhaupt erst möglich.
**ABER**:  in vielen Fällen braucht man das Testbed auch gar nicht!
Zum Beispiel wenn wir nur den Tyescript-Code einer Component oder eines Services testen und der DOM-Tree für den konkreten Test keine Rolle spielt. 
Dann instanzieren wir die Componente einfach so mit Typescript - Bordmitteln und testen Sie. 
* Denn das Testbed kostet natürlich Rechnenzeit, eben weil der gesamte DOM - Tree nachgebildet wird. Und wir wollen ja, dass unsere Unittest so schnell wie möglich durchlaufen, stimmts?

## Erläuterung zu Aufgabe 1
* soviel zu der Vorbereitung unseres Übungsprojektes.
* Jetzt lesen wir die [erste Aufgabe](https://bodote.github.io/blog/TDD-mit-Angular/#aufgabe-1): wir brauchen eine neue Komponente die eine Headline mit  Titel “My Favorite Movies” anzeigen soll. 
* Dabei gehen wir so vor, dass wir zunächst mit `ng g c <comp-name>` die Komponente anlegen , dadurch wird auch schon ein Template für den Unittest angelegt.
* dann schreiben wir den Unittest, der natürlich zunächst "rot" sein wird,
* dann ändern wir die Komponente bis der Test "grün" ist,


# Zum Schluss
* Unser Motto ist zwar "test first" aber streng genommen müsste es heißen:
* **"Class and method signatures and properties first".**
* Dann den Test schreiben, 
* dann die eigentliche Funktionen in den Methoden implementieren

# Viel weniger manuellen Test bei der Entwicklung
Weil wir unsere App/Componeten von Beginn an mit Unittest versehen haben, brauchen wir unsere Implementierung gar nicht mehr manuell testen.

Nur ganz zum Schluss, um zu bestätigen, dass alles wie erwartet zusammenspielt.

# bessere Architektur
Also TDD zwingt uns von Anfang an uns zuerst  die Schnittstellen zu designen.

Statt uns gleich zu Snfang auf die Implementierung zu fokusieren und darüber die Schnittstellen zu vergessen.

Das ist ein wirklich großer Vorteil!
Das führt dann automatisch zu einer bessere Softwarearchitektur auf Methoden und Klassenebene !

# der Trick mit "fit"
HTML Ausgabe des speziellen Testszenarios ansehen

# Verabschiedung:
* Ihr bekommt den Link zur Aufgabenstellung und zum Video 
* nächster Termin is Freitag 
