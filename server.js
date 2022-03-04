const server = require('express')()

server.get('/', (req, res) => {
	console.log(res.send('ESLint'))
})

server.listen(3000)