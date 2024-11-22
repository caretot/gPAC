async function fetchStudentData() {
  const studentId = document.getElementById("studentId").value;
  if (!studentId) {
    alert("Please enter a valid student ID.");
    return;
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/GE!AU6:BU32?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const rows = data.values;

    const headerRow = rows[0];
    const studentRow = rows.find(row => row[1] === studentId);

    if (studentRow) {
      document.getElementById("studentDetails").style.display = "block";

      const generalInfoTable = document.querySelector("#generalInfoTable tbody");
      const academicScoresTable = document.querySelector("#academicScoresTable tbody");
      const specializedSubjectsTable = document.querySelector("#specializedSubjectsTable tbody");

      // Clear existing table content
      generalInfoTable.innerHTML = '';
      academicScoresTable.innerHTML = '';
      specializedSubjectsTable.innerHTML = '';

      // Populate General Information table
      const generalInfoRow = document.createElement('tr');
      studentRow.slice(0, 8).forEach((cell, index) => {
        const td = document.createElement('td');
        td.setAttribute('data-label', headerRow[index]);
        td.textContent = cell;
        generalInfoRow.appendChild(td);
      });
      generalInfoTable.appendChild(generalInfoRow);

      // Populate Academic Scores table
      const academicScoresRow = document.createElement('tr');
      studentRow.slice(8, 15).forEach((cell, index) => {
        const td = document.createElement('td');
        td.setAttribute('data-label', headerRow[index + 8]);
        td.textContent = cell;
        academicScoresRow.appendChild(td);
      });
      academicScoresTable.appendChild(academicScoresRow);


      const chartYValues = [];

// Extract scores from studentRow (indices 8 to 12) for the chart
studentRow.slice(8, 15).forEach((cell) => {
    chartYValues.push(Number(cell)); // Ensure the values are numeric
});

// Chart configuration
const xValues = ["MATH", "PHY","GP2a","GP2b","GEO", "LANG", "ACWR", "MISSED"];
const barColors = ["#2269AD","2949AD","9269ED","#E4BF58", "#3C9D4E", "#7031AC", "#C94D6D", "#000000"]; // Black color for MISSED

const RANGE = "GE!BC4:BU4";  // The range to fetch data from

// Function to fetch data from the specified range in Google Sheets
async function fetchSheetData2() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response2 = await fetch(url);
    const data2 = await response2.json();
    if (data2.values && data2.values[0]) {
      return data2.values[0].map(value => parseFloat(value)); // Convert all values to float
    } else {
      console.error("No data found in the specified range.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return [];
  }
}

let maincfs = [];
let seccfs = [];
let nidaYvalues = [];
let nida = 0;

// Function to process the data into two separate lists (arrays of numbers)
async function processCoefficients2() {
  const values = await fetchSheetData2();
  if (values.length === 0) return;

  // Create the maincfs list (only the first 5 values from CE!AU4 to CE!AY4)
  maincfs = values.slice(0, 7);

  // Create the seccfs list (the remaining 12 values from CE!AZ4 to CE!BK4)
  seccfs = values.slice(7);

  console.log("Main Coefficients (maincfs):", maincfs);
  console.log("Secondary Coefficients (seccfs):", seccfs);

  return { maincfs, seccfs };
}

// Run the processing function
processCoefficients2();

// Example of using the maincfs values (multiplying the first chartYValue by the first maincfs value)
async function updateChartYValues() {
  // Wait for the coefficients to be processed
  await processCoefficients2();

  // Create an initial nidaYvalues array (same as chartYValues initially)
  nidaYvalues = [...chartYValues]; // Copy initial chartYValues to nidaYvalues

  // Check if both chartYValues and maincfs arrays have the same length
  if (maincfs.length === chartYValues.length && maincfs.length > 0) {
    // Calculate the sum of all values in maincfs
    const sumOfMaincfs = maincfs.reduce((sum, value) => sum + value, 0);
    
    if (sumOfMaincfs === 0) {
      console.error("The sum of maincfs is zero, division by zero is not allowed.");
      return;
    }

    // Iterate over both arrays and perform multiplication and division
    for (let i = 0; i < maincfs.length; i++) {
      chartYValues[i] = chartYValues[i] * maincfs[i]; // Multiply each corresponding element
      chartYValues[i] = chartYValues[i] / sumOfMaincfs; // Divide by the sum of all values in maincfs

      // Now also multiply nidaYvalues[i] by maincfs[i]
      nidaYvalues[i] = 20 - nidaYvalues[i]; // Apply same multiplication to nidaYvalues
      nidaYvalues[i] = nidaYvalues[i] * maincfs[i]; // Apply same multiplication to nidaYvalues
      nidaYvalues[i] = nidaYvalues[i] / sumOfMaincfs; // Divide by the sum of all values in maincfs

      console.log(`Updated chartYValues[${i}]:`, chartYValues[i]);
      console.log(`Updated nidaYvalues[${i}]:`, nidaYvalues[i]);
    }

    // Calculate nida (the sum of nidaYvalues)
    nida = nidaYvalues.reduce((sum, value) => sum + value, 0);
    console.log("Total Nida:", nida);

    // Add the Nida value as the "MISSED" parameter
    chartYValues.push(nida); // Add Nida to the chartYValues array
    console.log("Updated chartYValues with MISSED:", chartYValues);

    for (let i = 0; i < 8; i++) {
      chartYValues[i] = (chartYValues[i]*1/1).toFixed(2); // Multiply each corresponding element
    } 

  } else {
    console.error("maincfs and chartYValues arrays do not have the same length or maincfs is empty.");
  }
}


let myChart;  // Store chart instance

async function createChart() {
  // Destroy the previous chart if it exists
  if (myChart) {
    Plotly.purge('myChart');  // Destroy the previous chart by purging it
  }

  // Ensure chartYValues is updated first
  await updateChartYValues();

  // Sort the values in descending order
  const sortedData = chartYValues
    .map((value, index) => ({ value, label: xValues[index] }))
    .sort((a, b) => b.value - a.value);  // Sort by value in descending order

  // Extract the sorted values and labels
  const sortedValues = sortedData.map(item => item.value);
  const sortedLabels = sortedData.map(item => item.label);



  // Combine the data
  let combinedData = xValues.map((label, index) => ({
    label: label,
    color: barColors[index],
    value: chartYValues[index],
  }));

  // Sort by chartYValues
  combinedData.sort((a, b) => b.value - a.value); // Descending order

  // Unpack the sorted data
  const sortedXValues = combinedData.map(data => data.label);
  const sortedBarColors = combinedData.map(data => data.color);
  const sortedChartYValues = combinedData.map(data => data.value);

  console.log("Sorted X Values:", sortedXValues);
  console.log("Sorted Bar Colors:", sortedBarColors);
  console.log("Sorted Chart Y Values:", sortedChartYValues);



  
  // Create the trace for a pie chart
  const trace = {
    labels: sortedXValues,  // Sorted labels
    values: sortedChartYValues,  // Sorted values
    type: 'pie',
    textinfo: 'percent',  // Display only the percentage on the pie slices
    textposition: 'inside',  // Position the text inside the slices
    marker: {
      colors: sortedBarColors.slice(0, sortedXValues.length),  // Use the same colors for the sorted labels
    }
  };

  // Set up the layout for the pie chart
  const layout = {
    title: {
      text: "Pieces of 20",
      font: {
        color: 'white',  // Set title font color to white
      },
    },
    showlegend: true,  // Enable legend
    legend: {
      orientation: 'h',  // Horizontal layout for the legend
      x: 0.5,            // Center the legend horizontally
      y: -0.2,           // Position the legend below the chart
      xanchor: 'center', // Anchor the legend's x position
      yanchor: 'top',    // Anchor the legend's y position
      traceorder: 'normal', // Display the legend in normal order
      font: {
        size: 12,  // Set font size for the legend
        color: 'white',  // Set legend font color to white
      },
    },
    paper_bgcolor: 'rgba(0, 0, 0, 0)',  // Transparent background for the entire chart
    plot_bgcolor: 'rgba(0, 0, 0, 0)',   // Transparent background for the plotting area
    autosize: true,  // Make the chart responsive
    margin: {
      t: 40,  // Add top margin for the title
      b: 60,  // Add bottom margin for the legend
      l: 5,  // Add left margin for the chart content
      r: 5,  // Add right margin for the chart content
    },
  };

  // Example of how to use the layout with your chart data
  const config = {
    displayModeBar: false,  // Disable the display mode bar
  };

  // Use Plotly to render the chart in the "myChart" div
  Plotly.newPlot('myChart', [trace], layout, config);
}

// Call the function to create the chart
createChart();




  































      // Populate Specialized Subjects table
      const specializedSubjectsRow = document.createElement('tr');
      studentRow.slice(15).forEach((cell, index) => {
        const td = document.createElement('td');
        td.setAttribute('data-label', headerRow[index + 15]);
        td.textContent = cell;
        specializedSubjectsRow.appendChild(td);
      });
      specializedSubjectsTable.appendChild(specializedSubjectsRow);

      // Color coding for the △ Rank column
      const deltaRankCell = generalInfoRow.lastElementChild;
      const deltaRankValue = parseInt(deltaRankCell.textContent, 10);
      deltaRankCell.classList.add(
        deltaRankValue > 0 ? 'positive' : deltaRankValue < 0 ? 'negative' : 'zero'
      );
    } else {
      alert("No student found with that ID.");
    }
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
}









          $(function() {
            $("#loadingButton").click(function() {
              $(this).addClass("loading-onclick");
              fetchStudentData().then(() => {
                $(this).removeClass("loading-onclick").addClass("loading-validate");
                setTimeout(() => {
                  $(this).removeClass("loading-validate");
                }, 1250);
              });
            });
        
            // Simulated fetch function (replace with your actual fetchStudentData function)
            async function fetchStudentData() {
              // Simulate a delay for the async fetch call
              return new Promise(resolve => setTimeout(resolve, 600));
            }
          });


