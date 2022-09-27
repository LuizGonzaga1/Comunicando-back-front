const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {

    try {

        const {data} = await axios('http://localhost:3005/')

        return res.json(data)
    } catch (erro) {
        console.log(data)
    }
})
app.listen('4567')