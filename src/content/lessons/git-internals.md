---
title: 'Git internals'
description: 'Git internals, Git hooks, plumbing commands and more'
order: 11
state: 'draft'
tags: ['git']
links: {
}
---

## Porcelain vs plumbing

All the commands covered so far are known as `porcelain` commands -
they are high level - meant to be used directly by end-users in regular situations.

---

Git exposes another set of low-level commands called `plumbing` commands.
They are **NOT** meant to be used for day-to-day management of repositories,
but rather allow for fine grain, custom operations.

---

### Plumbing commands



---

## Bare repositories

Sometimes it is useful to have a git repository **WITHOUT** checking out a working tree.

This is especially useful in sever setups where no one will directly work with the instance of the repository.

```bash
# create a repository without a working tree
git init --bare

# clone a repository without checking out a working tree
```

---

## Exploring the .git directory

---

## Git Hooks

---

## Protocols

