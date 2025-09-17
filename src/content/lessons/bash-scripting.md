---
title: 'Scripting with bash'
description: 'Diving deeper into bash features, writing scripts'
order: 8
state: 'upcoming'
tags: ['bash', 'unix']
links: {
  'shellcheck': 'https://github.com/koalaman/shellcheck',
}
---

## Writing scripts

Writing a simple script is as easy as putting some commands in a file:

```bash
echo 'echo "Hello world!"' > my_first_script
```

---

> You can use any editor to author your scripts,
> but I would recommend an editor that supports useful plugins:
>
> - syntax highlighting
> - linters
> - LSPs

---

<class-note>

While writing simple scripts is easy, writing good scripts is hard.
In this course we will focus on:

- getting things to work locally
- covering common features and constructs
- giving you a glimpse into what it takes to write a polished script

</class-note>

---

## Executing scripts

There are 2 main ways to execute a script:

```bash
# execute explicitly using bash
bash ./my-script

# execute as a command
# implicitly uses the default shell
# requires execute permissions on the file
./my-script
```

---

## Shebang

You can instruct the system to use a specific execution environment
by adding a special instruction as the first line of your script.

This is often referred to as a **shebang**:

```bash
#!/bin/bash

# your actual script starts here
```

---

- The shebang makes sure that your script is properly setup
and reduces the knowledge and setup required from its user.

- Shebangs are NOT limited to bash, you can use them with any language
such as JavaScript or Python

<bonus-content>

### A note on portability

In the above example, we are assuming that the `/bin/bash` file exists -
this might not be the case.

To make the script a bit more portable, we can use the `env` command to
dynamically find the actual location of the bash executable:

```bash
#!/bin/env bash

# your script starts here
```

</bonus-content>

---

## Test

The `test` command allow us to assert many types of conditions:

- string comparisons
- number comparisons
- file existence
- file properties
- variable properties
- and more

---

### Running tests

There are 2 ways to run the `test` command:

```bash
# execute explicitly
test <condition>

# using square brackets
[ <condition> ]
```

> **NOTE**: the spaces around the condition when using brackets are required

---

To read the results of the test examine the its exit status:

```bash
test 'a' = 'a'
echo "$?" # prints 0 i.e. success

[ 'a' = 'b' ]
echo "$?" # prints 1 i.e. failure
```

---

### Testing strings

```bash
# str1 matches str2
str1 = str2

# str1 does not match str2
str1 != str2

# str1 is less than str2 (alphabetically)
str1 < str2

# str1 is greater than str2 (alphabetically)
str1 > str2
```

---

### Test: numbers

```bash
1 -lt 2   # less than

3 -le 4   # less than or equal

5 -eq 6   # equal

7 -ge 8   # greater than or equal

9 -gt 10   # greater than

11 -ne 12   # not equal
```

---

### Test: file properties

```bash
-e file   # file exists
-d file   # directory exists
-f file   # file exists and is a regular file
# (not a directory or other special type of file)

-s file   # file exists and is not empty
-N file   # file was modified since it was last read

file1 -nt file2 # file1 is newer than file2
file1 -ot file2 # file1 is older than file2
```

---

### Test: variables

```bash
-v var    # variable is set

-n $var   # variable value is NOT empty

-z $var   # variable is unset or value is empty
```

---

### Test: logical operators

```bash
# cond1 AND cond2
[ condition1 -a condition2 ]

# cond1 OR cond2
[ condition1 -o condition2 ]

# NOT condition
[ ! condition ]
```

---

### Bash specific testing

Bash extends the capabilities of the POSIX testing utility.

To use bash-specific features use double square brackets:

```bash
[[ <condition> ]]
```

---

Some useful extensions only available in bash are:

```bash
# using globs in tests
[[ "hello.txt" == *.txt ]]

# use character classes in tests
[[ "$input" == [0-9]* ]]

# use regular expressions in tests
[[ "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]
```

---

## Logical operators outside test

You can use short-circuiting logical `AND` and logical `OR` when chaining commands

```bash
# only execute cmd2 if cmd1 succeeds
cmd1 && cmd2

# only execute cmd2 if cmd1  fails
cmd1 || cmd2
```

---

## Conditionals

You do NOT need to check the result of a test through the exit status.

---

### if

```bash
if condition; then
  statements
elif condition; then
  statements
else
  statements
fi
```

---

### case

Case patterns can contain globs like `*`, `?`, `[a-z]`:

```bash
case expression in
  pattern1 )
    statements ;;
  pattern2 )
    statements ;;
esac
```

---

## Loops

Loops can use globs as well:

```bash
for f in ~/mydir/*.txt; do
  echo $f
done

for i in {1..5}; do
    echo "Number $i"
done

cat file.txt | while read line; do
  echo $line
done
```

---

## Arrays

```bash
# declare an array
myarray=(1 "A" 2 "B")

# assign to an index in an array
myarray[0]=5

# print array element at index i
echo ${myarray[i]}

# print length of array element at index i
echo ${#myarray[i]}

# print length of array itself
echo ${#myarray[@]}
```

---

## Handling inputs

There are special variable that allow you to handle script arguments.

```bash
# print number of passed-in arguments
echo "$#"

# an array containing all arguments
echo "$@"

# arguments by order
echo "$1 $2 $3"

# calling a script with arguments
my-script hello world
```

<bonus-content>

<pop-quiz data-answer-id="2">

### What is the value of $2 in the above script execution?

- none / empty string
- hello
- world
- 0

</pop-quiz>

</bonus-content>

---

## Handling signals

Use the `trap` command to execute code as a response to a system signal:

```bash
# Delete temp file when receiving an EXIT signal
tempfile=/tmp/tmpdata
trap "rm -f $tempfile" EXIT
```

---

## Functions

Functions can be used to group logical units and repetitive actions.

```bash
# declare a function
my_func() { echo "Hello $1"; }

# alternative syntax
function myfunc() {
  echo "same as above"
}

# calling a function is like calling a command
my_func "friend"
```

> In bash functions do NOT return values.

---

Use the `declare` built-in command to examine functions defined in your environment:

```bash
# Show function body
declare -f my_func

# List all function names
declare -F
```

---

The meaning of certain special variable changes inside a function:

```bash
# number of arguments to the function
myfunc() { echo "$#"; }`

# all arguments to the function
function myfunc() {
  echo "$@"
}

# function arguments by order
myfunc() { echo "$1 $2 $3"; }
```

<bonus-content>

<home-work>

### Script vs function arguments

- Create a script that takes 2 arguments
- Print the string 'From script:'
- Print the values of both arguments
- Add a function definition to the script that also takes 2 arguments
- The function should print 'From function:' and then print its arguments
- Call the function inside the script passing in the script arguments **in reverse**

</home-work>

</bonus-content>

---

## Linting with shellcheck

Shellcheck is a powerful tool that can find many mistakes and problems in your scripts.

It is an external command that needs to be installed.

```bash
shellcheck my-script
# produces a list of potential problems
```

---

> **Fun fact:** there is a version of the popular containerization tool Docker [written entirely in bash](https://github.com/p8952/bocker)
