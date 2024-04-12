import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function AddPayee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
  
    const savePayee = async () => {
      const newPayee = {
        first: firstName,
        last: lastName,
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
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newPayee),
        });
  
        const payees = await response.json();
        localStorage.setItem('payees', JSON.stringify(payees));
      } catch (error) {
        console.error('Error:', error);
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
          <th>Payee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input className='form-control' id="first" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} /></td>
          <td><input className='form-control' id="last" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} /></td>
          <td><input className='form-control' id="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} /></td>
          <td><input className='form-control' id="phone" type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
          <td><input className='form-control' id="address" type="text" onChange={(e) => setAddress(e.target.value)} value={address} /></td>
          <td> <input className='form-control' id="city" type="text" onChange={(e) => setCity(e.target.value)} value={city} /></td>
          <td><input className='form-control' id="state" type="text" onChange={(e) => setState(e.target.value)} value={state} /></td>
          <td><input className='form-control' id="zip" type="text" onChange={(e) => setZip(e.target.value)} value={zip} /></td>
          <td><input className='form-control' id="country" type="text" onChange={(e) => setCountry(e.target.value)} value={country} /></td>
        </tr>
      </tbody>
    </table>
	<Button variant = 'primary' onClick={savePayee}>Save</Button>
  </main>
  );
}
