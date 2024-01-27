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

<h2>Running local</h2>

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

#### favicon

#### getters

#### prompt

### README : images shown in this documentation file.

### routes : see routes

### tests : see testing