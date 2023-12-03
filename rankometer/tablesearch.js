function myFunctiona() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}












// Get the table element by its ID
var table = document.getElementById('myTable'); // Replace 'your-table-id' with the actual ID of your table

// Iterate through each row in the table
for (var i = 1; i < table.rows.length; i++) { // Start from index 1 to exclude the header row
var row = table.rows[i];
var lastCellIndex = row.cells.length - 1; // Index of the last cell in the row
var cell = row.cells[lastCellIndex];

// Get the numeric value from the cell's content
var value = parseFloat(cell.textContent);

// Apply font color based on the value
if (value < 0) {
cell.style.color = 'red';
cell.style.fontWeight = 'bold';
} else if (value === 0) {
cell.style.fontWeight = 'bold';
cell.style.color = 'orange';
} else {
cell.style.fontWeight = 'bold';
cell.style.color = 'green';
}
}

  // Get the table element by its ID
  var table = document.getElementById('myTable'); // Replace 'your-table-id' with the actual ID of your table
  
  // Iterate through each row in the table
  for (var i = 1; i < table.rows.length; i++) { // Start from index 1 to exclude the header row
    var row = table.rows[i];
    var lastCellIndex = row.cells.length - 1; // Index of the last cell in the row
    var cell = row.cells[lastCellIndex];
  
    // Get the numeric value from the cell's content
    var value = parseFloat(cell.textContent);
  
    // Apply font color based on the value
    if (value < 0) {
      cell.style.color = 'red';
      cell.style.fontWeight = 'bold';
    } else if (value === 0) {
      cell.style.fontWeight = 'bold';
      cell.style.color = 'orange';
    } else {
      cell.style.fontWeight = 'bold';
      cell.style.color = 'green';
    }
  }
  