function AddValue(id, value) {
        content = document.createTextNode(value)
        var div = document.getElementById(id);
        div.appendChild(content);
}

function MeilleurFilm() {
    var url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var url = "http://localhost:8000/api/v1/titles/" + data.results[0].id
        fetch(url)
        .then(res => res.json())
        .then(data => {
            var titre = data.title
            var image = data.image_url
            var description = data.long_description
            console.log("titre : " + titre)
            console.log("description : " + description)
            console.log("url image : " + image)
        })
    })}

MeilleurFilm()

function takeInformationsFromFilms(id) {
    var url = "http://localhost:8000/api/v1/titles/" + id
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var  image = data.image_url
        var titre = data.title
        var genre = data.genres
        var dateDeSortie = data.date_published
        var rated = data.rated
        var scoreImdb = data.imdb_score
        var realisateur = data.writers
        var acteurs = data.actors
        var duree = data.duration
        var paysOrigine = data.countries
        var boxOfficeresultat = data.avg_vote
        var resume = data.long_description
        console.log(image)
        console.log(titre)
        console.log(genre)
        console.log(dateDeSortie)
        console.log(rated)
        console.log(scoreImdb)
        console.log(realisateur)
        console.log(acteurs)
        console.log(duree)
        console.log(paysOrigine)
        console.log(boxOfficeresultat)
        console.log(resume)
    })
}

function getIdBygenres(genre) {
    var url = "http://localhost:8000/api/v1/titles/?genre=" + genre + "&sort_by=-imdb_score"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var listeId = []
        var i = 0
        while (i < 5) {
            var idFilm = data.results[i].id
            console.log(idFilm)
            listeId.push(idFilm);
            i++;
        }
        for (id of listeId) {
            takeInformationsFromFilms(id)
        }
    })
}
getIdBygenres('romance')
