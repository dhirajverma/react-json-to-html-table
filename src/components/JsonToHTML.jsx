import React, { useState, useEffect } from 'react';
const API_URL = 'https://jsonplaceholder.typicode.com/users/';

const JsonToHTML = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        console.log('jsonData-----> copy/paste object to display as Json', jsonData);
      }
    }
    fetchData();
  }, []);

  const exportAsHTML = () => {
    const jsonDataToDisplayInHTML = data;
    let col = [];
    let i, j, k;
    for (i = 0; i < jsonDataToDisplayInHTML.length; i++) {
      for (var key in jsonDataToDisplayInHTML[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }
    let table = document.createElement('table');
    let tr = table.insertRow(-1);

    for (j = 0; j < col.length; j++) {
      let th = document.createElement('th'); // TABLE HEADER.
      th.innerHTML = col[j];
      tr.appendChild(th);
    }
    const jsonData = () => {
      return data;
    };

    for (k = 0; k < jsonDataToDisplayInHTML.length; k++) {
      tr = table.insertRow(-1);
      tr.insertCell().innerHTML = jsonDataToDisplayInHTML[k].id;
      tr.insertCell().innerHTML = jsonDataToDisplayInHTML[k].name;
      tr.insertCell().innerHTML = jsonDataToDisplayInHTML[k].username;
      tr.insertCell().innerHTML = jsonDataToDisplayInHTML[k].email;
      tr.insertCell().innerHTML =
        jsonDataToDisplayInHTML[k].address.street + ',' + jsonDataToDisplayInHTML[k].address.city;
      tr.insertCell().innerHTML = jsonDataToDisplayInHTML[k].phone;
      tr.insertCell().innerHTML = jsonDataToDisplayInHTML[k].website;
      tr.insertCell().innerHTML = jsonDataToDisplayInHTML[k].company.name;
    }
    console.log(
      'HTML Data---> copy table element and paste at https://html-online.com/editor/ to display in ' +
        'html format',
      table,
    );
  };

  return (
    <div>
      <div>
        <h2>Please see the console for Json data:</h2>
      </div>
      <button onClick={exportAsHTML}>ExportJsonDataAsHTML</button>
      <h3>After click on button please see console for HTML converted data</h3>
    </div>
  );
};

export default JsonToHTML;
