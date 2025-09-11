---
title: 'Merging, rebasing and handling conflicts'
description: 'Inevetably when people work together conflits arise. Git helps us handle these conflicts (at least when it comes to the code)'
order: 6
tags: ['git']
resources: {
}
---

## Merging Branches

Merging combines the work from different branches back together.

Before merge:
![example-before-merge](https://git-scm.com/book/en/v2/images/basic-merging-1.png)

---

After merge:
![example-after-merge](https://git-scm.com/book/en/v2/images/basic-merging-2.png)

---

## Listing merged / unmerged branches

```bash
# List merged branches
git branch --merged

# List unmerged branches
git branch --no-merged
```

---

## Fast-Forward Merge

When the target branch hasn't changed since the feature branch was created:

```
Before merge:
main:     A---B---C
               \
feature:        D---E

After merge:
main:     A---B---C---D---E
```

---

```bash
# Switch to main branch
git checkout main

# Merge feature branch
git merge feature-branch

# Alternatively, merge without checkout
git merge main feature-branch
```

---

## Real Merge

When both branches have new commits:

```
Before merge:
main:     A---B---C---F
               \
feature:        D---E

After merge:
main:     A---B---C---F---G
               \         /
feature:        D---E---/
```

---

```bash
git checkout main
git merge feature-branch
# Creates merge commit G
```

<bonus-content>

### Practical Merge Example

```bash
# Create a feature branch and make changes
git checkout -b improve-readme
echo "# Improved Project Description" > README.md
git add README.md
git commit -m "docs: improve project description"

# Switch to main and make different changes
git checkout main
echo "console.log('main branch change');" >> app.js
git add app.js
git commit -m "feat: add logging to main"

# Merge the feature branch
git merge improve-readme

# View the merge in history
git log --oneline --graph
```

</bonus-content>

---

## Handling Merge Conflicts

Conflicts occur when the same lines in the same files are changed differently on two branches.

Git is usually smart enough to resolve trivial conflicts automatically,
but when it is not clear what the outcome should be - you need to resolve manually.

---

## Example Conflict Scenario

```bash
# On main branch
echo "Hello World FROM MAIN" > greeting.txt
git commit -am "add greeting from main"

# Create feature branch from earlier state
git checkout -b feature-greeting HEAD~1
echo "Hello World FROM FEATURE" > greeting.txt
git commit -am "add greeting from feature"

# Try to merge - this will cause a conflict!
git merge main feature-greeting
```

---

### Conflict Resolution

When a conflict occurs, Git modifies the file to show both versions:

```
<<<<<<< HEAD
Hello World from main
=======
Hello World from feature
>>>>>>> feature-greeting
```

---

To resolve:

```bash
# 1. Edit the file to choose the version you want
echo "Hello World - combined version" > greeting.txt

# 2. Stage the resolved file
git add greeting.txt

# 3. Complete the merge
git commit -m "merge: resolve greeting conflict"
```

---

### Conflict Resolution Tools

```bash
# Use visual merge tool
git mergetool

# Abort the merge and start over
git merge --abort

# Show conflicts in different format
git diff --name-only --diff-filter=U
```

---

## Rebasing

Rebasing rewrites history to create a cleaner, linear timeline:

```bash
# Instead of merge, use rebase
git checkout feature-branch
git rebase main

# Interactive rebase to clean up commits
git rebase -i HEAD~3
```

**When to use**: Cleaning up feature branch before merging
**When NOT to use**: On shared/public branches

---

## Cherry-picking

Apply specific commits from one branch to another:

```bash
# Apply commit abc123 to current branch
git cherry-pick abc123

# Apply multiple commits
git cherry-pick abc123 def456
```

---

## Stashing Changes

Save uncommitted work temporarily:

```bash
# Stash current changes
git stash

# Switch branches and do other work
git checkout other-branch

# Come back and restore stashed work
git checkout original-branch
git stash pop
```

---

## Abort / Continue options

<!-- TODO: write this -->

<bonus-content>

<home-work>

### Assignment 2: Remote Collaboration Simulation

1. Create a repository on GitHub
2. Clone it to two different directories (simulating two developers)
3. Make conflicting changes from both "developers"
4. Practice resolving merge conflicts
5. Use pull requests for at least one merge

</home-work>

</bonus-content>
