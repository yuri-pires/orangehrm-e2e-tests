import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    experimentalRunAllSpecs: true,
    experimentalMemoryManagement: true,
  },
  env: {
    hideXhr: true,
  },
});
