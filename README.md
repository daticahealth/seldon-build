# Seldon Build
A static build of datica.com

## Local Setup
- First navigate to the directory where you keep your web projects
- Next you'll want to clone this repository (**Note:** If you've already cloned the seldon project and have run the new build, make sure you delete the newly created build directory. We'll be replacing it.). To clone this repository run `git clone git@github.com:daticahealth/seldon-build.git Datica_Seldon_Build`
- Now you'll want to navigate to the seldon project, not this project, but the [seldon project](https://github.com/catalyzeio/seldon) (wherever you keep that)
- Once you're inside the seldon project run `npm run content` to grab any new content
- Next run `bundle exec middleman build`
- This will automatically build any new assets into the newly created `Datica_Seldon_Build` project that we just cloned
- Once your build completes navigate back into the `Datica_Seldon_Build` project
- Check the status `git status`
- If there are any changes then push them up `git add -A`, `git commit -m "Updating static build"`, `git push`
