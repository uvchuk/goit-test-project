import {defineConfig} from "vite";
import jsconfigPaths from "vite-jsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), jsconfigPaths()],
	base: "/vite-react-template/",
	// build: {
	// 	rollupOptions: {
	// 		output: {
	// 			assetFileNames: assetInfo => {
	// 				let extType = assetInfo.name.split(".").at(1);
	// 				if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
	// 					extType = "img";
	// 				}
	// 				return `[name]-[hash][extname]`;
	// 			},
	// 			chunkFileNames: "[name]-[hash].js",
	// 			entryFileNames: "[name]-[hash].js",
	// 		},
	// 	},
	// },
});
