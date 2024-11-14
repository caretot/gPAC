

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


