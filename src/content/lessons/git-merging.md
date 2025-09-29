---
title: 'Merging, rebasing and handling conflicts'
description: 'Inevetably when people work together conflits arise. Git helps us handle these conflicts (at least when it comes to the code)'
order: 7
state: 'covered'
tags: ['git']
resources: {
}
---

## Merging Branches

Merging combines the work from different branches back together.

This creates a merge commit. Merge commits are special because they
have more than 1 parent commit.

---

Before merge:
![example-before-merge](https://git-scm.com/book/en/v2/images/basic-merging-1.png)

> Notice that master and iss53 have commits
> exclusive to each side

---

After merge:
![example-after-merge](https://git-scm.com/book/en/v2/images/basic-merging-2.png)

> Notice that commit C6 has 2 parent commits:
> C5 and C4

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

When the target branch hasn't changed since the feature branch was created.
No merge commit is created. The history remains linear.

```bash
# Switch to main branch
git checkout main

# Merge feature branch only if history is linear
git merge --ff-only feature-branch

# Alternatively, merge without checkout
git merge main feature-branch
```

---

## Real Merge

When both branches have new commits a merge commit is created:

```bash
git checkout main

# make unrelated changes

git merge feature-branch
# Creates a new merge commit
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

Git is usually smart enough to resolve trivial conflicts automatically.

But when it is not clear what the outcome should be - you need to resolve manually.

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

## Conflict Resolution

When a conflict occurs, Git **modifies** the file to show both versions:

```text
<<<<<<< HEAD
Hello World FROM MAIN
=======
Hello World FROM FEATURE
>>>>>>> feature-greeting
```

Git will also prevent you from committing until the conflict is resolved.

---

To resolve: edit the files so the correct version of the content is present. Then `add` and `commit`:

```bash
# 1. Edit the file so that it is logically correct
nvim greeting.txt # neovim, btw

# 2. Stage the resolved file
git add greeting.txt

# 3. Complete the merge
git commit -m "merge: resolve greeting conflict"

# Alternatively to 3. use --continue
git merge --continue
```

---

### Conflict Resolution Tools

There are many tools that allow for easier view of conflicts,
including popular editors like VSCode.

Git can be configured to use a specific `mergetool`

```bash
# Abort the merge and start over
git merge --abort

# Use visual merge tool
git mergetool

# Show conflicts in different format
git diff --name-only --diff-filter=U
```

---

## Rebasing

Rebasing **rewrites history** to create a cleaner, linear commit history:

```bash
# Instead of merge, use rebase
git checkout feature-branch
git rebase main

# Interactive rebase to clean up commits
git rebase -i HEAD~3
```

- **Use when**: Cleaning up local branches before merging
- **DONT'T USE**: On shared/public branches

---

Since git commits are **immutable**, `rebase` creates new commits
with the same changes and author on top of the selected base.

![Rebase example](https://git-scm.com/book/en/v2/images/basic-rebase-3.png)

---

### Rebase with care

Because rebase rewrite history, it can lead to problems when applied
to commits already shared with others.

![Messy rebase history](https://git-scm.com/book/en/v2/images/perils-of-rebasing-4.png)

---

## Cherry-picking

Apply changes from specific commits from one branch to another:

```bash
# Apply commit abc123 to current branch
git cherry-pick abc123

# Apply multiple commits
git cherry-pick abc123 def456
```

---

- Like `rebase`, `cherry-pick` creates a new commit with the same changes as the selected commit.

- Unlike `rebase`, `cherry-pick` does NOT rewrite history i.e. the original branch is preserved.

---

## Revert

`revert` creates a new commit with the opposite changes to the given commit.

This is very useful when you want to quickly *undo* some changes without
rewriting the history.

```bash
git revert df937a
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

<class-note>

In order to truly understand and get used to merging, rebasing
and resolving conflicts, you need to practice doing these actions.

Do NOT hesitate to create test repos and experiment!

</class-note>

<bonus-content>

<pop-quiz data-answer-id="3">

### When does a merge cause a conflict?

- two cars want to drive in the same lane
- two repositories have the same name
- two coworkers reach for the same soda can
- two branches being merged have diverging content

</pop-quiz>

<home-work>

### Remote Collaboration Simulation

1. Create a repository on GitHub
2. Clone it to two different directories (simulating two developers)
3. Make conflicting changes from both "developers"
4. Practice resolving merge conflicts
5. Use a pull request for at least one merge

</home-work>

</bonus-content>
