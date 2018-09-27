import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import intro from '../intro';
import bash from '../bash';
import git1 from '../git1';
import git2 from '../git2';

const courseModules = [
  intro, bash, git1, git2
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
        <li key={module.menu.path}><RouterLink to={module.menu.path}>{module.menu.title}</RouterLink></li>
      )}
    </ul>);
    return <div onClick={this.toggle} style={{ position: 'fixed', top:0, left:0, 'z-index': '5000', cursor: 'pointer' }}>
      💬 COS310: Intro to Git
      {this.state.opened && menu}
    </div>
  }
};

export default Menu;

export { courseModules };
