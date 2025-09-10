---
title: 'Intro to git'
description: 'An overview of what git is, how it works and why we want to learn to use it'
order: 3
tags: ['intro', 'git']
resources: {
  'Git docs': 'https://git-scm.com/docs',
  'Git book': 'https://git-scm.com/book/en/v2',
  'Intro to git by Scott Shacon': 'https://www.youtube.com/watch?v=ZDR433b0HJY',
  'Meaningful commit messages': 'https://www.conventionalcommits.org/en/v1.0.0/',
}
---

## What is Git?

Git is the most popular **version control system** in the world.

<bonus-content>

It was published by the creator of Linux - Linus Torvalds in 2005.

</bonus-content>

It is used for all types of projects: corporate, open-source, hobby, educational, and more.

<bonus-content>

> _Did you know_: The German government publishes their [constitution](https://github.com/bundestag/gesetze) on GitHub?

</bonus-content>

---

## What is version control?

Version control systems record changes to files over time, allowing you to:

- keep track of changes in a structured way
- view or edit specific versions
- compare differences between versions
- share and collaborate on projects

---

### Types of version control

There are different types of version control setups:

- Local
- Centralized
- Distributed

---

Different tools allow for collaboration and version control in different ways:

- **Google Docs** implements centralized version control through operational transforms.

- **The Zed editor** uses CRDTs to provide a distributed collaboration environment.

---

**Git** is local-first but allows for great flexibility of setups for collaboration:

- centralized (e.g. through GitHub)
- decentralized (e.g. through e-mail)

> **Fun fact**: The linux kernel development is based on git over email

<bonus-content>

<class-note>

This course will only discuss alternative version control implementation and strategies
in the context of git.

</class-note>

## Git design characteristics

- Strong support for non-linear development
- Distributed development
- Compatibility with existent systems and protocols
- Efficient handling of large projects
- Cryptographic authentication of history
- Toolkit-based design
- Pluggable merge strategies
- Explicit, periodic object packing

</bonus-content>

---

## Initial config

Before we can get started using git, we need to tell git who we are:

```
git config --global user.name='my name'
git config --global user.email='name@example.com'
```

---

## Creating a repository

A core concept in git is the **repository**.

```bash
mkdir my-first-git-project
cd my-first-git-project

# create a repository in a newly created directory
git init
```

A repository is just a directory for which git tracks changes.

---

### Cloning a repository

Another way to get a git repository is to clone it:

```
git clone https://github.com/bahamas10/ysap.git
```

The above command will download the given repository to your computer and **checkout the default branch**.

---

## Working directory

The directory where you created or cloned a repo is called the **working directory**.

It contains a _snapshot_ of the files corresponding to the selected **commit**.
<bonus-content>_(the latest commit on the default **branch** by default)_.</bonus-content>

> **Feel free** to manipulate your local copy of a repository as you wish.
>
> As git is local-first, uploading changes requires an explicit **push** operation.

---

## Repository internals

Git stores all the data related to a repository in a hidden `.git` directory.

- full history of changes (**commits**)
- full history of versions (**branches** and **tags**)
- all versions of all files ever added to the repository (**snapshots**)

<bonus-content>

- other configurations and internals which we will cover later

</bonus-content>

> **Danger**: Deleting the `.git` directory will delete the entire local history of the repository!

---

## The three stages

Contributing changes to a repository passes through 3 stages:

- Working directory
- Staging area
- Repository

---

![3 stages](https://git-scm.com/book/en/v2/images/areas.png)

---

Changes in the **working directory** are completely local.

They are not yet version controlled and can be lost.

They are no different that editing a file without using git.

---

By adding changes to the **staging area** you are telling git
that you intent to include these changes in your next **commit**.

```
git add readme.md
```

These changes are now tracked by git, but are _NOT_ yet part of the
repository's history.

---

![file state changes](https://git-scm.com/book/en/v2/images/lifecycle.png)

---

Once you are ready, you can commit changes from the staging area to your
**local repository**.

```
git commit -m "added readme file"
```

These changes are now part of the history of repository, but are only stored
on your computer.

<bonus-content>
> Writing clear, short, consistent and meaningful commit messages is very important.
> In the link below, you will find a spec that can be useful to follow to ensure your
> commit messages are well structured.
</bonus-content>

---

## What is a commit?

Unlike other version control systems, git does NOT record an explicit history of changes (**diffs**).

A commit is a snapshot of the full content of all files in the repository.

---

In systems that store diffs, each commit is small because it contains only the specific changes
included in the version.

![diffs](https://git-scm.com/book/en/v2/images/deltas.png)

---

In git, each commit stores a full snapshot of all the files in the repository.

![snapshots](https://git-scm.com/book/en/v2/images/snapshots.png)

> git does a lot of clever optimizations to make this efficient.

---

## Basic workflow

```bash
# display the status of the files
git status

# add all files to the staging area
git add .

# commit the changes
git commit -m "my first commit"

# view the history of the repository
git log
```

<class-note>

This basic loop is at the core of using git. We will spend a good amount
of time unpacking and learning about each of these commands.

</class-note>

---

## Git commands structure

Git follows a toolkit-based philosophy. It acts as collection of tools that work together.

Each git command has the following general structure:

```bash
git [sub-command] [options] [objects]
```

---

## Help

Git provides excellent in-terminal documentation.

```
# prints a list of git subcommands
# with short descriptions
git help

# provides a detailed overview
# of the specific sub-command
git sub-command --help
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

## Restore

`restore` **overwrites** the contents of the file in the working tree and/or staging area.

```bash
# removes changes from the staging area
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

</bonus-content>

---

## Practise to learn

<class-note>

Git is a very practical system. The aim of this course is
to help you learn to use it daily and seamlessly.
But for that to happen you need to practise on your own.
**Start using git to track your projects today**!

</class-note>
