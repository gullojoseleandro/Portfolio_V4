import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const ReturnToHomeButton = () => {
    return (
        <Link
            to="/"
            className="fixed-button align-items-center justify-content-center d-flex flex-column"
            style={{
                width: "50px",
                bottom: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#FFBA08",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F48C06";
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFBA08";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.3)";
            }}
        >
            <FontAwesomeIcon
                icon={faArrowLeft}
                size="lg"
                className={"text-black"}
                style={{ marginBottom: "4px", fontSize: "1.2rem" }}
            />
            <p
                className={"bg-transparent fw-bold text-black m-0 p-0"}
                style={{
                    fontSize: "0.7rem",
                    textShadow: "1px 1px 2px rgba(255, 255, 255, 0.7)",
                }}
            >
                Home
            </p>
        </Link>
    );
}

export default ReturnToHomeButton;
