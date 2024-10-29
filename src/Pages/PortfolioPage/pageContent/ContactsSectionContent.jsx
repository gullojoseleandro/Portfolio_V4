import React, { useState,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCopy, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import useWindowWidth from 'Hooks/useWindowWidth';
import emailjs from '@emailjs/browser';

import "./ContactsSectionContent.css";
import CVButton from '../Components/Button/CVButton';

const icons = [
    {
        href: "https://github.com/gullojoseleandro",
        icon: faGithub,
        alt: "github link",
        name: "Github"
    },
    {
        href: "https://www.linkedin.com/in/gullo-jose-leandro/",
        icon: faLinkedin,
        alt: "linkedin link",
        name: "Linkedin"
    },
    {
        href: "https://wa.me/3489594918",
        icon: faWhatsapp,
        alt: "whatsapp link",
        name: "Whatsapp"
    },
    {
        icon: faMobileScreen,
        alt: "phone link",
        name: "+54 9 3489 59-4918"
    },
    {
        icon: faEnvelope,
        alt: "email link",
        name: "joseleandrogullo@gmail.com"
    },
];

const inputs = [
    {
        type: "text",
        placeholder: "Nombre",
        id: "name",
        name: "name",
        hidden: false,
    },
    {
        type: "email",
        placeholder: "Email",
        id: "email",
        name: "to_email",
        hidden: false,
    },
]

const ContactsSectionContent = () => {
    const activeWidth = useWindowWidth();
    const form = useRef();
    const [isHover, setIsHover] = useState(false);
    // const [isButtonHover, setIsButtonHover] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [copiedIconIndex, setCopiedIconIndex] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3mig6ie', 'template_98hkkr2', form.current, {
            publicKey: 'K9fLKbceuELgaLo1H',
        })
        .then(() => {
            console.log('Email sent to you!');
    
            emailjs.sendForm('service_3mig6ie', 'template_fpa4wbp', form.current, {
                publicKey: 'K9fLKbceuELgaLo1H',
            })
            .then(() => {
                console.log('Confirmation email sent to the user!');
            }, (error) => {
                console.log('Failed to send confirmation email...', error.text);
            });
        }, (error) => {
            console.log('Failed to send email to you...', error.text);
        });
    };
    

    const handleCopy = (text, index) => {
        navigator.clipboard.writeText(text);
        setFeedback(`Copiado: ${text}`);
        setCopiedIconIndex(index);
        setTimeout(() => { setFeedback(''); setCopiedIconIndex(null) }, 1500);
    };

    const handleCopyFallback = (text, index) => {
        const tempInput = document.createElement("textarea");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        setCopiedIconIndex(index);

        setTimeout(() => {
            setCopiedIconIndex(null);
        }, 1000);
    };

    return (
        <section className="d-flex align-items-center justify-content-center h-100">
            {activeWidth > 768 ? (
                <>
                    <div data-aos="fade-down" className={"row bg-transparent"} style={{ width: "80%" }}>
                        <div className={"col-6 border rounded-start"}>
                            <div className={"d-flex flex-column align-items-start justify-content-center gap-4 p-4"}>
                                <h2 className={"fw-bold text-center text-light fst-italic w-100"} style={{ fontSize: "1.5rem", borderBottom: "2px solid #FFBA08" }}>
                                    <span>―</span> Mis redes sociales <span>―</span>
                                </h2>
                                {icons.filter((icon) => icon.icon !== faMobileScreen && icon.icon !== faEnvelope).map((icon, index) => (
                                    <div key={index}>
                                        <a className={"d-flex align-items-center gap-3"} href={icon.href} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon size="2x" color="#FFBA08" icon={icon.icon} />
                                            <p
                                                className={"m-0 p-0 fw-bold"}
                                                onMouseEnter={() => setIsHover(index)}
                                                onMouseLeave={() => setIsHover(null)}
                                                style={{ textDecoration: "none", color: isHover === index ? "#FFBA08" : "whitesmoke" }}
                                            >
                                                {icon.name}
                                            </p>
                                        </a>
                                    </div>
                                ))}
                                <h2 className={"fw-bold text-center text-light fst-italic w-100"} style={{ fontSize: "1.5rem", borderBottom: "2px solid #FFBA08" }}>
                                    <span>―</span> Contacto <span>―</span>
                                </h2>
                                {icons.filter((icon) => icon.icon === faMobileScreen || icon.icon === faEnvelope).map((icon, index) => (
                                    <div key={index}>
                                        <a className={"d-flex align-items-center gap-3"} href={icon.href} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon size="2x" color="#FFBA08" icon={icon.icon} />
                                            <p className={"m-0 p-0 fw-bold"} style={{ textDecoration: "none", color: "whitesmoke" }}>{icon.name}</p>
                                            <button
                                                type={"button"}
                                                className={"btn border-none fw-bold m-0 p-0"}
                                                style={{ backgroundColor: "transparent", color: "#FFBA08", fontSize: "0.875rem" }}
                                                onClick={(e) => handleCopy(icon.name, index)}>
                                                <FontAwesomeIcon
                                                    icon={copiedIconIndex === index ? faCheck : faCopy}
                                                    size="2x"
                                                    color="#FFBA08"
                                                    className={"m-0 p-0"}
                                                />
                                            </button>
                                        </a>
                                    </div>
                                ))}
                                {feedback && (
                                    <div className="position-absolute bottom-0 start-50 translate-middle bg-transparent p-1" style={{
                                        color: "#FFBA08",
                                        fontSize: "0.875rem",
                                        borderRadius: "3px",
                                        border: "2px solid #FFBA08",
                                        opacity: 0.9,
                                        transition: "opacity 0.3s ease-in-out",
                                        zIndex: 100,
                                        marginTop: "5px"
                                    }}>
                                        {feedback}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={"col-6 border rounded-end"}>
                            <div className={"d-flex flex-column align-items-start text-center gap-4 p-4"}>
                                <h2
                                    className={"fw-bold text-center text-light fst-italic w-100"}
                                    style={{ fontSize: "1.5rem", borderBottom: "2px solid #FFBA08" }}
                                >
                                    <span>―</span> Enviame un correo <span>―</span>
                                </h2>
                                <form ref={form} onSubmit={sendEmail} className={"form-outline d-flex flex-column gap-3"}>
                                    {inputs.map((input, index) => (
                                        <input
                                            key={index}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            id={input.id}
                                            name={input.name}
                                            style={{ border: "2px solid #FFBA08", borderRadius: "5px", backgroundColor: "rgba(3, 7, 30, 0.5)", color: "#FFBA08", fontSize: "1rem", padding: "10px" }}
                                            autoComplete="off"
                                            value={input.value}
                                            hidden={input.hidden}
                                            required />
                                    ))}
                                    <textarea
                                        style={{ border: "2px solid #FFBA08", borderRadius: "5px", backgroundColor: "rgba(3, 7, 30, 0.5)", color: "#FFBA08", fontSize: "1rem", padding: "10px", resize: "none" }}
                                        placeholder="Mensaje"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required />
                                    <CVButton
                                        type={"submit"}
                                        content={"Enviar"}
                                        width={"200px"}
                                        className={"btn border-none fw-bold"}
                                        // onMouseEnter={() => setIsButtonHover(true)}
                                        // onMouseLeave={() => setIsButtonHover(false)}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )
                :
                (
                    <div className={"d-flex flex-column align-items-center justify-content-center h-100 gap-5"}>
                        <div data-aos="fade-down" className={"row bg-transparent"} style={{ width: "90%" }}>
                            <h2
                                className={"fw-bold text-center text-light fst-italic w-100 mb-3"}
                                style={{ fontSize: "1.5rem", borderBottom: "2px solid #FFBA08" }}
                            >
                                <span>―</span> Contacto <span>―</span>
                            </h2>
                            {icons.filter((icon) => icon.icon === faMobileScreen || icon.icon === faEnvelope).map((icon, index) => (
                                <div className='d-flex align-items-center justify-content-between p-3 m-0' key={index}>
                                    <a className={"d-flex align-items-center"} href={icon.href} target="_blank" rel="noreferrer">
                                        <div className={"d-flex align-items-center gap-3"}>
                                            <FontAwesomeIcon size="2x" color="#FFBA08" icon={icon.icon} />
                                            <p className={"m-0 p-0 fw-bold"} style={{ textDecoration: "none", color: "whitesmoke" }}>{icon.name}</p>
                                        </div>
                                    </a>
                                    <button
                                        type={"button"}
                                        className={"btn border-none m-0 p-0"}
                                        style={{ backgroundColor: "transparent", color: "#FFBA08", fontSize: "0.875rem" }}
                                        onClick={() => handleCopyFallback(icon.name, index)}
                                    >
                                        <FontAwesomeIcon
                                            icon={copiedIconIndex === index ? faCheck : faCopy}
                                            size="2x"
                                            color="#FFBA08"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div data-aos="fade-up" className={"row bg-transparent"} style={{ width: "90%" }}>
                            <h2
                                className={"fw-bold text-center text-light fst-italic w-100 mb-3"}
                                style={{ fontSize: "1.5rem", borderBottom: "2px solid #FFBA08" }}
                            >
                                <span>―</span> Enviame un correo <span>―</span>
                            </h2>
                            <form ref={form} onSubmit={sendEmail} className={"form-outline d-flex flex-column p-3 gap-4"}>
                                {inputs.map((input, index) => (
                                    <input
                                        key={index}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        id={input.id}
                                        name={input.name}
                                        style={{ border: "2px solid #FFBA08", borderRadius: "5px", backgroundColor: "rgba(3, 7, 30, 0.5)", color: "#FFBA08", fontSize: "1rem", padding: "10px" }}
                                        autoComplete="off"
                                        value={input.value}
                                        hidden={input.hidden}
                                        required />
                                ))}
                                <textarea
                                    style={{ border: "2px solid #FFBA08", borderRadius: "5px", backgroundColor: "rgba(3, 7, 30, 0.5)", color: "#FFBA08", fontSize: "1rem", padding: "10px", resize: "none" }}
                                    placeholder="Mensaje"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required />
                                <button
                                    type={"submit"}
                                    className={"btn border-none fw-bold"}
                                    onMouseEnter={() => setIsHover(true)}
                                    onMouseLeave={() => setIsHover(false)}
                                    style={{ backgroundColor: isHover ? "#ffa31a" : "#FFBA08", color: "#03071E", fontSize: "1rem", padding: "10px 20px", boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 1)" }}
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                )}
        </section>
    );
}

export default ContactsSectionContent