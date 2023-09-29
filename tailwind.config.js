/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
		"./node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Playfair Display Variable', "InterVariable", "Inter", ...defaultTheme.fontFamily.serif],
			  },
			spacing: {
				132: "35.25rem",
			},
			colors: {
				text: "#251e0e",
				background: "#f8f5ed",
				primary: "#133695",
				secondary: "#f6e5b7",
				accent: "#1a48c7",
			},
		},

	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
	],
	darkMode: "class",
};
