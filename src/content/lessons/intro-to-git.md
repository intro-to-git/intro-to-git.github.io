---
title: 'Intro to git'
description: 'An overview of what git is, how it works and why we want to learn to use it'
order: 3
state: 'covered'
tags: ['intro', 'git']
links: {
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

### Types of version control

There are different types of version control setups:

- Local
- Centralized
- Distributed

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

Different tools allow for collaboration and version control in different ways:

- **Google Docs** implements centralized version control through operational transforms.

- **The Zed editor** uses CRDTs to provide a distributed collaboration environment.

---

### Git

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

```bash
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

---

## What is a commit?

Unlike other version control systems, git does NOT record an explicit history of changes (**diffs**).

A commit is a **snapshot** of the full content of all files in the repository.

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

# upload your changes to a shared repo
git push
```

<class-note>

This basic loop is at the core of using git. We will spend a good amount
of time unpacking and learning about each of these commands and more.

</class-note>

---

## Git commands structure

Git follows a toolkit-based philosophy. It acts as collection of tools that work together.

Each git command has the following general structure:

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
