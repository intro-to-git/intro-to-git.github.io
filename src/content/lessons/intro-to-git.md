---
title: 'Intro to git'
description: 'An overview of what git is, how it works and why we want to learn to use it'
order: 3
state: 'covered'
tags: ['intro', 'git']
links: {
  'official git download page': 'https://git-scm.com/install/',
  'Git docs': 'https://git-scm.com/docs',
  'Git book': 'https://git-scm.com/book/en/v2',
  'Intro to git by Scott Shacon': 'https://www.youtube.com/watch?v=ZDR433b0HJY',
}
---

## What is Git?

Git is the most popular **version control system** in the world.

It is used for all types of projects: corporate, open-source, hobby, educational, and more.

<bonus-content>

### Fun Facts

- Created by Linus Torvalds (Linux creator) in 2005 when he needed a better tool for Linux kernel development.

- The German government publishes their constitution on GitHub.

- Over 100 million repositories exist on GitHub alone.

</bonus-content>

---

## What is version control?

Version control systems record changes to files over time, allowing you to:

- keep track of changes in a structured way
- view or edit specific versions
- compare differences between versions
- share and collaborate on projects

---

### Without Version Control

```bash
my-project.txt
my-project-final.txt
my-project-final-v2.txt
my-project-final-v2-ACTUALLY-FINAL.txt
my-project-final-v2-ACTUALLY-FINAL-fixed-typo.txt
```

> **Problems**: Confusing, error-prone, no collaboration, no history of what changed.

---

### Types of version control

There are different types of version control setups:

- Local only
- Centralized
- Distributed

---

Different tools allow for collaboration and version control in different ways:

- **Google Docs** implements centralized version control through operational transforms.

- **The Zed editor** uses CRDTs to provide a distributed collaboration environment.

---

With the proliferation of AI, there has been a renewed interest in development in and around
version control systems.

> See [Bonus: Beyond git](/bonus/beyond-git) to learn more

---

### Git

**git** is local-first but allows for great flexibility of setups for collaboration:

- centralized (e.g. through GitHub)
- decentralized (e.g. through e-mail)

> **Fun fact**: The Linux kernel development is based on git over email

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

## Running git

You can download and install git in multiple ways depending on your environment and preferences.
To get started, follow the official guide.

> See: [official git download page](https://git-scm.com/install/)

---

There are multiple implementations of git designed for different use-cases.

The way GitHub _(and other centralized git hosting platforms)_ implement git operations
is different from what the standard local git binary does on your local file system.

---

## Repositories

A core concept in git is the **repository** (shortly called `repo`). A repository can be:

- a directory in your local file system
- hosted on a remote server

---

Each repo contains:

- the current version of your files
- the full history of all changes to **tracked** files
- internal git metadata used in various operations

---

## Working directory

Holds the currently **checked-out** version of your files, any **untracked** files, and **uncommitted** changes.

The directory where you created _(or cloned)_ a repo becomes the **working directory** for that repo.

---

## Repository internals

Git stores the history of changes and the metadata related to a repo in a hidden `.git` directory.

- full history of changes (**commits**)
- full history of versions (**branches** and **tags**)
- all versions of all files ever added to the repository (**snapshots**)
- configurations and other internals which we will cover later

> **Danger**: Deleting the `.git` directory will delete the entire local history of the repository!

---

## The three stages

Making changes to a repository passes through 3 stages:

- Working directory
- Staging area
- Repository

---

![3 stages](https://git-scm.com/book/en/v2/images/areas.png)

---

Changes in the **working directory** are completely local. They are not yet version controlled and **can be lost**.

> This is no different from editing files without using git.

---

By adding changes to the **staging area** you are telling git
that you intent to include these changes in your next **commit**.

```
git add readme.md
```

These changes are now tracked by git, but are _NOT_ yet part of the
repository's history.

---

### Lifecycle of a file in git

![file state changes](https://git-scm.com/book/en/v2/images/lifecycle.png)

---

Once you are ready, you can **commit** changes from the staging area to your
**local repository**.

```
git commit -m "added readme file"
```

These changes are now part of the history of repository, but are only stored
on your computer.

---

## What is a commit?

Unlike other version control systems, git does NOT record an explicit history of changes (**diffs**).

A commit is a **snapshot** of the full content of all tracked files in the repository.

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
# add all files & changes to the staging area
git add .

# commit the changes locally
git commit -m "my first commit"

# upload your changes to a shared repo
git push
```

<class-note>

This basic loop is at the core of using git. As a software professional
you'll use these commands tens or even hundreds of times a day.

</class-note>

---

## Git commands structure

Git follows a toolkit-based philosophy.

It acts as collection of tools that work together. Each git command has the following general structure:

```bash
git [sub-command] [options] [objects]
```

---

## Getting help

Git provides excellent in-terminal documentation.

```
# prints a list of git subcommands
# with short descriptions
git help

# provides a detailed overview
# of the specific sub-command
git sub-command --help
```

> See also: [the official free git book](https://git-scm.com/book/en/v2)

<bonus-content>

<pop-quiz data-answer-id="1">

### What does the hidden .git directory contain?

- Only the current version of your files
- Full history of changes, branches, tags, and all file versions
- Just configuration files for Git
- Temporary files that can be safely deleted

</pop-quiz>

<pop-quiz data-answer-id="2">

### What happens if you delete the .git directory?

- Nothing, Git will recreate it automatically
- Only the current branch history is lost
- The entire local repository history is permanently lost
- Your files are deleted but the history is preserved

</pop-quiz>

<pop-quiz data-answer-id="0">

### What does the Working Directory represent?

- The current snapshot of files you're actively editing
- The Git configuration folder
- The remote repository on GitHub
- The history of all previous commits

</pop-quiz>

</bonus-content>
