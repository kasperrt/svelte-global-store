import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import autoPreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";

export default {
  // This `main.js` file we wrote
  input: "svelte/entry.ts",
  output: {
    // The destination for our bundled JavaScript
    file: "public-rollup/index.js",
    // Our bundle will be an Immediately-Invoked Function Expression
    format: "iife",
    // The IIFE return value will be assigned into a variable called `app`
    name: "app",
  },
  plugins: [
    svelte({
      // Tell the svelte plugin where our svelte files are located
      include: "svelte/**/*.svelte",
      preprocess: autoPreprocess(),
    }),
    typescript({ sourceMap: false }),
    // Tell any third-party plugins that we're building for the browser
    resolve({ browser: true }),
  ],
};
