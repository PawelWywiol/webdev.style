---
title: Git Reference Guide
description: A comprehensive guide to Git commands, workflows, and best practices for version control in software development.
category: Tools
---

# GIT

## Basic Git Commands

| Command                                       | Description                                                    |
| --------------------------------------------- | -------------------------------------------------------------- |
| `git init`                                    | Initialize a new Git repository                                |
| `git clone <repo-url>`                        | Clone a remote repository locally                              |
| `git status`                                  | Show the current status of working directory                   |
| `git add <file>`                              | Stage changes to be committed                                  |
| `git commit -m "message"`                     | Commit staged changes with a message                           |
| `git push`                                    | Push commits to remote repository                              |
| `git pull`                                    | Fetch and merge changes from remote                            |
| `git branch`                                  | List branches                                                  |
| `git checkout <branch>`                       | Switch to a different branch                                   |
| `git checkout -b <branch>`                    | Create and switch to a new branch                              |
| `git merge <branch>`                          | Merge another branch into the current branch                   |
| `git log`                                     | Show commit history                                            |
| `git log --oneline`                           | Show a condensed commit history                                |
| `git reset <commit>`                          | Reset current branch to a specific commit                      |
| `git revert <commit>`                         | Create a new commit that undoes changes from a specific commit |
| `git stash`                                   | Stash changes in a dirty working directory                     |
| `git stash pop`                               | Apply stashed changes                                          |
| `git remote add <name> <url>`                 | Add a new remote repository                                    |
| `git remote -v`                               | List remote repositories                                       |
| `git fetch <remote>`                          | Fetch changes from a remote repository                         |
| `git cherry-pick <commit>`                    | Apply changes from a specific commit to the current branch     |
| `git tag <tag-name>`                          | Create a new tag at the current commit                         |
| `git show <tag-name>`                         | Show details of a specific tag                                 |
| `git diff`                                    | Show changes between commits, branches, or files               |
| `git config --global user.name "Your Name"`   | Set your Git username globally                                 |
| `git config --global user.email "Your Email"` | Set your Git email globally                                    |
| `git config --list`                           | List all Git configuration settings                            |
| `git rm <file>`                               | Remove a file from the working directory and stage the removal |
| `git mv <old-file> <new-file>`                | Rename a file and stage the change                             |

## Basic git flow

### Branch types

- `main` or `master`: The main branch where the production-ready code resides.
- `develop`: The branch where development happens, integrating features before merging into `main`.
- `feature/*`: Branches for new features, created from `develop`, merging back into `develop` when complete.
- `release/*`: Branches for preparing a new release, created from `develop`, merging into both `main` and `develop` when ready.
- `hotfix/*`: Branches for urgent fixes, created from `main`, merging into both `main` and `develop` when complete.

### Workflow

- Create a new branch for each feature or bug fix.
- Commit changes to the branch with clear messages.
- Push the branch to the remote repository.
- Open a pull request (PR) to merge the branch into `develop` or `main` (depending on the branch type).
- Review the PR, resolve any conflicts, and ensure tests pass.
- Merge the PR into the target branch.
- Delete the branch after merging to keep the repository clean (not mandatory but recommended).
- Regularly pull changes from `develop` into feature branches to keep them up-to-date.

### Other tips

- Use `git rebase` to keep a clean commit history when merging feature branches (or use `git merge` if preferred).
- Use `git stash` to temporarily save changes when switching branches.
- Use `git reset` to undo commits or changes as necessary.
- Use `git log` to review commit history and track changes.
- Use `git diff` to see changes between commits, branches, or files.
