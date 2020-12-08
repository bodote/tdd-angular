# Intro:
* Super, dass Ihr wieder dabei seid, wenn es heißt: Test Driven Development in Angular!
* in unserer heutigen Folge geht es um:
## Error Handling mit Observables
* wir bauen auf den Aufgabe aus Folge 2 und 4 auf
##  Aufgabe lesen
* Nachdem wir das zu lösende Problem verstanden haben stellen  wir uns 
## im Test Driven Development zunächst nur  2 von 3 Fragen :
1. welche zusätzliche Klasse und Methoden brauchen wir ?
2. wie können wir das Ergebniss überhaupt automatisch prüfen ? 
* Dann erzeugen wir erstmal einen "roten" Test  
* und erst **dannach** überlegen wir uns eine Antwort auf die 3. Frage, wie wir das eigentliche Problem lösen wollen 

## was heist das für unsere heutige Aufgabe ?
1. diesmal brauchen wir keine neuen Klassen oder Methode, vielmehr wird angegeben, dass sich eine schon exisiterende Methode in einer existierenden Klassen jetzt anders als in Aufgabe 4 verhalten soll. 
Nämlich soll getFavoriteMovies() jetzt einen Fehler im Observable werfen.
Daher müssen wir hier nur überlegen, wie wir diese neue Verhalten jetzt "simulieren" können.
UND:
2. wie prüfen wir das Ergebnis ? : das ist hier einfach, weil wir hier sehr ähnlich wie in Aufgabe 2 eine Prüfung auf ein Domtree-Element machen müssen.

* Weil es wieder eine Test auf den Domtree wird, ergänzen wir den describe('Render') Block um einen weiteren Test 

## roten test erzeugen.

Wie löse ich das Probelem erst dann 
* es geht also diesem wieder darum zu testen ob ein bestimmtes Element im Domtree vorhanden ist. 

* d.h. wir weiter .spec.ts weil test auf Domtree, also in 'Render' aber Serivce fehlt

*  wir brauchen die Objekt-Instanz vom Service , damit wir hier einen spy drauf 'setzten' können
* FavoriteMoviesService `injecten`
* Vorsicht Falle: nicht spyOn().and.throwError()
* Sondern wir brauchen ein Test-Observalble, welches seinerseits beim subscriben einen Fehler wirft: spyOn().and.returnValue(throwError('xx'))
* throwError('xx') ist ein solches Observable!
* Fehler simulieren
* Punkt nicht vergessen bei `By.css('.error')`
* wenn Fehler, welches Folgen hätte das und wie können wir diese feststellen?
* Bessere Lösung per Refactoring ! : Fehler per pipe() und catchError() fangen, auswerten und leeres of([]) weitergeben, damit wir im html-template keine komplexe Fehlerauswertung machen müssen.
sondern das in der Component machen können.
# nur wenn die Zeit reicht:
* jasmine - magic findet den "fehlenden" Service für den FavoriteMoviesComponent-Constructor
* Beweis; Debugger öffnen

