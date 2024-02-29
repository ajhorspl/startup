const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

function calculate_data() {

  const tableBodyEl = document.querySelector('#info');

  let contents = [];
  const contentsText = localStorage.getItem('content');
  if(contentsText) {
      contents = JSON.parse(contentsText);
  }

  let numcontents = 0;

  if(contents.length) {
    for(let i = 0; i < contents.length; i++) {
      numcontents++;
    }
  }

  let payees = [];
  const payeesText = localStorage.getItem('payee');
  let numpayees = 0;
  if(payeesText) {
        payees = JSON.parse(payeesText);
  }

  if (payees.length) {
    for (let i = 0; i < payees.length; i++) {
      numpayees++;
    }
  }

  const contentTdEl = document.createElement('td');
  const payeeTdEl = document.createElement('td');

  contentTdEl.textContent = numcontents;
  payeeTdEl.textContent = numpayees;

  const rowEl = document.createElement('tr');
  rowEl.appendChild(contentTdEl);
  rowEl.appendChild(payeeTdEl);

  tableBodyEl.appendChild(rowEl);
}

calculate_data();

//simulate a payee being added over websocket while sitting on the home page
setInterval(() => {
  let payee = [];
    const payeeText = localStorage.getItem('payee');
    if(payeeText) {
        payee = JSON.parse(payeeText);
    }
  
  const newPayee = { first: "Your", last: "mom", email: "yeahyourmomemailsme@hotmoms.com", phone: "(123)456-7890", 
    address: "123 Not your dads house", city: "anywhere but provo", state: "and california", zip: "92507", country: "god bless the USA" };

  payee.push(newPayee);
  localStorage.setItem('payee', JSON.stringify(payee));
}, 5000);