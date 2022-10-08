import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import path from "path";

export default defineConfig({
  // src 配下を @ で import できるようにする
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // Quasar 導入
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
  ],
});