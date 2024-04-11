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
        </thead>
        <tbody id = "info"></tbody>
      </table>
      </div>
      <div id="quote" class="quote-box bg-white text-dark">QOTD: {quote} - {quoteAuthor}</div>
    </main>
        
    );
}