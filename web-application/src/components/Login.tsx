import React, { Component } from 'react';
import { authService } from '../services/authService';

class Login extends Component {
    state = {
        username: '',
        password: '',
        error: ''
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;

        if (this.validateForm()) {
            try {
                await authService.login(username, password);
                // Redirect to dashboard or another page after successful login
            } catch (error) {
                this.setState({ error: 'Invalid username or password' });
            }
        }
    };

    validateForm = () => {
        const { username, password } = this.state;
        if (!username || !password) {
            this.setState({ error: 'Username and password are required' });
            return false;
        }
        return true;
    };

    render() {
        const { username, password, error } = this.state;

        return (
            <div className="login-container">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;