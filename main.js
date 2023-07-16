import "./style.css"
import routes from "./routes"

// index.js
// const page1Button = document.getElementById("page1-button")
// const page2Button = document.getElementById("page2-button")

// page1Button.addEventListener("click", () => {
//   window.location.href = "./page1.html"
// })

// page2Button.addEventListener("click", () => {
//   window.location.href = "./page2.html"
// })

// index.js

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app")

  for (const route in routes) {
    const routeName = route
    const button = document.createElement("button")
    button.textContent = `Go to ${routeName}`
    button.addEventListener("click", () => {
      window.location.href = `./${routeName}.html`
    })
    app.appendChild(button)
  }
})
