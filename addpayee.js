const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

function addToDatabase() {
    
    let payee = [];
    const payeeText = localStorage.getItem('payee');
    if (payeeText) {
      payee = JSON.parse(payeeText);
    }

    firstNameEl = document.querySelector("#first");
    lastNameEl = document.querySelector("#last");
    emailEl = document.querySelector("#email");
    phoneEl = document.querySelector("#phone");
    addressEl = document.querySelector("#address");
    cityEl = document.querySelector("#city");
    stateEl = document.querySelector("#state");
    zipEl = document.querySelector("#zip");
    countryEl = document.querySelector("#country");
    
    const newPayee = { first: firstNameEl.value, last: lastNameEl.value, email: emailEl.value, phone: phoneEl.value, 
        address: addressEl.value, city: cityEl.value, state: stateEl.value, zip: zipEl.value, country: countryEl.value };

    payee.push(newPayee);

    localStorage.setItem('payee', JSON.stringify(payee));
  }