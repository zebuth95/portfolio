import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} id="home"/>
      <InfoSection {...homeObjThree} id="about"/>
      <InfoSection {...homeObjTwo} id="resume"/>
    </>
  );
}

export default Home;
