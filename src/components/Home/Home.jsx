import React from 'react';

import HeroArea from './HeroArea/HeroArea';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

const Home = () => {
  return (
    <main>
      <HeroArea />
      <Projects />
      <ContactMe />
    </main>
  );
};

export default Home;
