import React from 'react';
import FlexNav from '../../flex-nav/flex-nav.component';
import { Outlet, Link } from 'react-router-dom';
import '../../flex-nav/flex-nav.styles.css';

const Navigation = () => {
    return(
        <React.Fragment>
            <FlexNav></FlexNav>
            <Outlet></Outlet>
        </React.Fragment>
    );
}

export default Navigation;