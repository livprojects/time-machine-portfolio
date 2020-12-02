// == Import npm
import React from 'react';

// == Import
import './portfolio.scss';

// Components imports

import MainBody from './ProfilePic/ProfilePic';
import ProfilePic from './MainBody/MainBody';
import Dashboard from './Dashboard/Dashboard';

// == Composant
const Portfolio = () => (
  <div className="portfolio">
    <h1>Composant : Portfolio</h1>
    <ProfilePic />
    <MainBody />
    <Dashboard />
  </div>
);

// == Export
export default Portfolio;
