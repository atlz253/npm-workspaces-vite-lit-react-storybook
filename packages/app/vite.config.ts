import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    conditions: ["vite", "module", "import", "default"],
  },
});
