/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		function ({ addUtilities}) {
			const newUtilities = {
				".custom-scrollbar::-webkit-scrollbar": {
					"height": "4px",
				},
				".custom-scrollbar::-webkit-scrollbar-track": {
					"background": "#64748b",
					"margin-left": "50px",
					"margin-right": "50px",
				},
				".custom-scrollbar::-webkit-scrollbar-thumb": {
					"background": "#cbd5e1",
					"border-radius": "2px",
				},
				".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
					"background": "#252525"
				},
			};
			addUtilities(newUtilities);
		},
	],  

	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: [
			"light", // Svelte default light
			"dark", // Svelte default dark
			// CliMate custom themes
			{
			  climate_light: {
				"*": {
					color: "#171717"	// Default font colour
				},

				".rectangle": {
					"background-image": "linear-gradient(to bottom, #62cbff, #d0f8fe)"
				},
				".cards":{
					"background":"#8eccee"
				},
				".icon": {
					"--tw-brightness": "brightness(0)",
				},
				".icon-container:hover": {
					"background-color" : "rgb(170 245 228 / var(--tw-bg-opacity))",
					"--tw-scale-x": "1.1",
					"--tw-scale-y": "1.1",
					"transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
				},
				".custom-btn": {
					"background-color": "#37cdbe",
					"border": "none",
					"color": "#000"
				},
				".custom-btn:hover": {
					"background-color" : "rgb(15 118 110 / var(--tw-bg-opacity))",
				},
				".custom-btn:disabled": {
					"background-color":"#134e4a",
				},
				".custom-toggle": {
					"border-color": "#52525b",
					"background-color": "#52525b",
				},
				".custom-toggle:hover": {
					"background-color": "#52525b",
				},
				".custom-toggle:checked": {
					"--tglbg": "#2aa79b",
					"background-color": "#fff",
				},
				".custom-container": {
					"background-color" : "#44e0da",
				},

				".stats-bg": {
					"background-image":"linear-gradient(to bottom, #62cbff, #d0f8fe)"
				},
				

				"primary": "#793ef9",
				"primary-focus": "#570df8",
				"primary-content": "#ffffff",

				"secondary": "#f000b8",
				"secondary-focus": "#bd0091",
				"secondary-content": "#ffffff",

				"accent": "#37cdbe",
				"accent-focus": "#2aa79b",
				"accent-content": "#ffffff",

				"neutral": "#E5E5E5",
				"neutral-focus": "#16181d",
				"neutral-content": "#ffffff",

				"base-100": "#D0E5EE",
				"base-200": "#f8fafc",
				"base-300": "#16181d",
				"base-content": "#ebecf0",

				"info": "#66c6ff",
				"success": "#87d039",
				"warning": "#e2d562",
				"error": "#ff6f6f",
				"error-content": "#171717"
			  },
			},
			{
				climate_dark: {
					"*": {
						color: "#f1f5f9"	// Default font colour
					},
					".rectangle": {
						"background-image": "linear-gradient(to bottom, #6354BD, #2C124D)"
					},
					".cards":{
						"background":"#28265f"
					},
			
					".icon": {
						"--tw-brightness": "brightness(0)",
						"--tw-invert": "invert(0.8)",
						"filter": "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
					},
					".icon-container:hover": {
						"background-color" : "rgb(49 46 129 / var(--tw-bg-opacity))",
						"--tw-scale-x": "1.1",
    					"--tw-scale-y": "1.1",
    					"transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
					},
					".custom-btn": {
						"background-color": "#793ef9",
						"border": "none",
						"color": "#fff",
					},
					".custom-btn:hover": {
						"background-color" : "rgb(87 42 186 / var(--tw-bg-opacity))",
					},
					".custom-btn:disabled": {
						"background-color":"#1e1b4b",
					},
					".custom-toggle:checked": {
						"--tglbg": "#793ef9",
					},
					".custom-container": {
					"background-color" : "#793ef9",
					},

					".stats-bg": {
						"background-image":"linear-gradient(to bottom, #312E81, #6366F1)"
					}, 

				  "primary": "#793ef9",
				  "primary-focus": "#570df8",
				  "primary-content": "#ffffff",

				  "secondary": "#f000b8",
				  "secondary-focus": "#bd0091",
				  "secondary-content": "#ffffff",

				  "accent": "#37cdbe",
				  "accent-focus": "#2aa79b",
				  "accent-content": "#ffffff",

				  "neutral": "#373553",
				  "neutral-focus": "#16181d",
				  "neutral-content": "#ffffff",
				  
				  "base-100": "#2A2863",	// Page background colour
				  "base-200": "#13122F",	
				  "base-300": "#16181d",
				  "base-content": "#ebecf0",
				  
				  "info": "#66c6ff",
				  "success": "#87d039",
				  "warning": "#e2d562",
				  "error": "#ff6f6f",
				  "error-content":  "#f1f5f9",
				},
			  },
		  ],
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	  },
};
