import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu, { courseModules } from '../common/menu';

import Home from './home';

export default () => (
  <BrowserRouter>
    <React.Fragment>
        <Route component={Menu} />
        <Switch>
          {courseModules.map(module =>
            <Route key={module.menu.path} path={module.menu.path} component={module.slides} />
          )}
          <Route component={Home} />
        </Switch>
      </React.Fragment>
  </BrowserRouter>
);
