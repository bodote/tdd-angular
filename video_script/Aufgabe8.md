# Testen von "Smart Components" oder "Container" gemäß [Part 3](https://itnext.io/test-driven-development-in-an-angular-world-part-3-fc65f0d44383)

# Start
* Super, dass Ihr wieder dabei seid, wenn es jetzt heißt: Test Driven Development in Angular!
* mein Name ist Bodo und ich zeige euch heute wie
* man für sog. "Smart" Components in Angular testen kann, ob sie untergeordnete Componenten richtig verwenden und integrieren.
* Eine weit verbreitete Design-Empfehlung für das strukturieren von Angular Apps ist ja, dass man  "Smart" Components nutzt um die Application spezifischen Funktionen zu implementieren und alle untergeordneten Componenten zu integrieren. ("Smart" Components werden manchmal auch  "Application Level" oder "Container" - Components genannt.)
* Diese untergeordneten Compomenten sind dann einerseits Services und andererseits Presentation-Components, die selbst möglichst generisch und wiederverwendbar sind, und keine applicationspezifichen Teile enthalten.
* Aufgabe lesen
================
* Beachte beim expect()-Vergleich des content, dass der test bisher nur textContent des DOM Tree verglichen hat. Jetzt aber eine Propertie (nämlich "favoriteMovie" ) der eigentlichen Componente verglichen werden soll.
* Daher beachte für DebugElement diese beiden Propierties:
  * componentInstance;  // access properties and methods
  * nativeElement;      // access DOM
* Beachte weiter, dass sowohl `componentInstance` als auch `nativeElement`zunächst vom Typ `any`sind. Man sollte also einen Typecast machen, wenn man sauber arbeiten will, obwohl es auch ohne geht.


npm install ng-mocks # ok, klappt
npm audit fix # geht nicht 


## Wie hat uns jetzt eigentlich ng-mocks geholfen, die Dependencies unseres Tests zu reduzieren.
Antwort: zwar hängt unser unittest `FavoriteMoviesComponent` immer noch von `FavoriteMovieComponent` ab. Aber was, wenn `FavoriteMovieComponent` seinerseits Abhängigkeiten hat , und diese wieder Abhängigkeiten hat?
Durch ng-mocks können wir die Abhängigkeiten auf die direkten Abhängigkeiten reduzieren. Alle indirekten Abhängigkeiten sind wir aber auf diese weise los geworde.
# ENDE:
* Wie findet Ihr das Video, was ist deiner Meinung nach gut, was weniger gelungen?
* schreibt uns bitte unten eine Kommentar. Nur mit eurem Feedback können wir zukünftige Videos noch besser für euch machen!
* Wenn euch das Video gefallen hat, dann gebt uns doch bitte in jedem Fall ein "Thumbs up" unten.
* Danke fürs dabei sein.
* jetzt bist du dran: versuch die Aufgabe nochmal selbst mit  deinen Aufzeichnungen und den Hinweisen aus der Aufgabestellung nachzuvollziehen.
Tschüs bis zum nächsten Mal , wenn es wieder heist:  Test Driven Develpment in Angular