import path from "path";
import dts from "vite-plugin-dts";
import styleInject from "vite-plugin-style-inject";
import { mergeConfig, defineConfig } from "vite";
import viteConfigBase from "../../vite.base.config";
import legacy from "@vitejs/plugin-legacy";
import pkg from "./package.json";

export default mergeConfig(
  viteConfigBase,
  defineConfig({
    plugins: [legacy(), styleInject(), dts()],
    build: {
      outDir: "dist",
      cssCodeSplit: true,
      sourcemap: true,
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "t-console-business-ui",
        fileName: "index",
      },
      rollupOptions: {
        // external every thing from packages.json deps and peers
        external: [
          ...Object.keys(pkg.dependencies),
          ...Object.keys(pkg.peerDependencies),
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
        ],
      },
    },
  })
);
