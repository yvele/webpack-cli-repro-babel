import config from "./webpack/config";
import path from "path";

export default {
  entry : "./src/main.js",
  output : {
    path : path.resolve(__dirname, config.dist),
    filename : "main.js"
  }
};
