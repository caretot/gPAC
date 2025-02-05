function calculateGPA() {
   // Get the input values
   
   let odepdeCC1 = parseFloat(document.getElementById("odepde-cc1").value);
   let odepdeCC2 = parseFloat(document.getElementById("odepde-cc2").value);
   let odepdeCC3 = parseFloat(document.getElementById("odepde-cc3").value);


   let polymersCC1 = parseFloat(document.getElementById("polymers-cc1").value);
   let analyticalCC1 = parseFloat(document.getElementById("analytical-cc1").value);
   let expchemCC1 = parseFloat(document.getElementById("expchem-cc1").value);
   let appliedCC1 = parseFloat(document.getElementById("applied-cc1").value);


   let systemsCC1 = parseFloat(document.getElementById("systems-cc1").value);
   let catalysisCC1 = parseFloat(document.getElementById("catalysis-cc1").value);
   let catalysisCC2 = parseFloat(document.getElementById("catalysis-cc2").value);
   let expceCC1 = parseFloat(document.getElementById("expce-cc1").value);
   let processCC1 = parseFloat(document.getElementById("process-cc1").value);
   let projectCC1 = parseFloat(document.getElementById("project-cc1").value);


   let frCC1 = parseFloat(document.getElementById("fr-cc1").value);
   let frCC2 = parseFloat(document.getElementById("fr-cc2").value);
   let frCC3 = parseFloat(document.getElementById("fr-cc3").value);


   let acadwrCC1 = parseFloat(document.getElementById("acadwr-cc1").value);
   let acadwrCC2 = parseFloat(document.getElementById("acadwr-cc2").value);
   let acadwrCC3 = parseFloat(document.getElementById("acadwr-cc3").value);










   let currentcoef =0;
   let currentgpa =0;
   let currenttotalgrades=0;
   
   const midterms = [
      odepdeCC1, odepdeCC2, odepdeCC3,

      polymersCC1, analyticalCC1, expchemCC1, appliedCC1,

      systemsCC1, catalysisCC1, catalysisCC2, expceCC1, processCC1, projectCC1,
      
      frCC1, frCC2, frCC3,

      acadwrCC1, acadwrCC2, acadwrCC3
  ];
  
   

   const coefs = [
      0.75,0.75,1.5,

      2.5,2.5,2.5,2.5,

      2.75, 1.1, 1.65, 2.75, 1.375, 1.375,

      0.5*3/2,0.75*3/2,0.75*3/2,
      2/3*3/2,2/3*3/2,2/3*3/2
   ];







   if (isNaN(odepdeCC1)) {
      odepdeCC1 = 0;
  }
  if (isNaN(odepdeCC2)) {
      odepdeCC2 = 0;
  }
  if (isNaN(odepdeCC3)) {
      odepdeCC3 = 0;
  }
  
  if (isNaN(polymersCC1)) {
      polymersCC1 = 0;
  }
  if (isNaN(analyticalCC1)) {
      analyticalCC1 = 0;
  }
  if (isNaN(expchemCC1)) {
      expchemCC1 = 0;
  }
  if (isNaN(appliedCC1)) {
      appliedCC1 = 0;
  }
  
  if (isNaN(systemsCC1)) {
      systemsCC1 = 0;
  }
  if (isNaN(catalysisCC1)) {
      catalysisCC1 = 0;
  }
  if (isNaN(catalysisCC2)) {
      catalysisCC2 = 0;
  }
  if (isNaN(expceCC1)) {
      expceCC1 = 0;
  }
  if (isNaN(processCC1)) {
      processCC1 = 0;
  }
  if (isNaN(projectCC1)) {
      projectCC1 = 0;
  }
  
  if (isNaN(frCC1)) {
      frCC1 = 0;
  }
  if (isNaN(frCC2)) {
      frCC2 = 0;
  }
  if (isNaN(frCC3)) {
      frCC3 = 0;
  }
  
  if (isNaN(acadwrCC1)) {
      acadwrCC1 = 0;
  }
  if (isNaN(acadwrCC2)) {
      acadwrCC2 = 0;
  }
  if (isNaN(acadwrCC3)) {
      acadwrCC3 = 0;
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
  let advicemath = "";
  let advicephychem = "";
  let advicechemeng = "";
  let advicelang = "";
  let adviceprofprep = "";

   // Calculate the GPA
   let totalCredits = 30; // Total credits of all courses

   let odepdeGPA = ((odepdeCC1 * 0.75) + (odepdeCC2 * 0.75) + (odepdeCC3 * 1.5)) / 3;
   
   let polymersGPA = polymersCC1;
   let analyticalGPA = analyticalCC1;
   let expchemGPA = expchemCC1;
   let appliedGPA = appliedCC1;

   
   let systemsGPA = systemsCC1;
   let catalysisGPA = (catalysisCC1*1.1 + catalysisCC2*1.65)/2.75;
   let expceGPA = expceCC1;
   let processGPA = processCC1;
   let projectGPA = projectCC1;


   let frGPA = ((frCC1 * 0.5) + (frCC2 * 0.75) + (frCC3 * 0.75)) / 2;
   let acadwrGPA = ((acadwrCC1 * 0.5) + (acadwrCC2 * 0.5) + (acadwrCC3 * 0.5)) / 1.5;



   let mathGPA = odepdeGPA;
   let phychemGPA = (polymersGPA+analyticalGPA+expchemGPA+appliedGPA)/4;
   let chemengGPA = ((processGPA * 1.375) +(projectGPA * 1.375) +(systemsGPA * 2.75) + (catalysisGPA*2.75) + (expceGPA*2.75))/11;
   let langGPA = frGPA;
   let profprepGPA = acadwrGPA;



   let overallGPA = ((mathGPA * 3) + (phychemGPA * 10) + (chemengGPA * 11) + (frGPA * 3) + (profprepGPA * 3) ) / totalCredits; // Overall GPA

   
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

// ADVICE MATH
if (mathGPA >= 16) {
   advicemath = "Exceptional performance in differential equations! Your understanding of mathematical models is commendable. Keep honing your analytical skills, as they are invaluable for advanced applications.";
 } else if (mathGPA <= 15.9999 && mathGPA >= 13.5) {
   advicemath = "Great job in differential equations! Your efforts are paying off, and you are building a strong foundation. Continue practicing and exploring challenging problems to deepen your understanding.";
 } else if (mathGPA <= 13.4999 && mathGPA >= 11.5) {
   advicemath = "Solid performance in differential equations! Focus on mastering the fundamentals and applying them to real-world scenarios to strengthen your grasp.";
 } else if (mathGPA <= 11.4999 && mathGPA >= 10) {
   advicemath = "You’ve made a good start in differential equations! Dedicate more time to problem-solving and seek support where needed to elevate your understanding.";
 } else {
   advicemath = "It’s important to strengthen your skills in differential equations. Work consistently, review the basics, and seek help from peers or resources to improve your performance.";
 }
 
// ADVICE PHYSICAL CHEMISTRY
if (phychemGPA >= 16) {
   advicephychem = "Outstanding performance in Physical Chemistry! Your deep understanding of concepts is commendable. Keep up the excellent work and challenge yourself with advanced topics.";
} else if (phychemGPA <= 15.9999 && phychemGPA >= 13.5) {
   advicephychem = "Great job in Physical Chemistry! Your progress is evident. Continue to build on this foundation and explore more real-world applications.";
} else if (phychemGPA <= 13.4999 && phychemGPA >= 11.5) {
   advicephychem = "Good effort in Physical Chemistry! Focus on strengthening your grasp of key principles and practicing problem-solving strategies.";
} else if (phychemGPA <= 11.4999 && phychemGPA >= 10) {
   advicephychem = "You have potential in Physical Chemistry. Dedicate more time to understanding the core ideas and practicing regularly to improve.";
} else {
   advicephychem = "Physical Chemistry can be challenging, but persistence is key. Start with the basics and gradually work towards mastering the subject.";
}

// ADVICE CHEMICAL ENGINEERING
if (chemengGPA >= 16) {
   advicechemeng = "Excellent performance in Chemical Engineering! Your ability to connect theory with practical applications is impressive. Keep pushing boundaries to excel further.";
} else if (chemengGPA <= 15.9999 && chemengGPA >= 13.5) {
   advicechemeng = "Strong work in Chemical Engineering! Continue to refine your skills and seek opportunities to apply your knowledge in innovative ways.";
} else if (chemengGPA <= 13.4999 && chemengGPA >= 11.5) {
   advicechemeng = "Good progress in Chemical Engineering! Focus on enhancing your understanding of key concepts and practical applications.";
} else if (chemengGPA <= 11.4999 && chemengGPA >= 10) {
   advicechemeng = "You’re making strides in Chemical Engineering. Work on building a stronger foundation and practice problem-solving regularly.";
} else {
   advicechemeng = "Chemical Engineering concepts may seem tough at first, but with effort and persistence, you can improve. Focus on understanding the fundamentals and seek support when needed.";
}

 



  if (langGPA >= 16){
     advicelang = "Your language skills are exceptional! Consider taking advanced language courses or engaging in immersive experiences to further enhance your proficiency.";
 } else if (langGPA <= 15.9999 && langGPA >= 13.5) {
     advicelang = "You're performing well in your language studies! Continue to actively participate in class discussions, practice regularly, and explore opportunities for practical application of your language skills.";
 } else if (langGPA <= 13.4999999 && langGPA >= 11.5) {
     advicelang = "You're making good progress in your language studies. Ensure consistent practice, seek out diverse learning resources, and consider joining language-related clubs or activities for additional exposure.";
 } else if (langGPA <= 11.4999999 && langGPA >= 10) {
     advicelang = "You're on the right track with your language studies. Focus on building a strong foundation by reinforcing basic concepts, practicing regularly, and seeking guidance from your language professors when needed.";
 } else {
     advicelang = "While your language GPA may be lower, don't be discouraged. Identify specific areas for improvement, dedicate extra time to practice, and consider seeking additional support from language tutors or online resources.";
 }

 
 if (profprepGPA >= 16) {
   adviceprofprep = "Your academic writing skills are outstanding! Your ability to construct coherent arguments and present ideas effectively is commendable. Consider engaging in advanced writing workshops or contributing to academic publications to refine your expertise.";
 } else if (profprepGPA <= 15.9999 && profprepGPA >= 13.5) {
   adviceprofprep = "Great work in academic writing! You have a strong foundation. Continue practicing by writing essays or articles on diverse topics to expand your skills and develop a unique voice.";
 } else if (profprepGPA <= 13.4999 && profprepGPA >= 11.5) {
   adviceprofprep = "You’re making good progress in academic writing. Focus on structuring your essays clearly, enhancing your vocabulary, and refining your critical analysis skills through regular practice.";
 } else if (profprepGPA <= 11.4999 && profprepGPA >= 10) {
   adviceprofprep = "You’re on the right track in academic writing. Work on organizing your ideas more effectively, seek feedback from peers or instructors, and review grammar and style guidelines for polished work.";
 } else {
   adviceprofprep = "Academic writing can be challenging, but with consistent effort, you can improve. Start with outlining your ideas, practice regularly, and use feedback to refine your writing. Don't hesitate to seek guidance or resources to strengthen your skills.";
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
  
   document.getElementById("odepde").innerHTML = odepdeGPA.toFixed(2);
   document.getElementById("odepdep").innerHTML = (odepdeGPA/0.2).toFixed(1);

   document.getElementById("polymers").innerHTML = polymersGPA.toFixed(2);
   document.getElementById("polymersp").innerHTML = (polymersGPA/0.2).toFixed(1);

   document.getElementById("analytical").innerHTML = analyticalGPA.toFixed(2);
   document.getElementById("analyticalp").innerHTML = (analyticalGPA/0.2).toFixed(1);

   document.getElementById("expchem").innerHTML = expchemGPA.toFixed(2);
   document.getElementById("expchemp").innerHTML = (expchemGPA/0.2).toFixed(1);

   document.getElementById("applied").innerHTML = appliedGPA.toFixed(2);
   document.getElementById("appliedp").innerHTML = (appliedGPA/0.2).toFixed(1);

   document.getElementById("systems").innerHTML = systemsGPA.toFixed(2);
   document.getElementById("systemsp").innerHTML = (systemsGPA/0.2).toFixed(1);



   
   document.getElementById("catalysis").innerHTML = catalysisGPA.toFixed(2);
   document.getElementById("catalysisp").innerHTML = (catalysisGPA/0.2).toFixed(1);

   document.getElementById("expce").innerHTML = expceGPA.toFixed(2);
   document.getElementById("expcep").innerHTML = (expceGPA/0.2).toFixed(1);

   document.getElementById("process").innerHTML = processGPA.toFixed(2);
   document.getElementById("processp").innerHTML = (processGPA/0.2).toFixed(1);

   document.getElementById("project").innerHTML = projectGPA.toFixed(2);
   document.getElementById("projectp").innerHTML = (projectGPA/0.2).toFixed(1);


   document.getElementById("fr").innerHTML = frGPA.toFixed(2);
   document.getElementById("frp").innerHTML = (frGPA/0.2).toFixed(1);

   document.getElementById("acadwr").innerHTML = acadwrGPA.toFixed(2);
   document.getElementById("acadwrp").innerHTML = (acadwrGPA/0.2).toFixed(1);



   
   document.getElementById("math").innerHTML = mathGPA.toFixed(2);
   document.getElementById("mathp").innerHTML = (mathGPA/0.2).toFixed(1);
   
   document.getElementById("phychem").innerHTML = phychemGPA.toFixed(2);
   document.getElementById("phychemp").innerHTML = (phychemGPA/0.2).toFixed(1);
   
   document.getElementById("chemeng").innerHTML = chemengGPA.toFixed(2);
   document.getElementById("chemengp").innerHTML = (chemengGPA/0.2).toFixed(1);
   
   document.getElementById("lang").innerHTML = langGPA.toFixed(2);
   document.getElementById("langp").innerHTML = (langGPA/0.2).toFixed(1);
   
   document.getElementById("profprep").innerHTML = profprepGPA.toFixed(2);
   document.getElementById("profprepp").innerHTML = (profprepGPA/0.2).toFixed(1);
   
   document.getElementById("type").innerHTML = elaci;
   document.getElementById("amount").innerHTML = pul;


   document.getElementById("advicegpa").innerHTML = advicegpa;
   document.getElementById("advicemath").innerHTML = advicemath;
   document.getElementById("advicephychem").innerHTML = advicephychem;
   document.getElementById("advicechemeng").innerHTML = advicechemeng;
   document.getElementById("advicelang").innerHTML = advicelang;
   document.getElementById("adviceprofprep").innerHTML = adviceprofprep;
   


}

window.onload = function() {
   calculateGPA();
 };