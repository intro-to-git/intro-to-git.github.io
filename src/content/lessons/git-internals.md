---
title: 'Git internals'
description: 'Git internals, Git hooks, plumbing commands and more'
order: 11
state: 'upcoming'
tags: ['git']
links: {
  'Git Internals': 'https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain',
  'Git Attributes': 'https://git-scm.com/book/en/v2/Customizing-Git-Git-Attributes',
  'Git Hooks': 'https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks',
}
---

## Bare repositories

It is possible to create a git repository **WITHOUT** checking out a working tree.

The `bare` repository can be used a shared remote or as a deployment target.

---

This is especially useful in sever setups where no one will work directly
on the instance of the repository.

```bash
# create a repository without a working tree
git init --bare

# clone a repository without a working tree
git clone --bare </path/to/repo>
```

---

If we now `ls` inside the repository directory we will find the contents
that usually sits in the `.git` directory.

---

## Exploring the .git directory

The `.git` directory is where git stores all its internal state:

- **refs** (branches, tags, HEAD)
- **objects** (file blobs, trees, commits)
- **hooks** (scripts)
- **config** (remotes, local settings)

---

<class-work>

### Create a branch by hand

In an existing git repository:

1. Get the SHA of the latest commit
2. `cd` into the `.git/refs/heads`
3. Create a file named `my-manual-branch`
4. Paste the SHA from step 1. into the file
5. `cd` back to the working directory of the repository
6. List all branches
7. Switch to `my-manual-branch`

</class-work>

---

## Porcelain vs plumbing

All the commands covered so far are known as `porcelain` commands -
they are high level - meant to be used directly by end-users in regular situations.

---

Git exposes another set of low-level commands called `plumbing` commands.

They are **NOT** meant to be used for day-to-day management of repositories,
but rather allow for fine grain, custom operations.

---

## How git stores content

Internally, git does not 'care' about files - it stores content.

Content is stored in such a way that the same content will only be stored once.

```bash
echo 'super cool code' | git hash-object -w --stdin
# prints out a SHA e.g. f0f23eaf6c63...

```

---

The previous command instructed git to store the given string.

We can now find where git stored it in the *'object database'*:

```bash
ls -R .git/objects
# prints out .git/objects/f0:
# f23eaf6c63... (same as before)

# try printing the contents of this file
cat ./git/objects/f0/f23eaf6c63...
# prints binary data?!

```

---

## Viewing content

Use `cat-file` to view the actual content stored in an object:

```bash
# view a blob object by SHA
git cat-file -p f0f23eaf6c63
# prints: super cool code

# view a tree object
git cat-file -p HEAD^{tree}

# view a commit object
git cat-file -p HEAD^{commit}
```

---

### Optimizing for efficiency

Git splits the SHA of objects to allow large repositories
to work on file systems with small limits
(e.g. 65k file per directory in FAT32)

> This also increases efficiency under any file system

---

<class-work>

### Confirm git deduplicates **content**

1. Create 2 files with the same content (e.g. 'ABCD')
2. Commit both files
3. Examine the commit's tree object
4. Compare the SHAs of the files from step 1
5. Modify and commit **one** of the files
6. Examine the new commit's tree object
7. Compare the SHAs of the files from step 1

</class-work>

---

## Modifying the staging area

Internally git stores the state of the staging area in the `.git/index` file.

The `update-index` command allows us to modify it:

```bash
# add content to the staging area
# 100644 indicates normal file
# SHA of blob object
# name for file in the tree
git update-index --add --cacheinfo \
  100644 83baae6180... test.txt

# view the state of the staging area
git status
```

---

The `write-tree` command is used to create tree objects:

```bash
git write-tree
# prints sha of the newly created tree

# view the newly created tree
git cat-file -p <sha>
```

---

## Manually creating a commit

We can create a commit from any tree object:

```bash
# creates a commit
echo 'My commit message' | git commit-tree <tree-sha>
# prints commit sha

# view the commit object
git cat-file -p <commit-sha>

# or view using porcelain commands
git show <commit-sha>
```

> use the `-p <commit-sha>` option to specify a parent commit

---

<class-note>

There are even more plumbing commands which you can explore in the git manual and book.

All porcelain commands are implemented using plumbing commands internally.

As stated in the beginning of this section - these commands are **NOT** meant to
be used on a day-to-day basis. They are useful to understand how git works under
the hood.

</class-note>

---

## Git Hooks

Hooks provide a way for you to execute custom programs when important events occur within git.

---

There are 2 types of hooks:

- Client-side
- Server-side

> **NOTE**: Hooks are *NOT* copied when cloning a repository - they must be enabled explicitly
> or installed using an external tool (e.g. `husky`)

---

## Client-side hooks

These hooks allow you to customize behaviors when executing local commands.

They can be used to enforce a commit message style, run tests before committing, etc.

---

## Server-side hooks

These hooks can be used in a shared repository to enforce behaviors when receiving pushes.

They can be used to reject unwanted commits, or to trigger
actions after the changes have been received.

---

### pre-commit (client-side)

This hook triggers when the user runs `git commit`

If this hook script exits with a non-zero code, the commit is rejected.

Useful for making sure tests are executed and pass locally.

---

### pre-receive (server-side)

This hooks triggers when a repository is being pushed to. It gets a
list of all pushed branches as input.

If this hook script exits with a non-zero code, the commit is rejected.

Useful for enforcing permissions or project policies (e.g. fast-forward updates only).

---

### post-receive (server-side)

This hooks triggers **after** a repository receives and processes a push. It gets a
list of all pushed branches as input.

This hook cannot reject the push.

Useful for restarting a service (web server) or sending notifications (email).

---

<class-work>

### Enforce updates to README file on commit

In an existing repository:

1. Create a file `.git/hooks/pre-commit`
2. Execute `chmod +x .git/hooks/pre-commit`
(this makes the file executable which enables the hook)
3. Edit the file so that if rejects any commits that do NOT modify the README file

Hints:

- `git diff --cached --name-only` provides a list of all modified files
- Use `exit 0` for success; `exit 1` for failure

</class-work>

<bonus-content>

### Solution to class exercise

```bash
#!/bin/bash

# Pre-commit hook to ensure README file is modified in every commit

# Check if any README file is being committed
# This checks for common README variations (case-insensitive)
if git diff --cached --name-only | grep -iE '^README(\.(md|txt|rst))?$' > /dev/null; then
    echo "✓ README file has been updated"
    exit 0
else
    echo "✗ Commit rejected: No changes to README file detected"
    echo ""
    echo "This repository requires all commits to include modifications to the README file."
    echo "Please stage changes to your README file before committing."
    echo ""
    echo "Expected file names: README, README.md, README.txt, or README.rst"
    exit 1
fi
```

</bonus-content>
