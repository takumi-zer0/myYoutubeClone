const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: '*'
}));


app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.send("hello from server")
})

app.listen(3001)