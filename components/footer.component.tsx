import styles from '@/styles/components/footer.module.scss';
import IconFacebook from './../assets/icons/ic_facebook.svg';
import IconInstagram from './../assets/icons/ic_instagram.svg';
import IconTwitter from './../assets/icons/ic_twitter.svg';
import IconDiscord from './../assets/icons/ic_discord.svg';
import IconGdscPeru from './../assets/icons/ic_gdscPeru.svg';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.socialMedia}>
					<p className={styles.label}>Síguenos en</p>
					<Link href='https://www.facebook.com/gdsc.peru' target='_blank' aria-label='Link Facebook'>
						<IconFacebook className={styles.socialMediaItem} />
					</Link>
					<Link href='https://www.instagram.com/gdsc.peru/' target='_blank' aria-label='Link Instagram'>
						<IconInstagram className={styles.socialMediaItem} />
					</Link>
					<Link href='https://twitter.com/gdsc_peru' target='_blank' aria-label='Link Twitter'>
						<IconTwitter className={styles.socialMediaItem} />
					</Link>
					<Link href='https://discord.gg/qHkbvDs2AB' target='_blank' aria-label='Link Discord'>
						<IconDiscord className={styles.socialMediaItem} />
					</Link>
				</div>
				<div className={styles.boxLink}>
					<IconGdscPeru className={styles.logoPrimary} />
					<Link className={styles.boxLinkItem} href='/privacy' target='_blank'>
						Privacidad
					</Link>
					<Link className={styles.boxLinkItem} href='/rules' target='_blank'>
						Términos
					</Link>
					<Link className={styles.boxLinkItem} href='https://gdsc.community.dev/' target='_blank'>
						Sobre el Google Developer Student Clubs
					</Link>
					<Link className={styles.boxLinkItem} href='/code-conduct' target='_blank'>
						Código de conducta
					</Link>
					<Link className={styles.boxLinkItem} href='mailto:gdsc.peru@gmail.com' target='_blank'>
						Contáctanos
					</Link>
					<IconGdscPeru className={styles.logoSecondary} />
				</div>
			</div>
		</footer>
	);
}
