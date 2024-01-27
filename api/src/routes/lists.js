const
    { Router } = require('express'),
    getter = require('../modules/getters'),
    router = Router()
    
    router.get('*', async (req, res) => {
        const
            response = await getter.lists()
        if (response.code) {
            return res.status(response.code).json(response)
        }; return res.status(200).json(response)
    })
    
    module.exports = router
