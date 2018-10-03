import React from 'react';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Code, Quote  } from 'spectacle';

import { Deck, SlideTitle } from '../common/components';

const git_clone = (
`# clone using ssh
git clone git@github.com:intro-to-git/intro-to-git.github.io.git

# clone using http
git clone https://github.com/intro-to-git/intro-to-git.github.io.git

# clone from the file system
git clone ~/projects/intro-to-git`);

const git_remote = (
`# list remotes with urls
git remote -v

# add a new remote
git remote add github git@github.com:user/project.git

# remove a remote
git remote remove github`);

const git_fetch_pull = (
`# download commits from a remote repository
git fetch origin master

# download commits and merge the remote branch into the current local branch
git pull origin master`);

const git_push = (
`# push the new commits on the current branch to the given remote branch
git push origin master`);


export default {
  menu: { title: 'Week 3: Git remotes', path: '/git4' },
  slides: () => {
    return <Deck>
      <Slide>
        <SlideTitle>Git remotes</SlideTitle>
        <div>Remotes are other independent copies of a repository</div>
        <Image src="images/remotes_1.png" />
      </Slide>

      <Slide>
        <SlideTitle>Remote branches</SlideTitle>
        <div>Remote branches are read-only, cannot be updated locally</div>
        <Image src="images/remotes_1.png" />
      </Slide>

      <Slide>
        <SlideTitle>Cloning</SlideTitle>
        <div>Download the full history of a repository and checkout master</div>
        <CodePane lang="bash" source={git_clone} />
      </Slide>

      <Slide>
        <SlideTitle>Remotes</SlideTitle>
        <div></div>
        <CodePane lang="bash" source={git_remote} />
      </Slide>

      <Slide>
        <SlideTitle>Fetch vs Pull</SlideTitle>
        <div>Fetching only downloads data, pull also performs a merge</div>
        <CodePane lang="bash" source={git_fetch_pull} />
      </Slide>

      <Slide>
        <SlideTitle>Push</SlideTitle>
        <div></div>
        <CodePane lang="bash" source={git_push} />
      </Slide>

      <Slide>
        <SlideTitle>Commands scope</SlideTitle>
        <div></div>
        <Image src="images/git_commands_effect.png" />
      </Slide>

      <Slide>
        <SlideTitle>Distributed workflows</SlideTitle>
        <List>
          <ListItem>Centralized</ListItem>
          <ListItem>Forks</ListItem>
          <ListItem>Integration-Manager</ListItem>
          <ListItem>Dictator and Lieutenants</ListItem>
          <ListItem>Gitflow</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Centralized</SlideTitle>
        <div>Single or Multi branch</div>
        <Image width="75%" src="images/centralized.svg" />
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
