import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Quote  } from 'spectacle';

import { Deck } from '../common/components';

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

const git_checkout = (`git checkout -- filename`);

export default {
  menu: { title: 'Git basics', path: '/git1' },
  slides: () => {
    return <Deck>
      <Slide>
        <BlockQuote>
          <Quote style={{ color: 'white' }}>Git is an open source, <u>distributed</u> version control system</Quote>
          <Cite>Git website</Cite>
          </BlockQuote>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>What is a version control system</Heading>
        <div>
          Version control is a system that keeps track of every modification to your code in a special database.
          If a mistake is made, developers can compare earlier versions of the code
          to help fix the mistake while minimizing disruption to all team members.
        </div>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Why do we need version control</Heading>
          <List>
            <ListItem>tracking every change by each contributor<hr/></ListItem>
            <ListItem>prevent concurrent work from conflicting<hr/></ListItem>
            <ListItem>protect the code against corruption (intentional and accidental)<hr/></ListItem>
            <ListItem>facilitate a smooth, continuous flow of changes to the code</ListItem>
          </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Types of version control</Heading>
          <List>
            <ListItem>ad-hoc e.g. time-stamped files<hr/></ListItem>
            <ListItem>centralized e.g. svn<hr/></ListItem>
            <ListItem>distributed e.g. git</ListItem>
          </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Centralized vs Distributed</Heading>
        <Layout>
          <Image src="images/centralized.png" />
          <Image src="images/distributed.png" />
        </Layout>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>A quick history of git</Heading>
          <List>
            <ListItem>2005 - Created by Linus Torvalds<hr/></ListItem>
            <ListItem>2008 - GitHub founded<hr/></ListItem>
            <ListItem>2013 - Git becomes the most popluar source control tool</ListItem>
          </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Git design characteristics</Heading>
          <List>
            <ListItem>Strong support for non-linear development<hr/></ListItem>
            <ListItem>Distributed development<hr/></ListItem>
            <ListItem>Compatibility with existent systems and protocols<hr/></ListItem>
            <ListItem>Efficient handling of large projects</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading textColor="white" size={5}>Git design characteristics</Heading>
          <List>
            <ListItem>Cryptographic authentication of history<hr/></ListItem>
            <ListItem>Toolkit-based design<hr/></ListItem>
            <ListItem>Pluggable merge strategies<hr/></ListItem>
            <ListItem>Explicit, periodic object packing</ListItem>
          </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Snapshots, Not Differences</Heading>
        <div>Deltas are the differences between the current and last version of a file</div>
        <Image src="images/deltas.png" />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Snapshots, Not Differences</Heading>
        <div>Snapshots record the entire current state of a file</div>
        <Image src="images/snapshots.png" />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>The Three States of code</Heading>
        <div>Git recoginzes 3 states of code: work-in-progress, staged, committed</div>
        <Image src="images/areas.png" />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Content-addressable</Heading>
        <div>Git does not store file meta-data. Instead it indexes the content of each file.</div>
        <CodePane lang="bash" source={git_hashObject} />
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>First steps in using git</Heading>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Tell git who you are</Heading>
        <CodePane lang="bash" source={git_config} />
      </Slide>

      <Slide>
        <Heading textColor="white" size={5}>Creating a repository</Heading>
        <div>Git creates a .git directory where it stores all its data</div>
        <CodePane lang="bash" source={my_first_commit} />
      </Slide>

      <Slide>
        <Heading textColor="white" size={5}>Status - a dev's best friend</Heading>
        <div>Git status tell you if you have modified and staged files</div>
        <CodePane lang="bash" source={git_status} />
      </Slide>

      <Slide>
        <Heading textColor="white" size={5}>Reset - I didn't mean to stage that</Heading>
        <div>Remove a revision of a file from the index, but not from the working tree</div>
        <CodePane lang="bash" source={git_reset} />
      </Slide>

      <Slide>
        <Heading textColor="white" size={5}>Checkout - I don't need this change</Heading>
        <div>Discard any modifications done to a file, replace it with version from last commit</div>
        <CodePane lang="bash" source={git_checkout} />
      </Slide>

      <Slide>
        <Heading textColor="white" size={5}>Exercise</Heading>
      </Slide>

      <Slide>
        <Heading textColor="white" size={5}>Resources</Heading>
        <List>
          <ListItem><Link href="https://www.atlassian.com/git">Atlassian's guide to git</Link></ListItem>
          <ListItem><Link href="https://www.youtube.com/watch?v=ZDR433b0HJY">Intro to git by Scott Shacon</Link></ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Q&A</Heading>
      </Slide>
    </Deck>
  }
};
