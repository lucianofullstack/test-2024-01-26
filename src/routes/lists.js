const
    { Router } = require('express'),
    router = Router()
/*
    getter = require('../modules/getters')
*/
    
    router.get('*', async (req, res) => {
/*
        const
            response = await getter.lists()
        if (response.code) {
            return res.status(response.code).json(response)
        }; return res.status(200).json(response)
        */

return res.status(200).json('test')

    })
    
    module.exports = router
