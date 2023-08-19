// 

const {express, setRoutes} = require('./controller')
const app = express()
const path = require('path')
const port = +process.env.PORT || 3000


// setRoutes.get('^/$|/miniEOMP', (req, res)=>{
//     res.json({
//         status: res.statusCode,
//         msg:"IT WORKS"
//     })
// })

app.use(express.static('./static'),
express.urlencoded({
    extended: false,
}),setRoutes)

setRoutes.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./static/HTML/index.html"))
})






   




app.listen(port, ()=>{
    console.log(`server running on Port ${port}`)
})