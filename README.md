<p align="center">
<img src="./README/nytimes.svg">
</p>
<h4 align="center">📅 2024-01-26</h4>
<p align="justify">Realizzare un server back-end con un framework <a href="https://nodejs.org/en">Node.js</a> che, utilizzando le <abbr title="application programming interface">APIs</abbr> realizzate da <a href="https://developer.nytimes.com/apis">NY Times</a> e <a href="https://developers.google.com/books/docs/overview">Google Books</a>, esponga <b>2</b> endpoints:</p>

1. **Endpoint**: Restituisce l'elenco delle varie liste di libri presenti nei sistemi del NY Times.

2. **Endpoint**: Dato il codice di una lista restituisce l'elenco dei libri presenti in quella lista e arricchisce il contenuto con il link alla preview del libro su google books.

<p align="justify">La scelta del framework e di eventuali librerie è a discrezione del candidato. Caricare l'elaborato in una repository git.</p>

<h2>🧪 Testing</h2>

<pre></> npm test</pre>

  ⚙️ Routes

         Status

      ✔  GET /favicon.ico should get 200
      ✔  GET /amazon should get 404
      ✔  GET /lists should get 200 (1482ms)
      ✔  GET /books/hardcover-fiction should get 200 (785ms)
      ✔  GET 1st book in hardcover fiction to return rank (865ms)
      ✔  GET 2nd book in hardcover-fiction with google_preview (699ms)

      6 passing (4s)


<h2>🚦 Endpoints</h2>

<h3>Extras</h3>

<h4>/</h4>

<h4>/<b>id</b>/<i>(number)</i>: returns bestseller list by id number if number is empty returns all lists</h4>

