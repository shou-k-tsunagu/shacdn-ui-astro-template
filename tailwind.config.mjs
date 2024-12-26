/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	// content: [
	//   './pages/**/*.{ts,tsx}',
	//   './components/**/*.{ts,tsx}',
	//   './app/**/*.{ts,tsx}',
	//   './src/**/*.{ts,tsx}',
	// ],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		fontFamily: {
			sans: [
				"YuGothic",
				"Yu Gothic",
				"游ゴシック体",
				"游ゴシック",
				"Noto Sans JP",
				"sans-serif",
			],
		},
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				yellow: "#FECC02",
				red: "#E53202",
			},
			dropShadow: {
				og: "0px 10px 15px 0px #00000026",
			},
			backgroundImage: {
				tag: "linear-gradient(97.95deg, #E53101 11.55%, #FF9901 92%)",
				button: "linear-gradient(95.48deg, #E53101 2.06%, #FF9901 99.92%)",
				main: "url('/assets/common/img_bg.jpg')",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
