import './Register.css';
import { login, register } from '../../services/AuthService'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const registerHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const firstName = e.target.firstname.value;
        const lastName = e.target.lastname.value;
        const age = e.target.age.value;
        
       register(email, password, firstName, lastName, age)
       .then(res => {
            login(email, password);
            navigate('/');
        });
    };

    return (
        <form action="POST" onSubmit={registerHandler}>
            <fieldset>
                <legend>Register</legend>
                <input type="email" id="email" placeholder="Email adress" />
                <input type="text" id="firstname" placeholder="First name" />
                <input type="text" id="lastname" placeholder="Last name" />
                <input type="number" id="age" placeholder="Age" />
                <input type="password" id="password" placeholder="Password" />
                <input type="password" id="confirm-password" placeholder="Confirm password" />
                <p>
                    <label>Gender</label>
                    <select className="gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </p>
                <input className="submit" type="submit" value="Register" />
            </fieldset>
        </form>
    );
};

export default Register;