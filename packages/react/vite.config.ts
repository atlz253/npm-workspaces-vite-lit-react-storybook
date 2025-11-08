import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";

export default defineConfig({
  build: {
    lib: {
      entry: {
        "Loader/index": "src/Loader/index.tsx",
        "Counter/index": "src/Counter/index.tsx",
      },
      formats: ["es"],
    },
  },
  resolve: {
    conditions: ["vite", "module", "import", "default"],
  },
  plugins: [externalizeDeps()],
});
