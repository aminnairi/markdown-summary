import {resolve} from "path";
import esbuild from "rollup-plugin-esbuild";
import {external} from "@aminnairi/rollup-plugin-external";

export default {
  input: resolve("index.ts"),
  plugins: [esbuild(), external()],
  output: {
    file: resolve("build", "index.js"),
    format: "cjs"
  }
}
