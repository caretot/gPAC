

async function fetchStudentData() {
  const studentId = document.getElementById("studentId").value;
  if (!studentId) {
    alert("Please enter a valid student ID.");
    return;
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/CE!AM6:BK45?key=${API_KEY}`;
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
      studentRow.slice(8, 13).forEach((cell, index) => {
        const td = document.createElement('td');
        td.setAttribute('data-label', headerRow[index + 8]);
        td.textContent = cell;
        academicScoresRow.appendChild(td);
      });
      academicScoresTable.appendChild(academicScoresRow);


      const chartYValues = [];

// Extract scores from studentRow (indices 8 to 12) for the chart
studentRow.slice(8, 13).forEach((cell) => {
    chartYValues.push(Number(cell)); // Ensure the values are numeric
});

// Chart configuration
const xValues = ["Math", "PHYCE", "CHENG", "LANG", "ACAD"];
const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

// Assuming the values of 'CE!AU4', etc., are accessible dynamically (e.g., via a DOM element or an API)
function maincoefgetting(reference) {
  const element = document.getElementById(reference);
  if (element) {
      console.log(`Element with ID ${reference} found. Content: ${element.textContent}`);
      const sanitizedValue = element.textContent.trim().replace(/[^0-9.]/g, '');
      return parseFloat(sanitizedValue);
  } else {
      console.warn(`Element with ID ${reference} not found.`);
      return NaN; // or a fallback value like 1
  }
}

// Dynamically resolve the values and update coefmain
const coefmain = {
  math: maincoefgetting('CEAU4'),  // Replace with the actual value for 'CE!AU4'
  PHYCE: maincoefgetting('CEAV4'), // Replace with the actual value for 'CE!AV4'
  CHENG: maincoefgetting('CEAW4'), // Replace with the actual value for 'CE!AW4'
  LANG: maincoefgetting('CEAX4'),  // Replace with the actual value for 'CE!AX4'
  ACAD: maincoefgetting('CEAY4')   // Replace with the actual value for 'CE!AY4'
};

// Print the coefmain values to the console
console.log("Coefficient Values:", coefmain);

chartYValues[0] = chartYValues[0] * coefmain.math;

new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: chartYValues // Use the extracted scores for the chart
        }]
    },
    options: {
        title: {
            display: true,
            text: "My GPA Build-Up"
        }
    }
});





      



      // Populate Specialized Subjects table
      const specializedSubjectsRow = document.createElement('tr');
      studentRow.slice(13).forEach((cell, index) => {
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


