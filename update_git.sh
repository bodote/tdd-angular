# /bin/bash
Folge="6"
echo Folge ${Folge}
exit 0
cp -r ~/swe_projects/live-tdd-angular/tdd-angular-ws${Folge}/src/environments ~/swe_projects/tdd-angular-final/src/
cp -r ~/swe_projects/live-tdd-angular/tdd-angular-ws${Folge}/src/app ~/swe_projects/tdd-angular-final/src/
git tag -a v1.${Folge} -m "Loesung Folge ${Folge}"
git push --tags