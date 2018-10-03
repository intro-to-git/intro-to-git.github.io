import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import courseModules from '../common/modules';

import { makeMenu } from '../common/components';

const Menu = makeMenu(courseModules);

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Route component={Menu} />
      <Switch>
        {[...courseModules].reverse().map(module =>
          <Route key={module.menu.path} path={module.menu.path} component={module.slides} />
        )}
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
