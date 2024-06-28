import CVCards from "../Components/Cards/jsx/CVCards";
import CVHeader from "../Components/Header/jsx/CVHeader";
import "./css/CVBody.css";
const CVBody = () => {
    return (
        <>
            <div className="grid">
                <div className="sidepage d-flex flex-column text-light border rounded-5">
                    <div className="px-2 py-2">
                        <h2 className="sidebartitles">Resumen</h2>
                        <hr className="separationline"/>
                        <div className="sidebarcontent text-start">
                            <p>
                                Programador Full Stack con sólidos conocimientos y capacidad de
                                gestionar proyectos desde su concepción hasta su finalización.
                            </p>
                            <p>
                                Antes de mi transición a la programación, desempeñé un papel
                                crucial como líder de equipo en operaciones de CCTV.
                            </p>
                        </div>
                    </div>
                    <div className="px-2 py-2">
                        <h2 className="sidebartitles">Contacto</h2>
                        <hr className="separationline" />
                        <div className="sidebarcontent text-start">
                            <p>Dirección: 1032, CABA</p>
                            <p>Telefono: (3489)-594918</p>
                            <p>Email: leandrosec19@gmail.com</p>
                            <p>LinkedIn: @gullo-jose-leandro</p>
                        </div>
                    </div>
                    <div className="px-2 py-2">
                        <h2 className="sidebartitles">Idioma</h2>
                        <hr className="separationline" />
                        <div className="sidebarcontent text-start">
                            <p>• Español: Nativo</p>
                            <p>• Ingles: B1</p>
                        </div>
                    </div>
                    <div className="px-2 py-2">
                        <h2 className="sidebartitles">Conocimientos</h2>
                        <hr className="separationline" />
                        <div className="sidebarcontent text-start">
                            <p className="m-1">• PHP</p>
                            <p className="m-1">• JAVA ➨ Spring - Hibernate - Struts</p>
                            <p className="m-1">• C# ➨ .NET</p>
                            <p className="m-1">• JS ➨ React - Vue</p>
                            <p className="m-1">
                                • HTML5 / CSS3 ➨ Bootstrap - Tailwind - Material Design
                            </p>
                            <p className="m-1">
                                • Databases ➨ MySQL - SQLServer - PostgreSQL (manejo general de
                                bases de datos, tablas, creación de vistas, stored procedures)
                            </p>
                            <p className="m-1">
                                • Diagramas UML y patrones de diseño (MVC, Abstract Factory,
                                Singleton y otros)
                            </p>
                            <p className="m-1">• UX / user experience</p>
                            <p className="m-1">• Figma</p>
                            <p className="m-1">• Notion</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column text-start" style={{backgroundColor: "rgba(242, 187, 5, 0.1"}}>
                    <CVHeader headerusername={"Gullo José Leandro"} headerusertitle={"Desarrollador Full Stack"}/>
                    <div className="py-2 px-2">
                        <h2 className="jobtitle text-center m-0">
                            Historial profesional
                        </h2>
                        <hr className="separationline"/>
                        <CVCards
                            title={"Desarrollador Full Stack"}
                            company={"DSV Air & Sea"}
                            date={"Dic. 2023 – actualidad"}
                            content={
                                <>
                                    <p className="m-1 p-0">
                                        -Desarrollo de soluciones automatizadas en C# .NET,
                                        mejorando procesos y eficiencia operativa.
                                    </p>
                                    <p className="m-1 p-0">
                                        -Gestión de soporte a usuarios, incluyendo accesos a apps,
                                        creación / modificación de usuarios y administración de
                                        cuentas.
                                    </p>
                                    <p className="m-1 p-0">
                                        -Maquetado de interfaces de usuario con React.js, enfocadas
                                        en la experiencia del usuario final.
                                    </p>
                                    <p className="m-1 p-0">
                                        -Contribución al desarrollo del backend con PHP, asegurando
                                        la funcionalidad y estabilidad del sistema.
                                    </p>
                                    <p className="m-1 p-0">
                                        -Manejo de SQL Server, incluyendo el diseño de vistas y
                                        procedimientos almacenados para optimizar el manejo de
                                        datos.
                                    </p>
                                </>
                            }
                        />
                        <CVCards
                            title={"Team Leader en operaciones CCTV"}
                            company={"G4S Argentina"}
                            date={"Ene. 2022 – Dic. 2023"}
                            content={
                                <>
                                    <p className="m-1 p-0">
                                        -Gestión efectiva de personal, liderando equipos para
                                        garantizar la seguridad y el cumplimiento de los objetivos.
                                    </p>
                                    <p className="m-1 p-0">
                                        -Destrezas en la gestión telefónica y atención al cliente,
                                        brindando servicio excepcional y soluciones efectivas en
                                        situaciones críticas.
                                    </p>
                                    <p className="m-1 p-0">
                                        -Herramientas utilizadas: Milestone XProtect - Lenel Package
                                        - Avigilon Control Center - plataformas de seguimiento
                                        satelital (Hawk, LoJack) - paquete office
                                    </p>
                                </>
                            }
                        />
                        <CVCards
                            title={"Operador CCTV"}
                            company={"G4S Argentina"}
                            date={"Ago. 2019 – Ene. 2022"}
                            content={
                                <>
                                    <p className="m-1 p-0">
                                        -Experto en monitoreo CCTV y seguimiento satelital vía GPS,
                                        asegurando la vigilancia y el control efectivo de los
                                        activos.
                                    </p>
                                    <p className="m-1 p-0">
                                        -Amplia experiencia en la administración y control de
                                        accesos, así como en la gestión de alarmas de incendio para
                                        garantizar la seguridad de las instalaciones.
                                    </p>
                                    <p className="m-1 p-0">
                                        -Herramientas utilizadas: Milestone XProtect - Lenel Package
                                        - plataformas de seguimiento satelital (Hawk) - paquete
                                        office
                                    </p>
                                </>
                            }
                        />
                    </div>
                    <div>
                        <h2 className="jobtitle text-center m-0">
                            Historial académico
                        </h2>
                        <hr className="separationline"/>
                        <CVCards
                            title={"Tecnicatura superior universitaria en Programación"}
                            company={"Tec-Lab"}
                            date={"Mar. 2023 – Mar. 2025"}
                            content={<p>Nivel: Terciario | Titulación: En curso</p>}
                        />
                        <CVCards
                            title={"Licenciatura en Seguridad Informática"}
                            company={"Universidad Siglo XXI"}
                            date={"Mar. 2022 – Mar. 2026"}
                        />
                        <CVCards
                            title={"Tecnicatura en Informática"}
                            company={"Escuela Técnica N°1 Luciano Reyes"}
                            date={"Mar. 2006 – Dic. 2015"}
                            content={
                                <p>Nivel: Secundario y Terciario | Titulación: Finalizado</p>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CVBody;
