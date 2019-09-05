const http = require('http')

const METADATA_SERVICE = 'http://metadata.google.internal./computeMetadata/v1/instance'

http
  .createServer((req, res) => {
    const startTime = Date.now()
    http.get(METADATA_SERVICE, {
      headers: {
        'Metadata-Flavor': 'Google',
      },
    }, resp => {
      const elapsedTime = Date.now() - startTime
      console.log(`Metadata request time: ${elapsedTime}ms`)
      res.end(`Metadata request time: ${elapsedTime}ms`)
    })
  })
  .listen(8080)