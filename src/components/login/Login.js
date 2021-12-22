import './Login.css';


const Login = () => {
    return (
        <form action="POST">
            <fieldset>
                <legend>Login</legend>
                <input type="email" id="login-email" placeholder="Email adress" />
                <input type="password" id="login-password" placeholder="Password" />
                <input className="login-submit" type="submit" value="Login" />
            </fieldset>
        </form>
    );
};

export default Login;