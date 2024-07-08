import { Link } from 'react-router-dom';
import React from 'react';

const MainLayout = ({ firstCard, secondCard, backgroundImage}) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center align-content-center hover-shadow" style={{ height: "100vh", backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="col-lg-6 col-md-6 col-sm-6 m-0 p-5">
                    <Link to="/CV">
                        {firstCard}
                    </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 m-0 p-0 p-5">
                    {secondCard}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
