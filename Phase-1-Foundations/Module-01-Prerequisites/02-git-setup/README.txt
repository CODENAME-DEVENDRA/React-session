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

//Merge request (MR) / Pull request (PR)
git checkout main

git checkout -b feature/react-setup

//to confirm
git status
git branch

git add .
git commit -m "feature: react initial setup"

git push

//then copy below cmd and paste in terminal for first time
git push --set-upstream origin feature/react-setup

//For second time simply
git push

//Steps
git checkout
git pull origin main
git checkout -b <feature-branch>
git add .
git status
git commit -m "commit message"
git push


//Scenario
//deleted branch
git stash
git checkout main
git pull origin main
git stash apply //merge conflicts
git checkout -b <feature-branch>
git add .
git status
git commit -m "commit message"
git push