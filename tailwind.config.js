/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],

	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: [
			"light", // Svelte default light
			"dark", // Svelte default dark
			// CliMate custom themes
			{
			  climate_light: {
				"primary": "#793ef9",
				"primary-focus": "#570df8",
				"primary-content": "#ffffff",

				"secondary": "#f000b8",
				"secondary-focus": "#bd0091",
				"secondary-content": "#ffffff",

				"accent": "#37cdbe",
				"accent-focus": "#2aa79b",
				"accent-content": "#ffffff",

				"neutral": "#2a2e37",
				"neutral-focus": "#16181d",
				"neutral-content": "#ffffff",

				"base-100": "#ffffff",
				"base-200": "#2a2e37",
				"base-300": "#16181d",
				"base-content": "#ebecf0",

				"info": "#66c6ff",
				"success": "#87d039",
				"warning": "#e2d562",
				"error": "#ff6f6f"
			  },
			},
			{
				climate_dark: {
				  "primary": "#793ef9",
				  "primary-focus": "#570df8",
				  "primary-content": "#ffffff",

				  "secondary": "#f000b8",
				  "secondary-focus": "#bd0091",
				  "secondary-content": "#ffffff",

				  "accent": "#37cdbe",
				  "accent-focus": "#2aa79b",
				  "accent-content": "#ffffff",

				  "neutral": "#2a2e37",
				  "neutral-focus": "#16181d",
				  "neutral-content": "#ffffff",
				  
				  "base-100": "#2A2863",	// Page background colour
				  "base-200": "#13122F",	
				  "base-300": "#16181d",
				  "base-content": "#ebecf0",
				  
				  "info": "#66c6ff",
				  "success": "#87d039",
				  "warning": "#e2d562",
				  "error": "#ff6f6f"
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
