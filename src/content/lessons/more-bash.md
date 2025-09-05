---
title: 'More bash'
description: 'Diving deeper into bash features - test, pipes'
order: 7
draft: true
tags: ['bash', 'unix']
---

## Functions

```bash
my_func() { echo "Hello $1"; }
declare -f my_func    # Show function body
declare -F            # List all function names
```

---

## Command parsing order

Bash processes commands in this order:

1. History expansion (if enabled)
2. Quote removal and word splitting
3. Expansions (brace, tilde, parameter, arithmetic, command substitution, pathname)
4. Redirection setup
5. Command execution

---

> __Did you know:__ there is a version of the popular containerization tool Docker [written entirely in bash](https://github.com/p8952/bocker)
