import './Login.css';
import { login } from '../../services/AuthService'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const loginHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
  
        login(email, password).then(res => navigate('/'));
    };

    return (
        <form action="POST" onSubmit={loginHandler}>
            <fieldset>
                <legend>Login</legend>
                <input type="email" id="email" placeholder="Email adress" />
                <input type="password" className="login-password" id="password" placeholder="Password" />
                <input className="login-submit" type="submit" value="Login" />
            </fieldset>
        </form>
    );
};

export default Login;