import './Register.css';


const Register = () => {
    return (
        <form action="POST">
            <fieldset>
                <legend>Register</legend>
                <input type="email" id="email" placeholder="Email adress" />
                <input type="text" id="first-name" placeholder="First name" />
                <input type="text" id="last-name" placeholder="Last name" />
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