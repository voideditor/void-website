import type { Config } from "tailwindcss"
import typography from '@tailwindcss/typography'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			// CorteXIDE Brand Colors
  			cortexide: {
  				primary: '#7A3FFF',
  				secondary: '#00C6FF',
  				accent: '#5AF3F9',
  				gradient: {
  					from: '#7A3FFF',
  					to: '#00C6FF'
  				}
  			},
  			// Theme-aware colors
  			background: {
  				light: '#FAFAFA',
  				dark: '#0E0E10'
  			},
  			foreground: {
  				light: '#1A1A1A',
  				dark: '#FFFFFF'
  			},
  			card: {
  				light: '#FFFFFF',
  				dark: '#1A1A1A'
  			},
  			border: {
  				light: '#E5E5E5',
  				dark: '#333333'
  			}
  		},
  		fontFamily: {
  			sans: ['Inter', 'system-ui', 'sans-serif'],
  			mono: ['Space Grotesk', 'monospace']
  		},
  		animation: {
  			'glow': 'glow 2s ease-in-out infinite alternate',
  			'fade-in': 'fadeIn 0.2s ease-in-out',
  			'gradient': 'gradient 3s ease infinite'
  		},
  		keyframes: {
  			glow: {
  				'0%': { boxShadow: '0 0 5px #5AF3F9, 0 0 10px #5AF3F9, 0 0 15px #5AF3F9' },
  				'100%': { boxShadow: '0 0 10px #5AF3F9, 0 0 20px #5AF3F9, 0 0 30px #5AF3F9' }
  			},
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			gradient: {
  				'0%, 100%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' }
  			}
  		}
  	}
  },
  plugins: [
    typography, // this is where prose comes in 
      require("tailwindcss-animate")
],
} satisfies Config

export default config