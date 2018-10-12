import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Code, Quote  } from 'spectacle';

import { Deck, SlideTitle } from '../common/components';

const test_before_commit = (
`# .git/hooks/pre-commit
# hook must be executable
#!/bin/sh

# run linter and tests
# if either commands exit status is non zero
# the commit process will be canceled
npm run lint
npm run test`);

const prep_msg = (
`# .git/hooks/prepare-commit-msg
# hook must be executable
#!/bin/sh

# puts the name of the current branch
# in the commit message template
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
echo "This commit was made on branch $BRANCH" > "$1"`);

const enforce_msg = (
`# .git/hooks/commit-msg
# hook must be executable
#!/bin/sh

# check if the commit message starts with one of the words FIX or FEATURE or INFRASTRUCTURE
INCLUDES=$(cat $1 | grep -e '^FIX|FEATURE|INFRASTRUCTURE')
[ -z $INCLUDES ] && echo "commit message format error" && exit 1`);

const bare_repo = (
`# create a normal repository with a working directory
git init

# create a bare repository *without* a working directory
git init --bare`);

export default {
  menu: { title: 'Week 4: Hooks and Continuous Integration', path: '/git7' },
  slides: () => {
    return <Deck>
      <Slide>
        <SlideTitle>Git hooks</SlideTitle>
        <div>Automate custom actions in your git workflow</div>
      </Slide>

      <Slide>
        <SlideTitle>Creating a bare repository</SlideTitle>
        <div>A bare repository does not have a working directory</div>
        <CodePane lang="bash" source={bare_repo} />
      </Slide>

      <Slide>
        <SlideTitle>Git hooks</SlideTitle>
        <Image src="images/git-hooks.jpg" />
      </Slide>

      <Slide>
        <SlideTitle>Popular scenarios</SlideTitle>
        <List>
          <ListItem>Run tests before commit</ListItem>
          <ListItem>Enfore commit message format</ListItem>
          <ListItem>Continous integration</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>pre-commit</SlideTitle>
        <div>Run tests before commit</div>
        <CodePane lang="bash" source={test_before_commit} />
      </Slide>

      <Slide>
        <SlideTitle>prepare-commit-msg</SlideTitle>
        <div>Modify default commit message template</div>
        <CodePane lang="bash" source={prep_msg} />
      </Slide>

      <Slide>
        <SlideTitle>Enfore commit message format</SlideTitle>
        <div></div>
        <CodePane lang="bash" source={enforce_msg} />
      </Slide>

      <Slide>
        <SlideTitle>Continuous integration</SlideTitle>
        <Image src="images/ci-architecture.png" />
      </Slide>

      <Slide>
        <SlideTitle>Continuous integration</SlideTitle>
        <List ordered>
          <ListItem>Commit code changes</ListItem>
          <ListItem>Push code to team repository</ListItem>
          <ListItem>CI runs build & tests</ListItem>
          <ListItem>CI reports outcomes</ListItem>
          <ListItem>CI triggers deployment on success</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Continuous integration benefits</SlideTitle>
        <List>
          <ListItem>Infrastructure as code</ListItem>
          <ListItem>Automation through Source Control</ListItem>
          <ListItem>Automatically running builds</ListItem>
          <ListItem>Automatically publish artifacts</ListItem>
          <ListItem>Automatically running tests</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Continuous integration services</SlideTitle>
        <List>
          <ListItem>Drone.io</ListItem>
          <ListItem>TravisCI</ListItem>
          <ListItem>CircleCI</ListItem>
          <ListItem>Jenkins</ListItem>
          <ListItem>TeamCity</ListItem>
          <ListItem>and many others</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Typical CI config</SlideTitle>
        <List>
          <ListItem>Build environment</ListItem>
          <ListItem>Build commands</ListItem>
          <ListItem>Test commands</ListItem>
          <ListItem>Notifications</ListItem>
          <ListItem>Deployment</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Example continous deployment pipeline</SlideTitle>
        <Image style={{backgroundColor: 'white'}} src="images/google-travis-ci-process.png" />
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
