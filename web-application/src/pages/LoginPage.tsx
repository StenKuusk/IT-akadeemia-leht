import React, { useState } from 'react';
import Login from '../components/Login';

const LoginPage: React.FC = () => {
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (username: string, password: string) => {
        try {
            // Call the login function from the Login component
            await Login.login(username, password);
            // Redirect to the dashboard or handle successful login
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <Login onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;