// == Import npm
import React from 'react';

// == Import
import './present.scss';

// Components imports

import Projects from './Projects/Projects';
import Personal from './Personal/Personal';

// == Composant
const Present = () => (
  <div className="present">
    <h1>Composant : Present</h1>
    <Projects />
    <Personal />
  </div>
);

// == Export
export default Present;
