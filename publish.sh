#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://bim22614.github.io
# git push -f git@github.com:boldak/bim22614.github.io.git master

# if you are deploying to https://bim22614.github.io/<REPO>
git push -f https://github.com/bim22614/edu_db_labs master:gh-pages


cd -
