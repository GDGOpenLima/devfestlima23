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
        {/*<section className={styles.aboutODS}>
          <div className={styles.containerImg}>
            <Image
              src={ODS}
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
          </div>
          <div className={styles.containerText}>
            <h2 className={styles.title}>
              ¿Cuáles son los 17 objetivos de desarrollo sostenible de las Naciones Unidas?</h2>
            <p className={styles.paragraph}>
              Creado por las Naciones Unidas en 2015, con el apoyo de los 193 estados miembros de las Naciones Unidas, los 17 Objetivos de Desarrollo Sostenible buscan acabar con la pobreza, garantizar la prosperidad y proteger el planeta.
            </p>
          </div>
            </section>*/}
        {/*<section className={styles.aboutSponsors}>
          <h2 className={styles.title}>Jurados</h2>
          <div className={styles.mentorsGroup}>
            {dataJudges && dataJudges.map(mentors =>
              <div className={styles.mentorItem} key={mentors.name}>
                <Image
                  className={styles.img}
                  src={`${basePath}/${mentors.name}.png`}
                  alt={mentors.name}
                  width={150}
                  height={150}
                  priority={true}
                  sizes="100vw"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    width: "150px",
                  }} />
                <Link href={`${mentors.url}`} target='_blank'>
                  <IconLinkedIn className={styles.btnLinkedIn} />
                </Link>
                <p className={styles.name}>{mentors.name}</p>
                <p className={styles.description}>{mentors.description}</p>
              </div>
            )}
          </div>
                </section>*/}
        <section className={`${styles.aboutSponsors} ${styles.sectionSponsors}`}>
          <h2 className={styles.title}>Sponsors</h2>
          {/* <p className={styles.paragraph}>
            Es un honor para nosotros tener el apoyo de nuestros sponsors en el DevFest Lima 2023. Su contribución ha sido fundamental esta iniciativa y queremos expresar nuestro más sincero agradecimiento.
          </p> */}
          <h3 className={styles.subtitle}>Gold Sponsor</h3>
          {/*<div className={styles.galleryLogo}>
            <div className={styles.sponsorItem}>
              <Link className={styles.btnLink} href='https://bit.ly/gdsc-peru-leonidasesteban' target='_blank' aria-label='Leonidas Esteban'>
                <Image
                  src={IconLeonidasEsteban}
                  alt="Leonidas Esteban"
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
              <Link className={styles.link} href='/sponsors/leonidas-esteban'>Ver Perfil</Link>
            </div>
            <div className={styles.sponsorItem}>
              <Link className={styles.btnLink} href='https://bit.ly/gdsc-peru-google' target='_blank' aria-label='Google'>
                <Image
                  src={IconGoogle}
                  alt="Google"
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
              <Link className={styles.link} href='/sponsors/google'>Ver Perfil</Link>
            </div>
            <div className={styles.sponsorItem}>
              <Link className={styles.btnLink} href='https://bit.ly/gdsc-peru-mitocode' target='_blank' aria-label='MitoCode'>
                <Image
                  src={IconMitocode}
                  alt="MitoCode"
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
              <Link className={styles.link} href='/sponsors/mitocode'>Ver Perfil</Link>
            </div>
            <div className={styles.sponsorItem}>
              <Link className={styles.btnLink} href='https://bit.ly/gdsc-peru-systematic' target='_blank' aria-label='Systematic'>
                <Image
                  src={IconSystematic}
                  alt="Systematic"
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
              <Link className={styles.link} href='/sponsors/systematic'>Ver Perfil</Link>
            </div>
          </div>*/}
          <h3 className={styles.subtitle}>Bronze Sponsor</h3>
          {/*<div className={styles.galleryLogo}>
            <div className={styles.sponsorItem}>
              <Link className={styles.btnLink} href='https://bit.ly/gdsc-peru-amcreative' target='_blank' aria-label='AM Creative'>
                <Image
                  src={IconAmCreative}
                  alt="AM Creative"
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
                </div>*/}
          <p className={styles.paragraph}>
            El DevFestLima 2023 reunirá al mejor talento y, patrocinar este evento es la mejor manera de conectarse con el talento joven. Conoce más <Link className={styles.link} href='mailto:gdsc.peru@gmail.com'>aquí</Link>.
          </p>
        </section>
        {/* <section className={styles.aboutSponsors}>
          <h2 className={styles.title}>Partners</h2>
          <div className={styles.galleryLogo}>
            <Link className={styles.btnLink} href='https://www.cip.org.pe/' aria-label='Colegio de Ingenieros del Perú'>
              <Image
                src={IconColegioIngPeru}
                alt="Colegio de Ingenieros del Perú"
                width={150}
                height={150}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "150px",
                }} />
            </Link>
            <Link className={styles.btnLink} href='https://gdg.community.dev/gdg-chimbote/' aria-label='Google Developer Group Chimbote'>
              <Image
                src={IconGDGChimbote}
                alt="Equipo tech"
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
            <Link className={styles.btnLink} href='https://gdsc.community.dev/san-luis-gonzaga/' aria-label='Google Developer Student Clubs San Luis Gonzaga'>
              <IconGDSCUnica viewBox='0 0 350 150' />
            </Link> 
          </div>
        </section>*/}
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
          {/*<div className={styles.galleryLogo}>
            <Link className={styles.btnLink} href='https://gdg.community.dev/gdg-open/' aria-label='Google Developer Group Open'>
              <Image
                src={IconGDGOpen}
                alt="Google Developer Group Open"
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
            <Link className={styles.btnLink} href='https://gdg.community.dev/gdg-chimbote/' aria-label='Google Developer Group Chimbote'>
              <Image
                src={IconGDGChimbote}
                alt="Google Developer Group Chimbote"
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
            <Link className={styles.btnLink} href='https://www.meetup.com/es/flutter_ica/' aria-label='Flutter Ica'>
              <Image
                src={IconFlutterIca}
                alt="Flutter Ica"
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
            <Link className={styles.btnLink} href='https://www.meetup.com/flutter-lima/' aria-label='Flutter Lima'>
              <Image
                src={IconFlutterLima}
                alt="Flutter Lima"
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
              </div> */}
        </section>
      </article>
    </main>
    <Footer />
  </>;
}
