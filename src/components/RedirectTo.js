import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class RedirectTo extends Component {
    render() {
        const {link} = this.props;
        return link ? <Redirect to={ link }/> : null;
    }
}

RedirectTo.propTypes = {
    link: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    link: state.redirectTo.link
});

export default connect(mapStateToProps, {})(RedirectTo);
