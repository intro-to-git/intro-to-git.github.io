// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const WithExtraProps = ({ original, extraProps = {} }) =>
  React.cloneElement(original, extraProps, original.props.children);

const DarkSlide = (props) => <Slide bgColor="tertiary">Test1</Slide>;

export default () => (
  <Deck
    transition={['slide']}
    transitionDuration={250}
    theme={theme}>
    <Slide bgColor="secondary" textColor="primary">
      <Heading fit>COS310: Intro to Git</Heading>
    </Slide>
  </Deck>
);
