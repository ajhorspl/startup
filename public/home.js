const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

function calculate_data() {

  const tableBodyEl = document.querySelector('#info');

  let contents = [];
  const contentsText = localStorage.getItem('contents');
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
  const payeesText = localStorage.getItem('payees');
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
  localStorage.setItem('payees', JSON.stringify(payee));
}, 5000);

function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}

displayQuote();

//websocket stuff

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

socket.onopen = (event) => {
  this.displayMsg('system', '', 'connected');
};

socket.onclose = (event) => {
  this.displayMsg('system', '', 'disconnected');
};

socket.onmessage = async (event) => {
  const msg = JSON.parse(await event.data.text());
  this.displayMsg('system', msg.from, `is now editing the database`);
  };

function displayMsg(cls, from, msg) {
  const chatText = document.querySelector('#user-messages');
  chatText.innerHTML =
    `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

function broadcastEvent() {
  const event = {
    from: getPlayerName(),
  };
  socket.send(JSON.stringify(event));
}

broadcastEvent();