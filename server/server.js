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

app.get('/video', (req, res) => {
    var info = {video_title: 'titlefldsjhk', video_thumb: './images/thumb.png', video_length: 'length:int',video_views: '1000', video_time: 'release date', user_prof:'profpath', user_name: 'channel name', }
    res.send(info)
})

app.listen(3001)