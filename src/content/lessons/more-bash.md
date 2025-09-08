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

<bonus-content>

## Overview of the common top-level directories

> In UNIX-like system everything is represented as a file

```bash
/     # root - the top level directory
/bin/     # holds common programs accessible by all users
/boot/    # contains files needed to start the system
/dev/     # contains device files
/etc/     # contains system configuration files
/home/    # each user has their own directory under /home/{user-name}
/media/   # usually where external storage is mounted
/mnt/     # used for manually mounting external storage
/lib/     # contains shared libraries
```

---

```bash
/opt/     # usually holds programs built locally from source
/root/    # the home directory of the root user
/sbin/    # contains programs only accessible to the root user
/sys/     # contains files representing devices
/tmp/     # contains temporary files
/usr/     # holds a mish-mash of programs, libraries, docs and more
/var/     # usually contains logs and other semi-temporary data
```

> There are a lot of details and specifics of different UNIX variants that we would not have time to explore in depth.

</bonus-content>
