import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";

export default defineConfig({
  build: {
    lib: {
      entry: {
        "lit-loader/index": "src/lit-loader/index.ts",
      },
      formats: ["es"],
    },
  },
  plugins: [externalizeDeps()],
});
