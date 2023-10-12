import Footer from '@/components/footer.component';
import Header from './../components/header.component';
import styles from '@/styles/pages/schedule.module.scss';
import HeadPage from '@/components/head.component';
import { useEffect } from 'react';

export default function Schedule() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return (
        <>
            <HeadPage namePage='schedule' titlePage='Cronograma' />
            <Header />
            <main className={styles.container}>
                <h1 className={styles.title}>Cronograma</h1>
                <p className={styles.containerMessage}>
                    ¿Listo para participar? El registro se abre el <b>06 de febrero de 2023 a las 00:00 (GMT-5)</b> y permanecerá abierto hasta el <b>23 de febrero de 2023 a las 22:00 (GMT-5).</b>
                </p>
                <h2 className={styles.subtitle}>Etapas</h2>
                <div className={styles.headInfoStage}>
                    <p>Etapa</p>
                    <p>Fecha de inicio</p>
                    <p>Fecha final</p>
                    <p>Duración</p>
                </div>
                <div className={styles.infoStage}>
                    <p className={styles.infoStageName}>Inicio del GDSC Perú Hack</p>
                    <p><span>Inicio: </span>25 de febrero de 2023</p>
                    <p><span>Fin: </span>26 de febrero de 2023</p>
                    <p>02 días</p>
                </div>
                <div className={styles.infoStage}>
                    <p className={styles.infoStageName}>Presentación de proyectos</p>
                    <p><span>Inicio: </span>27 de febrero de 2023</p>
                    <p><span>Fin: </span>27 de febrero de 2023</p>
                    <p>1 día</p>
                </div>
                <div className={styles.infoStage}>
                    <p className={styles.infoStageName}>Clasificación Top 16</p>
                    <p><span>Fecha: </span>01 de marzo de 2023</p>
                    <p><span>Fin: </span>01 de marzo de 2023</p>
                    <p>1 día</p>
                </div>
                <div className={styles.infoStage}>
                    <p className={styles.infoStageName}>Mentoría</p>
                    <p><span>Inicio: </span>01 de marzo de 2023</p>
                    <p><span>Fin: </span>20 de marzo de 2023</p>
                    <p>20 días</p>
                </div>
                <div className={styles.infoStage}>
                    <p className={styles.infoStageName}>Clasificación Top 8</p>
                    <p><span>Fecha: </span>18 de marzo de 2023</p>
                    <p><span>Fin: </span>18 de marzo de 2023</p>
                    <p>1 día</p>
                </div>
                <div className={styles.infoStage}>
                    <p className={styles.infoStageName}>Clasificación Top 3</p>
                    <p><span>Fecha: </span>22 de marzo de 2023</p>
                    <p><span>Fin: </span>22 de marzo de 2023</p>
                    <p>1 día</p>
                </div>
                <div className={styles.infoStage}>
                    <p className={styles.infoStageName}>Demo Day</p>
                    <p><span>Inicio: </span>24 de marzo de 2023</p>
                    <p><span>Fin: </span>24 de marzo de 2023</p>
                    <p>1 día</p>
                </div>
            </main>
            <Footer />
        </>
    )
}
