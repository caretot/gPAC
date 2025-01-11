  // Google Sheets configuration
  const sheetId = '142pB0ybiABHPxPc_GXMOZfg3GIa_MSeSKSdWRHhbtK4';
  const apiKey = 'AIzaSyAo4hQ5dIJhdQ-gWgqdKk1_UPfq_f6rPJI';
  
  // Mapping of element IDs to Google Sheets cell references
  const cellMappings = {
    maxgpage: 'GE!D97',   // Max GPA (GE)
    date: 'GE!E97',       // Last Modified Date
    examrank: 'GE!F97',   // Exam Rank
    cgpaaver: 'GE!D99',   // CGPA Average
    gpaaver: 'GE!E99',    // GPA Average
    percaver: 'GE!F99'    // Percentage Average
  };

  // Function to fetch and display data
  function fetchData() {
    Object.entries(cellMappings).forEach(([elementId, cellRange]) => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${cellRange}?key=${apiKey}`;
      
      const element = document.getElementById(elementId);
      element.style.opacity = 0; // Hide the element initially

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const value = data.values ? data.values[0][0] : 'N/A'; // Get the cell value or set 'N/A' if not found
          updateElement(element, value); // Update the element with data
        })
        .catch(error => {
          console.log('Error fetching data:', error);
          updateElement(element, 'Failed to load'); // Show error if fetch fails
        });
    });
  }

  // Function to update an element with smooth transition
  function updateElement(element, value) {
    element.textContent = value; // Set the text content
    element.style.transition = 'opacity 0.3s ease-in-out'; // Smooth fade-in effect
    element.style.opacity = 1; // Fade in to make it visible
  }

  // Fetch data when the page loads
  window.onload = fetchData;




  const API_KEY = 'AIzaSyAo4hQ5dIJhdQ-gWgqdKk1_UPfq_f6rPJI';
const SHEET_ID = '142pB0ybiABHPxPc_GXMOZfg3GIa_MSeSKSdWRHhbtK4';
const RANGE = 'GE!B67:I93'; // Range for table data

// Fetch data from Google Sheets
async function fetchTableData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.values && data.values.length > 1) {
      populateTable(data.values);
    } else {
      console.error('No data found.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Populate the HTML table with fetched data
function populateTable(rows) {
  const tbody = document.querySelector('#myTable tbody');
  tbody.innerHTML = ''; // Clear existing rows

  // Loop through each row of data (skip the first row, which contains headers)
  rows.slice(1).forEach((row) => {
    const tr = document.createElement('tr');
    row.forEach((cell, index) => {
      const td = document.createElement('td');
      td.textContent = cell;

      // Apply color based on △ Rank value (last column)
      if (index === row.length - 1) { // Check if it’s the △ Rank column
        const rankChange = parseFloat(cell);
        if (rankChange < 0) {
          td.style.color = 'red';
          td.style.fontWeight="bold"; // Negative values
        } else if (rankChange === 0) {
          td.style.color = 'orange';
          td.style.fontWeight="bold";  // Zero values
        } else {
          td.style.color = 'green';
          td.style.fontWeight="bold";  // Positive values
        }
      }

      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

// Call function to fetch and populate data on page load
fetchTableData();







const range = 'YESNO!D2:E24';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

const labels = [
  'MATH MID1', 'MATH MID2', 'MATH FINAL', 'FLUID COMSOL', 'FLUID EXAM', 'FLUID LAB', 'EARTH RHEOLOGY',
  'INVERSE PW', 'INVERSE EXAM', 'REMOTE PW', 'REMOTE ORAL', 'SEISMIC', 'NEAR', 'GP FIELDWORK',
  'GEO AZ PART', 'GEO AZ EXAM', 'PETREL', 'FRENCH ORAL', 'FRENCH MID', 'FRENCH FINAL',
  'AC WRITING 1', 'AC WRITING 2', 'AC WRITING 3'
];


async function fecyesno() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.values) {
      yesnopoptable(data.values);
    } else {
      console.error('No data found!');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function yesnopoptable(data) {
  const tbody = document.querySelector('#examTable tbody');
  tbody.innerHTML = '';  // Clear the table body before adding new rows

  labels.forEach((label, index) => {
    const row = document.createElement('tr');
    const cellLabel = document.createElement('td');
    const cellStatus = document.createElement('td');

    cellLabel.textContent = label;

    // Determine the status based on the data
    const status = data[index] && data[index][1] === '1' ? '✅' : '❌';
    cellStatus.textContent = status;

    // Set the color of the label directly in JS
    if (status === '✅') {
      cellLabel.style.color = 'green';  // Set text color to green if true
    } else {
      cellLabel.style.color = 'red';  // Set text color to red if false
    }

    row.appendChild(cellLabel);
    row.appendChild(cellStatus);
    tbody.appendChild(row);
  });
}

fecyesno();
