import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Quote  } from 'spectacle';

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

export default {
  menu: { title: 'Git basics (2)', path: '/git2' },
  slides: () => {
    return <Deck>
      <Slide>
        <SlideTitle>What we know about git so far</SlideTitle>
        <List>
          <ListItem>Repositories are databases for content versions<hr/></ListItem>
          <ListItem>Commits are snapshots of the content of a repository<hr/></ListItem>
          <ListItem>Changes must first be added to the staging area before going into a commit</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>The basic workflow</SlideTitle>
        <List ordered>
          <ListItem>Create (or clone) a repository</ListItem>
          <ListItem>Make changes to the code</ListItem>
          <ListItem>Stage selected changes for a commit</ListItem>
          <ListItem>Commit staged changes with a message</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>The basic workflow</SlideTitle>
        <CodePane lang="bash" source={"git init ; git add ; git status ; git commit"} />
        <Image src="images/areas.png" />
      </Slide>

      <Slide>
        <SlideTitle>Diff</SlideTitle>
        <div>What did I just change?</div>
        <CodePane lang="bash" source={git_diff} />
      </Slide>

      <Slide>
        <SlideTitle>Log</SlideTitle>
        <div>A line of commits - the history of the repository</div>
        <CodePane lang="bash" source={git_log} />
      </Slide>

      <Slide>
        <SlideTitle>Improved basic workflow</SlideTitle>
        <List ordered>
          <ListItem>Make changes to the code</ListItem>
          <ListItem>Check git status and diff</ListItem>
          <ListItem>Stage selected changes for a commit</ListItem>
          <ListItem>Check git history</ListItem>
          <ListItem>Commit staged changes</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>non-linear workflow</SlideTitle>
        <List>
          <ListItem>compare different implementations</ListItem>
          <ListItem>make unrelated independent changes</ListItem>
          <ListItem>make experiments, overrides, etc</ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading textColor="white" size={5}>Branching</Heading>
        <div>Branching is the key to a non-linear workflow</div>
        <CodePane lang="bash" source={git_branch} />
      </Slide>

      <Slide>
        <SlideTitle fit>A branch is just a pointer to a commit</SlideTitle>
        <Image width="70%" src="images/branches_1.png" />
      </Slide>

      <Slide>
        <SlideTitle>Checkout this branch</SlideTitle>
        <div>Overrides the working directory with the given snapshot, sets HEAD to branch</div>
        <CodePane lang="bash" source={git_checkout} />
      </Slide>

      <Slide>
        <SlideTitle>Reset</SlideTitle>
        <div>Overrides the branch to point to a different commit</div>
        <CodePane lang="bash" source={git_reset} />
      </Slide>

      <Slide>
        <SlideTitle>Commit refs</SlideTitle>
        <div>There are many ways to get to a commit</div>
        <CodePane lang="bash" source={git_refs} />
      </Slide>

      <Slide>
        <SlideTitle>Merge</SlideTitle>
        <div>When branches come togather</div>
        <CodePane lang="bash" source={git_merge} />
      </Slide>

      <Slide>
        <SlideTitle>Purpose of merging</SlideTitle>
        <List>
          <ListItem>Upstream - bug_fix into master</ListItem>
          <ListItem>Downstream - master into feature_branch</ListItem>
          <ListItem>Collecting - partial_work into feature_branch</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Types of merges</SlideTitle>
        <List>
          <ListItem>Fast-forward - update branch pointer only</ListItem>
          <ListItem>Merge commit - create a new commit with 2 parent commits</ListItem>
          <ListItem>We&apos;ll talk about conflicts next time</ListItem>
        </List>
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
        <SlideTitle>Log ranges</SlideTitle>
        <div>Compare the history of multiple branches</div>
        <CodePane lang="bash" source={git_log_range} />
      </Slide>

      <Slide>
        <SlideTitle>Exercise</SlideTitle>
      </Slide>

      <Slide>
        <SlideTitle>Resources</SlideTitle>
        <List>
          <ListItem><Link href="https://www.atlassian.com/git">Atlassians guide to git</Link></ListItem>
          <ListItem><Link href="https://www.youtube.com/watch?v=ZDR433b0HJY">Intro to git by Scott Shacon</Link></ListItem>
        </List>
      </Slide>
      <Slide>
        <SlideTitle>Q&A</SlideTitle>
      </Slide>
    </Deck>
  }
};
