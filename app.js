const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./2-express-tutorial/navbar-app/index.html')
const homeStyles = readFileSync('./2-express-tutorial/navbar-app/styles.css')
const homeImage = readFileSync('./2-express-tutorial/navbar-app/logo.svg')
const homeLogic = readFileSync('./2-express-tutorial/navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    // console.log(req.method); // GET
    // console.log(req.url); // /about/info/john
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    } else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    } else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    } else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    // 404
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)
