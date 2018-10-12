import React from 'react';

import { BrowserRouter, Route, Switch, Link as RouterLink } from 'react-router-dom';

import { Slide, List, ListItem, Heading, CodePane, Link, Image, Layout, BlockQuote, Cite, Code, Quote  } from 'spectacle';

import { Deck, SlideTitle } from '../common/components';

export default {
  menu: { title: 'Week 4: Server side git', path: '/git6' },
  slides: () => {
    return <Deck>
      <Slide>
        <SlideTitle>Server-side git</SlideTitle>
        <div>Bare repositories, protocols, continous integration</div>
      </Slide>

      <Slide>
        <SlideTitle>Continous Integration</SlideTitle>
        <div></div>
      </Slide>

      <Slide>
        <SlideTitle>Things we&apos;ve missed</SlideTitle>
        <div>.gitignore, .gitattributes, tags, git blame </div>
      </Slide>

      <Slide>
        <SlideTitle>Debugging with git</SlideTitle>
        <div>git bisect</div>
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
