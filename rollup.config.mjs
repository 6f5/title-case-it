import { defineConfig } from "rollup";
import pkg from "./package.json" assert {type: "json"}
export default defineConfig({
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ]
})
