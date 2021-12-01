import React from 'react';

import HeroArea from './HeroArea/HeroArea';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import ContactMe from './ContactMe/ContactMe';

const Home = () => {
  return (
    <main>
      <HeroArea />
      <Projects />
      <Skills />
      <ContactMe />
    </main>
  );
};

export default Home;
