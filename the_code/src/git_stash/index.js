import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Code, Quote  } from 'spectacle';

import { Deck, SlideTitle } from '../common/components';


const stash = (
`# save unfinished work as a new commit
git stash save -p "unfinished work"

# stash list and reflog stash are the same
git stash list
git reflog stash

# stash show and show stash are the same
git stash show -p
git show stash@{0}

# pop vs apply
git stash pop stash@{1}
git stash apply stash@{1}`);

const bisect = (
`git bisect start

# Current version is bad
git bisect bad

# v1.0 is known to be good
git bisect good v1.0

# clean up and reset to prev state
git bisect reset`);

const submodules = (
`# add a submodule to a project
git submodule add REPO-URL

# clone a repository with submodules
git clone --recurse-submodules REPO`);

export default {
  menu: { title: 'Week 4: Even more git', path: '/git8' },
  slides: () => {
    return <Deck>
      <Slide>
        <SlideTitle>Git stash</SlideTitle>
        <div>A special branch for work-in-progress</div>
        <CodePane lang="bash" source={stash} />
      </Slide>

      <Slide>
        <SlideTitle>Debugging with git</SlideTitle>
        <div>git bisect uses a binary search algorithm to find which commit in your project’s history introduced a bug.</div>
        <CodePane lang="bash" source={bisect} />
      </Slide>

      <Slide>
        <SlideTitle>Submodules</SlideTitle>
        <div>you want to be able to treat the two projects as separate yet still be able to use one from within the other<hr /></div>
        <div>Although submodules are subdirectories, Git doesn’t track its contents, instead, Git tracks the current commit for that repository</div>
        <CodePane lang="bash" source={submodules} />
      </Slide>

    </Deck>
  }
};
