import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { importMaps } from "vite-plugin-import-maps";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
