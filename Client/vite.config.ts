import babel from "@rolldown/plugin-babel";
import tanstackRouter from "@tanstack/router-plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
			quoteStyle: "double",
			routesDirectory: `${__dirname}/src/app/`,
			generatedRouteTree: `${__dirname}/src/routeTree.gen.ts`,
		}),
		react(),
		babel({ presets: [reactCompilerPreset()] }),
	],
	server: {
		port: 3000,
		strictPort: true,
	},
});
