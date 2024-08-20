import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    watchForFileChanges: false,
  },
});
