# Test 1

## Bash

### Commands

#### Which is NOT a file system command?
 a) ls
 b) pwd
 c) ssh
 d) cp

#### Which command prints the full current path?
  a) ls
  b) cat
  c) grep
  d) pwd

#### Which command can rename files?
  a) cp
  b) mv
  c) rm
  d) dir

#### Which command creates a file?
  a) rm fileName
  b) touch fileName
  c) cat fileName
  d) grep fileName

#### Which command prints the contents of a file?
  a) cat fileName
  b) diff fileName
  c) touch fileName
  d) mv fileName

#### Which command lists the hidden files?
  a) ls -l
  b) pwd
  d) ls -a
  c) dir

#### Which command prints the number of lines in a file?
  a) rm fileName
  b) grep fileName
  c) wc fileName
  d) cat fileName

#### Which command prints all the lines containing a pattern?
  a) diff fileName pattern
  b) cat pattern fileName
  c) grep fileName pattern
  d) grep pattern fileName

#### Which command finds a pattern in the contents of a file?
  a) cat pattern fileName
  b) vim pattern fileName
  c) grep pattern fileName
  d) none of the above

### Pipes and redirects

#### Which command creates a file?
  a) echo "hello world" > fileName
  b) echo "hello world" | fileName
  c) cat fileName < "hello world"
  d) None of the above

#### Which command appends content to a file?
  a) tail fileName "new content"
  b) cat fileName >> "new content"
  c) echo "new content" >> fileName
  d) head "new content" > fileName

#### Which command prints the number of files in a directory?
  a) ls -l | wc - l
  b) wc -l < ls -l
  c) ls -l > wc -l
  d) ls -l && wc -l

#### Which command prints the number of lines in a file containing a pattern?
  a) echo fileName | cat pattern | pwd
  b) cat pattern > fileName > grep pattern
  c) cat fileName | grep pattern | wc -l
  d) all of the above

### Variables and Conditionals

#### Which statement defines a variable with the value "hello"?
  a) MY_VAR="hello"
  b) $MY_VAR="hello"
  c) set MY_VAR hello
  d) "hello" > MY_VAR

#### Given MY_VAR="hello". Which option will print "hello world"?
  a) echo "MY_VAR world"
  b) cat "$MY_VAR world"
  c) echo "$MY_VAR world"
  d) cat "MY_VAR world"

#### Given MY_VAR="hello". Which statement would print "hello world"?
  a) [ -n $MY_VAR ] && echo "$MY_VAR world"
  b) [ -z $MY_VAR ] && echo "$MY_VAR world"
  c) [ -z MY_VAR ] && echo "MY_VAR world"
  d) [ -n MY_VAR ] && echo "$MY_VAR world"

#### Which command returns the length of an string variable?
  a) echo ${@MY_VAR}
  b) echo size($MY_VAR)
  c) echo $#MY_VAR
  d) echo ${#MY_VAR}

### Special variables

#### Which command executes the last command?
  a) !!
  b) !?
  c) @?
  d) $!

#### Which command returns the exit status of the last command
  a) !?
  b) $?
  c) @#
  d) $#

### Conditionals

#### Which statement prints "true"?
  a) if [ 5 -lt 10 ]; then echo "true"; else echo "false"; fi;
  b) [ 10 -gt 5 ] && echo "true" || echo "false"
  c) All of the above
  d) None of the above

### Functions and loops

#### Which is a valid for loop?
  a) for i in ~/mydir/*.txt; do
       echo $i
     done

  b) for i in {1..5}; do
       echo "Number $i"
     done

  c) for el in ${myarray[@]}; do
       echo "Element $el"
     done

  d) all of the above
