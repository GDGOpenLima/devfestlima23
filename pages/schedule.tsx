import Footer from '@/components/footer.component';
import Header from './../components/header.component';
import styles from '@/styles/pages/schedule.module.scss';
import HeadPage from '@/components/head.component';
import { useEffect } from 'react';
import { TrackOne } from '@/data/dataTrack';


export default function Schedule() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return (
        <>
            <HeadPage namePage='schedule' titlePage='Cronograma' />
            <Header />
            <main className={styles.container}>
                <h1 className={styles.title}>Agenda</h1>
                {
                    TrackOne && TrackOne.map(slot =>
                        <div className={styles.cardEvent} key={slot.theme}>
                            <p className={styles.title}>{slot.theme}</p>
                            <small className={styles.timetable}>{slot.start} - {slot.end}</small>
                            <div className={styles.speaker}>
                                <img className={styles.photo} src={slot.theme} alt={slot.speaker} />
                                <p className={styles.name}>{slot.speaker}</p>
                            </div>
                            <p className={styles.talkDescription}>
                                {slot.theme}
                            </p>
                        </div >
                    )
                }
            </main>
            <Footer />
        </>
    )
}
