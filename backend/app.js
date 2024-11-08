import express from "express.js"
import cors from "cors"
const app = express();
const port = 8000;
app.listen(port, ()=>{
    console.log(`server started ${port}`)
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  }))

export default app