var urlBySortImdbScore = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
var urlBySortImdbScorePage2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2"

function AddValue(id, value) {
        let content = document.createTextNode(value)
        var div = document.getElementById(id);
        div.appendChild(content);
}


function addContentToDiv(id, value) {
    var div = document.getElementById(id)
    div.append(value)
}


function addImgToDiv(element, identifiant, imgUrl, id_film) {
    var element = document.createElement(element)
    element.src = imgUrl
    element.id = id_film
    var div = document.getElementById(identifiant)
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
            let id = data.id
            addContentToDiv('title_best_film', titre)
            addImgToDiv('img', 'image_best_film', image, id)
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
                id = data.results[i].id
                var identifiant = 'film_' + i
                i++;
                addImgToDiv('img', identifiant, imageUrl, id)
            }
            fetch(urlBySortImdbScorePage2)
            .then(res => res.json())
            .then(data => {
                var i = 0
                film_number = 4
                while (i < 3) {
                    imageUrl = data.results[i].image_url
                    id = data.results[i].id
                    i++;
                    film_number++;
                    var identifiant = 'film_' + film_number
                    addImgToDiv('img', identifiant, imageUrl, id) 
            }
            })
        })
    } else {
        let url = "http://localhost:8000/api/v1/titles/?genre=" + genre + "&sort_by=-imdb_score"
        let urlPage2 = url + "&page=2"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            var i = 0
            while (i < 5) {
                let imageUrl = data.results[i].image_url
                let id = data.results[i].id
                i++;
                var identifiant = 'film_' + genre + '_' + i
                addImgToDiv('img', identifiant, imageUrl, id) 
            }
            fetch(urlPage2)
            .then(res => res.json())
            .then(data => {
                var i = 0
                film_number = 5
                while (i < 2) {
                    let imageUrl = data.results[i].image_url
                    let id = data.results[i].id
                    i++;
                    film_number++;
                    let identifiant = 'film_' + genre + '_' + film_number
                    addImgToDiv('img', identifiant, imageUrl, id) 
            }
            })
        })
        
    }
}


top7BestFilms('')
top7BestFilms('action')
top7BestFilms('comedy')
top7BestFilms('adventure')
setTimeout(function() {
    document.body.removeAttribute('style')
}, 550);


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
    })

    url = "http://localhost:8000/api/v1/titles/?genre=" + genre + "&page=2" + "&sort_by=-imdb_score"
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
})
}


function FenetreModal() {
    id = event.srcElement.id
    url = "http://localhost:8000/api/v1/titles/" + id
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var image = data.image_url
        addImgToDiv('img', 'image', image, data.id)
        var titre = data.title
        AddValue('titre', titre)
        var genre = data.genres
        AddValue('genre', genre)
        var dateDeSortie = data.date_published
        AddValue('date_de_sortie', dateDeSortie)
        var rated = data.rated
        AddValue('rated', rated)
        var scoreImdb = data.imdb_score
        AddValue('score_imdb', scoreImdb)
        var realisateur = data.writers
        AddValue('realisateur', realisateur)
        var acteurs = data.actors
        AddValue('liste_acteurs', acteurs)
        var duree = data.duration
        AddValue("temps", duree)
        var paysOrigine = data.countries
        AddValue('pays_origine', paysOrigine)
        var boxOfficeresultat = data.avg_vote
        AddValue('resultat_box_office', boxOfficeresultat)
        var resume = data.long_description
        AddValue('resume', resume)
    })
    
    console.log('id :'+id)
    windowModal = document.getElementById('fenetreModale')
    windowModal.showModal()

}


function viderDiv(id) {
    div = document.getElementById(id)
    div.innerHTML = "";
}


function Fermer() {
    windowModal = document.getElementById('fenetreModale')
    windowModal.close()
    listeId = ['image',  'titre', 'genre', 'date_de_sortie', 'rated', 'score_imdb', 'realisateur', 
'liste_acteurs', 'temps', 'pays_origine', 'resultat_box_office', 'resume']
for (id of listeId) {
    viderDiv(id)
}
}