<pre>
[
    {
        "book": {
            "rank": 1,
            "rank_last_week": 3,
            "weeks_on_list": 112,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "0307742482",
            "primary_isbn13": "9780307742483",
            "publisher": "Doubleday",
            "description": "The story of a murder spree in 1920s Oklahoma that targeted Osage Indians, whose lands contained oil.",
            "price": "0.00",
            "title": "KILLERS OF THE FLOWER MOON",
            "author": "David Grann",
            "contributor": "by David Grann",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385534246.jpg",
            "book_image_width": 326,
            "book_image_height": 495,
            "amazon_product_url": "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "https://www.nytimes.com/2017/04/28/books/review/killers-of-the-flower-moon-david-grann.html",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "0385534248",
                    "isbn13": "9780385534246"
                },
                {
                    "isbn10": "0385534256",
                    "isbn13": "9780385534253"
                },
                {
                    "isbn10": "1524755931",
                    "isbn13": "9781524755935"
                },
                {
                    "isbn10": "0307742482",
                    "isbn13": "9780307742483"
                },
                {
                    "isbn10": "1471166554",
                    "isbn13": "9781471166556"
                },
                {
                    "isbn10": "1984883860",
                    "isbn13": "9781984883865"
                },
                {
                    "isbn10": "0857209043",
                    "isbn13": "9780857209047"
                },
                {
                    "isbn10": "0593470834",
                    "isbn13": "9780593470831"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780307742483?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780307742483"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FKILLERS%2BOF%2BTHE%2BFLOWER%2BMOON%2FDavid%2BGrann%2F9780307742483"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780307742483"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780307742483?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/c5c1cd05-cdbc-5e7a-8255-1923ab4b1ceb"
        },
        "google_preview": "https://www.google.it/books/edition/_/fPdQDwAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 2,
            "rank_last_week": 2,
            "weeks_on_list": 128,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "0143125478",
            "primary_isbn13": "9780143125471",
            "publisher": "Penguin",
            "description": "The story of the American rowers who pursued gold at the 1936 Berlin Olympic Games; the basis of the film.",
            "price": "0.00",
            "title": "THE BOYS IN THE BOAT",
            "author": "Daniel James Brown",
            "contributor": "by Daniel James Brown",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9781101622742.jpg",
            "book_image_width": 323,
            "book_image_height": 495,
            "amazon_product_url": "http://www.amazon.com/The-Boys-Boat-Americans-Olympics-ebook/dp/B00AEBETU2?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "067002581X",
                    "isbn13": "9780670025817"
                },
                {
                    "isbn10": "0143125478",
                    "isbn13": "9780143125471"
                },
                {
                    "isbn10": "159413779X",
                    "isbn13": "9781594137792"
                },
                {
                    "isbn10": "1611761697",
                    "isbn13": "9781611761696"
                },
                {
                    "isbn10": "1410459543",
                    "isbn13": "9781410459541"
                },
                {
                    "isbn10": "0143130838",
                    "isbn13": "9780143130833"
                },
                {
                    "isbn10": "1101620137",
                    "isbn13": "9781101620137"
                },
                {
                    "isbn10": "0606393129",
                    "isbn13": "9780606393126"
                },
                {
                    "isbn10": "0143136968",
                    "isbn13": "9780143136965"
                },
                {
                    "isbn10": "0593512308",
                    "isbn13": "9780593512302"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "http://www.amazon.com/The-Boys-Boat-Americans-Olympics-ebook/dp/B00AEBETU2?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780143125471?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143125471"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BBOYS%2BIN%2BTHE%2BBOAT%2FDaniel%2BJames%2BBrown%2F9780143125471"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780143125471"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780143125471?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/94ffb4d1-cf56-5b40-859f-10ec5d7e3266"
        },
        "google_preview": "https://www.google.it/books/edition/_/DrcBDAAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 3,
            "rank_last_week": 1,
            "weeks_on_list": 7,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "0316572063",
            "primary_isbn13": "9780316572064",
            "publisher": "Little, Brown",
            "description": "The former congresswoman from Wyoming recounts how she helped lead the Select Committee to Investigate the Jan. 6. Attack on the United States Capitol.",
            "price": "0.00",
            "title": "OATH AND HONOR",
            "author": "Liz Cheney",
            "contributor": "by Liz Cheney",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316572064.jpg",
            "book_image_width": 323,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/0316572063?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "0316572063",
                    "isbn13": "9780316572064"
                },
                {
                    "isbn10": "031657208X",
                    "isbn13": "9780316572088"
                },
                {
                    "isbn10": "1668635135",
                    "isbn13": "9781668635131"
                },
                {
                    "isbn10": "1668640449",
                    "isbn13": "9781668640449"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/0316572063?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780316572064?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316572064"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FOATH%2BAND%2BHONOR%2FLiz%2BCheney%2F9780316572064"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780316572064"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780316572064?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/dc0a4f2d-d896-5f85-93c2-5fb756999bc3"
        },
        "google_preview": "https://www.google.it/books/edition/_/uj7ZzwEACAAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 4,
            "rank_last_week": 4,
            "weeks_on_list": 39,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "0385534264",
            "primary_isbn13": "9780385534260",
            "publisher": "Doubleday",
            "description": "The survivors of a shipwrecked British vessel on a secret mission during an imperial war with Spain have different accounts of events.",
            "price": "0.00",
            "title": "THE WAGER",
            "author": "David Grann",
            "contributor": "by David Grann",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385534260.jpg",
            "book_image_width": 329,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/0385534264?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "0385534264",
                    "isbn13": "9780385534260"
                },
                {
                    "isbn10": "0385534272",
                    "isbn13": "9780385534277"
                },
                {
                    "isbn10": "0307747492",
                    "isbn13": "9780307747495"
                },
                {
                    "isbn10": "0307747484",
                    "isbn13": "9780307747488"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/0385534264?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780385534260?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385534260"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWAGER%2FDavid%2BGrann%2F9780385534260"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780385534260"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780385534260?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/92ec85ca-4cff-59b6-94a3-b81002bfc8e6"
        },
        "google_preview": "https://www.google.it/books/edition/_/GEGNEAAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 5,
            "rank_last_week": 6,
            "weeks_on_list": 177,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "0143127748",
            "primary_isbn13": "9780143127741",
            "publisher": "Penguin",
            "description": "How trauma affects the body and mind, and innovative treatments for recovery.",
            "price": "0.00",
            "title": "THE BODY KEEPS THE SCORE",
            "author": "Bessel van der Kolk",
            "contributor": "by Bessel van der Kolk",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg",
            "book_image_width": 128,
            "book_image_height": 193,
            "amazon_product_url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "0670785938",
                    "isbn13": "9780670785933"
                },
                {
                    "isbn10": "0143127748",
                    "isbn13": "9780143127741"
                },
                {
                    "isbn10": "1469092352",
                    "isbn13": "9781469092355"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780143127741?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143127741"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE%2FBessel%2Bvan%2Bder%2BKolk%2F9780143127741"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780143127741"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780143127741?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e"
        },
        "google_preview": "https://www.google.it/books/edition/_/vHnZCwAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 6,
            "rank_last_week": 5,
            "weeks_on_list": 43,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "0593236599",
            "primary_isbn13": "9780593236598",
            "publisher": "Harmony",
            "description": "A look at recent scientific research on aging and longevity.",
            "price": "0.00",
            "title": "OUTLIVE",
            "author": "Peter Attia with Bill Gifford",
            "contributor": "by Peter Attia with Bill Gifford",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593236598.jpg",
            "book_image_width": 385,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/0593236599?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "0593236599",
                    "isbn13": "9780593236598"
                },
                {
                    "isbn10": "0593236602",
                    "isbn13": "9780593236604"
                },
                {
                    "isbn10": "0593664442",
                    "isbn13": "9780593664445"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/0593236599?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780593236598?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593236598"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FOUTLIVE%2FPeter%2BAttia%2Bwith%2BBill%2BGifford%2F9780593236598"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780593236598"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780593236598?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/69f6e624-4f30-59d6-8103-816d17ae5ec1"
        },
        "google_preview": "https://www.google.it/books/edition/_/HYqeEAAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 7,
            "rank_last_week": 12,
            "weeks_on_list": 4,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "006322688X",
            "primary_isbn13": "9780063226883",
            "publisher": "Harper",
            "description": "The author of “American Carnage” looks at divisions within the American evangelical movement.",
            "price": "0.00",
            "title": "THE KINGDOM, THE POWER, AND THE GLORY",
            "author": "Tim Alberta",
            "contributor": "by Tim Alberta",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063226883.jpg",
            "book_image_width": 331,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/006322688X?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "006322688X",
                    "isbn13": "9780063226883"
                },
                {
                    "isbn10": "0063226901",
                    "isbn13": "9780063226906"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/006322688X?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780063226883?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226883"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BKINGDOM%252C%2BTHE%2BPOWER%252C%2BAND%2BTHE%2BGLORY%2FTim%2BAlberta%2F9780063226883"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780063226883"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780063226883?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/339d100c-baf0-5d6d-95d4-c51a47ebf471"
        },
        "google_preview": "https://www.google.it/books/edition/_/IGmrzwEACAAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 8,
            "rank_last_week": 7,
            "weeks_on_list": 13,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "1668009048",
            "primary_isbn13": "9781668009048",
            "publisher": "Gallery",
            "description": "The Grammy Award-winning pop star details her personal and professional experiences, including the years she spent under a conservatorship overseen by her father.",
            "price": "0.00",
            "title": "THE WOMAN IN ME",
            "author": "Britney Spears",
            "contributor": "by Britney Spears",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9781668009048.jpg",
            "book_image_width": 323,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/1668009048?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "1668009048",
                    "isbn13": "9781668009048"
                },
                {
                    "isbn10": "1668009064",
                    "isbn13": "9781668009062"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/1668009048?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9781668009048?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781668009048"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWOMAN%2BIN%2BME%2FBritney%2BSpears%2F9781668009048"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9781668009048"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9781668009048?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/7aa2df7f-692d-597b-adce-3d3688751cd4"
        },
        "google_preview": "https://www.google.it/books/edition/_/15p5zwEACAAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 9,
            "rank_last_week": 11,
            "weeks_on_list": 24,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "1984878123",
            "primary_isbn13": "9781984878120",
            "publisher": "Viking",
            "description": "An examination of the cognitive skills of rethinking and unlearning that could be used to adapt to a rapidly changing world.",
            "price": "0.00",
            "title": "THINK AGAIN",
            "author": "Adam Grant",
            "contributor": "by Adam Grant",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9781984878106.jpg",
            "book_image_width": 331,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/1984878107?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "1984878107",
                    "isbn13": "9781984878106"
                },
                {
                    "isbn10": "1984878115",
                    "isbn13": "9781984878113"
                },
                {
                    "isbn10": "0593395786",
                    "isbn13": "9780593395783"
                },
                {
                    "isbn10": "1984878123",
                    "isbn13": "9781984878120"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/1984878107?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9781984878120?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984878120"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHINK%2BAGAIN%2FAdam%2BGrant%2F9781984878120"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9781984878120"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9781984878120?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/dc855453-b93f-5b3c-8586-d68f25c629e9"
        },
        "google_preview": "https://www.google.it/books/edition/_/KdXcEAAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 10,
            "rank_last_week": 8,
            "weeks_on_list": 19,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "1982181281",
            "primary_isbn13": "9781982181284",
            "publisher": "Simon & Schuster",
            "description": "The author of “The Code Breaker” traces Musk’s life and summarizes his work on electric vehicles, private space exploration and artificial intelligence.",
            "price": "0.00",
            "title": "ELON MUSK",
            "author": "Walter Isaacson",
            "contributor": "by Walter Isaacson",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982181284.jpg",
            "book_image_width": 327,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/1982181281?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "1982181281",
                    "isbn13": "9781982181284"
                },
                {
                    "isbn10": "1982181303",
                    "isbn13": "9781982181307"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/1982181281?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9781982181284?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982181284"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FELON%2BMUSK%2FWalter%2BIsaacson%2F9781982181284"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9781982181284"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9781982181284?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/b6504701-7632-57ba-b6fe-8af0a840ba8e"
        },
        "google_preview": "https://www.google.it/books/edition/_/gBfXEAAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 11,
            "rank_last_week": 0,
            "weeks_on_list": 1,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "0385549466",
            "primary_isbn13": "9780385549462",
            "publisher": "Doubleday",
            "description": "A couple with small children choose to have an open marriage.",
            "price": "0.00",
            "title": "MORE",
            "author": "Molly Roden Winter",
            "contributor": "by Molly Roden Winter",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385549455.jpg",
            "book_image_width": 331,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/0385549458?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "0385549458",
                    "isbn13": "9780385549455"
                },
                {
                    "isbn10": "0385549466",
                    "isbn13": "9780385549462"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/0385549458?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780385549462?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385549462"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FMORE%2FMolly%2BRoden%2BWinter%2F9780385549462"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780385549462"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780385549462?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/089939c1-e574-5ef0-a5e5-d67ed0d5a581"
        },
        "google_preview": "https://www.google.it/books/edition/_/AtS5EAAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 12,
            "rank_last_week": 9,
            "weeks_on_list": 28,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "1250866448",
            "primary_isbn13": "9781250866448",
            "publisher": "Flatiron",
            "description": "The late actor, known for playing Chandler Bing on “Friends,” shares stories from his childhood and his struggles with sobriety.",
            "price": "0.00",
            "title": "FRIENDS, LOVERS, AND THE BIG TERRIBLE THING",
            "author": "Matthew Perry",
            "contributor": "by Matthew Perry",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250866448.jpg",
            "book_image_width": 329,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/1250866448?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "1250866448",
                    "isbn13": "9781250866448"
                },
                {
                    "isbn10": "1250866464",
                    "isbn13": "9781250866462"
                },
                {
                    "isbn10": "1250867061",
                    "isbn13": "9781250867063"
                },
                {
                    "isbn10": "1250866456",
                    "isbn13": "9781250866455"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/1250866448?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9781250866448?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250866448"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FFRIENDS%252C%2BLOVERS%252C%2BAND%2BTHE%2BBIG%2BTERRIBLE%2BTHING%2FMatthew%2BPerry%2F9781250866448"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9781250866448"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9781250866448?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/04988f91-5b03-5eb4-ae17-89fda0e7051a"
        },
        "google_preview": "https://www.google.it/books/edition/_/GBxQEAAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 13,
            "rank_last_week": 10,
            "weeks_on_list": 9,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "0062968793",
            "primary_isbn13": "9780062968791",
            "publisher": "Harper Perennial",
            "description": "The British journalist shares stories and observations; the basis of the TV series.",
            "price": "0.00",
            "title": "EVERYTHING I KNOW ABOUT LOVE",
            "author": "Dolly Alderton",
            "contributor": "by Dolly Alderton",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062968791.jpg",
            "book_image_width": 332,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/0062968793?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "0062968793",
                    "isbn13": "9780062968791"
                },
                {
                    "isbn10": "0062968807",
                    "isbn13": "9780062968807"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/0062968793?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780062968791?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062968791"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FEVERYTHING%2BI%2BKNOW%2BABOUT%2BLOVE%2FDolly%2BAlderton%2F9780062968791"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780062968791"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780062968791?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/78725ce3-7ae4-5a35-acad-04355f2d0b44"
        },
        "google_preview": "https://www.google.it/books/edition/_/fqWHzQEACAAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 14,
            "rank_last_week": 0,
            "weeks_on_list": 1,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "198215439X",
            "primary_isbn13": "9781982154394",
            "publisher": "Simon & Schuster",
            "description": "Stories, essays and photographs exploring race and identity in America.",
            "price": "0.00",
            "title": "OUR HIDDEN CONVERSATIONS",
            "author": "Michele Norris",
            "contributor": "by Michele Norris",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982154394.jpg",
            "book_image_width": 405,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/198215439X?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "198215439X",
                    "isbn13": "9781982154394"
                },
                {
                    "isbn10": "1982154411",
                    "isbn13": "9781982154417"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/198215439X?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9781982154394?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982154394"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FOUR%2BHIDDEN%2BCONVERSATIONS%2FMichele%2BNorris%2F9781982154394"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9781982154394"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9781982154394?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/ae46e20b-d425-5789-be29-35669dd62630"
        },
        "google_preview": "https://www.google.it/books/edition/_/BCfqEAAAQBAJ?hl=it&gbpv=0"
    },
    {
        "book": {
            "rank": 15,
            "rank_last_week": 0,
            "weeks_on_list": 62,
            "asterisk": 0,
            "dagger": 0,
            "primary_isbn10": "0593230272",
            "primary_isbn13": "9780593230275",
            "publisher": "Random House",
            "description": "The Pulitzer Prize-winning journalist examines aspects of caste systems across civilizations and reveals a rigid hierarchy in America today.",
            "price": "0.00",
            "title": "CASTE",
            "author": "Isabel Wilkerson",
            "contributor": "by Isabel Wilkerson",
            "contributor_note": "",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593230251.jpg",
            "book_image_width": 330,
            "book_image_height": 500,
            "amazon_product_url": "https://www.amazon.com/dp/0593230256?tag=NYTBSREV-20",
            "age_group": "",
            "book_review_link": "https://www.nytimes.com/2020/07/31/books/review-caste-isabel-wilkerson-origins-of-our-discontents.html",
            "first_chapter_link": "",
            "sunday_review_link": "",
            "article_chapter_link": "",
            "isbns": [
                {
                    "isbn10": "0593230256",
                    "isbn13": "9780593230251"
                },
                {
                    "isbn10": "0593241460",
                    "isbn13": "9780593241462"
                },
                {
                    "isbn10": "1432885162",
                    "isbn13": "9781432885168"
                },
                {
                    "isbn10": "None",
                    "isbn13": "9781250865830"
                },
                {
                    "isbn10": "0593230272",
                    "isbn13": "9780593230275"
                }
            ],
            "buy_links": [
                {
                    "name": "Amazon",
                    "url": "https://www.amazon.com/dp/0593230256?tag=NYTBSREV-20"
                },
                {
                    "name": "Apple Books",
                    "url": "https://goto.applebooks.apple/9780593230275?at=10lIEQ"
                },
                {
                    "name": "Barnes and Noble",
                    "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593230275"
                },
                {
                    "name": "Books-A-Million",
                    "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FCASTE%2FIsabel%2BWilkerson%2F9780593230275"
                },
                {
                    "name": "Bookshop",
                    "url": "https://bookshop.org/a/3546/9780593230275"
                },
                {
                    "name": "IndieBound",
                    "url": "https://www.indiebound.org/book/9780593230275?aff=NYT"
                }
            ],
            "book_uri": "nyt://book/4c671a17-af83-5711-911f-956c77c7f5e3"
        },
        "google_preview": "https://www.google.it/books/edition/_/OT-dEAAAQBAJ?hl=it&gbpv=0"
    }
]
</pre>


