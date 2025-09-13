---
title: 'File permissions'
description: 'A short overview of file permissions'
hasSlides: false
links: {
  'Permissions in-depth': 'https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions',
}
---

## Access control

Multi-user system require a way to control what level of access
each user has to a specific file or directory.

In Unix-like systems the access is governed through file permissions.

## Viewing file permissions

Use the `ls -l /path/to/file` to view the permissions

```bash
ls -alh /bin/bash
# prints: -rwxr-xr-x 1 root root 1.2M Aug  1 22:56 /bin/bash
```

---

## How are permissions structured

There are 3 types of access:

- Read - view the contents of a file / directory
- Write - modify the contents of a file / directory
- Execute - execute a file (run as command) / open a directory

---

In Unix-like systems permissions are applied on 3 levels:

- the user owning the file
- the group owning the file
- anyone else

---

When listing permissions we see that are 3 triplets:

_spaces added for clarity_

```
rwx r-x r--
```

In this example:

- The user has full access
- Members of the group can read and execute
- Everyone else can only read

---

### Permissions as octal numbers

Another way to represent the same information is using octal numbers:

```
rwx r-x r--

# same as

754
```

---

This is achieved by assigning a unique, complimentary number to each permission and summing them:

- Read: 4
- Write: 2
- Execute: 1

So full access is 4+2+1 = 7

---

## Modifying permissions

Use the `chmod` command to set the permissions for a file / directory:

```bash
# add the execute permissions for all levels to a file
chmod +x filename

# remove the execute permissions for all levels to a file
chmod -x filename
```

---

Use the octal representation to set the full permissions of a file / directory:

```bash
# only the owning user has full access to the file
chmod 700 filename
```
