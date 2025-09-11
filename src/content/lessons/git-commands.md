---
title: 'Basic git commands'
description: 'An overview of basic git commands - everything you need to run a local repository'
order: 4
tags: ['git']
resources: {
  'Meaningful commit messages': 'https://www.conventionalcommits.org/en/v1.0.0/',
}
---

## Short recap

- Repositories are databases for content versions

- Commits are snapshots of the content of a repository

- Changes must first be added to the staging area before going into a commit

---

## Config

Git is highly configurable.

Configurations can be applied on multiple levels.

More specific configurations overwrite more generic ones.

- repository
- user
- system

---

View the current configuration:
```bash
# list config options specific to the current repo
git config list --local

# list user-level config options
git config list --global

# edit the global config with the default editor
git config --global --edit
```

---

Modifying config options:
```bash
# tell git to use VSCode as the default editor
# globally
git config --global core.editor "code --wait"

# tell git to use a different email when committing
# for this project
git config --local user.email personal@mail.com

# unsetting a config option
git config --local --unset user.email
```

---

## Status

The `status` sub-command provides information about the state
of all files in the working directory.

```bash
git status

# prints the following info:

# On branch main
# Changes to be committed:
# ...
# Changes not staged for commit:
# ...
# Untracked files:
# ...
```

---

## Ignoring files

There might be files in the working directory that should NOT be
part of the project's history e.g. api keys, environment setups.

Such files can be added to the special `.gitignore` file:

```bash
# sample .gitignore file
.env
secrets/
tmp/
```

---

### Gitignore syntax

```bash
# for comments
/ # at end = everything within directory
/ # at start = root directory only
* # = wildcard
! # = exception (don't ignore)

# ignore all .md files, except readme
*.md
!README.md
```

---

### Common mistake with .gitignore
> "My .gitignore isn't working"

Files already tracked **aren't** ignored, use:
```bash
# makes the file untracked
git rm --cached
```

---

## Add

Remember, `add` does NOT make changes part of the history. It only adds them to the staging area.

```bash
# add all files (including untracked)
git add -A

# add only changes to already tracked files
git add -u

# interactively add specific hunks
git add -p

# add specific file(s)
git add my-file.txt readme.md
```

---

## Reset

Use `reset` to un-stage a change i.e.
the change will no longer be in the next commit.

The changes are still present in the working directory.

---

```bash
# removes changes to the file from
# the staging area
git reset filename

# interactively remove hunks from
# the staging area
git reset -p
```

> Reset is a very versatile command. **Some options may lead to data loss**
---

## Diff

`diff` allows us to compare changes:

```bash
# view all changes in the staging area
git diff --cached

# view changes to a file since the last commit
git diff my-file.txt
```

---

## Clean

`clean` **deletes** untracked files from the working directory:

```bash
# remove untracked files in the top level dir
git clean

# preview which files will be deleted
git clean -n

# remove all untracked files recursively
git clean -d

# remove untracked and ignored files
git clean -x
```

> **Warning**: the files will be totally lost

---

## Commit

Creates a commit with all changes in the staging area.

```bash
# opens the default editor for a message
git commit

# inline message
git commit -m "my awesome commit"

# add extra changes to the last commit
# creates a new commit!
git commit --amend
```

---

### Commit internals

Internally git stores everything as graph of file objects.

![Commit internals](https://git-scm.com/book/en/v2/images/commit-and-tree.png)

---
### Writing good commit messages

Writing clear, short, consistent and meaningful commit messages is very important.
```bash
# Bad examples
git commit -m "fix"
git commit -m "changed stuff"
git commit -m "asdfgh"

# Good examples
git commit -m "fix: resolve login timeout issue"
git commit -m "feat: add dark mode toggle"
git commit -m "docs: update installation instructions"
```

<bonus-content>
> In the link below, you will find a spec that can be useful to follow to ensure your
> commit messages are well structured.
</bonus-content>

---

### Committing: Best Practices

- **DO**: Commit often (multiple times per day)
- **DO**: Each commit should represent one logical change
- **DON'T**: Wait days/weeks between commits
- **DON'T**: Commit broken/untested code

---

## Restore

`restore` **overwrites** the contents of the file in the working tree and/or staging area.

```bash
# SAFE: removes changes from the staging area
# working dir is untouched
git restore --staged filename

# discard changes in the working directory
# changes will be lost!
git restore filename
```

> **Warning**: the changes will be totally lost

---

## Remove

`git rm` tells git to no longer track the given file

```bash
# stages a change to no longer track the file
# in the next commit
# DELETES THE file from the working directory
git rm filename

# only stages a change to no longer track the file
# in the next commit
git rm --cached filename
```

---

## Log

Use the `log` sub-command to view the history of changes:
```bash
# displays a detailed view of all commits
git log

# displays a short view of all commits
git log --oneline

# displays a short view of all commits
# including file change stats
git log --oneline --stat
```

---

## Visualization the commit lineage

Each commit holds a pointer to its parent commit.

![line of commits](https://git-scm.com/book/en/v2/images/commits-and-parents.png)

---

## Show
Displays information and changes introduced by a commit.

```bash
# display info and all changes in the current commit
git show


# displays info and just the list of changed files
git show --stat
```

---

<bonus-content>

<pop-quiz data-answer-id="3">

### Which of the following is NOT a git command

- git add
- git commit
- git restore
- git ignore
- git rm
- git init

</pop-quiz>

<pop-quiz data-answer-id="2">

### After running git add filename.txt, the file is:
- Committed to the repository
- Still in the working directory only
- Staged for the next commit
- Uploaded to the remote repository

</pop-quiz>

</bonus-content>

---

## Practise to learn

<class-note>

Git is a very practical system. The aim of this course is
to help you learn to use it daily and seamlessly.
But for that to happen you need to practise on your own.
**Start using git to track your projects today**!

</class-note>

<bonus-content>

<home-work>

### Create notes repository

- Create a repository called "daily-notes"
- Add a README explaining the purpose
- Create directories for different subjects/projects
- Set up a `.gitignore` file
- Make at least 5 meaningful commits over the next week
- Practice unstaging changes with `git restore --staged`
- Practice using `git log` and `git diff`

</home-work>

</bonus-content>
