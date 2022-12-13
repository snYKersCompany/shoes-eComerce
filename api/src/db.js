require('dotenv').config();
const mongoose = require('mongoose')

const {DB_URL} = process.env

mongoose.set('strictQuery', false)
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
})
.then(()=>console.log('CONEXION A MONGO EXITOSA'))
.catch((err)=> console.log(`El error de conexion es: ${err}`))