<h4>/<b>uptime</b>: returns time since server is running</h4>

<pre>
{
    "days": 0,
    "hours": "00",
    "minutes": "00",
    "seconds": "20",
    "since": 1706358086000,
    "now": 1706358106502
}
</pre>


<h2>🏃 Running local</h2>

Requirements:

This program requires node preinstalled, I recommend to use the <acronym title="Long Term Support">LTS version</acronym>.

<pre>
 > git clone https://github.com/lucianofullstack/test-2024-01-26

 > cd test-2024-01-26

 > npm install

 > npm start

</pre>


<pre>
     =============== nyt-api v0.1 ===============

     [ PC ] is listening on port 3001

     OS: Windows_NT - Cores: 8 - KEY: present

     Running Since: Fri, 26 Jan 2024 14:01:31 GMT

     ============================================

Events:

✔  ROUTE books
✔  ROUTE id
✔  ROUTE lists
✔  ROUTE preview
✔  ROUTE uptime
✔  SERVER listening at 3001
</pre>

The terminal will show this screen, in order to reduce verbosity see modules defaults, and prompt.

<h2>📂 Proyect Folders</h2>

<pre>
Proyect
├───node_modules (after install)
├───README
├───src
│   ├───modules
│   └───routes
└───tests
</pre>

### modules : 

#### defaults

#### getters

#### prompt

#### favicon

### README : images shown in this documentation file.

### routes : see routes

### tests : see testing