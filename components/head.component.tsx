import Head from 'next/head';

export default function HeadPage(props: any) {
	const title = `${props.titlePage} | GDSC Perú Hack 2023: Creando soluciones para el futuro`;
	return (
		<Head>
			<title>{title}</title>
			<meta name='title' content='GDSC Perú Hack 2023: Creando soluciones para el futuro' />
			<meta
				name='description'
				content='El GDSC Perú Hack 2023, es una hackathon organizada por los Google Developer Students Club del Perú y esta orientado para estudiantes universitarios. Esta iniciativa busca fomentar el pensamiento crítico y la creatividad en estudiantes, al mismo tiempo que les brinda la oportunidad de desarrollar habilidades en tecnología y programación.'
			/>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' href='/favicon.ico' />
			<meta
				name='keywords'
				content='gdsc, eventos, gdsc perú, gde, festival, google, programming, hackathon,android, chrome, polymer, developers, web, cloud, androiddev, iot, ai, blokchain, iot, firebase,angular,gestion,scrum,flutter,gdsc lead, google developer student club,peru, ica, arequipa, huancayo, lima,utp, unica, uni'
			/>
			<meta name='author' content='GDSC Perú' />
			<meta name='generator' content='NextJS' />
			<meta name='theme-color' content='#4285F4' />
			<link href='https://gdsc-peru-hack.web.app/' rel='publisher' />
			<link rel='canonical' href={'https://gdsc-peru-hack.web.app/' + props.namePage + '/'} />
			<meta charSet='UTF-8' />

			<meta property='og:type' content='website' />
			<meta property='og:url' content='https://gdsc-peru-hack.web.app/' />
			<meta property='og:title' content='GDSC Perú Hack 2023: Creando soluciones para el futuro' />
			<meta
				property='og:description'
				content='El GDSC Perú Hack 2023, es una hackathon organizada por los Google Developer Students Club del Perú y esta orientado para estudiantes universitarios. Esta iniciativa busca fomentar el pensamiento crítico y la creatividad en estudiantes, al mismo tiempo que les brinda la oportunidad de desarrollar habilidades en tecnología y programación.'
			/>
			<meta property='og:image' content='https://i.ibb.co/BtD6d5h/meta-portada.png' />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content='https://gdsc-peru-hack.web.app/' />
			<meta property='twitter:title' content='GDSC Perú Hack 2023: Creando soluciones para el futuro' />
			<meta
				property='twitter:description'
				content='El GDSC Perú Hack 2023, es una hackathon organizada por los Google Developer Students Club del Perú y esta orientado para estudiantes universitarios. Esta iniciativa busca fomentar el pensamiento crítico y la creatividad en estudiantes, al mismo tiempo que les brinda la oportunidad de desarrollar habilidades en tecnología y programación.'
			/>
			<meta property='twitter:image' content='https://i.ibb.co/BtD6d5h/meta-portada.png' />
		</Head>
	);
}
