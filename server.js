const express = require('express')
const next = require('next')
const axios = require('axios')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var bodyParser = require('body-parser');


app.prepare()
    .then(() => {
        const server = express()
        server.use(bodyParser.json()); // support json encoded bodies
        server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
        server.get('*', (req, res) => {
            return handle(req, res)
        })
        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
