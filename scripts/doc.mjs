import * as TypeDoc from "typedoc";
import fs from "node:fs";
import path from "node:path";

// Infos | docs : https://typedoc.org/ and https://typedoc-plugin-markdown.org/

const outputDir = "docs";
const tempDir = ".temp";
const entryFileName = "modules.md";

const componentsDoc = `## Components

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

async function main() {
  const app = await TypeDoc.Application.bootstrapWithPlugins({
    entryPoints: ["src/index.ts"],
    plugin: ["typedoc-plugin-markdown"],
    out: tempDir,
    name: "API",
    readme: "none",
    entryFileName,
    outputFileStrategy: "modules",
    hidePageHeader: true,
    hideBreadcrumbs: true,
    disableSources: true,
    sort: ["required-first"],
    parametersFormat: "table",
    typeDeclarationFormat: "table",
    typeAliasPropertiesFormat: "table",
    interfacePropertiesFormat: "table",
  });

  const project = await app.convert();
  if (!project) {
    // Project may not have converted correctly
    throw new Error("TypeDoc conversion failed");
  }

  fs.rmSync(tempDir, { recursive: true, force: true });
  await app.generateOutputs(project);

  const files = fs
    .readdirSync(tempDir)
    .filter((file) => file.endsWith(".md") && file !== "README.md");

  for (const file of files) {
    const source = path.join(tempDir, file);
    let result = fs.readFileSync(source, "utf8");

    if (file === entryFileName) {
      result = result.replace("# API", `# API\n\n${componentsDoc}`);
    }

    fs.writeFileSync(path.join(outputDir, file), result, "utf8");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
