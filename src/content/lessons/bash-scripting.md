---
title: 'Scripting with bash'
description: 'Diving deeper into bash features, writing scripts'
order: 7
state: 'draft'
tags: ['bash', 'unix']
---

<!-- TODO: shebang -->
<!-- TODO: test -->
<!-- TODO: if / case -->
<!-- TODO: loops -->

## Functions

```bash
my_func() { echo "Hello $1"; }
declare -f my_func    # Show function body
declare -F            # List all function names
```

---

> __Did you know:__ there is a version of the popular containerization tool Docker [written entirely in bash](https://github.com/p8952/bocker)
