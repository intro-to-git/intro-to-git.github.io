---
title: 'Advanced git features'
description: 'Git internals, Git hooks, Github actions and more'
order: 9
state: 'draft'
tags: ['git']
links: {
  'Referencing commits docs': 'https://git-scm.com/docs/gitrevisions',
}
---

## Referencing commits

There are many ways to get to a commit.
![example-history](https://git-scm.com/book/en/v2/images/double-dot.png)

```bash
master^ # E
master~2 # B
B^ # A
B~1 # A
^B # everything except A and B
```

---

## Reflog

## Blame

## Tags

## Protocols

## Porcelain vs plumbing

## Exploring the .git directory

## Hooks

## Github actions

<!-- TODO: tags -->

<!-- TODO: reflog -->

<!-- # selects the commit master was -->
<!-- # on at the given time -->
<!-- master@{5.days.ago} -->
<!-- TODO: protocols -->
