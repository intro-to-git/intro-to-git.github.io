import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Quote  } from 'spectacle';

import MyDeck from '../common/deck';

import Deck from '../common/deck';

require('prismjs/components/prism-bash');

const git_hashObject = (
`echo "hello world" > hello.txt
echo "hello world" > bye.txt

HI=$(git hash-object hello.txt)
BYE=$(git hash-object bye.txt)

[ $HI = $BYE ] && echo "yes"
`);

const git_config = (
`git config --global user.name "your name"
git config --global user.email "your@email"

git config --list`);

const my_first_commit = (
`git init

git add filename
git commit
`);

const git_status = (`git status`);

const git_reset = (`git reset`);

const git_checkout = (`git checkout`);

export default {
  menu: { title: 'Git basics (2)', path: '/git2' },
  slides: () => {
    return <Deck>
      <Slide>
        <Heading textColor="white" size={5}>A basic workflow</Heading>
        <List>
          <ListItem>

          </ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Checkout - I dont need this change</Heading>
        <div>Discard any modifications done to a file, replace it with version from last commit</div>
        <CodePane lang="bash" source={git_checkout} />
      </Slide>


      <Slide>
        <Heading textColor="white" size={5}>Reset - I didnt mean to stage that</Heading>
        <div>Remove a revision of a file from the index, but not from the working tree</div>
        <CodePane lang="bash" source={git_reset} />
      </Slide>


      <Slide>
        <Heading textColor="white" size={5}>Exercise</Heading>
      </Slide>

      <Slide>
        <Heading textColor="white" size={5}>Resources</Heading>
        <List>
          <ListItem><Link href="https://www.atlassian.com/git">Atlassians guide to git</Link></ListItem>
          <ListItem><Link href="https://www.youtube.com/watch?v=ZDR433b0HJY">Intro to git by Scott Shacon</Link></ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Q&A</Heading>
      </Slide>
    </Deck>
  }
};
