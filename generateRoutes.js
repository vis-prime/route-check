import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const routesDir = "F:/net/route-check/routes"
const files = fs.readdirSync(routesDir)

const entries = {}

console.log({ __filename })
console.log({ __dirname })
console.log({ files })

files.forEach((file) => {
  const filePath = path.join(routesDir, file)
  const fileName = path.basename(file, path.extname(file))
  entries[fileName] = filePath

  const htmlFolderPath = path.join(__dirname, "public")
  //   console.log({ filePath, fileName, htmlFolderPath })
  //   fs.mkdirSync(htmlFolderPath, { recursive: true })

  const htmlFilePath = path.join(htmlFolderPath, `${fileName}.html`)
  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${fileName}</title>
    </head>
    <body>
      <h1>${fileName}</h1>
      <script type="module" src="/routes/${fileName}.js"></script>
    </body>
  </html>`
  fs.writeFileSync(htmlFilePath, htmlContent)
})

const routesFilePath = path.join(__dirname, "routes.js")
fs.writeFileSync(routesFilePath, `export default ${JSON.stringify(entries)};`)

console.log(`Routes and HTML files generated at ${routesFilePath}`)
