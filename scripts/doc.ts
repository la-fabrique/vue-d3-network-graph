/* eslint-disable @typescript-eslint/no-var-requires */
const TypeDoc = require("typedoc");
const fs = require("fs");
const glob = require("glob");

// Infos | docs : https://typedoc.org/

async function main() {
  // Application.bootstrap also exists, which will not load plugins
  // Also accepts an array of option readers if you want to disable
  // TypeDoc's tsconfig.json/package.json/typedoc.json option readers
  const app = await TypeDoc.Application.bootstrapWithPlugins({
    entryPoints: ["src/index.ts"],
    plugin: ["typedoc-plugin-markdown"],
    exclude: ["playground/**/*"],
    name: "API",
    hideBreadcrumbs: true,
    hideInPageTOC: true,
    disableSources: true,
    sort: "required-first",
  });

  const project = await app.convert();

  if (project) {
    // Project may not have converted correctly
    const outputDir = "docs";
    const tempDir = ".temp";

    // Rendered docs
    await app.generateDocs(project, tempDir);

    const files = glob.sync(`${tempDir}/*.md`);

    console.debug("[DEBUG] files : ", files);
    for (const file of files) {
      const data = fs.readFileSync(file, "utf8");
      let result = data.replaceAll("README.md", "../README.md");

      if (file.includes("modules.md")) {
        const txt = `## Components 
### D3NetworkGraph

**props**

| Name     | Type                                    | Default   | Description                                                                                                                                  |
| -------- | --------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| nodes    | Array<[D3Node](modules.md#d3node)> | []        | Array of nodes                                                                                                                               |
| links    | Array<[D3Link](modules.md#d3link)> | []        | Array of links                                                                                                                               |
| options? | [D3Options](modules.md#d3options)  | undefined | [Links](modules.md#d3linkoptions), [nodes](modules.md#d3nodeoptions), [layout](modules.md#d3layoutoptions) and [simulation](modules.md#d3simulationoptions) Options |

**events**

| Name         | Type                                           | Description                                         |
| ------------ | ---------------------------------------------- | --------------------------------------------------- |
| 'node-click' | [function](modules.md#d3neworkgraphemits) | Callback function called when a node is clicked     |
| 'link-click' | [function](modules.md#d3neworkgraphemits) | Callback function called when a node is mouseovered |
`;
        result = result.replace("# API", `# API\n\n${txt}`);

        // remove end of file after ## Other : vue components
        const index = result.indexOf("## Other");
        result = result.substring(0, index);
      }

      fs.writeFileSync(file, result, "utf8");
    }

    // copy all md files in tempDir to outputDir without delete existing files in outputDir and without copy readme.md
    const filesToCopy = glob.sync(`${tempDir}/*.md`);
    for (const file of filesToCopy) {
      const fileName = file.split("/").pop();
      if (fileName !== "README.md") {
        fs.copyFileSync(file, `${outputDir}/${fileName}`);
      }
    }
  }
}

main().catch(console.error);
