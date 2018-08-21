# Git Workflow

## Make sure you are on master
`git checkout master`

## Pull the most up-to-date from GitHub
`git pull origin master`

## Create a new branch & check it out
`git checkout -b my-new-branch`

## Add your files to be commited
`git add .`

## Add a meanignful commit message
`git commit -m "your message here"`

## Push your branch to GitHub
`git push origin my-new-branch`

## To see all branches from all users
`git branch -r`

## To keep your local repo in sync with other branches.
This will help remove branches that no longer exist.
`git fetch -p`

## To Delete your branch from the local repo
`git branch -d my-new-branch`
