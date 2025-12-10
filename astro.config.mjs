// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://drupal-bootcamp.vercel.app',
	integrations: [
		icon(),
		starlight({
			plugins: [starlightThemeGalaxy()],
			title: 'Drupal Bootcamp',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/drupal-bootcamp' },
			],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Accueil', slug: 'index' },
						{ label: 'À propos', slug: 'a-propos' },
						{ label: 'Prérequis', slug: 'prerequis' },
					],
				},
				{
					label: 'Étape 1 - Installation',
					autogenerate: { directory: 'etape-1-installation' },
				},
				{
					label: 'Étape 2 - Contenus',
					autogenerate: { directory: 'etape-2-contenus' },
				},
				{
					label: 'Étape 3 - Taxonomies',
					autogenerate: { directory: 'etape-3-taxonomies' },
				},
				{
					label: 'Étape 4 - Vues',
					autogenerate: { directory: 'etape-4-vues' },
				},
				{
					label: 'Étape 5 - Navigation',
					autogenerate: { directory: 'etape-5-navigation' },
				},
				{
					label: 'Étape 6 - Theming',
					autogenerate: { directory: 'etape-6-theming' },
				},
				{
					label: 'Étape 7 - Modules',
					autogenerate: { directory: 'etape-7-modules' },
				},
				{
					label: 'Étape 8 - Développement',
					autogenerate: { directory: 'etape-8-developpement' },
				},
				{
					label: 'Projet Intégrateur',
					autogenerate: { directory: 'projet-integrateur' },
				},
				{
					label: 'Ressources',
					autogenerate: { directory: 'ressources' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'og:image',
						content: 'https://drupal-bootcamp.vercel.app/og-image.png',
					},
				},
			],
			editLink: {
				baseUrl: 'https://github.com/drupal-bootcamp/docs/edit/main/',
			},
			lastUpdated: true,
		}),
	],
});
