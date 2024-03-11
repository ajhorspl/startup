
const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }
  
function loadContent() {
    let contents = [];
    const contentsText = localStorage.getItem('content');
    console.log(contentsText)
    if(contentsText) {
        contents = JSON.parse(contentsText);
        
    }
    console.log(contents);
    const tableBodyEl = document.querySelector('#content');
    
    if(contents.length) {
        for (const [i, content] of contents.entries()) {

            const posterTdEl = document.createElement('td');
            const titleTdEl = document.createElement('td');
            const genreTdEl = document.createElement('td');
            const languageTdEl = document.createElement('td');
            const runtimeTdEl = document.createElement('td');
            const directorTdEl = document.createElement('td');
            const producerTdEl = document.createElement('td');
            const keyActorTdEl = document.createElement('td');
            const payeeTdEl = document.createElement('td');
            
            posterTdEl.textContent = content.poster;
            titleTdEl.textContent = content.title;
            genreTdEl.textContent = content.genre;
            languageTdEl.textContent = content.language;
            runtimeTdEl.textContent = content.runtime;
            directorTdEl.textContent = content.director;
            producerTdEl.textContent = content.producer;
            keyActorTdEl.textContent = content.keyActors;
            payeeTdEl.textContent = content.payee;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(posterTdEl);
            rowEl.appendChild(titleTdEl);
            rowEl.appendChild(genreTdEl);
            rowEl.appendChild(languageTdEl);
            rowEl.appendChild(runtimeTdEl);
            rowEl.appendChild(directorTdEl);
            rowEl.appendChild(producerTdEl);
            rowEl.appendChild(keyActorTdEl);
            rowEl.appendChild(payeeTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    }
    else {
        tableBodyEl.innerHTML = '<tr><td colSpan = 9>Enter data into database</td></tr>';
    }
}

loadContent();