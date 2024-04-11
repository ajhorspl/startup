import React from 'react';

export function Payees() {

    const [payees, setPayees] = React.useState([]);

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
      fetch('/api/payees')
        .then((response) => response.json())
        .then((payees) => {
          setPayees(payees);
          localStorage.setItem('payees', JSON.stringify(payees));
        })
        .catch(() => {
          const payeesText = localStorage.getItem('payees');
          if (payeesText) {
            setPayees(JSON.parse(payeesText));
          }
        });
    }, []);
  
    // Demonstrates rendering an array with React
    const payeeRows = [];
    if (payees.length) {
      for (const [i, payee] of payees.entries()) {
        payeeRows.push(
          <tr key={i}>
            <td>{i}</td>
            <td>{payee.first}</td>
            <td>{payee.last}</td>
            <td>{payee.email}</td>
            <td>{payee.phone}</td>
            <td>{payee.address}</td>
            <td>{payee.city}</td>
            <td>{payee.state}</td>
            <td>{payee.zip}</td>
            <td>{payee.country}</td>
          </tr>
        );
      }
    } else {
      payeeRows.push(
        <tr key='0'>
          <td colSpan='9'>Add payees to database</td>
        </tr>
      );
    }

    return (
        <main class="container-fluid text-center">
        <table class="table table-striped-columns">
          <thead class = "table-dark">
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody id = "payee">{payeeRows}</tbody>
        </table>
      </main>
    );
}