/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		container: {
			padding: "6.5rem",
		},
		extend: {
			spacing: {
				quarter: "25%",
			},
			fontFamily: {
				sans: "'Work Sans', sans-serif",
				cascadia: "CascadiaCode",
			},
			colors: {
				"do-blue-dark": "#080c2d",
				"do-blue-medium-dark": "#1d274c",
				"do-blue-medium": "rgb(20, 86, 255)",
				"do-blue-light": "rgb(0, 105, 255)",
			},
			boxShadow: {
				input: "0 5px 1px 0 rgb(0,0,0,0.1)",
				"input-focus": "0 2px 1px 0 rgb(0,0,0,0.1)",
			},
		},
	},
	plugins: [],
};
