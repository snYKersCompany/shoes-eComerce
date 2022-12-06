const mongoose = require('mongoose')

const url = 'mongodb+srv://UserMaster:hmBKrzA9XQPVHVUP@cluster0.elzma4t.mongodb.net/snikersdb?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)
mongoose.connect(url)
.then(()=>console.log('CONEXION A MONGO EXITOSA'))
.catch((err)=> console.log(`El error de conexion es: ${err}`))

module.exports = {

}