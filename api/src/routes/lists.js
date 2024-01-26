const
secondsCache = 60 // number of seconds in memory cache between api calls 

let 
nytApiListData,
nytApiListCallTime

const axios = require ('axios') ,
 { Router } = require('express'),
     router = Router(),

getAllLists =  async () => {
    let 
    now  = new Date().getTime()
    nytApiListCallTime = nytApiListCallTime || now
    let timeOffset =  Math.round( (now - nytApiListCallTime) / 1000  ) > secondsCache ? true : false
    if(!nytApiListData || timeOffset ) 
    {    
        nytApiListData = await axios.get(`${process.env.API}names?api-key=${process.env.KEY_NYT}`).catch(error => error)
        nytApiListCallTime = now
    }
    return nytApiListData
}

router.get('/', async (req, res) => {
    const 
    response = await getAllLists()
    if (response.data) {
        const
        responseStatus = response.status,
                     c = response.data.num_results,
                result = response.data.results
        let 
        lists = []   
        
        if (
               responseStatus === 200 
            && Number.isInteger(c) 
           ) 
        {
          result.map( (e,index) => {
            lists.push({
                   id: index+1,
                 code: e.list_name_encoded,
                 name: e.list_name,
              display: e.display_name,
            })
          }) 
        }   
        
          return res.status(200).json(lists)
        
        } else {

            const err = {
                "code"    : response.response.status,
                "message" : response.message,
                "fault"   : response.response.data.fault.faultstring,
                "date"    : response.response.headers.date,
            }

            return res.status(200).json(err)
    }
})




module.exports = router
