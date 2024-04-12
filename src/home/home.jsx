import React from 'react';

export function Home() {

    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

    React.useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  const [numContents, setNumContents] = React.useState(0);
  const [numPayees, setNumPayees] = React.useState(0);

  React.useEffect(() => {
    let contents = [];
    let payees = [];

    const contentsText = localStorage.getItem('contents');
    if (contentsText) {
      contents = JSON.parse(contentsText);
    }

    const payeesText = localStorage.getItem('payees');
    if (payeesText) {
      payees = JSON.parse(payeesText);
    }

    setNumContents(contents.length);
    setNumPayees(payees.length);
  }, []);

    return (
        <main class>
      <div class = "messages">
        <span class ="username"></span>
        <div id="user-messages"></div>
      </div>
      <div>
      <table>
        <thead>
          <tr>
            <th>Films</th>
            <th>Payees</th>
          </tr>
          <tr>
          <td>{numContents}</td>
          <td>{numPayees}</td>
        </tr>
        </thead>
        <tbody id = "info"></tbody>
      </table>
      </div>
      <div id="quote" class="quote-box bg-white text-dark">QOTD: {quote} - {quoteAuthor}</div>
    </main>
        
    );
}