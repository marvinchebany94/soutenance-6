# soutenance-6

Bienvenue pour le 6ème projet d'openclassroom. Pour ce projet il fallait créer l'interface d'un site web nommé JustStreamIt et y ajouter des pochettes, des informations sur les films, une fenêtre modale etc..

Pour ajouter les pochettes et informations nous avons utilisé l'api OCMovie.

Pour télécharger l'api il faudra se rendre à cette url : https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

Installation et exécution de l'application sans pipenv (avec venv et pip)

Cloner ce dépôt de code à l'aide de la commande $ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git (vous pouvez également télécharger le code en temps qu'archive zip)

Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande $ cd ocmovies-api-fr

Créer un environnement virtuel pour le projet avec $ python -m venv env sous windows ou $ python3 -m venv env sous macos ou linux.

Activez l'environnement virtuel avec $ env\Scripts\activate sous windows ou $ source env/bin/activate sous macos ou linux.

Installez les dépendances du projet avec la commande $ pip install -r requirements.txt

Créer et alimenter la base de données avec la commande $ python manage.py create_db

Démarrer le serveur avec $ python manage.py runserver

Il faudra ensuite placer le dossier "mon site" à la base du dossier "OCMovies-API-EN-FR-master" qui a été téléchargé auparavant.

Pour se rendre sur le site : chemin/OCMovies-API-EN-FR-master/mon site/index.html
(le chemin est l'endroit ou se trouve votre dossier 

Lorsque vous arriverez sur le site vous trouverez une bannière contenant le nom du site "JustStreamIt", une barre de navigation avec 2 liens "Accueil" et "Catégories". Sous cela se trouve le film ayant la plus haute note imdb, nous y trouverons au centre son affiche, en haut à gauche son titre, sous le titre un bouton "play" qui servira à lancer le film et pour finir la description du film sous ce bouton. Si vous cliquez sur l'affiche, uen fenêtre modale s'ouvrira et affichera des informations comme le titre, date de sortie, acteurs, pays d'origine etc.

à l'accueil nous trouverons 4 sections de films comportant pour chacune, une liste de 7 films dont la note imdb est la plus haute. Les films sont triès par ordre décroissant, le film ayant la meilleure note se trouvant à gauche.
Pour chaque film il y a une pochette sur laquelle vous pourrez cliquer pour ouvrir une fenêtre modale qui affichera : la pochette à gauche et à droite diverses informations sur le film comme son titre, sa date de sortie, sa durée, les acteurs, pays do'irigine etc.

Pour quitter la fenêtre modale il faudra cliquer sur "Fermer la fenêtre".

Pour faire défiler les films il faudra simplement utiliser les fléches se trouvant à gauche et à droite de la section. 

La page accueil contient les sections suivantes : films les mieux notès, Actions, Comedy et Adventures


Afin de voir que le fichier css et javascript ne contiennent aucune erreur j'irai sur le site suivant : https://jigsaw.w3.org/css-validator/#validate_by_upload, le site scannera nos fichiers afin de les valider.
