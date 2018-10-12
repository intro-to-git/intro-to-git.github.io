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
        <SlideTitle>Centralized</SlideTitle>
        <List>
          <ListItem>Everyone shares a common remote repository<hr/></ListItem>
          <ListItem>Each contributer uses a local clone for development<hr/></ListItem>
          <ListItem>In a small team with a few commits per day everyone can push to master<hr/></ListItem>
          <ListItem>In a larger team use feature branches or another workflow</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Forking with pull requests</SlideTitle>
        <Image width="70%" src="images/forking_prs.png" />
      </Slide>

      <Slide>
        <SlideTitle>Forking with pull requests</SlideTitle>
        <List>
          <ListItem>A maintainer (team) maintains the "central" repository<hr/></ListItem>
          <ListItem>Each contributer uses a local clone for development<hr/></ListItem>
          <ListItem>Each contributer also maintains a personal remote for sharing</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Forking with pull requests</SlideTitle>
        <List>
          <ListItem>Contributers pull from the "central" repository<hr/></ListItem>
          <ListItem>And submit "pull requests" to incorporate code in the "central" repository</ListItem>
        </List>
      </Slide>

      <Slide>
        <SlideTitle>Integration manager</SlideTitle>
        <div>This is another name for "Forking with pull requests"</div>
        <Image src="images/integration-manager.png" />
      </Slide>

      <Slide>
        <SlideTitle>Dictator workflow</SlideTitle>
        <div>A benevolent dictator pulls from a set of trusted contributers</div>
        <Image src="images/benevolent-dictator.png" />
      </Slide>

      <Slide>
        <SlideTitle>Creating a workflow</SlideTitle>
        <div>Depends on many factors</div>
        <List>
          <ListItem>size and structure of the project</ListItem>
          <ListItem>size and structure of the team</ListItem>
          <ListItem>propriotory vs open-source</ListItem>
          <ListItem>velocity of change</ListItem>
          <ListItem>continuous integration pipeline</ListItem>
        </List>
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
