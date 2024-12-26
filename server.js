import app from "./src/app.js"
import connection from "./infra/connection.js"

const PORT = 3000
connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Connection successful!');        
        /* listening the port */
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`)
        })
    }
})