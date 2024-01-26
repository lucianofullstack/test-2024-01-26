const defaults = () => { return {
    NODE_ENV    : "development",
    API         : "https://api.nytimes.com/svc/books/v3/lists/",
    PORT        : 3001,
    VERBOSE     : 2   ,
    MORGAN      : 1   
    }}
    appConfig = ()=>{
        if (!process.env.SINCE) {
             process.env.SINCE = new Date()
             let configDefault = defaults()
             if (process.env.NODE_ENV !== 'production') {
                const fs = require('fs')
                if (fs.existsSync(".env")) {
                  const db = {},
                    result = require('dotenv').config({ processEnv: db })
                  if (!result.error) {
                    "KEY_NYT, NODE_ENV, API, PORT, VERBOSE, MORGAN"
                      .split(", ")
                      .forEach((value) => {
                        if ( db[value]) {
                          process.env[value] = db[value]
                        }
                      })
                  }
                }
                Object.entries(configDefault)
                  .forEach(([property, value]) => {
                      process.env[property] =
                      process.env[property]
                   || value
                  })
              }      
        }
        return true
    }
    
    module.exports = appConfig()
    