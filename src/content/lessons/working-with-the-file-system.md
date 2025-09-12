---
title: 'Working with the file system'
description: 'Commands used to navigate, explore and manipulate the file system'
order: 2
tags: ['bash', 'unix']
state: 'covered'
links: {
  'Bash guide':'https://guide.bash.academy/',
  'The Linux File System':'https://www.linuxfoundation.org/blog/blog/classic-sysadmin-the-linux-filesystem-explained',
}
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

There are 2 ways of specifying the directory paths:

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

For example, `./my-sub-dir`  specifies a directory that is a child of the current directory.

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

### Mixing paths is dangerous

While it's possible to mix relative paths inside an absolute path it is discouraged because of serious security problems.

```bash
/home/my-user/../../etc/danger
```

---

*Why would you do that?*

You wouldn't do it manually, but it is very easy for a script or program to receive a malicious path as an argument and expose sensitive data

---

## Exploring contents

Use the `ls` command to list the contents of a directory:

```bash
# list the contents of the current directory
ls # same as ls .

# list the user's home directory
ls ~

# list the root directory, include details
ls -l /

# list the parent directory including hidden files
ls -a ../
```

---

You can combine multiple options:

```bash
# list a child directory, including
# details, hidden files and human-readable file size
ls -alh ./subdir
```

You can also list specific files to examine their details:

```bash
ls -alh /bin/bash
# prints: -rwxr-xr-x 1 root root 1.2M Aug  1 22:56 /bin/bash
```

---

## Path expansions

There is a 3rd way to specify file paths:

```bash
# list all files ending in .txt
ls *.txt

# list all files beginning with a digit
ls [0-9]*

# list all file that end in either md or txt
ls *.@(md|txt)

# list all file that do NOT end in txt
ls !(*txt)
```

---

Path expansions can also be applied to directories:

```bash

# list readme files that end in either md or txt
# in any subdir of the user's home dir
# that doesn't begin with my-
ls ~/!(my-*)/readme.@(txt|md)
```

---

## Viewing file contents

There are many ways to see the contents of a file:

```bash
cat my-file.txt
# prints out the full contents of the file to the screen

cat my-file.txt | less
# same as above, but allow you to scroll and search

head -n5 my-file.txt
# prints out the first five lines of the file

tail -n5 my-file.txt
# prints out the last five lines of the file
```

---

### Searching for specific content

Use `grep` to find specific text within files:

```bash
# find all markdown headings in a markdown file
cat readme.md | grep '#'

# can also be used directly, the first argument
# is the pattern all other arguments are files
grep 'hello' my-file.txt readme.md

# find all lines that start with 'a'
# and end with 'z' in all files in current dir
grep -e '^a.*z$' *
```

---

## Manipulating the file system

There are many commands that allow us to create, move, copy or delete files and directories

```bash
# create a new directory in the current directory
mkdir subdir # same as ./subdir

# delete a directory, must be empty
rmdir useless-dir
```

---

> **Warning** Unlike in windows, there is no easy undo and no
> explicit confirmation when taking these actions.

```bash
# move files and directories
# the last argument is the destination
mv a.txt b.md readmes/ ../docs/

# copy files and directories
cp .env config/ ../other-project/

# deletes the file from disk
rm filename
```

---

```bash
# r = recursive, f = force
# delete the directory with all files inside
rm -rf useless-dir/
```

---

## Redirections

Redirections are yet another way to capture the output of a command.

They allow you to save the output to a file:

```bash
# create or overwrite the hello.txt file
# with the string Hello World!
echo 'Hello World!' > hello.txt
```

---

Use the `>>` operator to append contents to a file

```bash
# find all lines containing the string 'error'
# and append them to the file named errors.txt
cat server-logs | grep 'error' >> errors.txt
```

<bonus-content>

<pop-quiz data-answer-id="1">

### What happens if the file being redirected to does not exist?

- Nothing
- It gets created
- Error

</pop-quiz>

</bonus-content>

---

You can also capture different output streams individually:

```bash
# write standard output to logs.txt
# and errors to errors.txt
./my-cool-script > logs.txt 2> errors.txt
```

Or capture them to the same file:

```bash
# append both standard output and errors
# to the same 'logs-and-errors.txt' file
./my-cool-script &>> logs-and-errors.txt
```

---

Use the `<` operator to pass the contents of a file to the standard input of a command:

```bash
# count the number of words in the given file
wc -w < readme.md
```

---

## Counting words or lines

Use the `wc` command to count the number of words or lines in a given input

```bash
# prints the number of lines, words and symbols
wc readme.md

# prints just the number of words
wc -w readme.md

# prints the number of files ending in .txt
ls *.txt | wc -l
```

<bonus-content>

> Observe the difference between the outputs of these 2 commands:
>
> ```bash
> wc -w readme.md
> wc -w < readme.md
> ```
>
> **Question**: Can you explain why they behave differently?

</bonus-content>

---

## Interacting with remote servers

You do not need a GUI to view a webpage or access a remote server:

```bash
# make an HTTP request to a web server
curl https://dummyjson.com/recipes/1 > pizza.json

# connect to a remote server using SSH
ssh user@my.server.com:~
```

> Git makes heavy use of SSH, we will explore it further in the next lesson

---

## Many useful commands

There are too many cool and useful commands and tools to cover in the short span of this course.
We also want to focus on one tool in particular - `git`

---

<class-work>

### Playing around in the terminal

1. In your home dir, create directories `cos3100/in-class-1`
2. Create the following files in the directory:

- empty `my-file.txt`
- `readme.md` containing the string `Hello World`
- `my-first-script` containing the string `ls -al`
- `output` containing the output of the command `ls`

3. Print the number of files in the directory
4. Print the number of files without an extension
5. Print all files containing the string `my`

</class-work>
