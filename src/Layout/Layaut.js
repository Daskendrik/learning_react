import React from 'react';
import Menu from '../Components/Menu';
import { Outlet } from 'react-router';

const Layput = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layput;
