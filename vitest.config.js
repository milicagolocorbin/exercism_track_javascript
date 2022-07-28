import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/learning_exercises/**/*.test.js"],
  },
});
