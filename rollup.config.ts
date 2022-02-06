import {resolve} from "path";
import {external} from "@aminnairi/rollup-plugin-external";
import {terser} from "rollup-plugin-terser";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: resolve("index.ts"),
  plugins: [external(), esbuild(), terser()],
  output: {
    file: resolve("build", "index.js"),
    format: "cjs"
  }
}
