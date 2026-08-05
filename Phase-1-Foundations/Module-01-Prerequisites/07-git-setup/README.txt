node -v
npm -v
git -v

//ONE-TIME setup

//user.name
git config --global user.name "Your name"
//To check 
git config user.name

//user.email
git config --global user.email "Your email"
//To check 
git config user.email

git config --global init.defaultBranch main

//Initialize a new local repository
git init

//Flow
Working directory(edit) -> Staging Area(git add .) -> repository(git commit)

//Add and commit
git add .
git commit -m "Initial commit"

git branch -M main

git remote add origin <your-repo-url>

git remote -v

//Push
git push -u origin main