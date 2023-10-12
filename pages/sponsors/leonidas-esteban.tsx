import Footer from '@/components/footer.component';
import HeadPage from '@/components/head.component';
import Header from '@/components/header.component';
import styles from '@/styles/pages/sponsor.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';
import IconLeonidasEsteban from './../../assets/images/sponsors/logo_leonidasEsteban.png';
import Image from "next/image";



export default function Leonidasesteban() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return <>
        <HeadPage namePage='sponsors/leonidas-esteban' titlePage='Leonidas Esteban' />
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <section className={styles.sectionText}>
                    <Image
                        className={styles.logo}
                        src={IconLeonidasEsteban}
                        alt="MitoCode"
                        width={350}
                        height={350}
                        priority={true}
                        sizes="100vw"
                        style={{
                            maxWidth: '300px',
                            maxHeight: '300px',
                            height: 'auto',
                            width: "250px",
                        }} />
                    <p className={styles.paragraph}><b>https://LeonidasEsteban.com</b> es una escuela para personas que deseen desarrollar una carrera en tecnología con enfoque en la programación.</p>
                    <ul className={styles.paragraph}>
                                <li className={styles.paragraph}>Cuenta con un plan de estudios que inicia con conceptos básicos de HTML y termina en llevar proyectos a producción con React.js y todo su ecosistema</li>
                                <li className={styles.paragraph}>El enfoque de la escuela es <b>Aprendizaje basado en proyectos</b>, todos los cursos aparte de enseñarte conceptos también desarrollan un proyecto apto para el portafolio del estudiante</li>
                                <li className={styles.paragraph}>En la escuela puedes certificarte, crear un portafolio automáticamente mientras estudias y participar en comunidad</li>
                            </ul>
                    <Link className={styles.btnLink} href='https://bit.ly/gdsc-peru-leonidasesteban'>Visitar LeonidasEsteban.com</Link>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}

