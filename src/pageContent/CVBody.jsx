import CVCards from "../Components/Cards/jsx/CVCards";
import "./css/CVBody.css";
const CVBody = ({ }) => {
    return (
        <>
            <div className="grid">
                <div
                    className="sidepage d-flex flex-column text-light py-4 px-2"
                >
                    <div>
                        <h2 className="titles h2">Resumen</h2>
                        <hr className="separationline" />
                        <div className="text-start fs-6">
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
                    <div>
                        <h2 className="titles h2">Contacto</h2>
                        <hr className="separationline" />
                        <div className="text-start">
                            <p>Dirección: 1032, CABA</p>
                            <p>Telefono: (3489)-594918</p>
                            <p>Email: leandrosec19@gmail.com</p>
                            <p>LinkedIn: @gullo-jose-leandro</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="titles h2">Idioma</h2>
                        <hr className="separationline" />
                        <div className="text-start">
                            <p>• Español: Nativo</p>
                            <p>• Ingles: B1</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="titles h2">Conocimientos</h2>
                        <hr className="separationline" />
                        <div className="text-start">
                            <p className="m-1">• PHP</p>
                            <p className="m-1">• JAVA ➨ Spring - Hibernate - Struts</p>
                            <p className="m-1">• C# ➨ .NET</p>
                            <p className="m-1">• JS ➨ React - Vue</p>
                            <p className="m-1">• HTML5 / CSS3 ➨ Bootstrap - Tailwind - Material Design</p>
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
                <div className="container p-4 bg-light text-start">
                    <div className="mb-4">
                        <h4 className="h4 mb-3 text-decoration-underline">Historial profesional</h4>
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
                    </div>
                    <div className="my-5">
                        <h4 className="h4 mb-3 text-decoration-underline">Historial académico</h4>
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
                            content={<p>Nivel: Universitario | Titulación: En curso</p>}
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
