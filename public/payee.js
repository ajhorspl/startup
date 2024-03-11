
const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  async function loadPayee() {
    let payees = [];
    try {
        const resposne = await fetch('/api/payees');
        payees = await resposne.json();
        localStorage.setItem('payee', JSON.stringify(payees));
    } catch {
        const payeesText = localStorage.getItem('payee');
        if(payeesText) {
            payees = JSON.parse(payeesText);
        }
    }
    displayPayee(payees);
  }
  
function displayPayee(payees) {

    const tableBodyEl = document.querySelector('#payee');

    if(payees.length) {
        for (const [i, payee] of payees.entries()) {

            const firstTdEl = document.createElement('td');
            const lastTdEl = document.createElement('td');
            const emailTdEl = document.createElement('td');
            const phoneTdEl = document.createElement('td');
            const addressTdEl = document.createElement('td');
            const cityTdEl = document.createElement('td');
            const stateTdEl = document.createElement('td');
            const zipTdEl = document.createElement('td');
            const countryTdEl = document.createElement('td');
            //const numFilmsTdEl = document.createElement('td');
            
            firstTdEl.textContent = payee.first;
            lastTdEl.textContent = payee.last;
            emailTdEl.textContent = payee.email;
            phoneTdEl.textContent = payee.phone;
            addressTdEl.textContent = payee.address;
            cityTdEl.textContent = payee.city;
            stateTdEl.textContent = payee.state;
            zipTdEl.textContent = payee.zip;
            countryTdEl.textContent = payee.country;
            //numFilmsTdEl.textContent = payee.numFilms;

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
            //rowEl.appendChild(numFilmsTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    }
    else {
        tableBodyEl.innerHTML = '<tr><td colSpan = 10>Enter data into database</td></tr>';
    }
}

loadPayee();