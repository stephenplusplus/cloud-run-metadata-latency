const http = require('http')

const METADATA_SERVICE = 'http://metadata.google.internal./computeMetadata/v1/project/project-id'

http
  .createServer((req, res) => {
    const startTime = Date.now()
    http.get(METADATA_SERVICE, {
      headers: {
        'Metadata-Flavor': 'Google',
      },
    }, resp => {
      const elapsedTime = Date.now() - startTime
      console.log('Response Headers', resp.headers)
      res.write(`Status: ${resp.statusCode}, Metadata request time: ${elapsedTime}ms`)
      resp.pipe(res)
    })
  })
  .listen(8080)