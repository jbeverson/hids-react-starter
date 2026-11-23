import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// host: true lets the Codespaces port forwarder reach the dev server
export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 5173 },
});
