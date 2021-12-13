import { Routes, Route } from 'react-router-dom';
import Home from './Home';

const Main = () => {
    return (
        <main id="main-content">
            <Routes>
                <Route path="/" />
                <Route path="/articles" element={<Home />} />
                <Route path="/about-us" />
                <Route path="/users/login" />
                <Route path="/users/register" />
            </Routes>
        </main>
    );
};

export default Main;