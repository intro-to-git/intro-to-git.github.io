import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Deck, Slide, List, ListItem, Heading, CodePane } from 'spectacle';

import MyDeck from '../common/deck';

import intro from '../intro';
import bash from '../bash';
import git1 from '../git1';

require('prismjs/components/prism-markup-templating.min');

const courseModules = [
  intro, bash, git1
];

const Menu = class extends React.Component {
  constructor() {
    super();

    this.state = { opened: false };

    this.toggle = (event) => {
      const eventTargetIsLink = event.target.tagName === 'A';
      this.setState(({ opened }) => {
        if (opened === true && eventTargetIsLink) {
          window.location += '#/0';
        };
        return { opened: !opened };
      });
    };
  }

  render() {
    const menu = (<ul>
      {courseModules.map(module =>
        <li><RouterLink to={module.menu.path}>{module.menu.title}</RouterLink></li>
      )}
    </ul>);
    return <div onClick={this.toggle} style={{ position: 'fixed', top:0, left:0, 'z-index': '5000', cursor: 'pointer' }}>
      💬 COS310: Intro to Git
      {this.state.opened && menu}
    </div>
  }
};

export default () => (
  <BrowserRouter>
    <React.Fragment>
        <Route component={Menu} />
        <Switch>
          {courseModules.map(module =>
            <Route path={module.menu.path} component={module.slides} />
          )}
        </Switch>
      </React.Fragment>
  </BrowserRouter>
);
