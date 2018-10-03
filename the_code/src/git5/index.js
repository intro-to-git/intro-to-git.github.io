import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Code, Quote  } from 'spectacle';

import { Deck, SlideTitle } from '../common/components';

export default {
  menu: { title: 'Week 4: Modifying history', path: '/git5' },
  slides: () => {
    return <Deck>
      <Slide>
        <SlideTitle>Modifying history</SlideTitle>
        <div>Revert, Cherry-pick, Rebase</div>
      </Slide>

      <Slide>
        <SlideTitle>Exercise</SlideTitle>
      </Slide>

      <Slide>
        <SlideTitle>Q&A</SlideTitle>
      </Slide>
    </Deck>
  }
};
