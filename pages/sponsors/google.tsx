import Footer from '@/components/footer.component';
import HeadPage from '@/components/head.component';
import Header from '@/components/header.component';
import styles from '@/styles/pages/sponsor.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';
import IconGoogle from './../../assets/images/sponsors/logo_google.png';
import Image from "next/image";



export default function Google() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return <>
        <HeadPage namePage='sponsors/google' titlePage='Google' />
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <section className={styles.sectionText}>
                    <Image
                        className={styles.logo}
                        src={IconGoogle}
                        alt="Google"
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
                    <p className={styles.paragraph}>Nuestra misión es organizar la información del mundo para que todos puedan acceder a ella y usarla.</p>
                    <Link className={styles.btnLink} href='https://bit.ly/gdsc-peru-google'>Visitar Google</Link>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}

