import Footer from '@/components/footer.component';
import styles from '@/styles/pages/faq.module.scss';
import Header from '@/components/header.component';
import HeadPage from '@/components/head.component';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Rules() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return <>
        <HeadPage namePage='faq'  titlePage='Preguntas frecuentes'/>
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <section className={styles.sectionText}>
                    <h1 className={styles.title}>Preguntas frecuentes</h1>
                    <h2 className={styles.subtitle}>¿Mi grupo puede estar conformado por estudiantes de diferentes universidades?</h2>
                    <p className={styles.paragraph}>Si, está permitido que los miembros de un grupo vengan de diferentes universidades. La única condición es que al menos uno de los miembros pertenezca a algún GDSC. ¡Puedes unirte al GDSC más cercano a tu localidad para participar!</p>
                    <h2 className={styles.subtitle}>¿Es solo para alumnos de pregrado o pueden participar bachilleres?</h2>
                    <p className={styles.paragraph}>Sí, el Perú Hack está destinado exclusivamente a estudiantes de pregrado y no está abierto a bachilleres. Sin embargo, es posible que existan otros hackathons o eventos similares que sean accesibles a estudiantes de bachillerato.</p>
                    <h2 className={styles.subtitle}>¿La modalidad es presencial o virtual?</h2>
                    <p className={styles.paragraph}>La modalidad del evento será tanto presencial como virtual, de tal manera que los participantes puedan elegir la forma en que quieran participar. Los detalles sobre cómo se llevarán a cabo las sesiones presenciales y virtuales se compartirán con anticipación para que los participantes puedan prepararse adecuadamente.</p>
                    <h2 className={styles.subtitle}>¿El concurso busca un impacto social o un modelo de negocio?</h2>
                    <p className={styles.paragraph}>El hackathon busca más un impacto social en las comunidades a nivel del Perú. Aunque también pueden ser considerados modelos de negocio que tengan un impacto positivo en la sociedad y su entorno. Es importante tener en cuenta que la innovación y el emprendimiento pueden ser herramientas valiosas para lograr un impacto social positivo.</p>
                    <h2 className={styles.subtitle}>¿Cuál será la temática del evento?</h2>
                    <p className={styles.paragraph}>La temática del evento es el uso de tecnologías de desarrollo para abordar y resolver uno de los 17 objetivos de desarrollo sostenible de la ONU. Se trata de un desafío global que requiere la colaboración de todas las partes interesadas para lograr un futuro más sostenible y equitativo para todas las personas y la naturaleza. Los participantes tendrán la oportunidad de utilizar sus habilidades técnicas y su creatividad para desarrollar soluciones innovadoras que puedan contribuir a alcanzar estos objetivos. Al hacerlo, tendrán la oportunidad de aprender sobre las tecnologías de desarrollo y cómo pueden ser aplicadas para solucionar problemas sociales y ambientales importantes.</p>
                    <h2 className={styles.subtitle}>¿La presentación final es una idea, un MVP o una aplicación completa?</h2>
                    <p className={styles.paragraph}>La presentación final busca ser un prototipo viable (MVP, por sus siglas en inglés) que demuestre la solución a uno de los objetivos de desarrollo sostenible de la ONU con el uso de tecnologías de desarrollo. Este MVP debe ser una versión reducida y funcional de la aplicación o solución final que deseen desarrollar, pero que permita a los evaluadores comprender la idea y verificar su viabilidad.</p>
                    <h2 className={styles.subtitle}>¿Los temas a elegir son los objetivos de la ONU para el desarrollo sostenible?</h2>
                    <p className={styles.paragraph}>Sí, los temas a elegir son los objetivos de desarrollo sostenible de la ONU. El hackathon tiene como objetivo fomentar el desarrollo de soluciones innovadoras que contribuyan a la consecución de estos objetivos, haciendo uso de tecnologías de desarrollo y emprendimiento. La idea es que los participantes presenten un MVP que muestre cómo su solución puede contribuir a resolver uno de los objetivos de desarrollo sostenible de la ONU.</p>
                    <h2 className={styles.subtitle}>¿Qué criterios de evaluación se tendrán en cuenta?</h2>
                    <p className={styles.paragraph}>El concurso de hackathon evaluará las presentaciones finales basadas en dos criterios principales: impacto y tecnología.</p>
                    <p className={styles.paragraph}>En cuanto a impacto, se evaluará si la entrada establece un desafío claro a través de su declaración del problema, si se explica adecuadamente los objetivos y metas de desarrollo sostenible de la ONU elegidos para la solución y por qué, si hay retroalimentación de usuarios reales y si se han realizado iteraciones para mejorar la solución en base a esta retroalimentación, si la solución aborda adecuadamente el desafío identificado y se utilizan métricas para medir su éxito, y si hay un plan claro para extender la solución a una audiencia más grande en el futuro.</p>
                    <p className={styles.paragraph}>En cuanto a tecnología, se evaluarán los mismos criterios que en impacto.</p>
                    <p className={styles.paragraph}>Para más información sobre el proceso de evaluación, puedes revisar el siguiente <Link href='./rules#judgment'>enlace.</Link></p>
                    <p className={styles.paragraph}>En el caso tengas alguna duda, comunícate al correo <Link href='mailto:gdsc.peru@gmail.com'>gdsc.peru@gmail.com.</Link></p>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}

