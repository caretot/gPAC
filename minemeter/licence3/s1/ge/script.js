// Your API key and Sheet ID
const SHEET_ID = '142pB0ybiABHPxPc_GXMOZfg3GIa_MSeSKSdWRHhbtK4';
const API_KEY = 'AIzaSyAo4hQ5dIJhdQ-gWgqdKk1_UPfq_f6rPJI';
/*
async function fetchStudentData() {
  const studentId = document.getElementById("studentId").value;
  if (!studentId) {
    alert("Please enter a valid student ID.");
    return;
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/AO6:BO32?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const rows = data.values;

    const headerRow = rows[0];
    const studentRow = rows.find(row => row[1] === studentId);

    if (studentRow) {
      const studentDetails = document.getElementById("studentDetails");
      studentDetails.style.display = "block";

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
*/

async function fetchStudentData() {
  const studentId = document.getElementById("studentId").value;
  if (!studentId) {
    alert("Please enter a valid student ID.");
    return;
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/AO6:BO32?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const rows = data.values;

    const headerRow = rows[0];
    const studentRow = rows.find(row => row[1] === studentId);

    if (studentRow) {
      const studentDetails = document.getElementById("studentDetails");
      studentDetails.style.display = "block";

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

      // Extract academic scores from indices 8 to 14 and handle NULL values
      const academicScores = studentRow.slice(8, 15);

      // Apply the specified operations to the values, and skip invalid/NULL values
      const modifiedScores = [];
      const labels = [
        "Score 1 (3/30)",
        "Score 2 (3/30)",
        "Score 3 (6/30)",
        "Score 4 (8/30)",
        "Score 5 (4/30)",
        "Score 6 (3/30)",
        "Score 7 (3/30)"
      ];

      // Filter out invalid values and add them to the modifiedScores array
      academicScores.forEach((score, index) => {
        const validValue = getValidValue(score);
        if (validValue !== null) {
          modifiedScores.push(validValue * getMultiplier(index));
        }
      });

      // Adjust labels to match the number of valid scores
      const validLabels = labels.slice(0, modifiedScores.length);

      // Debugging pie chart data
      console.log("Modified Scores: ", modifiedScores); 

      // If there are valid scores, create the pie chart
      if (modifiedScores.length > 0) {
        createPieChart(modifiedScores, validLabels);
      } else {
        alert("No valid academic scores available to display.");
      }
    } else {
      alert("No student found with that ID.");
    }
  } catch (error) {
    console.error("Error fetching student data:", error);
  }

  // Helper function to check for NULL or invalid values and return a valid number, or null
  function getValidValue(value) {
    if (value === null || value === "" || isNaN(value)) {
      return null;
    }
    return parseFloat(value); // Return as a float for accurate calculations
  }

  // Helper function to get multiplier based on index
  function getMultiplier(index) {
    const multipliers = [3 / 30, 3 / 30, 6 / 30, 8 / 30, 4 / 30, 3 / 30, 3 / 30];
    return multipliers[index] || 0;
  }

  // Function to create the pie chart using Chart.js
  function createPieChart(modifiedScores, validLabels) {
    const ctx = document.getElementById('pieChart').getContext('2d');

    if (modifiedScores.length > 0) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: validLabels,
          datasets: [{
            label: 'Modified Academic Scores',
            data: modifiedScores,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(100, 100, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(100, 100, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2);
                }
              }
            }
          }
        }
      });
    }
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


