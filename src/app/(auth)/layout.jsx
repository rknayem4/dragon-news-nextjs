import NavBar from '@/Components/shared/NavBar';
import React from 'react';
import { montserrat } from '../layout';

const layout = ({children}) => {
  return (
    <div className={`${montserrat.className}`}>
      <NavBar></NavBar>
      {children}
    </div>
  );
};

export default layout;