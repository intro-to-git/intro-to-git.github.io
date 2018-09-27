import React from 'react';

import { Switch, Route, NavLink as RouterLink } from 'react-router-dom';

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
      const eventTargetIsTitle = event.target.className.includes('course_title');
      this.setState(({ opened }) => {
        if (opened === true && eventTargetIsLink) {
          window.location += '#/0';
          return { opened: false };
        };

        return { opened: !opened };
      })
    };

    this.hide = () => {
      this.setState({ opened: false });
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.hide);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.hide);
  }

  render() {
    const menu = (<ul class="course_menu">
      {courseModules.map(module =>
        <li key={module.menu.path}><RouterLink activeClassName="menu_active_module" exact to={module.menu.path}>{module.menu.title}</RouterLink></li>
      )}
    </ul>);
    return <div onClick={this.toggle} class="course_title">
      <span style={{'font-size': '0.75em'}}>⬇️ COS310: Intro to Git > <Switch>{[...courseModules].reverse().map(
        module => <Route path={module.menu.path} render={() => module.menu.title} />)}</Switch></span>
      {this.state.opened && menu}
    </div>
  }
};

export default Menu;

export { courseModules };
