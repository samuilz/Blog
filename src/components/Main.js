import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login/Login';
import Register from './register/Register';

const Main = () => {
    return (
        <main id="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" />
                <Route path="/users/login" element={<Login />}/>
                <Route path="/users/register" element={<Register />}/>
            </Routes>
        </main>
    );
};

export default Main;