/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Buildertrend Style
				primary: '#2196F3', // Hellblau
				primaryDark: '#0057B8', // Dunkelblau
				secondary: '#F5F5F5', // Hellgrau für Sections
				tertiary: '#512BD4', // BausubstanzManager Violett
				accent: '#D600AA', // Magenta
				dark: '#190649', // Dunkelviolett
				offBlack: '#1f1f1f', // Sehr dunkelgrau
				headerGray: '#222222', // Header dunkelgrau
			},
			fontFamily: {
				sans: ['OpenSans', 'system-ui', 'sans-serif'],
				serif: ['Georgia', 'serif'],
			},
			spacing: {
				'xs': '0.5rem',
				'sm': '1rem',
				'md': '2rem',
				'lg': '3rem',
				'xl': '4rem',
				'2xl': '6rem',
				'3xl': '8rem',
			},
			animation: {
				'fadeIn': 'fadeIn 0.6s ease-in',
				'slideUp': 'slideUp 0.6s ease-out',
				'slideDown': 'slideDown 0.6s ease-out',
				'slideLeft': 'slideLeft 0.6s ease-out',
				'slideRight': 'slideRight 0.6s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(40px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-40px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideLeft: {
					'0%': { transform: 'translateX(40px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideRight: {
					'0%': { transform: 'translateX(-40px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
};
