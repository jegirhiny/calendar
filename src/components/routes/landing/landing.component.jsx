import React from 'react';
import FlexBody from '../../flex-body/flex-body.component'
import FlexFooter from '../../flex-footer/flex-footer.component';
import { Outlet } from 'react-router-dom';

const Landing = () => {
  return (
    <React.Fragment>
        <Outlet></Outlet>
        <FlexBody></FlexBody>
        <FlexFooter></FlexFooter>
    </React.Fragment>
  );
}

export default Landing;