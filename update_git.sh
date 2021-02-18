# /bin/bash
Folge="UI-fixed"
echo Folge ${Folge}

cp -r ~/swe_projects/live-tdd-angular/tdd-angular-${Folge}/src/app ~/swe_projects/tdd-angular-final/src/
cp -r ~/swe_projects/live-tdd-angular/tdd-angular-${Folge}/src/environments ~/swe_projects/tdd-angular-final/src/
git add .
git commit -m "With ${Folge}"
git tag -a v1.${Folge} -m "${Folge}"
git push --tags
git ls-remote --tags origin
# delete the tag:
# git tag -d v1.9
# delete remote tag
# git push --delete origin tagname