const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()

//configs
const { PORT } = require('./configs/serverConfig')
const { DB_URL, DB_NAME } = require('./configs/dbConfig')

// connection to database
mongoose.connect(DB_URL);
const db = mongoose.connection

db.on('error', (err) => {
    console.log(`❌This is error : ${err}`);
})
db.once('open', () => {
    console.log(`✅Connected with database Successfully : ${DB_NAME}`);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());


require('./routes/user.routes')(app)

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})