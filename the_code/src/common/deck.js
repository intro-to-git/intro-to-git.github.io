import React from 'react';

import { Deck } from 'spectacle';

import { Link } from 'react-router-dom';

import theme from './theme';

export default ({ children }) => (
  <Deck
    transition={['slide']}
    transitionDuration={250}
    theme={theme}
    progress="bar">
    {children}
  </Deck>
);
