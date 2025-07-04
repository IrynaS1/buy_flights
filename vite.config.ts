import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://IrynaS1.github.io/buy_flights",
  plugins: [react()],
});
