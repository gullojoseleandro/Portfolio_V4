import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const ReturnToHomeButton = () => {
    return (
        <>
            <Link
                to="/"
                className="fixed-button align-items-center justify-content-center d-flex flex-column mb-6 bg-transparent"
                style={{ width: "20px", height: "40px", borderRadius: "50%" }}
            >
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    size="2x"
                    style={{ color: "#FFBA08" }}
                />
                <p
                    style={{ color: "#FFBA08" }}
                    className={"m-0 p-0 fw-bold decoration-none text-center"}
                >
                    return
                </p>
            </Link>
        </>
    )
}

export default ReturnToHomeButton