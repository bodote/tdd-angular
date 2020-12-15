# /bin/bash
Folge="7"
echo Folge ${Folge}
exit 0
cp -r ~/swe_projects/live-tdd-angular/tdd-angular-ws${Folge}/src/environments ~/swe_projects/tdd-angular-final/src/
cp -r ~/swe_projects/live-tdd-angular/tdd-angular-ws${Folge}/src/app ~/swe_projects/tdd-angular-final/src/
git comit -m "Loesung Folge ${Folge}"
git tag -a v1.${Folge} -m "Loesung Folge ${Folge}"
git push --tags