import React from 'react';

import { Slide, Heading, List, ListItem, Link } from 'spectacle';

import { Deck } from '../common/components';

export default {
  menu: { title: 'Course introduction', path: '/' },
  slides: () => (
    <Deck>
      <Slide>
        <Heading fit>COS310: Intro to Git</Heading>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Course topics</Heading>
        <List>
          <ListItem>basic bash</ListItem>
          <ListItem>all of git <br/>(commits, branches, remotes, etc)</ListItem>
          <ListItem>workflows<br/>(pull requests, continous integration, etc)</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>🎯 Course objectives</Heading>
        <List>
          <ListItem>learn how to use git well<br/>by yourself and in a team</ListItem>
          <ListItem>understand the basics of how git works internally</ListItem>
          <ListItem>practice git until it becomes casual to use</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>Course stats</Heading>
        <List>
          <ListItem>⏰ 5 weeks</ListItem>
          <ListItem>💻 2 in-class excersices</ListItem>
          <ListItem>🏡 2 homework assignments</ListItem>
          <ListItem>📝 2 tests</ListItem>
          <ListItem>⭐ 1 credit</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>💻 in-class excersices</Heading>
        <List>
          <ListItem>⏰ 2nd, 4th week (30 minuntes each)</ListItem>
          <ListItem>⭐ 2 x 15% of final grade</ListItem>
          <ListItem>students will receive several specific problems
            based on the materials covered in class</ListItem>
          <ListItem>Example problem: Count all commits made by personX after dateY</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>🏡 1st homework assignments</Heading>
        <List>
          <ListItem>⏰ due by week 3</ListItem>
          <ListItem>⭐ 15% of final grade</ListItem>
          <ListItem>the fist homework will be individual</ListItem>
          <ListItem>Example task: simulate the history of a given repository</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>🏡 2nd homework assignments</Heading>
        <List>
          <ListItem>⏰ due by week 5</ListItem>
          <ListItem>⭐ 15% of final grade</ListItem>
          <ListItem>the second homework will require forming groups of 3 or 4</ListItem>
          <ListItem>Example tasks: follow a selected workflow, perform code reviews</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>📝 midterm test</Heading>
        <List>
          <ListItem>⏰ week 3 (30 minutes)</ListItem>
          <ListItem>⭐ 15% of final grade</ListItem>
          <ListItem>Multiple choice and short answer questions</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>📝 final test</Heading>
        <List>
          <ListItem>⏰ week 5 (1 hour)</ListItem>
          <ListItem>⭐ 25% of final grade</ListItem>
          <ListItem>Will cover all the materials</ListItem>
          <ListItem>Multiple choice and short answer questions</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading textColor="white" size={5}>📚 Suggested readings</Heading>
        <List>
          <ListItem><Link href="https://git-scm.com/book/en/v2">The Git book</Link></ListItem>
          <ListItem><Link href="https://codewords.recurse.com/issues/two/git-from-the-inside-out">Git from the inside out</Link></ListItem>
        </List>
      </Slide>
    </Deck>
  )
};
