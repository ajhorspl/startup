const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }
  
function loadPayee() {
    let payee = [];
    const payeeText = localStorage.getItem('payee');
    if(payeeText) {
        content = JSON.parse(payeeText);
    }

    const tableBodyEl = document.querySelector('#payee');

    if(payee.length) {
        for (const [i, payee] of payee.entries()) {

            const firstTdEl = document.createElement('td');
            const lastTdEl = document.createElement('td');
            const emailTdEl = document.createElement('td');
            const phoneTdEl = document.createElement('td');
            const addressTdEl = document.createElement('td');
            const cityTdEl = document.createElement('td');
            const stateTdEl = document.createElement('td');
            const zipTdEl = document.createElement('td');
            const countryTdEl = document.createElement('td');
            const numFilmsTdEl = document.createElement('td');
            
            firstTdEl.textContent = content.first;
            lastTdEl.textContent = content.last;
            emailTdEl.textContent = content.email;
            phoneTdEl.textContent = content.phone;
            addressTdEl.textContent = content.address;
            cityTdEl.textContent = content.city;
            stateTdEl.textContent = content.state;
            zipTdEl.textContent = content.zip;
            countryTdEl.textContent = content.country;
            numFilmsTdEl.textContent = content.numFilms;

            const rowEl = document.createElement('tr');

            rowEl.appendChild(firstTdEl);
            rowEl.appendChild(lastTdEl);
            rowEl.appendChild(emailTdEl);
            rowEl.appendChild(phoneTdEl);
            rowEl.appendChild(addressTdEl);
            rowEl.appendChild(cityTdEl);
            rowEl.appendChild(stateTdEl);
            rowEl.appendChild(zipTdEl);
            rowEl.appendChild(countryTdEl);
            rowEl.appendChild(numFilmsTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    }
    else {
        tableBodyEl.innerHTML = '<tr><td colSpan = 10>Enter data into database</td></tr>';
    }
}

loadPayee();