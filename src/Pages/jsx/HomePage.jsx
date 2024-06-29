import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './../../pageContent/jsx/MainLayout';
import CVPage from './../../pageContent/jsx/CVHome';

const HomePage = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<MainLayout />} />
                <Route path="/cv" element={<CVPage />} />
            </Routes>
        </Router>
    );
}

export default HomePage;
