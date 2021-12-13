import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './register/Register';

const Main = () => {
    return (
        <main id="main-content">
            <Routes>
                <Route path="/" />
                <Route path="/articles" element={<Home />} />
                <Route path="/about-us" />
                <Route path="/users/login" />
                <Route path="/users/register" element={<Register />}/>
            </Routes>
        </main>
    );
};

export default Main;