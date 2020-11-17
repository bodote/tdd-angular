Die [Aufgabe 1 findet Ihr hier](https://bodote.github.io/blog/TDD-mit-Angular/#aufgabe-1) 

# Aufgabe 1 
## Vorbereitung unseres Testprojekts
* Wir legen ein neues Angular Projekt an mit `ng new <projektname>``
* und prüfen ob damit sowohl `ng serve` als auch `ng test` funktioniert.
* dann vereinfachen wir das von `ng new` angelegte HTML-Template `src/app/app.component.html` indem wir alles bis auf die Zeile ` <div class="content" role="main"><span>{{ title }} app is running!</span> </div>` rauslöschen. 
* nochmal mit  `ng serve` als auch `ng test` prüfen, ob das noch funktioniert und der test noch "grün" ist.
* Erläuterung der "*spec.ts" - Templates und warnung von zu viel Verwendung des "Testbed" : 
* The Angular TestBed facilitates this kind of testing as you'll see in the sections below. But in many cases, testing the component class alone, without DOM involvement, can validate much of the component's behavior in an easier, more obvious way.
*  Aber Angular TestBed ist die primäre API für Tests, in allen Fällen in denen auf Elemente oder Veränderung von Elementen des DOM-Tree getestet werden soll 
* Testbed kostet mehr Rechnenzeit, eben weil der gesamte DOM - Tree nachgebildet wird.

## Erläuterung zu Aufgabe 1
* soviel zu der Vorbereitung unseres Übungsprojektes.
* Jetzt lesen wir die [erste Aufgabe](https://bodote.github.io/blog/TDD-mit-Angular/#aufgabe-1): wir brauchen eine neue Komponente die eine Headline mit  Titel “My Favorite Movies” anzeigen soll. 
* Dabei gehen wir so vor, dass wir zunächst mit `ng g c <comp-name>` die Komponente anlegen , dadurch wird auch schon ein Template für den Unttest angelegt.
* dann schreiben wir den Unittest, der natürlich zunächst "rot" sein wird,
* dann ändern wir die Komponente bis der Test "grün" ist,
* Hinweis: wenn wir in der Komponente Properties oder Funktionen brauchen, damit unser Unittest überhaupt compiliert, dann legen wir diese an. Aber wir initialisieren die Properties NOCH NICHT. Die Funktionen belassen wir ebenfalls zunächst mit einem leeren Rumpf und mit einem "undefined" als Returnvalue, falls ein Returnvalue verlangt ist.
