import Footer from '@/components/footer.component';
import HeadPage from '@/components/head.component';
import Header from '@/components/header.component';
import styles from '@/styles/pages/sponsor.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';
import IconMitocode from './../../assets/images/sponsors/logo_mitocode.png';
import Image from "next/image";



export default function Mitocode() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return <>
        <HeadPage namePage='sponsors/mitocode' titlePage='Mitocode' />
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <section className={styles.sectionText}>
                    <Image
                        className={styles.logo}
                        src={IconMitocode}
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
                    <p className={styles.paragraph}>Somos una empresa dedicada a brindar capacitaciones en tecnologías de la información. Tenemos presencial digital en toda Latinoamérica, haciendo crecer a profesionales desde el 2017.</p>
                    <Link className={styles.btnLink} href='https://bit.ly/gdsc-peru-mitocode'>Visitar MitoCode</Link>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}

