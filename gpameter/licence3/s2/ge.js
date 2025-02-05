function calculateGPA() {
   // Get the input values
   
   let mineralCC1 = parseFloat(document.getElementById("mineral-cc1").value);
   let oilgasCC1 = parseFloat(document.getElementById("oilgas-cc1").value);
   let waterCC1 = parseFloat(document.getElementById("water-cc1").value);
   let transCC1 = parseFloat(document.getElementById("trans-cc1").value);
 
   let geochemCC1 = parseFloat(document.getElementById("geochem-cc1").value);
   let geochemCC2 = parseFloat(document.getElementById("geochem-cc2").value);

  
   let managCC1 = parseFloat(document.getElementById("manag-cc1").value);
   let managCC2 = parseFloat(document.getElementById("manag-cc2").value);
   let managCC3 = parseFloat(document.getElementById("manag-cc3").value);


   let internCC1 = parseFloat(document.getElementById("intern-cc1").value);
   let internCC2 = parseFloat(document.getElementById("intern-cc2").value);
   let internCC3 = parseFloat(document.getElementById("intern-cc3").value);









   let currentcoef =0;
   let currentgpa =0;
   let currenttotalgrades=0;
   
   const midterms = [
   mineralCC1, oilgasCC1, waterCC1, transCC1,  // Mineral & Resources
   geochemCC1, geochemCC2,                     // Geochemistry
   managCC1, managCC2, managCC3,               // Management
   internCC1, internCC2, internCC3             // Internship
];

   

   const coefs = [
      2.4,2.4,2.4,2.4,
      0.96,1.44,
      1,1,1,
      3,6,6,
   ];








   if (isNaN(mineralCC1)) {
      mineralCC1 = 0;
   }
   if (isNaN(oilgasCC1)) {
      oilgasCC1 = 0;
   }
   if (isNaN(waterCC1)) {
      waterCC1 = 0;
   }
   if (isNaN(transCC1)) {
      transCC1 = 0;
   }
   
   if (isNaN(geochemCC1)) {
      geochemCC1 = 0;
   }
   if (isNaN(geochemCC2)) {
      geochemCC2 = 0;
   }
   
   if (isNaN(managCC1)) {
      managCC1 = 0;
   }
   if (isNaN(managCC2)) {
      managCC2 = 0;
   }
   if (isNaN(managCC3)) {
      managCC3 = 0;
   }
   
   if (isNaN(internCC1)) {
      internCC1 = 0;
   }
   if (isNaN(internCC2)) {
      internCC2 = 0;
   }
   if (isNaN(internCC3)) {
      internCC3 = 0;
   }
   
   



   for (let i = 0; i < midterms.length; i++) {
      if(parseFloat(midterms[i])>-1){
         currentcoef = currentcoef + parseFloat(coefs[i]);
         currenttotalgrades =currenttotalgrades+ parseFloat(midterms[i])*parseFloat(coefs[i]);
      }
    };
    if(currentcoef==0){
     currentgpa = 0
    }else{
     currentgpa = (currenttotalgrades) / (currentcoef) ;

    }
    currentgpa = currentgpa/0.2;

























  let grades = "";
  let pul = "";
  let elaci = "";
  let advicegpa = "";
  let advicegeores = "";
  let adviceproprep = "";
  let adviceinternship = "";

   // Calculate the GPA
   let totalCredits = 30; // Total credits of all courses

   let mineralGPA = mineralCC1;
   let oilgasGPA = oilgasCC1;
   let waterGPA = waterCC1;
   let transGPA = transCC1;
   

   let geochemGPA = ((geochemCC1 * 0.96) + (geochemCC2 * 1.44)) / 2.4;

   let managGPA = ((managCC1 * 0.5) + (managCC2 * 0.5) + (managCC3 * 0.5)) / 1.5;
   let internGPA = ((internCC1 * 3) + (internCC2 * 6) + (internCC3 * 6)) / 15;

   let georesGPA = (mineralGPA+oilgasGPA+waterGPA+transGPA+geochemGPA)/5;
   let proprepGPA = managGPA;
   let internshipGPA = internGPA;


   let overallGPA = (georesGPA*12 + proprepGPA*3 + internshipGPA*15)/30;

   
      // Checking the condition for the providing the
   // grade to student based on percentage
   let percentage = (overallGPA / 20) * 100;  
   let gpa = overallGPA;
  
   if (currentgpa*0.2 <= 30 && currentgpa*0.2 >= 13.5) {
      grades = "A";
   } else if (currentgpa*0.2 <= 13.4999999 && currentgpa*0.2 >= 12) {
      grades = "B";
   } else if (currentgpa*0.2 <= 11.99999 && currentgpa*0.2 >= 10) {
      grades = "C";
   } else {
      grades = "F";
   }



   //MONEY
   if (currentgpa*0.2 <= 30 && currentgpa*0.2 >= 13.5) {
     pul = "171.50";
     elaci = '"Əlaçı"';
  } else if (currentgpa*0.2 <= 13.4999999 && currentgpa*0.2 >= 11.5) {
     pul = "142.10";
     elaci = '"Həvəsləndirici"';
  } else if (currentgpa*0.2 <= 11.4999999 && currentgpa*0.2 >= 10) {
     pul = "98";
     elaci = '"Adi"';
  } else {
     pul = "0";
     elaci = '"Kəsilgən"';
  }




  // ADVICE GPA
  if (gpa>=16){
     advicegpa = "Congratulations on your impressive GPA! Your commitment to excellence is evident. Keep up the fantastic work, stay focused, and continue to reach for even higher academic achievements. The future looks bright for you!";
  } else if (gpa <= 15.9999 && gpa >= 13.5) {
     advicegpa = "Congratulations on your outstanding GPA! Keep up the excellent work and continue to excel in your studies.";
  } else if (gpa <= 13.4999999 && gpa >= 11.5) {
     advicegpa = "Well done on achieving a solid GPA! Maintain your dedication and effective study habits for continued success.";
  } else if (gpa <= 11.4999999 && gpa >= 10) {
     advicegpa = "Congratulations on your GPA! Focus on enhancing your engagement and aim for improvement in your academic performance.";
  } else {
     advicegpa = "Keep pushing yourself. Seek support, refine your study strategies, and work towards improvement. Your efforts will pay off.";
  }

// ADVICE GEORESOURCES
if (georesGPA >= 16) {
   advicegeores = "Exceptional performance in georesources! Your deep understanding of natural resource exploration and management is commendable. Keep refining your skills, as they are essential for sustainable resource development.";
} else if (georesGPA <= 15.9999 && georesGPA >= 13.5) {
   advicegeores = "Great job in georesources! You have a solid grasp of the subject. Keep exploring advanced techniques and industry applications to enhance your knowledge.";
} else if (georesGPA <= 13.4999 && georesGPA >= 11.5) {
   advicegeores = "Solid performance in georesources! Strengthen your understanding of resource evaluation methods and focus on practical applications to gain more confidence.";
} else if (georesGPA <= 11.4999 && georesGPA >= 10) {
   advicegeores = "You’ve made a good start in georesources! Dedicate more time to studying exploration techniques and resource assessment to build a stronger foundation.";
} else {
   advicegeores = "It's important to improve your understanding of georesources. Review key concepts, seek additional resources, and engage in practical exercises to enhance your learning.";
}
 
// ADVICE MANAGEMENT
if (proprepGPA >= 16) {
   adviceproprep = "Outstanding work in management and entrepreneurship! Your strategic thinking and leadership skills are exceptional. Keep refining your ability to make bold, well-informed decisions.";
 } else if (proprepGPA <= 15.9999 && proprepGPA >= 13.5) {
   adviceproprep = "Great progress in management and entrepreneurship! You’re developing a solid foundation in leadership and business strategies. Continue strengthening your ability to handle real-world challenges.";
 } else if (proprepGPA <= 13.4999 && proprepGPA >= 11.5) {
   adviceproprep = "Good effort in management and entrepreneurship! Focus on enhancing your decision-making skills and expand your understanding of market dynamics and innovation.";
 } else if (proprepGPA <= 11.4999 && proprepGPA >= 10) {
   adviceproprep = "You’ve shown potential in management and entrepreneurship. Take time to improve your knowledge in key areas such as business planning, marketing, and organizational behavior.";
 } else {
   adviceproprep = "Management and entrepreneurship can be tough, but with consistent effort and learning, you can excel. Focus on building your problem-solving skills and seek mentorship for guidance.";
 }

 
// ADVICE INTERNSHIP
if (internshipGPA >= 16) {
   adviceinternship = "Outstanding performance in your internship in geology or geophysics! Your technical skills and ability to analyze complex geological data are impressive. Keep seeking challenging projects to further sharpen your expertise.";
 } else if (internshipGPA <= 15.9999 && internshipGPA >= 13.5) {
   adviceinternship = "Great work in your internship! You’re gaining valuable experience in geology or geophysics. Continue building on your knowledge of field techniques and data interpretation.";
 } else if (internshipGPA <= 13.4999 && internshipGPA >= 11.5) {
   adviceinternship = "Good progress in your internship. Focus on enhancing your fieldwork skills and work on improving your understanding of data analysis to make a greater impact in geological studies.";
 } else if (internshipGPA <= 11.4999 && internshipGPA >= 10) {
   adviceinternship = "You’ve shown potential during your internship. Strengthen your foundation in geological principles and improve your technical skills through hands-on practice and more exposure to fieldwork.";
 } else {
   adviceinternship = "Internships in geology or geophysics can be demanding, but with persistence and dedication, you’ll see improvement. Focus on understanding the fundamentals and seek feedback from experienced professionals.";
 }












   if (currentgpa*0.2 >= 10) {
       document.getElementById("resultation").style.backgroundColor = "rgb(53, 76, 53)";
     } else {
       document.getElementById("resultation").style.backgroundColor = "rgb(95, 22, 22)";
     }
     


   // Display the GPA
   document.getElementById("gpa").innerHTML = overallGPA.toFixed(4);
   document.getElementById("percentage").innerHTML = percentage.toFixed(2);
   document.getElementById("cgpa").innerHTML = (currentgpa*0.2).toFixed(4);
   document.getElementById("cpercentage").innerHTML = (currentgpa).toFixed(2);
   
   document.getElementById("letter").innerHTML = grades;
  
   document.getElementById("mineral").innerHTML = mineralGPA.toFixed(2);
   document.getElementById("mineralp").innerHTML = (mineralGPA/0.2).toFixed(1);

   document.getElementById("oilgas").innerHTML = oilgasGPA.toFixed(2);
   document.getElementById("oilgasp").innerHTML = (oilgasGPA/0.2).toFixed(1);

   document.getElementById("water").innerHTML = waterGPA.toFixed(2);
   document.getElementById("waterp").innerHTML = (waterGPA/0.2).toFixed(1);

   document.getElementById("trans").innerHTML = transGPA.toFixed(2);
   document.getElementById("transp").innerHTML = (transGPA/0.2).toFixed(1);

   document.getElementById("geochem").innerHTML = geochemGPA.toFixed(2);
   document.getElementById("geochemp").innerHTML = (geochemGPA/0.2).toFixed(1);

   document.getElementById("manag").innerHTML = managGPA.toFixed(2);
   document.getElementById("managp").innerHTML = (managGPA/0.2).toFixed(1);



   
   document.getElementById("intern").innerHTML = internGPA.toFixed(2);
   document.getElementById("internp").innerHTML = (internGPA/0.2).toFixed(1);


   
   document.getElementById("geores").innerHTML = georesGPA.toFixed(2);
   document.getElementById("georesp").innerHTML = (georesGPA/0.2).toFixed(1);
   
   document.getElementById("proprep").innerHTML = proprepGPA.toFixed(2);
   document.getElementById("proprepp").innerHTML = (proprepGPA/0.2).toFixed(1);
   
   document.getElementById("internship").innerHTML = internshipGPA.toFixed(2);
   document.getElementById("internshipp").innerHTML = (internshipGPA/0.2).toFixed(1);
   
   document.getElementById("type").innerHTML = elaci;
   document.getElementById("amount").innerHTML = pul;

// Updated code
document.getElementById("advicegpa").innerHTML = advicegpa;
document.getElementById("advicegeores").innerHTML = advicegeores;
document.getElementById("adviceproprep").innerHTML = adviceproprep;
document.getElementById("adviceinternship").innerHTML = adviceinternship;


   
// Generate a random percentage for testing (Replace with real value)
let progbarval = currentgpa.toFixed(2);
let moterizede = currentgpa*0.2.toFixed(2);
let progressBar = document.getElementById("progressbar");
let progressText = document.getElementById("progressbarvalue");

// Update width of progress bar
progressBar.style.width = progbarval + "%";

// Update text inside the progress bar
progressText.innerHTML = progbarval + "% (" + moterizede.toFixed(2) + ")";

// Change color based on value
if (currentgpa*0.2 < 10) {
    progressBar.style.backgroundColor = "red";
} else if (currentgpa*0.2 >= 10 && currentgpa*0.2 < 11.5) {
    progressBar.style.backgroundColor = "yellow";
} else if (currentgpa*0.2 >= 11.5 && currentgpa*0.2 < 13.5) {
    progressBar.style.backgroundColor = "orange";
} else {
    progressBar.style.backgroundColor = "green";
}







}

window.onload = function() {
   calculateGPA();
 };


   

