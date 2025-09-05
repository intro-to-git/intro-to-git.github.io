---
title: 'Working with the file system'
description: 'Commands used to navigate, explore and manipulate the file system'
order: 2
tags: ['bash', 'unix']
---

## Current directory

```bash
pwd # prints the full path of the current directory
```

---

## Changing directories

This command will change the current working directory to the provided path
```bash
cd /path/to/my/directory
```

---

## Directory paths

There are 2 ways of specifying the directory path:

- **Absolute paths** always start with a `/`<bonus-content>, indicating the root directory</bonus-content>. They are consistent regardless of the current directory.

- **Relative paths** start with a special path token and depend on the current working directory.

---

## Special paths tokens

There are multiple special signifiers that help us navigate in a relative way

```bash
.  # indicates the current directory
.. # indicates the parent directory
~  # indicates the home directory of the current user
-  # indicates the previous working directory
```

---

For example `./my-sub-dir`  specifies a directory that is a child of the current directory.

> *Notice* the `.` at the start of the path.

---

The root directory is it's own parent:

```bash
# assume we are in /home/user

cd ../ # now in /home
cd ../ # now in /
cd ../ # still in /

cd ../../../../ # still in /
```

---

We can use a relative path to ensure we are using a local file:
```bash
# assume /home/user
# assume /home/user/echo exists

echo 'test'
# executes the standard echo command

./echo 'test'
# executes the local echo file
```

---

## 🔺 Mixing paths 🔺

While it's possible to mix relative paths inside an absolute path it is discouraged because of serious security problems.

```bash
/home/my-user/../../etc/danger
```

---

_Why would you do that?_

You wouldn't do it manually, but it is very easy for a script or program to receive a malicious path as an argument and expose sensitive data

---

## Listing contents

---

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

> There are a lot of details and specifics of different UNIX variants that we would not have time to explore in depth

[The Linux File System](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-the-linux-filesystem-explained)

</bonus-content>
