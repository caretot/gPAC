const RANGE = 'IDFAC!A2:C135';
const searchBox = document.getElementById('search-box');
const clearButton = document.getElementById('clear-button123');
const tableBody = document.getElementById('table-body');
const tableHeader = document.getElementById('table-header');
const noResultsMessage = document.getElementById('no-results');  // Reference to the no results message

// Fetch data from Google Sheets
async function fetchData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.values || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Create and show the tooltip above the clicked ID cell
// Create and show the tooltip above the clicked ID cell
// Create and show the tooltip based on screen size
function showTooltip(cell) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = 'Copied!';
    
    // Position the tooltip based on screen size
    const rect = cell.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth;  // Get the width of the tooltip
    const tooltipHeight = tooltip.offsetHeight; // Get the height of the tooltip
    let tooltipLeft, tooltipTop;
    
    // If on a small screen (phone), position the tooltip to the right of the cell
    if (window.innerWidth <= 768) {
      tooltipLeft = rect.right-70; // Position 10px to the right of the cell
      tooltipTop = rect.top + (rect.height / 5) - (tooltipHeight / 2); // Vertically center it
    } else {
      // On larger screens, position the tooltip above the cell
      tooltipLeft = rect.left + (rect.width / 4.5) - (tooltipWidth / 2); // Center the tooltip horizontally
      tooltipTop = rect.top - tooltipHeight - 10; // Position above the cell with 10px margin
    }
  
    tooltip.style.position = 'absolute';
    tooltip.style.left = `${tooltipLeft + window.scrollX}px`;
    tooltip.style.top = `${tooltipTop + window.scrollY}px`;
  
    // Append the tooltip to the document body
    document.body.appendChild(tooltip);
    
    // Remove the tooltip after 1 second
    setTimeout(() => {
      tooltip.remove();
    }, 1000);
  }
  
  

// Copy text to clipboard and show the tooltip
function copyToClipboard(text, cell) {
  navigator.clipboard.writeText(text).then(() => {
    showTooltip(cell); // Show the tooltip above the clicked ID
  }).catch(err => {
    console.error('Error copying text:', err);
  });
}

// Render rows based on search query
function renderRows(data, query = '') {
  tableBody.innerHTML = ''; // Clear previous rows
  
  if (query.trim() === '') {
    tableHeader.style.display = 'none'; // Hide table headers when search box is empty
    noResultsMessage.style.display = 'none'; // Hide "No results found" message when there's no query
    return; 
  }

  const filteredData = data.filter(row => row.some(cell => cell.toLowerCase().includes(query.toLowerCase())));

  if (filteredData.length === 0) {
    tableHeader.style.display = 'none'; // Hide headers if no results are found
    noResultsMessage.style.display = 'block'; // Show "No results found" message
    return;
  } else {
    tableHeader.style.display = 'table-header-group'; // Show table headers when there are results
    noResultsMessage.style.display = 'none'; // Hide "No results found" message if there are matches
  }

  filteredData.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach((cell, index) => {
      const td = document.createElement('td');
      td.textContent = cell;

      // Add clipboard functionality for ID column (index 0 for ID column)
      if (index === 0) {
        td.style.cursor = 'pointer';  // Change cursor to pointer to indicate it's clickable
        td.addEventListener('click', () => copyToClipboard(cell, td));
      }

      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

// Initialize search functionality
async function initialize() {
  const data = await fetchData();

  // Ensure that the table headers and "No results found" message are hidden initially
  tableHeader.style.display = 'none'; // Hide headers on page load
  noResultsMessage.style.display = 'none'; // Hide "No results found" initially

  // Handle search box input
  searchBox.addEventListener('input', () => {
    const query = searchBox.value;
    renderRows(data, query);
  });

  // Handle clear button click
  clearButton.addEventListener('click', () => {
    searchBox.value = '';
    tableBody.innerHTML = ''; // Clear table
    tableHeader.style.display = 'none'; // Hide headers when search box is empty
    noResultsMessage.style.display = 'none'; // Hide "No results found" message
  });
}

// Start the app
initialize();
