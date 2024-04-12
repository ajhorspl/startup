import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function AddPayee() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case 'first':
        setFirst(value);
        break;
      case 'last':
        setLast(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'state':
        setState(value);
        break;
      case 'zip':
        setZip(value);
        break;
      case 'country':
        setCountry(value);
        break;
      default:
        break;
    }
  };

  const savePayee = async () => {
    const newPayee = {
      first,
      last,
      email,
      phone,
      address,
      city,
      state,
      zip,
      country
    };

    try {
      const response = await fetch('/api/payee', {
        method: 'POST',
        headers: { 'payee-type': 'application/json' },
        body: JSON.stringify(newPayee),
      });

      const payees = await response.json();
      localStorage.setItem('payees', JSON.stringify(payees));
    } catch {
      //meh, don't do anything for now
    }
  };

  return (
    <main className="container-fluid text-center">
    <table className = "table table-striped-columns">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input className='form-control' id="first" type="text" onChange={handleChange} value={first} /></td>
          <td><input className='form-control' id="last" type="text" onChange={handleChange} value={last} /></td>
          <td><input className='form-control' id="email" type="text" onChange={handleChange} value={email} /></td>
          <td><input className='form-control' id="phone" type="text" onChange={handleChange} value={phone} /></td>
          <td><input className='form-control' id="address" type="text" onChange={handleChange} value={address} /></td>
          <td> <input className='form-control' id="city" type="text" onChange={handleChange} value={city} /></td>
          <td><input className='form-control' id="state" type="text" onChange={handleChange} value={state} /></td>
          <td><input className='form-control' id="zip" type="text" onChange={handleChange} value={zip} /></td>
          <td><input className='form-control' id="country" type="text" onChange={handleChange} value={country} /></td>
        </tr>
      </tbody>
    </table>
	<Button variant = 'primary' onClick={savePayee}>Save</Button>
  </main>
  );
}
