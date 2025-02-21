function calculateGPA() {
   // Get the input values
   
   let mlCC1 = parseFloat(document.getElementById("ml-cc1").value);
let mlCC2 = parseFloat(document.getElementById("ml-cc2").value);

let cvCC1 = parseFloat(document.getElementById("cv-cc1").value);
let cvCC2 = parseFloat(document.getElementById("cv-cc2").value);

let daCC1 = parseFloat(document.getElementById("da-cc1").value);
let daCC2 = parseFloat(document.getElementById("da-cc2").value);

let ssCC1 = parseFloat(document.getElementById("ss-cc1").value);
let ssCC2 = parseFloat(document.getElementById("ss-cc2").value);

 
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
      mlCC1, mlCC2,           // Machine Learning
    cvCC1, cvCC2,           // Computer Vision
    daCC1, daCC2,           // Data Analysis
    ssCC1, ssCC2,            // Security
      managCC1, managCC2, managCC3,        // Management
      internCC1, internCC2, internCC3      // Internship
   ];
   
   const coefs = [
      1.5,1.5,
      1.5,1.5,
      1.5,1.5,
      1.5,1.5,
      1, 1, 1,   // Management (same as before)
      3, 6, 6    // Internship (same as before)
   ];
   



   if (isNaN(mlCC1)) {
      mlCC1 = 0;
  }
  if (isNaN(mlCC2)) {
      mlCC2 = 0;
  }
  
  if (isNaN(cvCC1)) {
      cvCC1 = 0;
  }
  if (isNaN(cvCC2)) {
      cvCC2 = 0;
  }
  
  if (isNaN(daCC1)) {
      daCC1 = 0;
  }
  if (isNaN(daCC2)) {
      daCC2 = 0;
  }
  
  if (isNaN(ssCC1)) {
      ssCC1 = 0;
  }
  if (isNaN(ssCC2)) {
      ssCC2 = 0;
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
  let advicecs = "";
  let adviceproprep = "";
  let adviceinternship = "";

   // Calculate the GPA
   let totalCredits = 30; // Total credits of all courses

   let mlGPA = (mlCC1 + mlCC2) / 2;
let cvGPA = (cvCC1 + cvCC2) / 2;
let daGPA = (daCC1 + daCC2) / 2;
let ssGPA = (ssCC1 + ssCC2) / 2;

   


   let managGPA = ((managCC1 * 0.5) + (managCC2 * 0.5) + (managCC3 * 0.5)) / 1.5;
   let internGPA = ((internCC1 * 3) + (internCC2 * 6) + (internCC3 * 6)) / 15;

         
   let csGPA = (mlGPA + cvGPA + daGPA + ssGPA) / 4;  // Average of ML, CV, DA, SS
   let proprepGPA = managGPA;
   let internshipGPA = internGPA;


   let overallGPA = (csGPA*12 + proprepGPA*3 + internshipGPA*15)/30;

   
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

// ADVICE COMPUTER SCIENCE
if (csGPA >= 16) {
   advicecs = "Exceptional performance in Computer Science! Your mastery in Machine Learning, Computer Vision, Data Analysis, and Security is impressive. Continue to explore advanced concepts and innovative technologies.";
} else if (csGPA <= 15.9999 && csGPA >= 13.5) {
   advicecs = "Great job in Computer Science! You have a solid understanding of Machine Learning, Computer Vision, Data Analysis, and Security. Keep working on applying your knowledge to real-world projects.";
} else if (csGPA <= 13.4999 && csGPA >= 11.5) {
   advicecs = "Solid performance in Computer Science! Focus on strengthening your grasp of the fundamental concepts in Machine Learning, Computer Vision, Data Analysis, and Security. Practical experience will enhance your skills.";
} else if (csGPA <= 11.4999 && csGPA >= 10) {
   advicecs = "Good start in Computer Science! Put more focus on the key aspects of Machine Learning, Computer Vision, Data Analysis, and Security. Apply theoretical knowledge to practical scenarios for better understanding.";
} else {
   advicecs = "Improvement needed in Computer Science. Review your understanding of Machine Learning, Computer Vision, Data Analysis, and Security. Engage with additional resources and practical exercises to strengthen your foundation.";
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
  
   document.getElementById("ml").innerHTML = mlGPA.toFixed(2);
   document.getElementById("mlp").innerHTML = (mlGPA / 0.2).toFixed(1);

   document.getElementById("cv").innerHTML = cvGPA.toFixed(2);
   document.getElementById("cvp").innerHTML = (cvGPA / 0.2).toFixed(1);

   document.getElementById("da").innerHTML = daGPA.toFixed(2);
   document.getElementById("dap").innerHTML = (daGPA / 0.2).toFixed(1);

   document.getElementById("ss").innerHTML = ssGPA.toFixed(2);
   document.getElementById("ssp").innerHTML = (ssGPA / 0.2).toFixed(1);


   document.getElementById("manag").innerHTML = managGPA.toFixed(2);
   document.getElementById("managp").innerHTML = (managGPA / 0.2).toFixed(1);

   document.getElementById("intern").innerHTML = internGPA.toFixed(2);
   document.getElementById("internp").innerHTML = (internGPA / 0.2).toFixed(1);


   document.getElementById("cs").innerHTML = csGPA.toFixed(2);
   document.getElementById("csp").innerHTML = (csGPA / 0.2).toFixed(1);

   document.getElementById("proprep").innerHTML = proprepGPA.toFixed(2);
   document.getElementById("proprepp").innerHTML = (proprepGPA / 0.2).toFixed(1);

   document.getElementById("internship").innerHTML = internshipGPA.toFixed(2);
   document.getElementById("internshipp").innerHTML = (internshipGPA / 0.2).toFixed(1);

   document.getElementById("type").innerHTML = elaci;
   document.getElementById("amount").innerHTML = pul;

// Updated code
document.getElementById("advicegpa").innerHTML = advicegpa;
document.getElementById("advicecs").innerHTML = advicecs;
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


   

