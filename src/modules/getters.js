const
    secondsCache = 60,  // number of seconds in memory cache between api calls for lists
    previewLang = '?hl=it&gbpv=0',
    axios = require('axios'),

    errors = (data) => {
        const err = {
            "code": data.response.status,
            "message": data.message,
            "fault": data.response.data.fault.faultstring,
            "date": data.response.headers.date,
        }
        return err
    },

    lists = async () => {
        let now = new Date().getTime()
        nytApiListsCallTime = nytApiListsCallTime || now
        let timeOffset = Math.round((now - nytApiListsCallTime) / 1000) > secondsCache ? true : false
        if (!nytApiListsData || timeOffset) {
            const
                response = await axios
                    .get(`${process.env.API}names?api-key=${process.env.KEY_NYT}`)
                    .catch(error => error)
            if (response.data) {
                const
                    responseStatus = response.status,
                    c = response.data.num_results,
                    result = response.data.results
                nytApiListsData = []
                if (
                    responseStatus === 200
                    && Number.isInteger(c)
                ) {
                    result.map((e, index) => {
                        nytApiListsData.push({
                            id: index + 1,
                            slug: e.list_name_encoded,
                            name: e.list_name,
                            display: e.display_name,
                        })
                    })
                }

                nytApiListsCallTime = now
            } else {
                return errors(response)
            }
        }
        return nytApiListsData
    },

    listBySlug = async (name) => {
        const
            list = await lists(),
            exist = list.some(({ slug }) => slug === name)
        if (!exist) {
            return ({ "code": 204, "message": "List Not Found" })
        }
        const
            response = await axios
                .get(`${process.env.API}current/${name}.json?api-key=${process.env.KEY_NYT}`)
                .catch(error => error)
        if (response.data) {
            const
                books = response.data.results.books
            if (books) {
                return books
            }
            return ({ "message": "Books Not Found" })
        }
        return errors(response)
    },

    listById = async (id) => {
        const
        list = await lists(),
        exist = list.some(({ id }) => id === id)
        if (!exist) {
            return ({ "code": 204, "message": "List Not Found" })
        }
        return listBySlug(list[id].slug)
    },

    preview = async (books) => {
        const promises = books.map(async (book) => {
            const
                isbn13 = `${process.env.ISBN}${book.primary_isbn13}`,
                { data } = await axios
                    .get(isbn13)
                    .catch(error => error),

                google_preview = (typeof data !== 'undefined' && data.totalItems === 1)
                    ? process.env.PREVIEW + data.items[0].id + previewLang
                    : isbn13

            return {
                book, google_preview
            }
        })
        const result = await Promise.all(promises)
        return result
    }

let
    nytApiListsData,
    nytApiListsCallTime

module.exports = {
    errors,
    lists,
    listBySlug,
    listById,
    preview
}
