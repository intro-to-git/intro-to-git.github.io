---
title: 'Managing processes and system resources'
description: 'Process management, special variables, and even more Unix & Bash features'
hasSlides: false
links: {
}
---

## Searching the command history

In interactive mode, you can use `CTRL+R` to search through
the history of previously executed commands.

## System status

This section will explore a couple of the most popular commands for
reviewing important system resources:

- memory
- disk usage
- network address
- running processes

### Memory

Use the `free` command to examine the how your RAM is used:

```bash
free -h
# prints:
#
#       total     used    free   shared   cache   available
# Mem:   31Gi    6.8Gi    19Gi    2.0Gi   6.8Gi        24Gi
```

### Disk usage

The `du` command can tell you the size of a file.
The `df` command tells you how much space is left on your hard drive:

```bash
df -h
# prints
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/nvme0n1p5  324G   26G  298G   8% /
# /dev/nvme0n1p1  256M  256M     0 100% /boot
```

## Network address

To see your network address use the `ip addr` command:

```bash
ip addr
# prints information about all network interfaces

# -j makes ip print its output as JSON
# jq is a json query command line tool
ip -j -4 addr | jq '.[].addr_info[].local'
# prints only a list of all local ip4 addresses
```

### Processes

The `ps` command returns a list of running proceses:

```bash
# returns only processese in the current shell
ps

# returns all processes, including system servies
# and the owning user
ps aux
```

### top

`top` is popular utility that combines a lot of system information
and provides ways to filter and interact with it.

### Special variables

```bash
# the process id of the current command
echo "$$"

# the process id of the last command
echo "$!"

# re-execute the last command
!!
```

## Managing processes

### Terminating processes

```bash
# kill a process by its process id
kill 1234

# kill all processes by command name
killall firefox
```

### Background jobs

Use the `&` operator at the end of a command to keep that command running in the background:

```bash
# run a job in the background
long-running-task &

# list background jobs
jobs

# bring jobs to the foreground
fg
```

Use `CTRL+Z` to suspend a foreground command (pause its execution).

```bash
# send the most recent suspended job the background
bg

# kill the background job with id 1
kill %1
```

### Difference between jobs and processes

A process is any running program with its own address space, memory, and a unique process ID. It is a fundamental concept managed by the operating system.

In contrast, a job is a concept used by the shell, specifically referring to any program started interactively that does not detach from the terminal.
