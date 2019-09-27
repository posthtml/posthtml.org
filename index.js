// 194.58.112.174
const http = require('http')
const port = 8080;
const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('PostHTML on a Node.js Server!')
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }    
    console.log(`server is listening on ${port}`)
})