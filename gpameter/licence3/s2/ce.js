function calculateGPA() {
   // Get the input values
   
   let bioCC1 = parseFloat(document.getElementById("bio-cc1").value);
 
   let chengprojCC1 = parseFloat(document.getElementById("chengproj-cc1").value);
   let chengprojCC2 = parseFloat(document.getElementById("chengproj-cc2").value);

  
   let chprojCC1 = parseFloat(document.getElementById("chproj-cc1").value);
   let chprojCC2 = parseFloat(document.getElementById("chproj-cc2").value);
   let chprojCC3 = parseFloat(document.getElementById("chproj-cc3").value);
 
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
      bioCC1,                              // Bioreactors
      chengprojCC1, chengprojCC2,          // Chemical Engineering Project
      chprojCC1, chprojCC2, chprojCC3,     // Chemistry Project
      managCC1, managCC2, managCC3,        // Management
      internCC1, internCC2, internCC3      // Internship
   ];
   
   const coefs = [
      2.25,        // Bioreactors
      3.375, 3.375, // Chemical Engineering Project
      0.6, 1.2, 1.2, // Chemistry Project
      1, 1, 1,   // Management (same as before)
      3, 6, 6    // Internship (same as before)
   ];
   





   if (isNaN(bioCC1)) {
      bioCC1 = 0;
   }
   if (isNaN(chengprojCC1)) {
      chengprojCC1 = 0;
   }
   if (isNaN(chengprojCC2)) {
      chengprojCC2 = 0;
   }
   
   if (isNaN(chprojCC1)) {
      chprojCC1 = 0;
   }
   if (isNaN(chprojCC2)) {
      chprojCC2 = 0;
   }
   if (isNaN(chprojCC3)) {
      chprojCC3 = 0;
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
  let advicecheng = "";
  let advicechem = "";
  let adviceproprep = "";
  let adviceinternship = "";

   // Calculate the GPA
   let totalCredits = 30; // Total credits of all courses

   let bioGPA = bioCC1;
   let chengprojGPA = chengprojCC1/2+chengprojCC2/2;
   let chprojGPA = ((chprojCC1 * 0.4) + (chprojCC2 * 0.8) + (chprojCC3 * 0.8)) / 2;
   


   let managGPA = ((managCC1 * 0.5) + (managCC2 * 0.5) + (managCC3 * 0.5)) / 1.5;
   let internGPA = ((internCC1 * 3) + (internCC2 * 6) + (internCC3 * 6)) / 15;

   let chengGPA = (bioGPA*1.5+chengprojGPA*4.5)/6;
   let chemGPA = chprojGPA;
   let proprepGPA = managGPA;
   let internshipGPA = internGPA;


   let overallGPA = (chengGPA*9 + chemGPA*3 + proprepGPA*3 + internshipGPA*15)/30;

   
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

// ADVICE CHEMICAL ENGINEERING
if (chengGPA >= 16) {
   advicecheng = "Exceptional performance in Chemical Engineering! Your mastery in bioreactors and chemical engineering projects is impressive. Continue to deepen your understanding of advanced processes and technologies to drive innovation.";
} else if (chengGPA <= 15.9999 && chengGPA >= 13.5) {
   advicecheng = "Great job in Chemical Engineering! You have a solid understanding of bioreactors and chemical projects. Keep working on refining your knowledge of process optimization and real-world applications.";
} else if (chengGPA <= 13.4999 && chengGPA >= 11.5) {
   advicecheng = "Solid performance in Chemical Engineering! Focus on strengthening your grasp of reactor design and process control. Practical experience in project work will help you gain more confidence.";
} else if (chengGPA <= 11.4999 && chengGPA >= 10) {
   advicecheng = "Good start in Chemical Engineering! Put more focus on the key aspects of bioreactor operation and project development. Apply theoretical knowledge to practical scenarios for better understanding.";
} else {
   advicecheng = "Improvement needed in Chemical Engineering. Review your understanding of bioreactors and chemical project work. Engage with additional resources and practical exercises to strengthen your foundation.";
}
// ADVICE CHEMISTRY PROJECT
if (chemGPA >= 16) {
   advicechem = "Exceptional performance in the Chemistry Project! Your ability to solve complex problems and apply scientific principles is outstanding. Keep exploring advanced research topics and cutting-edge technologies.";
} else if (chemGPA <= 15.9999 && chemGPA >= 13.5) {
   advicechem = "Great work on the Chemistry Project! You demonstrate a strong understanding of the core concepts. Focus on enhancing your experimental design and data analysis skills for even greater success.";
} else if (chemGPA <= 13.4999 && chemGPA >= 11.5) {
   advicechem = "Solid performance on your Chemistry Project! Strengthen your approach to research methods and improve your ability to apply theoretical knowledge to practical experiments.";
} else if (chemGPA <= 11.4999 && chemGPA >= 10) {
   advicechem = "You've made a good start on the Chemistry Project. Focus more on refining your experimental skills and ensure a deeper understanding of chemistry concepts to support your projects.";
} else {
   advicechem = "It's important to improve your Chemistry Project skills. Review key concepts, practice experimental techniques, and utilize available resources to strengthen your performance.";
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
  
   document.getElementById("bio").innerHTML = bioGPA.toFixed(2);
   document.getElementById("biop").innerHTML = (bioGPA / 0.2).toFixed(1);

   document.getElementById("chengproj").innerHTML = chengprojGPA.toFixed(2);
   document.getElementById("chengprojp").innerHTML = (chengprojGPA / 0.2).toFixed(1);

   document.getElementById("chemproj").innerHTML = chprojGPA.toFixed(2);
   document.getElementById("chemprojp").innerHTML = (chprojGPA / 0.2).toFixed(1);

   document.getElementById("manag").innerHTML = managGPA.toFixed(2);
   document.getElementById("managp").innerHTML = (managGPA / 0.2).toFixed(1);

   document.getElementById("intern").innerHTML = internGPA.toFixed(2);
   document.getElementById("internp").innerHTML = (internGPA / 0.2).toFixed(1);

   document.getElementById("chemeng").innerHTML = chengGPA.toFixed(2);
   document.getElementById("chemengp").innerHTML = (chengGPA / 0.2).toFixed(1);

   document.getElementById("chem").innerHTML = chemGPA.toFixed(2);
   document.getElementById("chemp").innerHTML = (chemGPA / 0.2).toFixed(1);

   document.getElementById("proprep").innerHTML = proprepGPA.toFixed(2);
   document.getElementById("proprepp").innerHTML = (proprepGPA / 0.2).toFixed(1);

   document.getElementById("internship").innerHTML = internshipGPA.toFixed(2);
   document.getElementById("internshipp").innerHTML = (internshipGPA / 0.2).toFixed(1);

   document.getElementById("type").innerHTML = elaci;
   document.getElementById("amount").innerHTML = pul;

// Updated code
document.getElementById("advicegpa").innerHTML = advicegpa;
document.getElementById("advicecheng").innerHTML = advicecheng;
document.getElementById("advicechem").innerHTML = advicechem;
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


   

