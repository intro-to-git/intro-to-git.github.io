---
title: 'The terminal & the shell'
description: 'Overview of the terminal and shell - what are they and why is it still worth it to learn to use them today'
order: 0
tags: ['intro']
resources: {
'Short history of terminals':'https://www.howtogeek.com/the-three-eras-of-unix-terminals/',
'From Unix to Linux':'https://www.redhat.com/en/blog/unix-linux-history',
'Intro to working in the terminal':'https://computing.stat.berkeley.edu/tutorial-unix-basics/',
'Differences between sh and bash': 'https://linuxconfig.org/bash-sh-command-learn-the-difference-between-bash-vs-shell',
}
---

## What is the terminal?

The terminal is a program that provides a window where you can interact with the command line.

It's essentially the "container" that displays text and accepts keyboard input.

<bonus-content>
It handles things like displaying characters, managing window resizing, scrolling, and sending keystrokes.
</bonus-content>

---

Popular modern terminal emulators include:

- Alacritty
- Ghostty
- Kitty
- Windows Terminal (windows only)
- iTerm2 (macOS only)
- and many more

---

Each terminal emulator might have a variety of advanced and unique features.

> _For example_, Kitty was the first terminal to use GPU-based rendering and is able to display images.

---

## The Shell

The shell is the actual command interpreter that processes the commands you type.

It's the program running inside the terminal that understands and executes your commands.

<bonus-content>
It handles things like parsing commands, managing environment variables, running programs, and providing features like tab completion and command history.
</bonus-content>

---

Popular shells include:

- sh
- bash
- zsh
- PowerShell
- fish
- nushell
- and more

<bonus-content>
> While there has been a proliferation of various shell interpreters, this course will focus on **bash**, as it is the default on most Unix-like system.
</bonus-content>

---

## sh

sh is the original Unix shell <bonus-content>developed by Stephen R. Bourne.</bonus-content>

It is designed to be simple and portable across different Unix-like operating systems.

It is a specification defined by the POSIX standard.

---

## Bash

Bash is a shell interpreter first released in 1989, with the latest version (5.3) released in July 2025.

It is popular and powerful with more advanced features and quality-of-life improvements.

Bash is a **superset** of sh.

---

## POSIX

The **Portable Operating System Interface** is a standard specified by the IEEE to ensure compatibility between different operating system. It has been evolving since 1988.

---

It encompasses a large number of tools, programs and operating systems behaviours such as:

- Process creation and control
- File system operations
- Signals
- Pipes
- Utility programs
- and more

---

## GNU coreutils

GNU coreutils is a implementation of common Unix utilities <bonus-content>created by Richard Stallman and the GNU project.</bonus-content>

It aims to be POSIX-compliant, but extends tools with multiple additional features.

---

There are also multiple other implementations of the common Unix toolset such as:

- Plan9
- BSD
- BusyBox
- uutils
- and more

---

Each of these implementations comes with its owns specifics, features and quirks that are too numerous and finicky to cover in detail.

> This course does NOT aim to teach you how to write the _most_ portable shell scripts, so we are NOT limiting ourselves to the POSIX standard.

<bonus-content>

<pop-quiz data-answer-id="1">

### The terminal is responsible for executing commands?

- true
- false

</pop-quiz>

</bonus-content>
