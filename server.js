import app from "./src/app.js"

const PORT = 3000

/* listening the port */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})