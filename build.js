const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/promo-comm/runtime-es2015.js",
    "./dist/promo-comm/polyfills-es2015.js",
    "./dist/promo-comm/scripts.js",
    "./dist/promo-comm/main-es2015.js"
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/elements.js");
  await fs.copyFile("./dist/promo-comm/styles.css", "elements/styles.css");
  await fs.copy("./dist/promo-comm/assets/", "elements/assets/");
})();
