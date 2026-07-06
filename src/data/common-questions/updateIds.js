const fs = require("fs");

const file = "common-questions-101-150.ts";

let content = fs.readFileSync(file, "utf8");

content = content.replace(/id:\s*(\d+)/g, (_, id) => {
  return `id: ${Number(id) + 300}`;
});

fs.writeFileSync(file, content);

console.log("IDs actualizados correctamente.");