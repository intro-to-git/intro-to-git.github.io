import React from 'react';

import { Deck as RealDeck, Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Quote  } from 'spectacle';

import { Switch, Route, NavLink as RouterLink } from 'react-router-dom';

import theme from './theme';

const Deck = ({ children }) => (
  <RealDeck
    transition={['slide']}
    transitionDuration={250}
    theme={theme}
    progress="bar">
    {children}
  </RealDeck>
);

const SlideTitle = ({ children, ...props }) => <Heading textColor="white" size={5} {...props}>{children}</Heading>;

const makeMenu = courseModules => class extends React.Component {
  constructor() {
    super();

    this.menuRef = React.createRef();

    this.state = { opened: false };

    this.followLink = (event) => {
      const eventTargetIsLink = event.target.tagName === 'A';
      const eventTargetIsTitle = event.target.className.includes('menu-link');
      const eventTargetText = event.target.innerText;
      this.setState(({ opened }) => {
        if (opened === true && eventTargetIsLink && !eventTargetIsTitle) {
          window.document.title = `${eventTargetText} : COS310 Intro to git`;
          window.location += '#/0';
          return { opened: false };
        };
      });
    };

    this.toggle = (e) => {
      e.preventDefault();
      this.setState(({opened}) => ({ opened: !opened }));
    }

    this.hide = (e) => {
      if (this.menuRef.current && !this.menuRef.current.contains(e.target)) {
        this.setState({ opened: false });
      }
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
    return <div ref={this.menuRef} onClick={this.followLink} class="course_title">
      <a href="#" className="menu-link" onClick={this.toggle}><span className="git-logo"><img width="32px" src="images/git-logo.png" /> COS310: Intro to Git &gt; <Switch>{[...courseModules].reverse().map(
        module => <Route path={module.menu.path} render={() => module.menu.title} />)}</Switch></span></a>
      {this.state.opened && menu}
    </div>
  }
};

export { SlideTitle, Deck, makeMenu };
