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

<h4>/<b>preview</b><i>(number)</i>: shows a basic frontend to test the api, if number is missing shows id 1</h4>

<p align="center">
<img src="./README/preview.png">
</p>

<h4>/<b>id</b>/<i>(number)</i>: returns bestseller list by id number and adds google preview url, if number is empty returns all lists</h4>

<details>
  <summary>👇 Show</summary>
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
    }

...

]
</pre>
</details>


<h4>/<b>uptime</b>: returns time since server is running</h4>

<details>
  <summary>👇 Show</summary>
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
</details>


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