import Footer from '@/components/footer.component';
import HeadPage from '@/components/head.component';
import Header from '@/components/header.component';
import styles from '@/styles/pages/sponsor.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';
import IconSystematic from './../../assets/images/sponsors/logo_systematic.png';
import Image from "next/image";



export default function Systematic() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return <>
        <HeadPage namePage='sponsors/systematic' titlePage='Systematic' />
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <section className={styles.sectionText}>
                    <Image
                        className={styles.logo}
                        src={IconSystematic}
                        alt="Systematic"
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
                    <p className={styles.paragraph}>Institución educativa dedicada a brindar capacitación en los programas y softwares más demandados en el mercado laboral nacional e internacional. Con más de 100 mil usuarios certificados que decidieron mejorar su productividad laboral y profesional en todo el Perú. Con respaldo de la Dirección Regional de Educación de Ica bajo la resolución R.D.R 3799.</p>
                    <Link className={styles.btnLink} href='https://bit.ly/gdsc-peru-systematic'>Visitar Systematic</Link>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}

