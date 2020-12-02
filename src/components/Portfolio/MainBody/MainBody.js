// == Import npm
import React from 'react';

// == Import
import './mainbody.scss';

// Components imports

import TabsHeader from './TabsHeader/TabsHeader';
import Past from './Past/Past';
import Present from './Present/Present';
import Future from './Future/Future';



// == Composant
const MainBody = () => (
  <div className="mainbody">
    <h1>Composant : MainBody</h1>
    <TabsHeader />
    <Past />
    <Present />
    <Future />
  </div>
);

// == Export
export default MainBody;
