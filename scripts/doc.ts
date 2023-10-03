/* eslint-disable @typescript-eslint/no-var-requires */
const TypeDoc = require("typedoc");
const fs = require("fs");
const glob = require("glob");

async function main() {
  // Application.bootstrap also exists, which will not load plugins
  // Also accepts an array of option readers if you want to disable
  // TypeDoc's tsconfig.json/package.json/typedoc.json option readers
  const app = await TypeDoc.Application.bootstrapWithPlugins({
    entryPoints: ["src/index.ts"],
    plugin: ["typedoc-plugin-markdown"],
    exclude: ["playground/**/*"],
    hideBreadcrumbs: false,
  });

  const project = await app.convert();

  if (project) {
    // Project may not have converted correctly
    const outputDir = "docs";

    // Rendered docs
    await app.generateDocs(project, outputDir);

    // Update README.md relative paths
    /*  const data = fs.readFileSync(`${outputDir}/README.md`, "utf8");
    const result = data
      .replaceAll("modules.md", "docs/modules.md")
      .replaceAll("interfaces/", "docs/interfaces/")
      .split("\n")
      .slice(2)
      .join("\n");
    fs.writeFileSync(`${outputDir}/README.md`, result, "utf8"); */

    // update all files execpt README.md in outPutDir to replace all 'REAMDE.md' with '../README.md' (with glob)
    const files = glob.sync(`${outputDir}/**/*.md`, {
      ignore: `${outputDir}/README.md`,
    });
    console.log(files);
    for (const file of files) {
      const data = fs.readFileSync(file, "utf8");
      const result = data.replaceAll("README.md", "../README.md");
      fs.writeFileSync(file, result, "utf8");
    }

    // move docs/README.md to README.md
    //fs.renameSync(`${outputDir}/README.md`, `${outputDir}/../README.md`);
  }
}

main().catch(console.error);
