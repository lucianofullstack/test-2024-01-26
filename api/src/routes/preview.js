const
    { Router } = require('express'),
    getter = require('../modules/getters'),
    router = Router()

router.get(['/','/:id'], async (req, res) => {
    let
        { id } = req.params
        id = (id) ? id : 1
        let books = await getter.listById(id)
        if (books.code) {
            return res.status(books.code).json(books)
        }
        books = await getter.preview(books)
        let output = ''
        books.forEach(element => {
            output += `<a class='card' href="${element.google_preview}"><img class="gallery-item__image" src="${element.book.book_image}" alt="${element.book.title}"/>
            ${element.book.title}
            </a>`
        });
const html = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>Book Preview</title>
		<link rel="shortcut icon" href="../favicon.ico">
        <style>
        html { font-size: 22px; 
          background-color:#f1eee7  
        }
        body { padding: 1rem; }
        a {
            text-decoration:none;
            color: #222;
            font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
            text-align:center;
            font-size:.8rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        img {
            width:220px;
            height:300px;
            text-align:center;
            margin:0 auto;
            display:block;
            opacity:.9;
            background: linear-gradient(to right, rgb(60, 13, 20) 3px, rgba(255, 255, 255, 0.5) 5px, rgba(255, 255, 255, 0.25) 7px, rgba(255, 255, 255, 0.25) 10px, transparent 12px, transparent 16px, rgba(255, 255, 255, 0.25) 17px, transparent 22px);
            box-shadow: 0 0 5px -1px black, inset -1px 1px 2px rgba(255, 255, 255, 0.5);
            margin: auto;
            border-radius: 5px;        
        }
        .card {
          height: 330px;
        }        
        .cards {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        }
        .card:hover img {
          box-shadow:0 0 20px rgb(225,225,180);
          opacity:1
        }
        </style>
	</head>
	<body>
    <div class="cards">
    ${output}
  </div>
    </body>
</html>`
        return res.status(200).send(html)    
})

module.exports = router
