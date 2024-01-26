/*        ,..........   ..........,       nyt-api: NYTimes API Consumption
     ,..,'          '.'          ',..,    NYTimes consumption backend using node, express, and axios.
    ,' ,'            :            ', ',        
   ,' ,'             :             ', ',  Requirements:
  ,' ,'              :              ', ',     - NY Times API KEY
 ,' ,'............., : ,.............', ', 
,'  '............   '.'   ............'  ',    
 '''''''''''''''''';''';''''''''''''''''''
                    '''
*/

const 
server = require('./src/app.js')
server.listen(process.env.PORT, () => {
    if (      process.env.NODE_ENV !== 'production' 
          &&  process.env.VERBOSE > 0 
       )  
       {
            console.log('✔  SERVER listening at '+process.env.PORT)
       }
  })
