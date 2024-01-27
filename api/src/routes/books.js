const
    axios = require('axios'),
    { Router } = require('express'),
    getter = require('../modules/getters'),
    router = Router()

router.get('/:list', async (req, res) => {
    const
        { list } = req.params
    if (list) {
        let books = await getter.listBySlug(list)
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
