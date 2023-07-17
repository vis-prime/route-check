import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const routesDir = "F:/net/route-check/routes"
const files = fs.readdirSync(routesDir)

const entries = {}

files.forEach((file) => {
  const filePath = path.join(routesDir, file)
  const fileName = path.basename(file, path.extname(file))
  // entries[fileName] = filePath

  // const htmlFolderPath = path.join(__dirname, "public")

  const htmlFilePath = path.join(__dirname, `${fileName}.html`)
  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${getTitle(fileName)}</title>
    </head>
    <body>
      <script type="module" src="/routes/${fileName}.js"></script>
    </body>
  </html>`
  fs.writeFileSync(htmlFilePath, htmlContent)
  entries[fileName] = htmlFilePath
})

const routesFilePath = path.join(__dirname, "routes.js")
fs.writeFileSync(routesFilePath, `export default ${JSON.stringify(entries)};`)

console.log(`Routes and HTML files generated at ${routesFilePath}`)
console.log(`Route files ${files}`)

function getTitle(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
