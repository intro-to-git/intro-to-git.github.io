# create a new directory and enter it
mkdir exercise1
cd exercise1

# create a git repository
git init

# create a script file "hello" with the following contents
echo "My Name"
date
[[ $((date +%M % 2)) -eq 0 ]] && echo "even" || echo "odd"

# add the file to the storage area
git add hello

# commit the script file
git commit -m "hello script"

# execute the script and store the output
sh hello > timestamp.txt

# commit the timestamp file
git add timestamp.txt
git commit -m "timestamp generated"

# modify "hello" to contain the following:
[[ -z $(git status -s) ]] && echo "clean" || echo "dirty"

# rename the file to "status-check"
mv hello status-check

# commit the changes
git add . # add everything in the folder
git commit -m "status-check script"

# done
