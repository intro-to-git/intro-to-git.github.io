import React from 'react';

import { Deck as RealDeck, Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Quote  } from 'spectacle';

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

export { SlideTitle, Deck };
