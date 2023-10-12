import Footer from '@/components/footer.component';
import styles from '@/styles/pages/rules.module.scss';
import Header from '@/components/header.component';
import HeadPage from '@/components/head.component';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Rules() {

    useEffect(() => { document.body.classList.remove('noScroll'); });
    
    return <> 
        <HeadPage namePage='rules' titlePage='Términos y condiciones' />
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <section className={styles.sectionText}>
                    <h1 className={styles.title}>Términos y Condiciones</h1>
                    <p className={styles.paragraph}>El GDSC Perú Hack 2023 (el “Concurso”) es un concurso de habilidades en el que los participantes (alumnos) deben desarrollar una solución que resuelva y aborde uno o más de los Objetivos de Desarrollo Sustentable de las Naciones Unidas con uno o más productos o plataformas de Google. También deben demostrar cómo un usuario puede utilizar la solución.</p>
                    <p className={styles.paragraph}>El concurso está abierto para estudiantes universitarios de Perú.</p>
                    <p className={styles.paragraph}>La solución que se desarrolle será evaluado por jueces, que elegirán al ganador de acuerdo con estas Reglas oficiales. Los premios se otorgarán a los participantes que obtengan la puntuación más alta según los criterios de evaluación. Consulte la siguiente información para obtener más detalles.</p>
                    <h2 className={styles.subtitle}>1. Acuerdo vinculante:</h2>
                    <p className={styles.paragraph}>Para inscribirse en el Concurso, debe aceptar estas Reglas oficiales (“Reglas”). Por lo tanto, léalas antes de participar para asegurarse de que las comprende y las acepta. Usted acepta que el envío de una solicitud de participación en el Concurso constituye la aceptación de estas Normas. No podrá enviar una solicitud de participación en el Concurso y no será apto para recibir los premios que se describen en estas Reglas a menos que las acepte.</p>
                    <h2 className={styles.subtitle}>2. Periodo del concurso:</h2>
                    <p className={styles.paragraph}>El Concurso se inicia a las 00:00:00 a.m. (hora de Perú), el 03 de febrero de 2023 y finaliza el 24 de marzo de 2023 (“Período del Concurso”).</p>
                    <h2 className={styles.subtitle}>3. Como participar:</h2>
                    <p className={styles.paragraph}>Para inscribirse en el Concurso, visite el sitio web del Concurso en https://gdsc-peru-hack.web.app/ (“Sitio del Concurso”) o antes de esa fecha y siga las instrucciones para enviar su solución.</p>
                    <p className={styles.paragraph}>Consulte los Requisitos de Inscripción que se describen a continuación.</p>
                    <p className={styles.paragraph}>La solución debe tener las siguientes características:</p>
                    <ul className={styles.paragraph}>
                        <li className={styles.paragraph}>Debe elegir uno o más de los 17 Objetivos de Desarrollo Sostenible de las Naciones Unidas.</li>
                        <li className={styles.paragraph}>El equipo de estudiantes universitarios debe de ser de máximo 4 miembros en total.</li>
                        <li className={styles.paragraph}>El equipo tiene al menos una persona que es parte de un Google Developer Student Club (GDSC).</li>
                        <li className={styles.paragraph}>Construir su solución entre:</li>
                        <ul className={styles.paragraph}>
                            <li className={styles.paragraph}>Ronda 1: 25 de febrero de 2022 - 26 de febrero de 2023</li>
                            <li className={styles.paragraph}>Ronda 2: 04 de marzo de 2022 - 24 de marzo de 2023</li>
                        </ul>
                        <li className={styles.paragraph}>Incluye un vínculo al código escrito por los miembros del equipo que envía la solución. Asegúrate de que se comparta de manera adecuada y de que se pueda acceder a ella.</li>
                        <ul className={styles.paragraph}>
                            <li className={styles.paragraph}>El vínculo debe dirigir a los jueces a un repositorio que contenga tu código, el cual se puede alojar en un sistema de control de versiones, como GitHub o Bitbucket. En ese repositorio, debes incluir un archivo README.txt o README.md en el directorio raíz. Este archivo debe contener instrucciones claras sobre cómo ejecutar su código para que podamos probar la solución.</li>
                        </ul>
                        <li className={styles.paragraph}>Uso de uno o más productos o plataformas de Google, incluidos, entre otros:</li>
                        <ul className={styles.paragraph}>
                            <li className={styles.paragraph}>Android</li>
                            <li className={styles.paragraph}>Angular</li>
                            <li className={styles.paragraph}>Google Cloud: usa GCP para proporcionar escalabilidad</li>
                            <ul className={styles.paragraph}>
                                <li className={styles.paragraph}>Serverless functions</li>
                                <li className={styles.paragraph}>Kubernetes</li>
                                <li className={styles.paragraph}>Ingeniería de datos</li>
                                <li className={styles.paragraph}>ML Services</li>
                            </ul>
                            <li className={styles.paragraph}>Firebase</li>
                            <li className={styles.paragraph}>Google Maps Platform</li>
                            <li className={styles.paragraph}>Tensorflow</li>
                            <li className={styles.paragraph}>Aplicaciones web progresivas</li>
                            <li className={styles.paragraph}>Flutter</li>
                            <li className={styles.paragraph}>Asistente / Actions on Google</li>
                            <li className={styles.paragraph}>Otros productos o plataformas de Google</li>
                        </ul>
                        <li className={styles.paragraph}>Puede incluir otros proyectos de código abierto, pero debe aclarar dónde es este el caso (es suficiente hacerlo dentro del código).</li>
                        <li className={styles.paragraph}>Un equipo no puede reutilizar o volver a enviar un proyecto enviado anteriormente.</li>
                        <li className={styles.paragraph}>LÍMITE DE UNA (1) SOLUCIÓN POR PERSONA. Las inscripciones posteriores serán descalificadas. Todas las entradas de la Ronda 1 deben recibirse antes de las 18:00 del 26 de febrero de 2023 . Todas las entradas de la Ronda 2 deben recibirse antes de las 23:59 p.m. del 24 de marzo de 2023. Las inscripciones son nulas si son total o parcialmente ilegibles, incompletas, dañadas, alteradas, falsificadas, obtenidas mediante fraude o fuera de plazo. Todas las participaciones se considerarán realizadas por el titular autorizado de la cuenta de la dirección de correo electrónico enviada en el momento de la participación, y es posible que se le solicite al posible ganador que demuestre que es el titular autorizado de la cuenta de esa dirección de correo electrónico.</li>
                        <li className={styles.paragraph}>Durante el Período del Concurso, los Jueces (definidos a continuación) evaluarán cada Entrada para asegurarse de que cumple con los Requisitos. Los jueces se reservan el derecho, a su exclusivo criterio, de descalificar a cualquier participante que presente una Inscripción que no cumpla con los Requisitos.</li>
                    </ul>
                    <h2 className={styles.subtitle}>4. Jueces:</h2>
                    <p className={styles.paragraph}>Cada solución será juzgada por un panel de expertos que son elegidos por los organizadores.</p>
                    <p className={styles.paragraph}><b>Presentación de la ronda 1:</b> los participantes envían sus entradas entre el 25 de febrero de 2023 y el 26 de febrero de 2023.</p>
                    <p className={styles.paragraph}><b>Evaluación de la Ronda 1:</b> aproximadamente desde el 26 de febrero de 2023 hasta el 27 de febrero de 2023, los jueces evaluarán cada entrada según los criterios de evaluación que se indican a continuación. En caso sean muchos los grupos inscritos, pueden tomar unos días adicionales.</p>
                    <p className={styles.paragraph}><b>Las 16 mejores entradas:</b> de todas las entradas iniciales de la ronda 1, los jueces seleccionarán las 16 mejores entradas. A los equipos que fueron elegidos se les ofrecerá la oportunidad de recibir tutoría con expertos para mejorar su solución antes de enviar su Entrada nuevamente para la evaluación de la Ronda 2.</p>
                    <p className={styles.paragraph}><b>Las 8 mejores entradas:</b> de todas las entradas de la ronda 1, los jueces seleccionarán a los 8 ganadores según los criterios de evaluación a continuación. Para ello, deberán enviar un video con su solución de máximo 2:30 minutos hasta el 18 de marzo del 2023 a las 23:59. Los 8 ganadores tendrán la oportunidad de mostrar sus entradas durante la transmisión en vivo virtual del Demo Day en el caso pasen a la etapa final.</p>
                    <p className={styles.paragraph}><b>Las 3 entradas principales:</b> durante el evento Demo Day, los jueces seleccionarán a los 3 principales ganadores oficiales para el GDSC Perú Hack 2023 en función de los criterios de evaluación a continuación que se aplican a las entradas presentadas en la transmisión en vivo del Demo Day del GDSC Perú Hack 2023.</p>
                    <h2 className={styles.subtitle} id='judgment'>5. Criterio a juzgar:</h2>
                    <h3 className={styles.subtitle}>Primera etapa:</h3>
                    <p className={styles.paragraph}><b>Impacto (20 puntos)</b></p>
                    <ul className={`${styles.paragraph} ${styles.listAlphabet}`}>
                        <li className={styles.paragraph}>¿La entrada establece un desafío claro utilizando su declaración del problema? (5 puntos)</li>
                        <li className={styles.paragraph}>¿Explican claramente qué objetivos y metas de desarrollo sostenible de la ONU eligieron para su solución y por qué? (5 puntos)</li>
                        <li className={styles.paragraph}>¿La solución aborda el desafío (y la declaración del problema) identificado por el equipo? ¿El equipo describe adecuadamente el éxito de su solución utilizando métricas, objetivos y resultados? (5 puntos)</li>
                        <li className={styles.paragraph}>¿Hay evidencia de los próximos pasos? ¿Muestra el equipo un plan claro para la extensión futura a una audiencia más grande si continuaran? (5 puntos)</li>
                    </ul>
                    <p className={styles.paragraph}><b>Tecnología  (20 puntos)</b></p>
                    <ul className={`${styles.paragraph} ${styles.listAlphabet}`}>
                        <li className={styles.paragraph}>¿El equipo describe claramente lo siguiente: arquitectura, componentes de alto nivel, responsabilidad de cada componente, productos específicos y plataforma que implementaron? ¿El equipo explicó claramente qué tecnología de Google usaron y por qué? (5 puntos)</li>
                        <li className={styles.paragraph}>¿La solución implementa todos los componentes técnicos necesarios para resolver el desafío? (5 puntos)</li>
                        <li className={styles.paragraph}>¿La demostración en video muestra la interfaz de una aplicación  y cómo un usuario interactuará con la solución? ¿La demostración muestra cómo la solución hace un uso efectivo y adecuado de las funciones de la tecnología o plataforma de Google elegida? (5 puntos)</li>
                        <li className={styles.paragraph}>¿Puede la solución, en su forma actual o cambios estructurales menores, admitir más usuarios y una mayor escala? (5 puntos)</li>
                    </ul>
                    <h3 className={styles.subtitle}>Segunda etapa:</h3>
                    <p className={styles.paragraph}><b>Impacto (25 puntos)</b></p>
                    <ul className={`${styles.paragraph} ${styles.listAlphabet}`}>
                        <li className={styles.paragraph}>¿La entrada establece un desafío claro utilizando su declaración del problema? (5 puntos)</li>
                        <li className={styles.paragraph}>¿Explican claramente qué objetivos y metas de desarrollo sostenible de la ONU eligieron para su solución y por qué? (5 puntos)</li>
                        <li className={styles.paragraph}>Comentarios de los jurados (5 puntos)</li>
                        <ul className={styles.paragraph}>
                            <li className={styles.paragraph}>¿El equipo describe claramente tres puntos de retroalimentación que recibieron de los jurados y los pasos que tomaron para probarlos?</li>
                            <li className={styles.paragraph}>¿Hay evidencia de lo que aprendió el equipo y cómo se iteró la solución en función de los comentarios de los jurados?</li>
                        </ul>
                        <li className={styles.paragraph}>¿La solución aborda el desafío (y la declaración del problema) identificado por el equipo? ¿El equipo describe adecuadamente el éxito de su solución utilizando métricas, objetivos y resultados? (5 puntos)</li>
                        <li className={styles.paragraph}>¿Hay evidencia de los próximos pasos? ¿Muestra el equipo un plan claro para la extensión futura a una audiencia más grande si continuarán? (5 puntos)</li>
                    </ul>
                    <p className={styles.paragraph}><b>Tecnología  (25 puntos)</b></p>
                    <ul className={`${styles.paragraph} ${styles.listAlphabet}`}>
                        <li className={styles.paragraph}>¿El equipo describe claramente lo siguiente: arquitectura, componentes de alto nivel, responsabilidad de cada componente, productos específicos y plataforma que implementaron? ¿El equipo explicó claramente qué tecnología de Google usaron y por qué? (5 puntos)</li>
                        <li className={styles.paragraph}>¿La solución implementa todos los componentes técnicos necesarios para resolver el desafío? (5 puntos)</li>
                        <li className={styles.paragraph}>Prueba de código e iteración (5 puntos)</li>
                        <ul className={styles.paragraph}>
                            <li className={styles.paragraph}>¿El equipo destaca un desafío al que se enfrentaron al crear su código, cómo abordaron el problema y las decisiones técnicas y las implementaciones que tuvieron que tomar? ¿El equipo incluyó orientación sobre cómo ejecutar su código?</li>
                        </ul>
                        <li className={styles.paragraph}>¿La demostración en video muestra una aplicación con diseño final y cómo un usuario interactuará con la solución? ¿La demostración muestra cómo la solución hace un uso efectivo y adecuado de las funciones de la tecnología o plataforma de Google elegida? (5 puntos)</li>
                        <li className={styles.paragraph}>¿Puede la solución, en su forma actual o cambios estructurales menores, admitir más usuarios y una mayor escala? (5 puntos)</li>
                    </ul>
                    <h2 className={styles.subtitle}>6. Condiciones Generales:</h2>
                    <p className={styles.paragraph}>Los organizadores se reservan el derecho de descalificar a cualquier participante del Concurso si, a su exclusivo criterio, cree razonablemente que el participante ha intentado socavar el funcionamiento legítimo del Concurso mediante trampas, engaños u otras prácticas de juego desleales o molesta, abusa, amenaza o acosa a otros participantes, a los organizadores o a los jueces.</p>
                    <h2 className={styles.subtitle}>7. Privacidad:</h2>      
                    <p className={styles.paragraph}>El participante reconoce y acepta que los organizadores pueden recopilar, almacenar, compartir y utilizar de otro modo la información de identificación personal proporcionada durante el proceso de registro y el Concurso, incluidos, entre otros, el nombre, la dirección postal, el número de teléfono y la dirección de correo electrónico. Los organizadores utilizará esta información de acuerdo con su <Link className={styles.link} aria-label='Política de privacidad' href='/privacy'>Política de privacidad</Link>, incluida la administración del Concurso y la verificación de la identidad, la dirección postal y el número de teléfono del Participante en caso de que una solución califique.</p>
                    <p className={styles.paragraph}>Si un participante no proporciona los datos obligatorios requeridos en el registro, los organizadores se reservan el derecho de descalificar la solución.</p>
                    <p className={styles.paragraph}>El participante tiene derecho a solicitar acceso, revisión, rectificación o eliminación de cualquier dato personal en poder de los organizadores en relación con el Concurso escribiendo a los organizadores a esta dirección de correo electrónico: <b>gdsc.peru@gmail.com</b>.</p>
                    <h2 className={styles.subtitle}>8. Eliminación:</h2>
                    <p className={styles.paragraph}>Cualquier información falsa proporcionada en el contexto del Concurso por cualquier participante en relación con la identidad, la dirección postal, el número de teléfono, la dirección de correo electrónico, la propiedad del derecho o el incumplimiento de estas Reglas o similares puede resultar en la eliminación inmediata del participante del Concurso.</p>
                    <h2 className={styles.subtitle}>9. Derecho a cancelar, modificar o descalificar:</h2>
                    <p className={styles.paragraph}>Si por alguna razón el Concurso no puede ejecutarse según lo planeado, incluida la infección por virus informáticos, errores, manipulación, intervención no autorizada, fraude, fallas técnicas o cualquier otra causa que corrompa o afecte la administración, seguridad, imparcialidad, integridad o correcta realización del Concurso, los organizadores se reservan el derecho, a su exclusivo criterio, de cancelar, finalizar, modificar o suspender el Concurso. Además, los organizadores se reservan el derecho de descalificar a cualquier participante que manipule el proceso de envío o cualquier otra parte del Concurso o del Sitio del Concurso.</p>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}

