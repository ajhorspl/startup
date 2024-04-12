import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function AddContent() {
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
  const [runtime, setRuntime] = useState('');
  const [director, setDirector] = useState('');
  const [producer, setProducer] = useState('');
  const [keyActors, setKeyActors] = useState('');
  const [payee, setPayee] = useState('');

  const handleChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case 'poster':
        setPoster(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'genre':
        setGenre(value);
        break;
      case 'language':
        setLanguage(value);
        break;
      case 'runtime':
        setRuntime(value);
        break;
      case 'director':
        setDirector(value);
        break;
      case 'producer':
        setProducer(value);
        break;
      case 'keyActors':
        setKeyActors(value);
        break;
      case 'payee':
        setPayee(value);
        break;
      default:
        break;
    }
  };

  const saveContent = async () => {
    const newContent = {
      poster,
      title,
      genre,
      language,
      runtime,
      director,
      producer,
      keyActors,
      payee
    };

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newContent),
      });

      const contents = await response.json();
      localStorage.setItem('contents', JSON.stringify(contents));
    } catch {
      //meh, don't do anything for now
    }
  };

  return (
    <main className="container-fluid text-center">
    <table className = "table table-striped-columns">
      <thead>
        <tr>
          <th>Film Poster Link</th>
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
      <tbody>
        <tr>
          <td><input className='form-control' id="poster" type="text" onChange={handleChange} value={poster} /></td>
          <td><input className='form-control' id="title" type="text" onChange={handleChange} value={title} /></td>
          <td><input className='form-control' id="genre" type="text" onChange={handleChange} value={genre} /></td>
          <td><input className='form-control' id="language" type="text" onChange={handleChange} value={language} /></td>
          <td><input className='form-control' id="runtime" type="text" onChange={handleChange} value={runtime} /></td>
          <td> <input className='form-control' id="director" type="text" onChange={handleChange} value={director} /></td>
          <td><input className='form-control' id="producer" type="text" onChange={handleChange} value={producer} /></td>
          <td><input className='form-control' id="keyActors" type="text" onChange={handleChange} value={keyActors} /></td>
          <td><input className='form-control' id="payee" type="text" onChange={handleChange} value={payee} /></td>
        </tr>
      </tbody>
    </table>
	<Button variant = 'primary' onClick={saveContent}>Save</Button>
  </main>
  );
}
