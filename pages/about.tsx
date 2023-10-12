import styles from '@/styles/pages/about.module.scss';
import Image from "next/image";
import About1 from './../assets/images/about-1.png';
import About2 from './../assets/images/about-2.png';
import About3 from './../assets/images/about-3.png';
import About4 from './../assets/images/about-4.png';
import Footer from '@/components/footer.component';
import Header from '@/components/header.component';
import HeadPage from '@/components/head.component';
import { useEffect } from 'react';

export default function About() {

    useEffect( () => {document.body.classList.remove('noScroll');} );

    return <>
        <HeadPage namePage='about' titlePage='Acerca de' />
        <Header/>
        <main className={styles.container}>
            <article>
                <section className={styles.about}>
                    <div className={styles.boxText}>
                        <h1 className={styles.title}>¿Qué es el GDSC Perú Hack?</h1>
                        <p className={styles.paragraph}>
                            Como parte de la preparación hacia el Solution Challenge, los GDSC de Perú estamos organizando esta hackathon en donde buscamos participación de estudiantes universitarios.
                        </p>
                        <p className={styles.paragraph}>
                            Con esta hackathon los participantes podrán prepararse para el Solution Challenge, competencia anual de Google que busca resolver uno o más de los 17 Objetivos de Desarrollo Sostenible de las Naciones Unidas.
                        </p>
                    </div>
                    <div className={styles.boxImg}>
                        <Image
                            src={About1}
                            alt="Equipo tech"
                            width={350}
                            height={350}
                            priority={true}
                            sizes="100vw"
                            style={{
                                maxWidth: '350px',
                                height: 'auto',
                                width: "100%",
                            }} />
                    </div>
                </section>
                <section className={styles.about}>
                    <div className={styles.boxImg}>
                        <Image
                            src={About2}
                            alt="Equipo tech"
                            width={350}
                            height={350}
                            priority={true}
                            sizes="100vw"
                            style={{
                                maxWidth: '350px',
                                height: 'auto',
                                width: "100%",
                            }} />
                    </div>
                    <div className={styles.boxText}>
                        <h2 className={styles.title}>¿Quienes pueden participar?</h2>
                        <p className={styles.paragraph}>
                            Este evento está orientado para estudiantes universitarios de cualquier ciclo. Para poder participar dentro del GDSC Perú Hack, uno o más de los integrantes de tu equipo deber pertenecer  a uno de los diferentes Google Developer Students Club que existen en el Perú.
                        </p>
                    </div>

                </section>
                <section className={styles.about}>
                    <div className={styles.boxText}>
                        <h2 className={styles.title}>¿Por qué participar?</h2>
                        <p className={styles.paragraph}>
                            Invitamos a los estudiantes a participar de este hackathon por las siguientes razones:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><b>Aprendizaje:</b> Estarás en un ambiente de aprendizaje colaborativo y desafiante en la que podrás desarrollar tus habilidades de programación y resolución de problemas.</li>
                            <li className={styles.listItem}><b>Networking:</b> Esta hackathon te brindará la oportunidad de conectarse con otros estudiantes interesados en tecnología, así como con profesionales del sector.</li>
                            <li className={styles.listItem}><b>Diversión:</b> Por último, pero no menos importante, pasarás un momento de forma divertida y  emocionante  donde aprenderás cosas nuevas y desafiantes en equipo.</li>
                        </ul>
                    </div>
                    <div className={styles.boxImg}>
                        <Image
                            src={About3}
                            alt="Equipo tech"
                            width={350}
                            height={350}
                            priority={true}
                            sizes="100vw"
                            style={{
                                maxWidth: '350px',
                                height: 'auto',
                                width: "100%",
                            }} />
                    </div>
                </section>
                <section className={styles.about}>
                    <div className={styles.boxImg}>
                        <Image
                            src={About4}
                            alt="Equipo tech"
                            width={350}
                            height={350}
                            priority={true}
                            sizes="100vw"
                            style={{
                                maxWidth: '350px',
                                height: 'auto',
                                width: "100%",
                            }} />
                    </div>
                    <div className={styles.boxText}>
                        <h2 className={styles.title}>¿Cómo puedo participar?</h2>
                        <p className={styles.paragraph}>
                            Para participar en esta hackathon, recuerda que debes formar un equipo de máximo 4 integrantes y registrarte en el evento; no te olvides que tienes hasta el 23 de febrero. 
                        </p>
                        <p className={styles.paragraph}>
                        Luego, elige uno o más de los 17 Objetivos de Desarrollo Sostenible y comienza a construir tu proyecto. No olvides que debes usar alguna tecnología de Google. 
                        </p>
                    </div>

                </section>
            </article>
        </main>
        <Footer />
    </>;
}
