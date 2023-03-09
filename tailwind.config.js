module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {},
	variants: {
		extend: {
			colors: {
				purple: {
					100: "#E5DCFF",
					200: "#552BCC",
					300: "#120C24",
					400: "30157A",
				},
				gray: { 100: "#1E1E1E" },
			},
		},
	},
	plugins: [],
};
