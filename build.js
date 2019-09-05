const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/promo-comm-element/runtime-es2015.js",
    "./dist/promo-comm-element/polyfills-es2015.js",
    "./dist/promo-comm-element/scripts.js",
    "./dist/promo-comm-element/main-es2015.js"
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/elements.js");
  await fs.copyFile(
    "./dist/promo-comm-element/styles.css",
    "elements/styles.css"
  );
  await fs.copy("./dist/promo-comm-element/assets/", "elements/assets/");
})();
