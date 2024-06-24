import '../css/CVCards.css'

const CVCards = ({title, company, date, content}) => {
    return (
        <>
            <div className="my-4">
                <h3 className="cardtitles fw-bold">{title}</h3>
                <h6 className="cardtitles fw-bold">{company} | {date}</h6>
                <div>{content}</div>
            </div>
        </>
    );
}

export default CVCards;