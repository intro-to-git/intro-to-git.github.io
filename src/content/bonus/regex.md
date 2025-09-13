---
title: 'Regular expressions'
description: 'A very short primar on regular expressions'
hasSlides: false
links: {
  'Regex cheatsheet': 'https://www.rexegg.com/regex-quickstart.php',
}
---

## Regular expressions

Regular expressions are a powerful way to express search patterns.

Many languages provide a way to use them in your programs.

Internally, regular expressions are represented as **finite state machines**.

### How do regular expressions work

1. The interpreter / compiler parses the regular expression
2. It builds the finite state machine that will make it efficient to execute the regex
3. Applying the regex to an input, executes the FSM and produces matches

---

## Regex syntax basics

Characters:

```bash
. # represents any character
\s # represents a whites-pace character
\d # represents a digit
\n # represents a new line
\. # represents a literal . character
```

---

Qualifiers:

```
* # represents 0 or more repetitions
.* # 0 or more of any character
a* # 0 or more 'a' characters

+ # represents 1 or more repetitions
.+ # one or more of any character

? # represents 0 or 1 repetitions
b? # 0 or 1 b characters
```

---

Groupings:

```bash
[abcxyz] # any of the given characters
[a-z] # any character in the given range
[^xyz] # any character other than the given
```

---

Boundaries:

```bash
^ # represents the start of a line
$ # represents the end of a line
```

---

## Putting it all together

The following regular expression selects all lines that:

- start with either a, b or c
- have any number of any characters
- do NOT end with a digit

```bash

cat my-long-file | grep -e '^[abc].*[^\d]$'

```

</bonus-content>
