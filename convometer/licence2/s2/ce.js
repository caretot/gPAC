const data = [
   [29,107,22122294,"Abbasli Gular",11.30566667,"56.53%",14.525,6.666666667,9,7.133333333,14,16.33333333,8.5,6.5,11.34,13.375,15.375,14.525,6.666666667,10.04444444,16.33333333,9.145714286,14.375],
   [31,109,22022838,"REMOVED",11.26033333,"56.30%",13.85,7.666666667,7.5,7.166666667,13.25,16.16666667,9.5,15.5,13.85333333,7.25,0,13.85,7.666666667,9.305555556,16.16666667,13.08,7.25],
   [20,90,22122267,"Afandiyev Ulvi",12.48683333,"62.43%",16.975,13,9.833333333,8.35,11.5,17,9,12.5,11.36,9.25,13.15,16.975,13,9.894444444,17,11.01142857,11.2],
   [15,76,22122299,"Afandiyeva Suad",13.09383333,"65.47%",13.15,6.666666667,11.66666667,10.66666667,15.25,19.5,15,13,12.98,13.625,0,13.15,6.666666667,12.52777778,19.5,13.56285714,13.625],
   [37,121,22122378,"REMOVED",9.412333333,"47.06%",8.1,6,4.5,6.366666667,12.25,16.16666667,7.5,12,10.84,11.5,0,8.1,6,7.705555556,16.16666667,10.21714286,11.5],
   [35,115,22121828,"Akhundov Akif",10.68108333,"53.41%",12.3,8.5,5.5,4.7,13.25,15.66666667,10,9,11.34,15.5,13.875,12.3,8.5,7.816666667,15.66666667,10.28857143,14.6875],
   [25,97,22121925,"Aliyev Riad",12.027,"60.13%",13.35,10.33333333,11.16666667,7.033333333,14,17.5,8,11,15.32,10,0,13.35,10.33333333,10.73333333,17.5,11.99428571,10],
   [12,65,22122373,"Aliyeva Kamilla",13.4625,"67.31%",16.35,8,10.83333333,11.6,16.75,19,9.5,12,12.23333333,14.625,0,16.35,8,13.06111111,19,11.38571429,14.625],
   [10,61,22121813,"Alizada Lala",13.56116667,"67.81%",15.05,7.666666667,11.66666667,10.26666667,15.75,18.16666667,9,13.5,15.38666667,16.625,0,15.05,7.666666667,12.56111111,18.16666667,13.02285714,16.625],
   [3,8,22122286,"Allahverdiyev Farhad",17.14033333,"85.70%",18.775,13.66666667,18,17.83333333,17.5,17.33333333,17.5,16,15.32,18.125,0,18.775,13.66666667,17.77777778,17.33333333,16.13714286,18.125],
   [9,51,22122277,"Babayeva Sabina",14.2345,"71.17%",15,12.66666667,11.66666667,6.833333333,15.75,18.66666667,8,17.5,15.38666667,19.375,0,15,12.66666667,11.41666667,18.66666667,13.88,19.375],
   [21,91,22121919,"Bairamov Revan",12.40941667,"62.05%",16.225,4.666666667,9.833333333,10.06666667,13.5,17.5,6.5,13.5,16.14,12.125,11.9,16.225,4.666666667,11.13333333,17.5,12.63142857,12.0125],
   [16,80,22121914,"Bayramli Inji",13.0355,"65.18%",14.05,6,11.5,12,14.5,17.83333333,14,14.5,12.98,13.125,0,14.05,6,12.66666667,17.83333333,13.70571429,13.125],
   [17,81,22121910,"Bayramli Madina",13.00983333,"65.05%",18.35,7,9.666666667,10.7,13.75,17.33333333,15,10,11.27333333,13.125,0,18.35,7,11.37222222,17.33333333,11.97428571,13.125],
   [8,50,22121789,"Budagov Zaur",14.24416667,"71.22%",16.3,8,15.16666667,15.66666667,13.5,18.16666667,12.5,9.5,12.23333333,17.875,0,16.3,8,14.77777778,18.16666667,11.52857143,17.875],
   [33,113,22122362,"Eyvazov Mehdi",10.80666667,"54.03%",16.95,7,6.166666667,4.55,13,18.16666667,4.5,9.5,12.6,6.875,11.125,16.95,7,7.905555556,18.16666667,9.4,9],
   [30,108,22122301,"Gasimova Gulmira",11.278,"56.39%",11.325,8,10.83333333,8.5,13.75,18.33333333,6.5,13.5,13.78,7.375,0,11.325,8,11.02777778,18.33333333,11.62,7.375],
   [5,28,22122233,"Gasımova Elnura",15.432,"77.16%",19.175,11,10.16666667,16.1,16.75,17.5,12.5,15,15.38666667,17.125,0,19.175,11,14.33888889,17.5,14.45142857,17.125],
   [36,117,22122355,"Goychayeva Jeyran",10.294,"51.47%",11.45,5.333333333,6.666666667,6.266666667,13.75,18.66666667,6.5,9,10.84,12,0,11.45,5.333333333,8.894444444,18.66666667,9.074285714,12],
   [11,62,22122293,"Guluzada Sanan",13.52933333,"67.65%",17.675,8,3.833333333,12.91666667,17,17.83333333,13.5,13,15.46,13.125,0,17.675,8,11.25,17.83333333,14.19714286,13.125],
   [24,96,22121821,"Hajiyeva Tunzala",12.11533333,"60.58%",11.8,5,8.833333333,12.18333333,14.75,18.16666667,6,13,15.38666667,14.5,0,11.8,5,11.92222222,18.16666667,12.02285714,14.5],
   [38,122,22122256,"Hasanli Elman",8.850833333,"44.25%",6.5,5.333333333,2.166666667,2.566666667,12.75,17.66666667,7.5,11,12.23333333,12.625,0,6.5,5.333333333,5.827777778,17.66666667,10.52857143,12.625],
   [4,17,22121803,"Ismayilova Nazrin",16.23133333,"81.16%",19.175,13.33333333,13,15.83333333,15.5,19.33333333,16.5,19.5,12.98,16.375,0,19.175,13.33333333,14.77777778,19.33333333,15.84857143,16.375],
   [1,1,22121798,"Jabbarova Nazrin",17.73866667,"88.69%",19.7,13.33333333,17.83333333,18.33333333,18.25,19.5,16.5,17.5,15.38666667,19.25,0,19.7,13.33333333,18.13888889,19.5,16.30857143,19.25],
   [26,98,22122352,"Karimli Seljan",12.02116667,"60.11%",14.25,7,8.5,7.266666667,13.25,17,10.5,10.5,15.32,14.125,0,14.25,7,9.672222222,17,12.56571429,14.125],
   [2,5,22121831,"Khalifayev Emin",17.36883333,"86.84%",19.925,14.33333333,18,17.58333333,17,17.83333333,19,17,14.48,17.25,0,19.925,14.33333333,17.52777778,17.83333333,16.49142857,17.25],
   [22,93,22122261,"Mursalov Nihad",12.3775,"61.89%",14.8,6.333333333,9.166666667,11.08333333,14,16.33333333,13.5,13,12.4,12.125,0,14.8,6.333333333,11.41666667,16.33333333,12.88571429,12.125],
   [7,45,22121904,"Nazirova Maryam",14.4465,"72.23%",16.7,8.333333333,12.83333333,11.5,15.5,18.66666667,17.5,13,10.84,18.625,0,16.7,8.333333333,13.27777778,18.66666667,13.36,18.625],
   [19,89,22122349,"Nuruzada Anar",12.50133333,"62.51%",12.525,10,8.166666667,12.03333333,14.25,17.16666667,12.5,15.5,12.98,10.875,0,12.525,10,11.48333333,17.16666667,13.56285714,10.875],
   [28,106,22122248,"Rahimli Lala",11.41083333,"57.05%",14.775,7.333333333,7,5.25,13.75,16.83333333,10,7.5,12.4,15.25,0,14.775,7.333333333,8.666666667,16.83333333,10.31428571,15.25],
   [13,66,22121809,"Rustamov Ramin",13.45875,"67.29%",14.45,11.66666667,11.5,10.16666667,16.25,17.16666667,11.5,12,12.4,16.25,15.125,14.45,11.66666667,12.63888889,17.16666667,12.02857143,15.6875],
   [6,36,22122281,"Rzayev Toghrul",14.98016667,"74.90%",16.7,14.33333333,12.66666667,12.16666667,17,18,13,14.5,16.59333333,12.875,0,16.7,14.33333333,13.94444444,18,14.96857143,12.875],
   [32,112,22122303,"Sedchenko Evelina",10.83583333,"54.18%",11.95,7.333333333,7.666666667,7,13.5,17.66666667,3,13,12.23333333,12.375,0,11.95,7.333333333,9.388888889,17.66666667,9.814285714,12.375],
   [27,104,22122244,"Seyidov Elgun",11.65466667,"58.27%",12.475,7.333333333,6.666666667,7.8,12.25,18.33333333,16,7.5,12.08,15.625,0,12.475,7.333333333,8.905555556,18.33333333,11.89142857,15.625],
   [14,68,22122308,"Shafiyeva Shovkat",13.30366667,"66.52%",17.675,10,12.16666667,7.8,15.5,17.66666667,6.5,8.5,15.32,13.5,16.75,17.675,10,11.82222222,17.66666667,10.85142857,15.125],
   [34,114,22121899,"Taghiyev Eldaniz",10.70383333,"53.52%",13.575,5.666666667,5.166666667,8.083333333,13,18.33333333,7.5,8,12.08,11.75,0,13.575,5.666666667,8.75,18.33333333,9.605714286,11.75],
   [23,94,22121824,"Yagubova Zhala",12.23775,"61.19%",15.575,6.666666667,10.5,6.1,12.75,16.16666667,15.5,13.5,11.34,14.375,12.75,15.575,6.666666667,9.783333333,16.16666667,13.14571429,13.5625],
   [18,88,22121823,"Zakiyev Ibrahim",12.7905,"63.95%",19.3,6,7.666666667,10.53333333,13.25,17.5,12,9.5,12.08,16.25,12.5,19.3,6,10.48333333,17.5,11.32,14.375]
 ];
 




 
 function getGrades() {
     const studentId = document.getElementById('studentId').value;
     const studentData = data.find(student => student[2] == studentId);
     const outputDiv = document.getElementById('gradesOutput');
     
     if (studentData) {
       const nameHeader = `<h2>${studentData[3]}</h2>`;
         const table1 = `
             <table>
                 <tr><th>Rank</th><th>Rank (ALL)</th><th>GPA</th><th>Perc (%)</th></tr>
                 <tr>
                     <td>${studentData[0]}</td><td>${studentData[1]}</td>
                     <td>${studentData[4].toFixed(3)}</td><td>${studentData[5]}</td>
                 </tr>
             </table>
         `;
 
         const table2 = `
             <table>
                 <tr><th>Subject</th><th>Grade</th></tr>
                 <tr><td>MATH</td><td>${studentData[6].toFixed(3)}</td></tr>
                 <tr><td>FLUID</td><td>${studentData[7].toFixed(3)}</td></tr>
                 <tr><td>REACTIVITY</td><td>${studentData[8].toFixed(3)}</td></tr>
                 <tr><td>SPECTROS</td><td>${studentData[9].toFixed(3)}</td></tr>
                 <tr><td>EXP CH</td><td>${studentData[10].toFixed(3)}</td></tr>
                 <tr><td>SOFT</td><td>${studentData[11].toFixed(3)}</td></tr>
                 <tr><td>REACTORS</td><td>${studentData[12].toFixed(3)}</td></tr>
                 <tr><td>SAFETY</td><td>${studentData[13].toFixed(3)}</td></tr>
                 <tr><td>CE LAB</td><td>${studentData[14].toFixed(3)}</td></tr>
                 <tr><td>FRENCH</td><td>${studentData[15].toFixed(3)}</td></tr>
                 <tr><td>ENG</td><td>${studentData[16].toFixed(3)}</td></tr>
             </table>
         `;
 
         const table3 = `
             <table>
                 <tr><th>Subject</th><th>Grade</th></tr>
                 <tr><td>MATH</td><td>${studentData[17].toFixed(3)}</td></tr>
                 <tr><td>PHY</td><td>${studentData[18].toFixed(3)}</td></tr>
                 <tr><td>CHEMISTRY</td><td>${studentData[19].toFixed(3)}</td></tr>
                 <tr><td>SOCIAL</td><td>${studentData[20].toFixed(3)}</td></tr>
                 <tr><td>CHE ENG</td><td>${studentData[21].toFixed(3)}</td></tr>
                 <tr><td>LANG</td><td>${studentData[22].toFixed(3)}</td></tr>
             </table>
         `;
         const table1Container = `<div class="table1-up">${table1}</div>`;
         const table2Container = `<div class="table-container">${table2}</div>`;
         const table3Container = `<div class="table-container">${table3}</div>`;
         const name = `<div class="name">${nameHeader}</div>`;
         
         outputDiv.innerHTML = name + table1Container + table2Container + table3Container;
         
     } else {
         outputDiv.innerHTML = '<p>Student ID not found.</p>';
     }
 }
 function getNameToID() {
   const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
   const idOutput = document.getElementById('idOutput');
   
   if (nameInput) {
       const matchingStudents = data.filter(student => student[3].toLowerCase().includes(nameInput));
       
       if (matchingStudents.length > 0) {
           let tableHTML = '<table><tr><th>Name</th><th>ID</th></tr>';
           matchingStudents.forEach(student => {
               tableHTML += `<tr><td>${student[3]}</td><td>${student[2]}</td></tr>`;
           });
           tableHTML += '</table>';
           idOutput.innerHTML = tableHTML;
       } else {
           idOutput.innerHTML = '<p>No matching name-ID pairs found.</p>';
       }
   } else {
       idOutput.innerHTML = '<p>Please enter a name.</p>';
   }
}
