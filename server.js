const express = require('express')

// create new express object.  "new" keyword not used in js
const app = express()

// add http request handlers
let hello = (req, res) => {
    res.writeHead(200)
    res.write('Hello world')
    res.end()
}

let goodbye = (req, res) => {
    res.writeHead(200)
    res.write('Goodbye world')
    res.end()
}

let index = (req, res) => {
    if (req.url === '/') {
        res.writeHead(200)
        res.write('Home Page')
        res.end()
    }
    else {
        res.writeHead(404)
        res.write('Not Found')
        res.end()
    }
}

// route http requests to our handler function
// index path must go last or it executes on all urls
app.use('/hello', hello)
app.use('/goodbye', goodbye)
app.use('/', index)

// start express web server
app.listen(3000)
console.log('Express running on port 3000')