  // Google Sheets configuration
  const sheetId = '1l_eQ642rNyE0LyXYnV_LjUPAJPQ0ynmJq2axl-h7dQQ';
  const apiKey = 'AIzaSyBIVnLeCJ1jlC9XY06t8Wrv-z1Nd6FZaQk';
  
  // Mapping of element IDs to Google Sheets cell references
  const cellMappings = {
    maxgpage: 'CS!D161',   // Max GPA (CS)
    date: 'CS!E161',       // Last Modified Date
    examrank: 'CS!F161',   // Exam Rank
    cgpaaver: 'L3CS!D163',   // CGPA Average
    gpaaver: 'L3CS!E163',    // GPA Average
    percaver: 'L3CS!F163'    // Percentage Average
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



const SHEET_ID = '1l_eQ642rNyE0LyXYnV_LjUPAJPQ0ynmJq2axl-h7dQQ';
  const API_KEY = 'AIzaSyBIVnLeCJ1jlC9XY06t8Wrv-z1Nd6FZaQk';
const RANGE = 'L3CS!N6:T49'; // Range for table data

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


