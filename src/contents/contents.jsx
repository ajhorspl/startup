import React from 'react';

export function Contents() {
    
    const [contents, setContents] = React.useState([]);

     // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
      fetch('/api/contents')
        .then((response) => response.json())
        .then((contents) => {
        setContents(contents);
        localStorage.setItem('contents', JSON.stringify(contents));
    })
      .catch(() => {
        const contentsText = localStorage.getItem('contents');
        if (contentsText) {
          setContents(JSON.parse(contentsText));
        }
      });
    }, []);

  // Demonstrates rendering an array with React
    const contentRows = [];
    if (contents.length) {
        for (const [i, content] of contents.entries()) {
            contentRows.push(
            <tr key={i}>
              <td>{content.poster}</td>
              <td>{content.title}</td>
              <td>{content.genre}</td>
              <td>{content.language}</td>
              <td>{content.runtime}</td>
              <td>{content.director}</td>
              <td>{content.producere}</td>
              <td>{content.keyActors}</td>
              <td>{content.payee}</td>
            </tr>
        );
    }
  } else {
    contentRows.push(
      <tr key='0'>
        <td colSpan='9'>Add contnent to database</td>
      </tr>
    );
  }
    return (
        <main className="container-fluid text-center">
        <table className="table table-striped-columns">
          <thead className = "table-dark">
            <tr>
              <th>Film Poster</th>
              <th>Film Title</th>
              <th>Genre</th>
              <th>Language</th>
              <th>Runtime</th>
              <th>Director</th>
              <th>Producer</th>
              <th>Key Actors</th>
              <th>Payee</th>
            </tr>
          </thead>
          <tbody id="content">{contentRows}</tbody>
        </table>
      </main>     
    );
}