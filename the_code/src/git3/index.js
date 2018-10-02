import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Code, Quote  } from 'spectacle';

import { Deck, SlideTitle } from '../common/components';

const git_diff = (
`# show changes that are not staged
git diff

# show staged changes
git diff --cached

# show differences with another branch
git diff branch_name
`);

const git_log = (
`# print the history of the repository
git log

# a more compact view
git log --oneline`);

const git_branch = (
`# Creating new branches
git branch new_feature
git branch bug_fix
git branch ISSUE-473

# Listing branches
git branch

# Deleting branches
git branch --delete new_feature`);

const git_checkout = (
`# switch to a different branch
git checkout branch_name
git checkout master

# create a new branch and switch to it
git checkout -b new_branch`);

const git_reset = (
`# remove changes from the staging area
git reset HEAD

# point the current branch to a different commit
git reset --soft commit

# override the working directory, branch and staging area
git reset --hard commit`);

const git_refs = (
`# exclude commit and its ancestry
^master

# the 2nd ancestor of the given commit
master^^
master~2

#the 2nd parent of the current commit
master^2`);

const git_merge = (
`git checkout master

git merge bug_fix

git checkout feature_branch

git merge master`);

const git_log_formatting = (
`# too much noice and waisted space
git log

# not enough information
git log --oneline

# with a graph
git log --oneline --graph

# with names, dates and branches
git log --format="%h %d %an %cr %s"`);

const git_log_filtering = (
`# get all commits by Tosho from the last 2 weeks
git log --author="Tosho" --since="2 weeks ago"

# get the diff of all commits with changes to the file
git log -p -- filename
`);

const git_log_range = (
`git log --all

git log master..feature_branch

git log master...feature_branch --left-right`);

const git_help = (`git command --help`);

const git_alias = (
`git config --global alias.st "status"

git config --global alias.co "checkout"

git config --global alias.br "branch --verbose"

git config --global alias.lg "log --online --graph"
`);

export default {
  menu: { title: 'Git workflows', path: '/git3' },
  slides: () => {
    return <Deck>
      <Slide>
        <SlideTitle>What we know about git so far</SlideTitle>
        <List>
          <ListItem>Commits are snapshots of the contents of a repository<hr/></ListItem>
          <ListItem>Branches are pointers to commits<hr/></ListItem>
          <ListItem>You can review the history of the repository with <Code>git log</Code></ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Where is my HEAD</SlideTitle>
        <div>the HEAD meta-branch points to the current branch</div>
        <Image src="images/branches_1.png" />
      </Slide>

      <Slide>
        <SlideTitle>Detached HEAD</SlideTitle>
        <div>HEAD can point to a commit rather than a branch</div>
        <Image src="images/branches_1a.png" />
      </Slide>

      <Slide>
        <SlideTitle>Single committer, single branch workflow</SlideTitle>
        <List ordered>
          <ListItem>Make changes to the code</ListItem>
          <ListItem>Check git status and diff</ListItem>
          <ListItem>Stage selected changes for a commit</ListItem>
          <ListItem>Check git history</ListItem>
          <ListItem>Commit staged changes</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>non-linear workflows</SlideTitle>
        <List>
          <ListItem>work with other contributers</ListItem>
          <ListItem>compare different implementations</ListItem>
          <ListItem>make unrelated independent changes</ListItem>
          <ListItem>make experiments, overrides, etc</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Merge</SlideTitle>
        <div>When branches come togather</div>
        <CodePane lang="bash" source={git_merge} />
      </Slide>

      <Slide>
        <SlideTitle>Types of merges</SlideTitle>
        <List>
          <ListItem>Fast-forward - update branch pointer only</ListItem>
          <ListItem>Merge commit - create a new commit with 2 parent commits</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Fast-forward merges</SlideTitle>
        <Image width="100%" src="images/fast_forward.png" />
      </Slide>

      <Slide>
        <SlideTitle>Merge commits</SlideTitle>
        <Image width="80%" src="images/merge-commit.png" />
      </Slide>

      <Slide>
        <SlideTitle>Merge conflicts</SlideTitle>
        <List>
          <ListItem>Use <Code>git log </Code> to verify that you at the correct point in history<hr/></ListItem>
          <ListItem>Use <Code>git diff</Code> to verify that the code is correct<hr/></ListItem>
          <ListItem>Use <Code>git add</Code> to stage the resolved files<hr/></ListItem>
          <ListItem>Use <Code>git commit</Code> to create the merge commit</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Feature branches</SlideTitle>
        <List>
          <ListItem>Work on a change in isolation</ListItem>
          <ListItem>Periodically pull from a main branch</ListItem>
          <ListItem></ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>No fast-forward merges</SlideTitle>
        <Image width="60%" src="images/merge-no-ff.png" />
      </Slide>

      <Slide>
        <SlideTitle>Purpose of merging</SlideTitle>
        <List>
          <ListItem>Upstream - <Code>bug_fix</Code> into <Code>master</Code><hr/></ListItem>
          <ListItem>Downstream - <Code>master</Code> into <Code>feature_branch</Code><hr/></ListItem>
          <ListItem>Collecting - <Code>partial_work</Code> into <Code>feature_branch</Code></ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Commit refs</SlideTitle>
        <div>There are many ways to get to a commit</div>
        <CodePane lang="bash" source={git_refs} />
      </Slide>

      <Slide>
        <SlideTitle>Log formating</SlideTitle>
        <div>Important info should be visible in a glance</div>
        <CodePane lang="bash" source={git_log_formatting} />
      </Slide>

      <Slide>
        <SlideTitle>Log filtering</SlideTitle>
        <div>Explore and analyze selected commits</div>
        <CodePane lang="bash" source={git_log_filtering} />
      </Slide>

      <Slide>
        <SlideTitle>Commit ranges</SlideTitle>
        <div>Compare the history of multiple branches</div>
        <CodePane lang="bash" source={git_log_range} />
      </Slide>

      <Slide>
        <SlideTitle>Commit ranges</SlideTitle>
        <Image width="75%" src="images/comimt-ranges.jpg" />
      </Slide>

      <Slide>
        <SlideTitle>Setting up aliases</SlideTitle>
        <div>Things that we do often should be easy to do</div>
        <CodePane lang="bash" source={git_alias} />
      </Slide>

      <Slide>
        <SlideTitle>Exercise</SlideTitle>
      </Slide>

      <Slide>
        <SlideTitle>Q&A</SlideTitle>
      </Slide>
    </Deck>
  }
};
