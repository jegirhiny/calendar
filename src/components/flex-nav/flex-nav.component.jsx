import React from 'react';
import { Link } from 'react-router-dom';
import './flex-nav.styles.css';

const FlexNav = () => {
    return(
        <React.Fragment>
            <div className='flex-nav-container'>
                <Link to='/'><a href='#' className='flex-nav-header'>FLEX</a></Link>
                <ul className='flex-nav-list-left'>
                    <li><a href='#features'>Features</a></li>
                    <li><a href='#features'>Resources</a></li>
                    <li><a href='#features'>Plans</a></li>
                </ul>
                <ul className='flex-nav-list-right'>
                    <li><a href='#'>Log In</a></li>
                </ul>
                <Link to='calendar' className='flex-nav-header'>INSTALL</Link>
            </div>
        </React.Fragment>
    );
}

export default FlexNav;