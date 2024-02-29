const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

function addToDatabase() {
    
    let content = [];
    const contentText = localStorage.getItem('content');
    if (contentText) {
      content = JSON.parse(contentText);
    }

    posterEl = document.querySelector("#poster");
    titleEl = document.querySelector("#title");
    genreEl = document.querySelector("#genre");
    languageEl = document.querySelector("#language");
    runtimeEl = document.querySelector("#runtime");
    directorEl = document.querySelector("#director");
    producerEl = document.querySelector("#producer");
    keyActorsEl = document.querySelector("#keyActors");
    payeeEl = document.querySelector("#payee");
    
    const newContent = { poster: posterEl.value, title: titleEl.value, genre: genreEl.value, language: languageEl.value, 
        runtime: runtimeEl.value, director: directorEl.value, producer: producerEl.value, keyActors: keyActorsEl.value, payee: payeeEl.value };

    content.push(newContent);

    localStorage.setItem('content', JSON.stringify(content));
  }