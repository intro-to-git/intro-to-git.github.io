import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Code, Quote  } from 'spectacle';

import { Deck, SlideTitle } from '../common/components';

const amend_commit = (
`git commit --amend

git commit --amend --no-edit`);

const amend_vs_reset = (
`git reset --soft HEAD~1
git add NEW_CHANGES
git commit -m "amended commit"`);

const reset_squash = (
`# point your current branch to the 5th ancestor commit
git reset --soft HEAD~5

git commit -m "combining changes from 5 commits into 1"`);

const revert = (`git revert <commit-ish>`);

const revert_explained = (
`# given a commit that changes one line of a file
- MY_VAR=42
+ MY_VAR=0

# revert will create a commit that will restore the value of MY_VAR to 42
- MY_VAR=0
+ MY_VAR=42`);

const cherry_pick = (
`git cherry-pick <commit-ish>

# edit the messages of cherry-picked commits
git cherry-pick --edit <commit-ish>

# do not create commit, only modify working dir and index
git cherry-pick --no-commit <commit-ish>`);

const rebase = (
`git rebase <branch> <base>

# tell git to rebase your local changes instead of merging
git pull --rebase`);

const rebase_example = (`git rebase experiment master`);

const continue_abort = (
`# using --abort will restore the working directory and index to their original state
git merge --abort
git cherry-pick --abort
git rebase --abort

# use --continue to resume an operation after resolving conflicts
git cherry-pick continue
git rebase --continue`);

const ignore = (
`# contents of .gitignore

# untrack a file
log_file.txt

# untrack a directory
tmp/`);

const reflog = (
`git reflog <branch>

# sample output
532c1b6 (HEAD -> master, github/master) HEAD@{0}: pull github master
6661619 HEAD@{1}: commit: week 4 content
5502cc9 HEAD@{2}: commit (amend): week 3 content
1987dbb HEAD@{3}: commit: week 3 content`);

const reflog_refs = (
`# the current commit the branch is pointing to
master
master@{0}

# notice that master^ and master@{1} can match
# but can also be different if the branch has been reset, rebased, etc

# the commit the master branch pointed to 3 commits ago
master@{3}

# the commit the master branch pointed to 2 weeks ago
master@{2.weeks.ago}`);

const force_push = (
`# force push will override the remote branch to point to the pushed commits
git push --force

# force with lease will not allow you to override branches
# containing commits you do not have fetched yet
git push --force-with-lease`);

const pull_rebase = (
`git checkout feature_branch

# fetch the new commits from origin master and rebase feature_branch on top
git pull --rebase origin/master

# update the remote branch to reflect the update
git push --force-with-lease origin feature_branch`);

export default {
  menu: { title: 'Week 4: Modifying history', path: '/git5' },
  slides: () => {
    return <Deck>
      <Slide>
        <SlideTitle>.gitignore</SlideTitle>
        <div>Git will not track any of the paths listed in this file</div>
        <CodePane lang="bash" source={ignore} />
      </Slide>

      <Slide>
        <SlideTitle>Modifying history</SlideTitle>
        <div>Amend, Revert, Cherry-pick, Rebase<hr /></div>
        <div>
          Git does not allow us to modify the contents of commits,
          but we are free to point branches to "alternative" commits
        </div>
      </Slide>

      <Slide>
        <SlideTitle>Amending commits</SlideTitle>
        <div>Creates a new commit from an existing commit including the additional changes</div>
        <CodePane lang="bash" source={amend_commit} />
      </Slide>

      <Slide>
        <SlideTitle>Amending commits using reset</SlideTitle>
        <div></div>
        <CodePane lang="bash" source={amend_vs_reset} />
      </Slide>

      <Slide>
        <SlideTitle>Squash multiple commits</SlideTitle>
        <div></div>
        <CodePane lang="bash" source={reset_squash} />
      </Slide>

      <Slide>
        <SlideTitle>Revert</SlideTitle>
        <div>Create a commit with the opposite changes of a given commit</div>
        <CodePane lang="bash" source={revert} />
      </Slide>

      <Slide>
        <SlideTitle>Revert</SlideTitle>
        <div>Create a commit with the opposite changes of a given commit</div>
        <CodePane lang="bash" source={revert_explained} />
      </Slide>

      <Slide>
        <SlideTitle>Cherry picking</SlideTitle>
        <div>Create a new commit with the changes introduced by an existing commit<hr /></div>
        <div>Cherry-pick can be used to copy commits between branches</div>
        <CodePane lang="bash" source={cherry_pick} />
      </Slide>

      <Slide>
        <SlideTitle>Rebase</SlideTitle>
        <div>Create new commits with the changes introduced by an existing line of commits</div>
        <CodePane lang="bash" source={rebase} />
      </Slide>

      <Slide>
        <SlideTitle>Rebase</SlideTitle>
        <CodePane lang="bash" source={rebase_example} />
        <Layout>
          <Image src="images/before_rebase.png" />
          <Image src="images/after_rebase.png" />
        </Layout>
      </Slide>

      <Slide>
        <SlideTitle>Continue and abort</SlideTitle>
        <div>Use these options to control the flow of these commands</div>
        <CodePane lang="bash" source={continue_abort} />
      </Slide>

      <Slide>
        <SlideTitle>Orphan commits</SlideTitle>
        <div>Some commits cannot be found in the history of any branch<hr/></div>
        <div>These disconnected commits are not sent over the network</div>
        <Image src="images/orphan-commit.png" />
      </Slide>

      <Slide>
        <SlideTitle>Reflog</SlideTitle>
        <div>Git keeps a history of each local branch</div>
        <CodePane lang="bash" source={reflog} />
      </Slide>

      <Slide>
        <SlideTitle>Reflog refs</SlideTitle>
        <div>Use the reflog to reference commits</div>
        <CodePane lang="bash" source={reflog_refs} />
      </Slide>

      <Slide>
        <SlideTitle>Pushing modified history</SlideTitle>
        <div>Git requires you to resolve any inconsistancy locally before pushing<hr /></div>
        <div>Remotes will reject any non-linear push to a branch</div>
        <CodePane lang="bash" source={force_push} />
      </Slide>

      <Slide>
        <SlideTitle>Rebase workflow</SlideTitle>
        <div>keep your feature branch up to date and your history linear with pull rebase</div>
        <CodePane lang="bash" source={pull_rebase} />
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
