const sheetId = '142pB0ybiABHPxPc_GXMOZfg3GIa_MSeSKSdWRHhbtK4';
const apiKey = 'AIzaSyAo4hQ5dIJhdQ-gWgqdKk1_UPfq_f6rPJI';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/allmeta?key=${apiKey}`;

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  const rows = data.values;
  populateTable(rows);
}

function populateTable(rows) {
  const tableBody = document.getElementById('table-body');

  rows.slice(1).forEach((row, index) => {
    // Main row
    const tr = document.createElement('tr');
    tr.classList.add('main-row');
    tr.addEventListener('click', () => toggleRow(index));
    tr.innerHTML = `
      <td>${row[0]}</td> <!-- Rank -->
      <td>${row[1]}</td> <!-- Faculty -->
      <td>${row[2]}</td> <!-- ID -->
      <td>${row[3]}</td> <!-- Name -->
      <td>${row[4]}</td> <!-- GPA -->
    `;
    tableBody.appendChild(tr);

    // Extract relevant values for coloring
    const keysToColor = [5, 6, 8, 9, 11, 12, 14, 15];
    const values = keysToColor.map(i => parseFloat(row[i])).filter(value => !isNaN(value));
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const sortedValues = [...values].sort((a, b) => a - b);
    const mediumValue = sortedValues[Math.floor(sortedValues.length / 2)];

    // Hidden expandable row
    const expandableRow = document.createElement('tr');
    expandableRow.classList.add('expandable-row');
    expandableRow.id = `row-${index}`;
    expandableRow.innerHTML = `
      <td colspan="5">
        <div class="detail-item">
          ${createSpan('L0s1', row[5], maxValue, minValue, mediumValue)}
          ${createSpan('L0s2', row[6], maxValue, minValue, mediumValue)}
          <span><strong>L0:</strong> ${row[7] || 'N/A'}</span>
        </div>
        <div class="detail-item">
          ${createSpan('L1s1', row[8], maxValue, minValue, mediumValue)}
          ${createSpan('L1s2', row[9], maxValue, minValue, mediumValue)}
          <span><strong>L1:</strong> ${row[10] || 'N/A'}</span>
        </div>
        <div class="detail-item">
          ${createSpan('L2s1', row[11], maxValue, minValue, mediumValue)}
          ${createSpan('L2s2', row[12], maxValue, minValue, mediumValue)}
          <span><strong>L2:</strong> ${row[13] || 'N/A'}</span>
        </div>
        <div class="detail-item">
          ${createSpan('L3s1', row[14], maxValue, minValue, mediumValue)}
          ${createSpan('L3s2', row[15], maxValue, minValue, mediumValue)}
          <span><strong>L3:</strong> ${row[16] || 'N/A'}</span>
        </div>
      </td>
    `;
    tableBody.appendChild(expandableRow);
  });
}

// Helper function to create a span with conditional coloring
function createSpan(label, value, maxValue, minValue, mediumValue) {
  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) return `<span><strong>${label}:</strong> N/A</span>`;

  let backgroundColor = '';
  if (numericValue === maxValue) backgroundColor = 'green';
  else if (numericValue === minValue) backgroundColor = 'red';
  else if (numericValue === mediumValue) backgroundColor = 'orange';

  return `
    <span style="background-color: ${backgroundColor};">
      <strong>${label}:</strong> ${value}
    </span>
  `;
}

// Toggle visibility of expandable row
function toggleRow(index) {
  const row = document.getElementById(`row-${index}`);
  row.style.display = row.style.display === 'table-row' ? 'none' : 'table-row';
}

// Fetch and display data
fetchData();



















const url2 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/graphmeta?key=${apiKey}`;

async function fetchData2() {
  const response = await fetch(url2);
  const data = await response.json();
  return data.values; // Adjust as per actual response structure
}

function parseData(values) {
  const labels = values[0].slice(1); // Skip the first column (series names)
  const datasets = values.slice(1).map(row => ({
    label: row[0],
    data: row.slice(1).map(val => {
      // Check if value is NaN and handle accordingly
      const numericVal = parseFloat(val);
      return isNaN(numericVal) ? null : numericVal; // Use `null` for invalid values
    }),
    fill: false,
    borderColor: getRandomColor(),
    tension: 0.3,
  }));
  return { labels, datasets };
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

async function plotGraph() {
  const rawData = await fetchData2();
  const { labels, datasets } = parseData(rawData);

  const ctx = document.getElementById('gpaChart').getContext('2d');
  
  // Check if the user is on a mobile device
  const isMobile = window.innerWidth <= 768;

  // Set canvas height dynamically for mobile view
  const canvasHeight = isMobile ? 619 : 400;

  new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true, // Display legend
          position: 'bottom', // Position of the legend (can be 'top', 'bottom', 'left', 'right')
          labels: {
            color: '#fff',
            font: {
              size: 14, // Font size
              weight: 'bold', // Font weight
            },
            boxWidth: 20, // Width of the color box
            padding: 20, // Padding between legend item and box
            usePointStyle: true, // Use a point instead of a box for line-style datasets
          },
        },
      },
      scales: {
        x: {
          title: { 
            display: false, 
            color: "#00000", 
            text: 'Licence Levels' 
          },
          ticks: {
            color: '#fff', // Set the color of the tick numbers to white
            font: {
              size: 14, // Font size for the tick numbers
              weight: 'normal', // Font weight for the tick numbers
            },
            maxRotation: 90, // Rotate x-axis labels 90 degrees
            minRotation: 90, // Ensure rotation is always 90 degrees
          },
        }
,        
        y: {
          min: 11,
          max: 15, // Keep y-axis range the same
          title: {
            display: true,
            text: 'GPA Average',
            color: '#fff', // Title color (white)
            font: {
              size: 16, // Font size (adjust as needed)
              weight: 'bold', // Make the title bold
              family: 'Arial, sans-serif', // Font family (use a clean sans-serif font)
              lineHeight: 1.2, // Adjust the line height for spacing
            },
            padding: {
              top: 10, // Padding from the top (space between the title and axis)
              bottom: 10, // Padding from the bottom (space between the title and axis labels)
            },
          },
          ticks: {
            color: '#fff', // Set the color of the tick numbers to white
            font: {
              size: 14, // Font size for the tick numbers
              weight: 'normal', // Font weight for the tick numbers
            },
          },
        }
        
      },
      // Dynamically adjust aspect ratio based on screen size
      aspectRatio: isMobile ? 0.6 : 2,
    },
  });

  // Adjust canvas height
  document.getElementById('gpaChart').height = canvasHeight;
}

plotGraph();
