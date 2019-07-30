import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import spinner from '../images/ajax-loader.gif';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: false
        };
    }

    componentDidMount() {
        localStorage.removeItem('username');

        this.setState({
            redirectTo: '/login'
        });
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={ this.state.redirectTo }/>;
        }

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4 text-center">
                    <img src={ spinner } style={ {
                        width: 20,
                        height: 20,
                        marginTop: 150
                    } } alt="Ajax Loader"/>
                </div>
            </div>
        );
    }
}

export default Logout;
