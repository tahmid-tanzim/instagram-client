import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavItem = ({location, path, activeTab, children /* , match, history, */}) => {
    console.log('activeTab: ', activeTab, ' location: ', location, ' path: ', path, ' children: ', children);
    return (
        <li className={ location.pathname === path ? 'active' : '' }> activeTab: { activeTab }
            <Link to={ path }>{ children }</Link>
        </li>
    );
};

export default withRouter(NavItem);