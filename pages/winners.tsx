import Footer from '@/components/footer.component';
import styles from '@/styles/pages/winners.module.scss';
import Header from '@/components/header.component';
import HeadPage from '@/components/head.component';
import { useEffect } from 'react';
import { dataWinnersTop16, dataWinnersTop8, dataWinnersTop3 } from '@/data/dataWinners';


export default function Winners() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return <>
        <HeadPage namePage='winners' titlePage='Ganadores' />
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <h1 className={styles.title}>Ganadores del GDSC Perú Hack 2023</h1>
                <p className={styles.paragraph}>Gracias a todos los estudiantes que participaron y ayudaron a hacer de esta una experiencia increíble. Además, un gran agradecimiento a todos los mentores que apoyaron a los equipos con tutoría. Realmente disfrutamos revisar todas sus soluciones creativas con las tecnologías de Google.</p>
                <section className={styles.sectionText}>
                    <h2 className={styles.title}>Los 3 mejores equipos del GDSC Perú Hack</h2>
                    <div className={styles.winnersGroup}>
                        {dataWinnersTop3 && dataWinnersTop3.map(winners =>
                            <div className={`${styles.winnerItem} ${styles.winnerItemTop3}`} key={winners.nameTeam}>
                                <div className={styles.containerVideo}>
                                    <iframe className={styles.winnerIframe} src={winners.videoURL} title={`${winners.nameProject} - ${winners.nameTeam}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className={styles.paragraph}>
                                    <p className={styles.nameTeam}>{winners.nameProject} - {winners.nameTeam}</p>
                                    <p className={styles.nameUniversity}>{winners.university}</p>
                                    <ul className={styles.listMembers}>
                                        {winners.members && winners.members.map(item =>
                                            <li key={item.name}>{item.name}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <section className={styles.sectionText}>
                    <h2 className={styles.title}>Los 8 mejores equipos</h2>
                    <div className={styles.winnersGroup}>
                        {dataWinnersTop8 && dataWinnersTop8.map(winners =>
                            <div className={styles.winnerItem} key={winners.nameTeam}>
                                <p className={styles.nameTeam}>{winners.nameTeam}</p>
                                <p className={styles.nameUniversity}>{winners.university}</p>
                                <ul className={styles.listMembers}>
                                    {winners.members && winners.members.map(item =>
                                        <li key={item.name}>{item.name}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
                <section className={styles.sectionText}>
                    <h2 className={styles.title}>Los 16 mejores equipos</h2>
                    <div className={styles.winnersGroup}>
                        {dataWinnersTop16 && dataWinnersTop16.map(winners =>
                            <div className={styles.winnerItem} key={winners.nameTeam}>
                                <p className={styles.nameTeam}>{winners.nameTeam}</p>
                                <p className={styles.nameUniversity}>{winners.university}</p>
                                <ul className={styles.listMembers}>
                                    {winners.members && winners.members.map(item =>
                                        <li key={item.name}>{item.name}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}

