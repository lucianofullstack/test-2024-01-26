const
    { Router } = require('express'),
    getter = require('../modules/getters'),
    router = Router()

    router.get('/:id', async (req, res) => {
        const
            { id } = req.params
        if (id) {
            let books = await getter.listById(id)
            if (books.code) {
                return res.status(books.code).json(books)
            }
            books = await getter.preview(books)
            return res.status(200).json(books)
        }
    })
    
    router.get('/', async (req, res) => {
        const
            response = await getter.lists()
        if (response.code) {
            return res.status(response.code).json(response)
        }; return res.status(200).json(response)
    })
    
    module.exports = router
    