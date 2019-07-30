import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import instagram_logo from '../images/instagram_logo.png';
import {toggle} from '../actions/sidebar';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: window.location.pathname,
            parentTab: ''
        };
    }

    render() {
        return (
            <nav id="sidebar" className={this.props.isCollapsed ? 'active' : ''}>
                <div className="sidebar-header pointer"
                     id="sidebarCollapse"
                     onClick={() => this.props.toggle(this.props.isCollapsed)}>
                    <img src={instagram_logo} alt="Instagram Logo"/>
                </div>

                <ul className="list-unstyled components">
                    <li>
                        <Link to='/app/home'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/app/profile'>
                            Profile
                        </Link>
                    </li>

                </ul>

                <ul className="list-unstyled CTAs">
                    <li>
                        <Link to="/app/logout" className="download">Logout</Link>
                    </li>

                </ul>
            </nav>
        );
    }
}

Sidebar.propTypes = {
    toggle: PropTypes.func.isRequired,
    isCollapsed: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isCollapsed: state.sidebar.isCollapsed
});

export default connect(mapStateToProps, {toggle})(Sidebar);