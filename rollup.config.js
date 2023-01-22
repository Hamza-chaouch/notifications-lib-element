import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";
import { importAssertionsPlugin } from "rollup-plugin-import-assert";
export default {
  input: "src/Toast.js",
  output: {
    file: pkg.module,
    format: "es",
  },
  plugins: [postcss(), importAssertionsPlugin()],
};
