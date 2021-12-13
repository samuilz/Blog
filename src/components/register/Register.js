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
                    <label htmlFor="gender">Gender</label>
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </p>
                <p className="p-wrap">
                    <input type="checkbox" />
                    <label htmlFor="">I agree to the Term and Conditions</label>
                </p>
            </fieldset>
        </form>
    );
};

export default Register;