---
title: 'Working with branches'
description: 'Most projects have a complicated history that is not a straight line and include contributions from multiple people'
order: 6
state: 'upcoming'
tags: ['git']
links: {
  'Git Branching Documentation': 'https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell',
  'Interactive Git Branching': 'https://learngitbranching.js.org/',
}
---

## What Are Branches?

A **branch** in Git is essentially a moveable pointer to a specific commit.

Branches are incredibly lightweight - creating a branch is just creating a file containing a unique hash

> Files you commit on one branch are not visible when you switch to another.

---

### Why Use Branches?

- **Safe experimentation** - Try new features without breaking working code

- **Parallel development** - Multiple people can work on different features simultaneously

- **Easy rollback** - Discard experimental work if it doesn't work out

---

## Listing Branches

When you create a repository, Git automatically creates a default branch (usually called `main` or `master`).

```bash
# See current branch
git branch

# See all branches with more details
git branch -v

# List all branches (local and remote)
git branch -a
```

---

### Branch Visualization

Multiple branches can point to the same commit.

![branches are pointers](https://git-scm.com/book/en/v2/images/branch-and-history.png)

---

## Creating a New Branch

```bash
# Create a new branch (but stay on current branch)
git branch feature-user-profile

# Create and immediately switch to new branch
git checkout -b feature-user-profile

# Modern alternative (Git 2.23+)
git switch -c feature-user-profile
```

---

### Branch Naming Conventions

```bash
# Good branch names
feature/user-authentication
bugfix/login-timeout
hotfix/security-patch
docs/api-documentation
refactor/database-queries

# Poor branch names
fix
temp
john-branch
new-feature
```

---

## Switching Between Branches

```bash
# Switch to existing branch
git checkout main
git checkout feature-user-profile

# Modern alternative (Git 2.23+)
git switch main
git switch feature-user-profile
```

> Since I am old, you'd probably see me using the old commands out of habit.

---

## The HEAD meta-branch

Git tracks which is current working branch using `HEAD`.

It is similar to a branch in that it can be used as an argument where-ever a branch is needed.

But it is NOT a real branch - it always points to the current branch (or commit)

```
# display the contents of the commit
# that is currently checked out
git show HEAD
```

---

In this example `HEAD` is pointing to the `testing` branch
which is one commit ahead of `master`:

![example-head](https://git-scm.com/book/en/v2/images/advance-testing.png)

---

## Renaming Branches

```bash
# Rename current branch
git branch -m new-name

# Rename specific branch
git branch -m old-name new-name
```

---

## Deleting Branches

```bash
# Delete merged branch (safe)
git branch -d feature-name

# Force delete branch (even if unmerged)
git branch -D feature-name

# Delete remote tracking branch
# more on this later
git branch -dr origin/feature-name
```

---

## Branches can diverge

Until now we have been looking at linear histories. But often branches will diverge:

![branches-diverge](https://git-scm.com/book/en/v2/images/advance-master.png)

> Later we will explore how to **merge** them back together

---

## Viewing divergent trees

`log` provides a couple of options for viewing commit ranges:

```bash
# shows all commits on my_branch that
# are NOT on master
git log --oneline --graph main..my_branch

# shows all commits on both main and my_branch
# but NOT the shared ancestry
git log --oneline --graph main...my_branch
```

---

![example-history](https://git-scm.com/book/en/v2/images/double-dot.png)

```bash
git log --oneline --graph master..experimental
# shows C and D
```

---

![example-history](https://git-scm.com/book/en/v2/images/double-dot.png)

```bash
git log --oneline --graph master...experimental
# shows E, F, C and D
```

---

## Tracking Remote Branches

```bash
# See all branches (local and remote)
git branch -a

# Create local branch that tracks remote
git checkout -b feature-branch origin/feature-branch

# Simplified version (Git 2.23+)
# Auto-tracks if remote exists
git switch feature-branch
```

---

## Working with Remote Branches

```bash
# Create local branch 
git checkout -b new-feature

# make changes, commit and push to remote
git push -u origin new-feature

# Delete remote branch
git push origin --delete old-feature

# Update remote tracking branches
git fetch --prune
```

---

## Branch Lifecycle

1. **Create** branch from up-to-date main
2. **Work** on feature with regular commits
3. **Test** thoroughly before merging
4. **Request** code review
5. **Merge** to main after approval
6. **Delete** feature branch after merge
7. **Update** local main branch

---

## Detached HEAD

If HEAD points directly at a commit, git will inform you that
you are in a **detached HEAD** state.

```bash
git checkout <commit>
# prints:
# Note: switching to '<commit>'.
#
# You are in 'detached HEAD' state.
# You can look around, make experimental changes
# ...
```

<bonus-content>

## Example of using branches

```bash
# Start from main branch
git checkout main

# Create and switch to feature branch
git checkout -b add-login-system

# Verify you're on the new branch
git branch
# * add-login-system
#   main

# Make some changes
echo "login.html" > login.html
echo "auth.js" > auth.js

# Commit the changes
git add .
git commit -m "feat: add basic login system files"

# Switch back to main
git switch main

# Notice: login.html and auth.js are not here!
ls
```

<pop-quiz data-answer-id="0">

### What happens when you switch branches with uncommitted changes?

- Git prevents the switch and asks you to commit first
- Git automatically commits the changes
- Git moves the changes to the new branch
- Git deletes the changes

</pop-quiz>

<home-work>

### Feature Branch Workflow

1. Create a repository called 'my-site'
2. Add a README file
2. Create three branches: `feature-header`, `feature-footer`, `feature-sidebar`
3. Make different changes in each branch
4. Practice viewing the history with `git log --graph --oneline`

</home-work>

</bonus-content>
