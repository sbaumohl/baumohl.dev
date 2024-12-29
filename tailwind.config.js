/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: 'class',
	content: [
		"./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
		"./node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			// typography: ({ theme }) => ({
			// 	custom: {
			// 		css: {
			// 			'--tw-prose-body': theme("colors.blue[900]"),
			// 			'--tw-prose-headings': '#131111 !important',
			// 			'--tw-prose-lead': '#131111 !important',
			// 			// '--tw-prose-links': theme('colors.pink[900]'),
			// 			'--tw-prose-bold': '#131111 !important',
			// 			'--tw-prose-counters': '#131111 !important',
			// 			'--tw-prose-bullets': '#131111 !important',
			// 			'--tw-prose-hr': '#131111 !important',
			// 			'--tw-prose-quotes': '#131111 !important',
			// 			'--tw-prose-quote-borders': '#131111 !important',
			// 			// '--tw-prose-captions': theme('colors.pink[700]'),
			// 			'--tw-prose-code': '#131111 !important',
			// 			'--tw-prose-pre-code': '#131111 !important',
			// 			'--tw-prose-pre-bg': '#131111 !important',
			// 			// '--tw-prose-th-borders': theme('colors.pink[300]'),
			// 			// '--tw-prose-td-borders': theme('colors.pink[200]'),
			// 			// '--tw-prose-invert-body': theme('colors.pink[200]'),
			// 			// '--tw-prose-invert-headings': theme('colors.white'),
			// 			// '--tw-prose-invert-lead': theme('colors.pink[300]'),
			// 			// '--tw-prose-invert-links': theme('colors.white'),
			// 			// '--tw-prose-invert-bold': theme('colors.white'),
			// 			// '--tw-prose-invert-counters': theme('colors.pink[400]'),
			// 			// '--tw-prose-invert-bullets': theme('colors.pink[600]'),
			// 			// '--tw-prose-invert-hr': theme('colors.pink[700]'),
			// 			// '--tw-prose-invert-quotes': theme('colors.pink[100]'),
			// 			// '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
			// 			// '--tw-prose-invert-captions': theme('colors.pink[400]'),
			// 			// '--tw-prose-invert-code': theme('colors.white'),
			// 			// '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
			// 			// '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
			// 			// '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
			// 			// '--tw-prose-invert-td-borders': theme('colors.pink[700]')
			// 		},
			// 	},
			// }),
			fontFamily: {
				serif: [
					"'Source Serif 4 Variable'",
					...defaultTheme.fontFamily.serif,
				],
				sans: ["Manrope Variable", ...defaultTheme.fontFamily.sans],
				mono: ["Roboto Mono Variable", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				bright: {
					50: '#f2f2f2',
					100: '#e6e6e6',
					200: '#cccccc',
					300: '#b3b3b3',
					400: '#999999',
					500: '#808080',
					600: '#666666',
					700: '#4d4d4d',
					800: '#333333',
					900: '#1a1a1a',
					950: '#0d0d0d',
					DEFAULT: "#eaeaea",
				},
				darker: {
					50: '#f3f1f1',
					100: '#e7e4e4',
					200: '#cfc9c9',
					300: '#b7aeae',
					400: '#9f9393',
					500: '#877878',
					600: '#6c6060',
					700: '#514848',
					800: '#363030',
					900: '#1b1818',
					950: '#0e0c0c',
					DEFAULT: "#131111",
				},

			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		require("daisyui"),
	],
	daisyui: {
		themes: ["lofi"],
	},
};
