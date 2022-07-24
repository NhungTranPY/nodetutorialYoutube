const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    // res.send('testing') // this is terminate the whole cycle
    next() // if we don't terminate the cycle then always remember to past it on by using next()
}

module.exports = logger