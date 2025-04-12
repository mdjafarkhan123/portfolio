import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader"; // <-- Add this

export default defineConfig({
    plugins: [
        vue(),
        svgLoader(), // <-- Add this
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
