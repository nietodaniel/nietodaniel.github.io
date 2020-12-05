import React from 'react';
import Logoicon from '../../components/commons/Logoicon'

const AppIcon = (locale) => {
  return (
    <a
      className="App-brand text-center small m-0 p-0 pl-2"
      href="http://www.digitalmedtools.com"
    >
      {Logoicon("p-0",'17px')}
      <span className="copperplate m-0">
        Digital Medtools
      </span>
      
    </a>
  );
};

export default AppIcon;
