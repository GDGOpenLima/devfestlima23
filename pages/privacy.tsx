import Footer from '@/components/footer.component';
import styles from '@/styles/pages/rules.module.scss';
import Header from '@/components/header.component';
import HeadPage from '@/components/head.component';
import { useEffect } from 'react';

export default function Rules() {

    useEffect(() => { document.body.classList.remove('noScroll'); });
    
    return <> 
        <HeadPage namePage='privacy' titlePage='Privacidad' />
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <section className={styles.sectionText}>
                    <h1 className={styles.title}>Política de Privacidad</h1>
                    <p className={styles.paragraph}>Esta política de privacidad describe cómo los organizadores (Google Developer Student Clubs de Perú) protege su privacidad (usted, el participante) y sus datos.</p>
                    <h2 className={styles.subtitle}>Datos:</h2>
                    <p className={styles.paragraph}>Nunca recopilamos ni compartimos datos personales con terceros.</p>
                    <p className={styles.paragraph}>Estos datos nunca se utilizan para seguimiento o publicidad y no se alquilan, venden o entregan a los anunciantes.</p>
                    <p className={styles.paragraph}>El participante tiene derecho a solicitar acceso, revisión, rectificación o eliminación de cualquier dato personal en poder de los organizadores en relación con el Concurso escribiendo a los organizadores a esta dirección de correo electrónico: <b>gdsc.peru@gmail.com</b>.</p>
                      <h2 className={styles.subtitle}>Cambios:</h2>
                    <p className={styles.paragraph}>Esta Política de privacidad o partes de ella pueden cambiar o actualizarse en cualquier momento. El registro de sus datos, se considerará como su aceptación de cada punto descrito anteriormente.</p>
                    
                    </section>
            </article>
        </main>
        <Footer />
    </>;
}

