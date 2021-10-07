var urlBySortImdbScore = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
var urlBySortImdbScorePage2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2"

function AddValue(id, value) {
        content = document.createTextNode(value)
        var div = document.getElementById(id);
        div.appendChild(content);
}

function addContentToDiv(id, value) {
    var div = document.getElementById(id)
    div.append(value)
}

function addImgToDiv(element, id, imgUrl) {
    var element = document.createElement(element)
    element.src = imgUrl
    var div = document.getElementById(id)
    div.append(element)
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
            
            addContentToDiv('title_best_film', titre)
            addImgToDiv('img', 'image_best_film', image)
            addContentToDiv('description_best_film', description)
        })
    })}

MeilleurFilm()

function top7BestFilms(genre) {
    
    if (genre == "") {
        
        fetch(urlBySortImdbScore)
        .then(res => res.json())
        .then(data => {
            var i = 1
            while (i < 5) {
                imageUrl = data.results[i].image_url
                console.log(imageUrl)
                var id = 'film_' + i
                i++;
                addImgToDiv('img', id, imageUrl) 
            }
            fetch(urlBySortImdbScorePage2)
            .then(res => res.json())
            .then(data => {
                var i = 0
                film_number = 4
                while (i < 3) {
                    imageUrl = data.results[i].image_url
                    i++;
                    film_number++;
                    var id = 'film_' + film_number
                    addImgToDiv('img', id, imageUrl) 
            }
            })
        })
    } else {
        let url = "http://localhost:8000/api/v1/titles/?genre=" + genre
        let urlPage2 = url + "&page=2"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            var i = 0
            while (i < 5) {
                let imageUrl = data.results[i].image_url
                console.log(imageUrl)
                i++;
                var id = 'film_' + genre + '_' + i
                addImgToDiv('img', id, imageUrl) 
            }
            fetch(urlPage2)
            .then(res => res.json())
            .then(data => {
                var i = 0
                film_number = 5
                while (i < 2) {
                    let imageUrl = data.results[i].image_url
                    i++;
                    film_number++;
                    let id = 'film_' + genre + '_' + film_number
                    addImgToDiv('img', id, imageUrl) 
            }
            })
        })
        
    }
}
top7BestFilms('')
top7BestFilms('action')
top7BestFilms('comedy')
top7BestFilms('adventure')


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

    url = url + "&page=2"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var i = 0
        var listeId = []
        while (i < 2) {
            var idFilm = data.results[i].id
            listeId.push(idFilm)
            i++;
        }
        for (id of listeId) {
            takeInformationsFromFilms(id)
    }
})
}

