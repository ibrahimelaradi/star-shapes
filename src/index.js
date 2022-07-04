const fs = require("fs");
const path = require("path");
const { flush } = require("./printer");
const shapesScriptsPath = path.join(process.cwd(), "src/shapes");
const mdPath = path.join(process.cwd(), "docs");
const contentPath = path.join(process.cwd(), "CONTENT.md");
const scripts = fs.readdirSync(shapesScriptsPath);

let contentMd = "## Links to Examples\n";

scripts.forEach((scriptPath) => {
	const absoluteScriptPath = path.join(shapesScriptsPath, scriptPath);
	console.log(`${scriptPath} =========`);
	console.time(scriptPath);
	const { main } = require(absoluteScriptPath);
	if (main) main();
	flush(path.join(mdPath, scriptPath.replace(".js", ".md")));
	contentMd += `- [${scriptPath.replace(".js", "")}](docs/${scriptPath.replace(
		".js",
		".md"
	)})\n`;
	console.timeEnd(scriptPath);
});

fs.writeFileSync(contentPath, contentMd);
