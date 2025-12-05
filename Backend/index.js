import { connectDb } from "./src/config/db.js";
import app from "./app.js";
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
}   
)

connectDb()
.then(() => {
    app.listen(process.env.PORT || 5000,  () => {
        console.log(`server is running at http://localhost:${process.env.PORT}`)
    })
})

.catch((err) => {
    console.log("Mongodb connection failed !!!", err)
})