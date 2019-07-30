import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Alerts from './Alerts';
import Http from '../services/Http';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            error: {
                username: false
            },
            alert: null,
            redirectTo: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            alert: null
        });

        const {username} = this.state;

        Http.POST('login', {username})
            .then(({data}) => {
                localStorage.setItem('user_id', JSON.stringify(data.id));
                localStorage.setItem('username', JSON.stringify(data.username));
                this.setState({
                    redirectTo: '/app/home'
                });
            })
            .catch(( {response} ) => {
                this.setState({
                    username: '',
                    alert: {
                        message: response.data || 'Invalid Username',
                        type: 'danger'
                    }
                });
            });

    }

    handleValidation(event) {
        const {name} = event.target;
        const error = {
            [name]: !this.state[name]
        };

        this.setState(previous_state => ({
            error: {
                ...previous_state.error,
                ...error
            }
        }));
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo}/>;
        }

        return (
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="wrapper-box">
                        <form className="form-signin" onSubmit={this.handleSubmit}>
                            <h2 className="form-signin-heading">Please Login</h2>

                            { this.state.alert ? <Alerts type={ this.state.alert.type } value={ this.state.alert.message }/> : null }

                            <input type="text"
                                   className="form-control"
                                   id="username"
                                   name="username"
                                   placeholder="Username"
                                   value={this.state.username}
                                   onChange={this.handleChange}
                                   onBlur={this.handleValidation}/>
                            <button className="btn btn-lg btn-success btn-block margin-top-20"
                                    type="submit"
                                    disabled={!this.state.username}>Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
