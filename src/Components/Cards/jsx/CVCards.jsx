import '../css/CVCards.css'

const CVCards = ({title, company, date, content}) => {
    return (
        <>
            <div className="my-3">
                <h4 className="cardtitles fw-bold">{title}</h4>
                <h6 className="cardtitles fw-bold">{company} | {date}</h6>
                <div className="lead fs-6">{content}</div>
            </div>
        </>
    );
}

export default CVCards;