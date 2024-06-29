import { Link } from 'react-router-dom';
import HomeCards from "../../Components/Cards/jsx/HomeCards";
import ProgrammingImgTwo from './../../assets/img/image_4_codigofondonegro.jpg';
import PortfolioImg from './../../assets/img/image_6.jpg';
import WoodsImg from './../../assets/img/image_7.jpg';

const MainLayout = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center align-content-center hover-shadow" style={{ height: "100vh", backgroundImage: `url(${WoodsImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="col-lg-6 col-md-6 col-sm-6 m-0 p-5">
                    <Link to="/cv">
                        <HomeCards image={PortfolioImg} title={"Versión Curriculum Vitae."} />
                    </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 m-0 p-0 p-5">
                    <HomeCards image={ProgrammingImgTwo} title={"Versión WEB (Próximamente)."} />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
