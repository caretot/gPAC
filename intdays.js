const sheetId = '1l_eQ642rNyE0LyXYnV_LjUPAJPQ0ynmJq2axl-h7dQQ';
const apiKey = 'AIzaSyBIVnLeCJ1jlC9XY06t8Wrv-z1Nd6FZaQk';
let currentLanguage = 'en'; // Default language

// Function to get today's date in '1 Jan' format
function getCurrentDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'short' });
  return `${day} ${month}`;
}

// Function to convert '**word**' to <strong>word</strong>
function convertToBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, function(match, p1) {
    return `<strong>${p1}</strong>`;
  });
}

// Fetch the data from Google Sheets API
async function fetchData() {
  const todayDate = getCurrentDate();
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/INTDAYS?key=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    const rows = data.values;
    
    for (let row of rows) {
      if (row[0] === todayDate) {
        // Select correct columns based on the current language
        let header, content;
        if (currentLanguage === 'aze') {
          header = row[3]; // HAZ
          content = row[4]; // CAZ
        } else if (currentLanguage === 'ru') {
          header = row[5]; // HRU
          content = row[6]; // CRU
        } else {
          header = row[1]; // Default English
          content = row[2]; // Default English
        }

        // Apply the bold conversion function to the content
        const boldedContent = convertToBold(content);

        // Set the content
        document.getElementById('message-header').innerText = header || "No Message";
        document.getElementById('message-content').innerHTML = boldedContent || "No content available for today.";
        break;
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to change language
function changeLanguage(language) {
  currentLanguage = language;

  // Remove active class from all buttons
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));

  // Add active class to the selected language button
  document.getElementById(`lang-${language}`).classList.add('active');

  // Fetch updated data in selected language
  fetchData();
}

// Load today's message in default language (English)
fetchData();
