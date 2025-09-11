---
title: 'Bash basics'
description: 'Overview of bash syntax, features and common builtins'
order: 1
tags: ['bash', 'intro']
resources: {
  'The bash manual':'https://www.gnu.org/software/bash/manual/bash.html',
  'The bash cheatsheet':'https://devhinTs.io/bash',
  'ysap - a youtube channel about bash':'https://github.com/bahamas10/ysap?tab=readme-ov-file',
}
---

## Features

Bash is a Turing-complete language and provides a large variety of features.

---

Some of them are common to most popular programming languages:

- variables
- conditional statements
- loops
- functions
- IO & file operations
- etc

---

Others are specific to bash and the terminal environment:

- pipes
- job controls
- shell expansions
- special variables
- command history
- etc

---

> This course aims to provide you with working knowledge of bash and the Unix ecosystem, but CANNOT cover all the topics in detail

---

## Operational modes

Bash can be used either:

- __in interactive mode__: commands are executed as soon as the user hits enter.

- __for scripts__: they are executed to completion and can accept variable arguments

---

## Interactive mode

This is an example of a minimal prompt.

```bash
$
```

It signifies that the shell is ready to accept commands.

<bonus-content>

The prompt can be customized to include any desirable information such as:

- the current directory
- the machine name
- the current user
- the git branch
- the exit code of the last command
- and more

> in the examples we will exclude the prompt in order to simplify the copy/pasting of the sample commands

</bonus-content>

---

## Hello world

```bash
# a hash indicates a comment, anything after it is ignored

echo 'Hello World!'
```

Once the user submits the command, it executes, and prints the output to the screen.

The `echo` command prints the provided argument to __standard out__

---

> *Beware*: Bash is case-sensitive, so trying
>
> ```bash
>EcHo 'hello world'
>```
>
>might NOT produce the expected result

---

## Anatomy of a command

All commands in bash follow the following general structure:

```bash
[variables] [command] [options] [arguments] [redirects] [operators]
```

The command is the only mandatory element, everything else is optional

<bonus-content>

## Command parsing order

Bash processes commands in this order:

1. History expansion (if enabled)
2. Quote removal and word splitting
3. Expansions (brace, tilde, parameter, arithmetic, command substitution, pathname)
4. Redirection setup
5. Command execution

</bonus-content>

---

## Output

There are 2 main output streams:

- standard output (__stdout__) for regular program output

- standard error (__stderr__) for error messages and diagnostics.

> __By default, both streams are displayed on the terminal.__

---

## Command types

There are several types of commands in bash.

When trying to execute a command bash will search for it in this order:

- aliases
- keywords
- functions
- built-ins
- external programs (resolved through `$PATH`)

---

Use the `type` built-in command to check the type of another command.

```bash
type grep
# prints: grep is /usr/bin/grep

type if
# prints: if is a reserved word

type cd
# prints: cd is a shell builtin

type ll
# prints: ll is an alias for ls -alh
```

---

### Built-ins and keywords

Use the `help` command to get basic information about built-ins and keywords.

```bash
help # prints all built-ins and keywords

help if # prints information about the if keyword
```

---

### Aliases

Use the `alias` command to view or define aliases.

```bash
alias # prints all aliases

alias ll='ls -alh' # define a new alias
```

> __NOTE__: there must be NO spaces around the `=` sign.
> Also, unlike other languages, bash handles single and double quotes differently.

---

## Executing specific command variant

```bash
# a bit of setup
alias echo='echo "ALIASED:"'

echo "test"
# uses alias, prints: ALIASED: test

builtin echo "test"
# uses built-in, prints: test

command echo "test"
# uses external, prints: test
```

---

## Options and arguments

Each command may accept any number of options and/or arguments.

- Options usually start with a `-` and modify the behaviour of the command.

- Arguments represent data to be used be the command

---

For example, the `-t` option makes the `type` command return a single word output

```bash
type grep
# prints: grep is /usr/bin/grep

type -t grep
# prints: file
```

> Usually options precede arguments

---

## Exit status

Because bash prints both standard output and errors to the terminal, it might be hard to determine whether a command succeeded.

Fortunately, bash provides a special variable `$?` to indicate the exit status of the last command.

---

A value of `0` means success. Any other (positive number) indicates an error.

```bash
type ls
echo $?
# prints 0

type xxx-no-such-command
echo $?
# prints 1

```

<bonus-content>

<pop-quiz data-answer-id="2">

### Which is *NOT* a valid command type?

- built-in
- file (external)
- interactive
- alias
- function

</pop-quiz>

</bonus-content>

---

## Variables

- Bash provides a large number of built-in variables.

- External programs and the operating system also expose a lot of variables.

- You can define your own variables and expose them to the system.

---

Use the `env` command to see all variables defined on the system.

Or `echo` to print the value of a specific variable:

```bash
echo $BASH_VERSION
# prints: bash-5.3
```

> NOTICE the `$` character used to reference the variables

---

To define your own variables use the `NAME=value` syntax.

You can define multiple variables on the same line.

```bash
MY_VAR='hello' fruit='banana'

echo $fruit $MY_VAR
# prints: banana hello
```

> NOTICE there is NO `$` character when defining variables.

<bonus-content>

While it is NOT required for variables to be in ALL CAPS, it is a common convention, especially for global variables.

</bonus-content>

---

## Variable scope

By default variables are scoped to the current shell.

Use the `export` keyword to make a variable global:

```bash
export MY_COLOR='green'
export MY_THEME='dark'
export MY_FONT='Plex Mono'
```

<bonus-content>
<home-work>

### One variable, multiple terminals

Define a normal variable in one terminal window and try printing it in another.
Export a variable and trying printing it in another window as well.

</home-work>
</bonus-content>

---

Variables can also be scoped to a specific command:

```bash
date
# prints: current date in local time zone

TZ=UTC date
# prints: current date in UTC

echo $TZ
# prints nothing, TZ was only defined for that command
```

---

The `$` character is used for __variable expansion__.

It allows multiple advanced features:

```bash
my_var='abcdef'
echo ${my_var}
# same as echo $my_var

echo ${#my_var}
# prints: 6 - the length of the value

echo ${my_var^^}
# prints: ABCDEF - all uppercase

echo ${my_var:1:3}
# prints: bcd - subset of characters
```

---

## Single vs double quotes

Single quotes denote a literal string, while double quotes allow for variable expansion.

```bash
echo '$MY_VAR test'
# prints: $MY_VAR test

echo "$MY_VAR test"
# prints: hello test
```

> It is recommended to always use quotes.
>
> While bash allows unquoted values, this may lead to hard-to-debug problems.

---

## Subshells

By default, the output of a command goes to stdout. But there are ways to redirect or capture
the result of a command:

```bash
today=date
echo $today
# doesn't work.. prints the literal 'date'

today=$(date)
echo $today
# works! prints today's date
```

---

Subshells can also be used to pass the output of one command as an argument to another:

```bash
du -h $(which ls)
# print: 40K /bin/ls
```

- `du` returns the size of a file
- `which` is similar to type, but resolves `$PATH` first

---

## Pipes

Another way of redirecting the output of a command is by using a pipe `|`:

```bash
env | grep MY_
# prints all global variables that contain the string MY_
```

Using a pipe we are redirecting the output of the first command to the __stdin__ of the second.

<bonus-content>

<home-work>

### Customize your prompt

Use bash to customize your prompt.
Explore options for what information would be most useful to you.
Play around with fun colors and special symbols.

*__Hint__: to modify your prompt set a value to the `PS1` special variable.*

</home-work>

</bonus-content>
