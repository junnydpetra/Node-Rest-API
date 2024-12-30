import app from "./app.js"

const PORT = 3000

/* listening to port 3000 */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})