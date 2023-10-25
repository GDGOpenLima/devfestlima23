import Header from '@/components/header.component';
import Footer from '@/components/footer.component';
import styles from '@/styles/pages/home.module.scss';
import Image from "next/image";
import Banner from './../assets/images/home-1.png';
import IconTeam from './../assets/icons/ic_team.svg';
import IconTrophy from './../assets/icons/ic_trophy.svg';
import IconBadge from './../assets/icons/ic_badge.svg';
import IconGDGOpen from './../assets/icons/logo_gdg_open.png';
import Link from 'next/link';
import HeadPage from '@/components/head.component';
import Coding from './../assets/images/coding.gif';
import Holding from './../assets/images/holding.gif';
import Phone from './../assets/images/phone.gif';
import Working from './../assets/images/working.gif';
import { useEffect } from 'react';
import { dataSponsorsBronze, dataSponsorsGold } from '@/data/dataSponsors';
import { dataCommunity } from '@/data/dataCommunity';

export default function Home() {

  useEffect(() => { document.body.classList.remove('noScroll'); });

  return <>
    <HeadPage namePage='/' titlePage='Inicio' />
    <Header />
    <main className={styles.container}>
      <article className={styles.containerArticle}>
        <section className={styles.home}>
          <div className={styles.boxTitle}>
            <h2 className={styles.title}>¡Bienvenidos al DevFest Lima 2023!</h2>
            <p className={styles.paragraph}>
              Conferencia para desarrolladores sobre tecnologías de Google (AI, Cloud, Mobile y Web) organizado por las comunidades GDGs.
            </p>
            <Link className={styles.btnSubmit} target='_blank' href={'http://bit.ly/registro-dev-fest-lima-23'}>Registrarse</Link>
          </div>
          <div className={styles.boxVideo}>
            <div className={styles.boxVideoItem}>
              <Image
                src={Coding}
                alt="Coding"
                width={350}
                height={350}
                className={styles.imageAnimated}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "100%",
                }} />
            </div>
            <div className={styles.boxVideoItem}>
              <Image
                src={Phone}
                alt="Phone"
                width={350}
                className={styles.imageAnimated}
                height={350}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "100%",
                }} />
            </div>
            <div className={styles.boxVideoItem}>
              <Image
                src={Working}
                alt="Working"
                width={350}
                className={styles.imageAnimated}
                height={350}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "100%",
                }} />
            </div>
            <div className={styles.boxVideoItem}>
              <Image
                src={Holding}
                alt="Holding"
                width={350}
                className={styles.imageAnimated}
                height={350}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "100%",
                }} />
            </div>
            <div className={styles.boxVideoItem}></div>
          </div>
        </section>
        <div className={styles.homeLine}>
          <h1>DevFest Lima 2023</h1>
        </div>
        <section className={styles.about}>
          <h2 className={styles.title}>¡Prepárate para el DevFest Lima!</h2>
          <p className={styles.paragraph}>
            Los DevFests son conferencias para desarrolladores sobre tecnologías de Google (AI, Cloud, Mobile y Web) organizado por las comunidades GDGs.
            Los ponentes provienen de entre los Google Developer Experts y ponentes de la comunidad. Un encuentro organizado para desarrolladores con mucho contenido, networking y aprendizaje.
            Los DevFests son eventos organizados por los GDGs, grupos que forman parte del programa de comunidades para desarrolladores de Google.
          </p>
        </section>
        <Image
          src={Banner}
          alt="Equipo tech"
          width={1200}
          height={350}
          priority={true}
          sizes="100vw"
          style={{
            maxWidth: '100%',
            height: 'auto',
            width: "100%",
          }} />
        <section className={styles.containerPhases}>
          <div className={styles.phaseItem}>
            <div className={styles.icon}>
              <IconTeam />
            </div>
            <p>Conecta con otros desarrolladores</p>
          </div>
          <div className={styles.phaseItem}>
            <div className={styles.icon}>
              <IconBadge />
            </div>
            <p>Comparte conocimiento</p>
          </div>
          <div className={styles.phaseItem}>
            <div className={styles.icon}>
              <IconTrophy />
            </div>
            <p>Invierte en tu crecimiento profesional</p>
          </div>
        </section>
        <div className={styles.homeLineGray}></div>

        {/* <section className={`${styles.aboutSponsors} ${styles.sectionSponsors}`}> */}
        {/* <h2 className={styles.title}>Sponsors</h2> */}
        {/* <p className={styles.paragraph}>
            Es un honor para nosotros tener el apoyo de nuestros sponsors en el DevFest Lima 2023. Su contribución ha sido fundamental esta iniciativa y queremos expresar nuestro más sincero agradecimiento.
          </p> */}
        {/* <h3 className={styles.subtitle}>Gold Sponsor</h3>
          <div className={styles.galleryLogo}>
            {
              dataSponsorsGold && dataSponsorsGold.map(sponsor =>
                <div className={styles.mentorItem} key={sponsor.name}>
                  <div className={styles.sponsorItem}>
                    <Link className={styles.btnLink} href={sponsor.url} target='_blank' aria-label={sponsor.name}>
                      <Image
                        src={sponsor.imageURL}
                        alt={sponsor.name}
                        width={350}
                        height={350}
                        priority={true}
                        sizes="100vw"
                        style={{
                          maxWidth: '300px',
                          maxHeight: '300px',
                          height: '120px',
                          width: "auto",
                        }} />
                    </Link>
                  </div>
                </div>
              )
            }
          </div>
          <h3 className={styles.subtitle}>Bronze Sponsor</h3>
          <div className={styles.galleryLogo}>
            {
              dataSponsorsBronze && dataSponsorsBronze.map(sponsor =>
                <div className={styles.mentorItem} key={sponsor.name}>
                  <div className={styles.sponsorItem}>
                    <Link className={styles.btnLink} href={sponsor.url} target='_blank' aria-label={sponsor.name}>
                      <Image
                        src={sponsor.imageURL}
                        alt={sponsor.name}
                        width={350}
                        height={350}
                        priority={true}
                        sizes="100vw"
                        style={{
                          maxWidth: '300px',
                          maxHeight: '300px',
                          height: '120px',
                          width: "auto",
                        }} />
                    </Link>
                  </div>
                </div>
              )
            }
          </div> */}
        {/* <p className={styles.paragraph}>
            El DevFestLima 2023 reunirá al mejor talento y, patrocinar este evento es la mejor manera de conectarse con el talento joven. Conoce más <Link className={styles.link} href='mailto:gdsc.peru@gmail.com'>aquí</Link>.
          </p> */}
        {/* </section> */}
        <section className={styles.aboutSponsors}>
          <h2 className={styles.title}>Organizadores</h2>
          <div className={styles.galleryLogo}>
            <Link className={styles.btnLink} href='https://gdg.community.dev/gdg-open/' aria-label='Google Developer Group Open de Lima'>
              <Image
                src={IconGDGOpen}
                alt="GDG Open"
                width={350}
                height={350}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "375px",
                }} />
            </Link>
          </div>
        </section>
        <section className={styles.aboutSponsors}>
          <h2 className={styles.title}>Comunidades aliadas</h2>
          <p className={styles.paragraph}>
            Te gustaría apoyar este evento, ponte en contacto con nosotros y sé una comunidad aliada haciendo clic <Link className={styles.link} href='mailto:devfestlimaperu@gmail.com'>aquí</Link>.
          </p>
          <div className={styles.galleryLogo}>
            {
              dataCommunity && dataCommunity.map(community =>
                <div key={community.name}>
                  <Link className={styles.btnLink} href={community.url} aria-label={community.name}>
                    <Image
                      src={community.imageURL}
                      alt={community.name}
                      width={350}
                      height={350}
                      priority={true}
                      sizes="100vw"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        width: "375px",
                      }} />
                  </Link>
                </div>
              )
            }
          </div>
        </section>
      </article>
    </main>
    <Footer />
  </>;
}
