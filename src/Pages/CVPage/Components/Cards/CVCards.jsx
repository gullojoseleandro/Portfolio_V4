import './CVCards.css'

const CVCards = ({title, company, date, content}) => {
    return (
        <>
            <div className="my-2">
                <h3 className="cardtitle fw-bold">{title}</h3>
                <h6 className="cardcompany fw-bold">{company} | {date}</h6>
                <div className='cardcontent'>{content}</div>
            </div>
        </>
    );
}

export default CVCards;