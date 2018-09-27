import React from 'react';

import { CodePane, Slide, Heading, List, ListItem, Link } from 'spectacle';

import { Deck } from '../common/components';

const hello = `echo "Hello World"`;

const cd =
`# returns the current directory
pwd

# go to the user's home directory
cd ~

# go to the root directory
cd /

# go to the parent directory
cd ../

# root is its own parent
cd ../../../../../`;

const ls =
`# list the contents of the current directory
ls

# list the user's home directory
ls ~

# list the root directory with details
ls / -l

# list the parent directory including hidden
ls ../ -a

# list the subdir directory in the current dir
ls ./subdir`;

const mkdir =
`# create a new directory in the current directory
mkdir new_project

# create directories recursively
mkdir -p newdir/subdir

# remove an empty directory
rmdir new_project

# remove a directory with all its contents
rm -r newdir`;

const mvcp =
`# move file(s) to a destination
mv file1 file2 dest/

# rename a file
mv old_name new_name

# copy files
cp file1 file2 dest/

# create a link to a file
ln -s filename link

# remove a file
rm filename
`;

const vars =
`# assign values to variables
MY_STR="hello"
MY_NUM=42

# get values from variables
echo $MY_STR $MY_NUM

# set a global variable
export MY_VAR="value"

# single vs double quotes
echo 'my var $MY_VAR'
echo "my value $MY_VAR"`;

const commands =
`# get the current date + time
date

# get the current username
whoami

# get the name of the computer
hostname

# list the contents of a file
cat file.txt

# find all lines that contain a given pattern
grep pattern file`;

const pipes =
`# pass the output of one command as the input to another
cat file1 | grep pattern

# write the output of a command to a file
echo "text text" > file1.txt

# append the output of a command to a file
echo "more text" >> file1.txt

# take file contents as input
cat < file1.txt

# use file as both input and output
cat <> file1.txt
`;

const commands2 =
`# count the charecters, words and lines in a file
wc filename

# create an empty file
touch filename

# show the beginnig of a file
head filename

# show the end of a file
tail filename

# show the difference between 2 files
diff file1 file2
`;

const arrays =
`# declare an array
myarray=(1 "A" 2 "B")

# assign to an index in an array
myarray[0]=5

# print array element at index i
echo \${myarray[i]}

# print length of array element at index i
echo \${#array[i]}

# print length of array itself
echo \${#array[@]}`;

const special_vars =
`# the status of the last command
echo $?

# the process id of the current bash shell
echo $$

# the process id of the last command
echo $!

# re-execute the last command
!!

# prints the length of the MY_VAR string
echo \${#MY_VAR}
`;

const functions1 =
`# declare a function
myfunc() {
  echo "Hello World"
}

# alternative syntax
function myfunc() {
  echo "same as above"
}

# calling a function
myfunc
`;

const functions2 = (
`# number of arguments
myfunc() { echo $# }

# all arguments
function myfunc() {
  echo $*; echo $@
}

# arguments by order
myfunc() { echo $1 $2 $3 }

# calling a function with arguments
myfunc hello world`);

const conditionals =
`if condition; then
  statements
elif condition; then
  statements
else
  statements
fi

case expression in
  pattern1 )
    statements ;;
  pattern2 )
    statements ;;
esac`;

const conditionals_nums =
`# Numbers
-lt   # less than
-le   # less than or equal
-eq   # equal
-ge   # greater than or equal
-gt   # greater than
-ne   # not equal`;

const conditionals_str =
`# Strings
str1 = str2   # str1 matches str2
str1 != str2  # str1 does not match str2
str1 < str2   # str1 is less than str2 (alphabetically)
str1 > str2   # str1 is greater than str2 (alphabetically)
-n str1       # str1 is not null (has length greater than 0)
-z str1       # str1 is null (has length 0)`;

const conditionals_files =
`# Files
-a file  # file exists
-e file   # file exists; same -a
-d file   # file exists and is a directory
-f file   # file exists and is a regular file (not a directory or other special type of file)
-s file   # file exists and is not empty
-N file   # file was modified since it was last read
file1 -nt file2 # file1 is newer than file2
file1 -ot file2 # file1 is older than file2`;

const conditionals3 =
`if [[ expression ]] # converts the result to a boolean

# logical and
if [ condition1 ] && [ condition2 ]; then
if [ condition1 -a condition2 ]; then

# logical or
if [ condition1 ] || [ condition2 ]; then
if [ condition1 -o condition2 ]; then`;

const loops1 =
`for i in ~/mydir/*.txt; do
  echo $i
done

for i in {1..5}; do
    echo "Number $i"
done

for el in \${myarray[@]}; do
    echo "Element $el"
done

cat file.txt | while read line; do
  echo $line
done`;

const ssh =
`#Connect to a shell on another computer
ssh remoteUser@remoteHost -p PORT

# generate a ssh key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# use an ssh keys to login
ssh -i ~/.ssh/my_key user@remoteHost
`;

export default {
  menu: { title: 'Bash basics', path: '/bash' },
  slides:() => (
    <Deck>
      <Slide>
        <Heading textColor="white" size={5}>Intro to bash</Heading>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>What is bash</Heading>
        <List>
          <ListItem>Unix shell</ListItem>
          <ListItem>Command language</ListItem>
          <ListItem>First released in 1989</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>What can bash do</Heading>
        <List>
          <ListItem>Turing-complete</ListItem>
          <ListItem>Interactive mode</ListItem>
          <ListItem>Explore and modify file system</ListItem>
          <ListItem>Run and control programs</ListItem>
          <ListItem>System administration</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Hello world</Heading>
        <CodePane lang="bash" source={hello} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Change directory</Heading>
        <CodePane lang="bash" source={cd} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>List</Heading>
        <CodePane lang="bash" source={ls} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Directories</Heading>
        <CodePane lang="bash" source={mkdir} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Files</Heading>
        <CodePane lang="bash" source={mvcp} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Commands</Heading>
        <CodePane lang="bash" source={commands} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Pipes and redirects</Heading>
        <CodePane lang="bash" source={pipes} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Commands</Heading>
        <CodePane lang="bash" source={commands2} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Variables</Heading>
        <CodePane lang="bash" source={vars} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Special vars</Heading>
        <CodePane lang="bash" source={special_vars} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Arrays</Heading>
        <CodePane lang="bash" source={arrays} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Functions</Heading>
        <CodePane lang="bash" source={functions1} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Function arguments</Heading>
        <CodePane lang="bash" source={functions2} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Conditionals</Heading>
        <CodePane lang="bash" source={conditionals} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Number Conditionals</Heading>
        <CodePane lang="bash" source={conditionals_nums} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>String Conditionals</Heading>
        <CodePane lang="bash" source={conditionals_str} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>File Conditionals</Heading>
        <CodePane lang="bash" source={conditionals_files} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Logical Conditionals</Heading>
        <CodePane lang="bash" source={conditionals3} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Loops</Heading>
        <CodePane lang="bash" source={loops1} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>SSH</Heading>
        <CodePane lang="bash" source={ssh} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Exercise</Heading>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Resources</Heading>
        <List>
          <ListItem><Link href="https://devhints.io/bash">Bash cheatsheet</Link></ListItem>
          <ListItem><Link href="https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/bash.sh">More Bash</Link></ListItem>
        </List>
      </Slide>
    </Deck>
  )
};
