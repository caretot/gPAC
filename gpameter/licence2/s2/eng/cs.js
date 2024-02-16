function calculateGPA() {
   // Get the input values
   let mathCC1 = parseFloat(document.getElementById("math-cc1").value);
   let mathCC2 = parseFloat(document.getElementById("math-cc2").value);
   let mathCC3 = parseFloat(document.getElementById("math-cc3").value);

   let electronicsCC1 = parseFloat(document.getElementById("electronics-cc1").value);
   let phylabCC1 = parseFloat(document.getElementById("phylab-cc1").value);
   let phylabCC2 = parseFloat(document.getElementById("phylab-cc2").value);

   let dsaCC1 = parseFloat(document.getElementById("dsa-cc1").value);
   let dsaCC2 = parseFloat(document.getElementById("dsa-cc2").value);

   let oopCC1 = parseFloat(document.getElementById("oop-cc1").value);
   let oopCC2 = parseFloat(document.getElementById("oop-cc2").value);

   let aiCC1 = parseFloat(document.getElementById("ai-cc1").value);
   let aiCC2 = parseFloat(document.getElementById("ai-cc2").value);

   let ledCC1 = parseFloat(document.getElementById("led-cc1").value);
   let ledCC2 = parseFloat(document.getElementById("led-cc2").value);
   let ledCC3 = parseFloat(document.getElementById("led-cc3").value);

   let softCC1 = parseFloat(document.getElementById("soft-cc1").value);
   let softCC2 = parseFloat(document.getElementById("soft-cc2").value);
   let softCC3 = parseFloat(document.getElementById("soft-cc3").value);
   
   let frCC1 = parseFloat(document.getElementById("fr-cc1").value);
   let frCC2 = parseFloat(document.getElementById("fr-cc2").value);
   let frCC3 = parseFloat(document.getElementById("fr-cc3").value);
   let enCC1 = parseFloat(document.getElementById("en-cc1").value);
   let enCC2 = parseFloat(document.getElementById("en-cc2").value);
   let enCC3 = parseFloat(document.getElementById("en-cc3").value);









   let currentcoef =0;
   let currentgpa =0;
   let currenttotalgrades=0;
   
   const midterms = [
     mathCC1, mathCC2, mathCC3,
     electronicsCC1,
     phylabCC1, phylabCC2,
     dsaCC1, dsaCC2,
     oopCC1, oopCC2,
     aiCC1, aiCC2,
     softCC1, softCC2,softCC3,
     ledCC1, ledCC2,ledCC3,
     frCC1, frCC2, frCC3,
   ];

   const coefs = [
     2/3, 1, 5/3,   /* math                                                        */
     5/3,   /*  elec                                              */
     2.5/3, 2.5/3,   /* phylab                                                     */
     1, 7/3,    /* dsa                                                    */
     1, 1,     /* oop                                                    */
     1, 1,     /* ai                                                   */
     2/3, 2/3, 2/3,   /* soft                                                     */
     0.4, 0.8, 0.8,    /* led                                                   */
     0.5, 0.5, 1,    /* fr                                               */
   ];





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










// Initialize mathCC1, mathCC2, mathCC3
if (isNaN(mathCC1)) {
   mathCC1 = 0;
}
if (isNaN(mathCC2)) {
   mathCC2 = 0;
}
if (isNaN(mathCC3)) {
   mathCC3 = 0;
}


// Initialize electronicsCC1
if (isNaN(electronicsCC1)) {
   electronicsCC1 = 0;
}

// Initialize phylabCC1, phylabCC2
if (isNaN(phylabCC1)) {
   phylabCC1 = 0;
}
if (isNaN(phylabCC2)) {
   phylabCC2 = 0;
}

// Initialize dsaCC1, dsaCC2, dsaCC3
if (isNaN(dsaCC1)) {
   dsaCC1 = 0;
}
if (isNaN(dsaCC2)) {
   dsaCC2 = 0;
}


// Initialize oopCC1, oopCC2
if (isNaN(oopCC1)) {
   oopCC1 = 0;
}
if (isNaN(oopCC2)) {
   oopCC2 = 0;
}

// Initialize aiCC1, aiCC2
if (isNaN(aiCC1)) {
   aiCC1 = 0;
}
if (isNaN(aiCC2)) {
   aiCC2 = 0;
}



// Initialize softCC1, softCC2, softCC3
if (isNaN(softCC1)) {
   softCC1 = 0;
}
if (isNaN(softCC2)) {
   softCC2 = 0;
}
if (isNaN(softCC3)) {
   softCC3 = 0;
}

// Initialize ledCC1, ledCC2, ledCC3
if (isNaN(ledCC1)) {
   ledCC1 = 0;
}
if (isNaN(ledCC2)) {
   ledCC2 = 0;
}
if (isNaN(ledCC3)) {
   ledCC3 = 0;
}

// Initialize frCC1, frCC2, frCC3
if (isNaN(frCC1)) {
   frCC1 = 0;
}
if (isNaN(frCC2)) {
   frCC2 = 0;
}
if (isNaN(frCC3)) {
   frCC3 = 0;
}

// Initialize enCC1, enCC2, enCC3
if (isNaN(enCC1)) {
   enCC1 = 0;
}
if (isNaN(enCC2)) {
   enCC2 = 0;
}
if (isNaN(enCC3)) {
   enCC3 = 0;
}



























  let grades = "";
  let pul = "";
  let elaci = "";
  let advicegpa = "";
  let advicemath = "";
  let advicephy = "";
  let advicefac = "";
  let advicesocial = "";
  let advicelang = "";

   // Calculate the GPA
   let totalCredits = 30; // Total credits of all courses

   let mathGPA = ((mathCC1 * 2/3) + (mathCC2 * 1) + (mathCC3 * 5/3)) / (2/3+1+5/3);
   
   let electronicsGPA = electronicsCC1;
   let phylabGPA = ((phylabCC1 * 3.5/3) + (phylabCC2 * 3.5/3)) / (3.5/3 + 3.5/3);
   
   
   let dsaGPA = ((dsaCC1 * 1) + (dsaCC2 * 7/3)) / (1+7/3);
   let oopGPA = ((oopCC1) + (oopCC2)) / (2);
   let aiGPA = ((aiCC1) + (aiCC2)) / (2);
   
   let softGPA = ((softCC1 * 2/3) + (softCC2 * 2/3) + (softCC3 * 2/3)) / (2/3 + 2/3 + 2/3);
   
   let ledGPA = ((ledCC1 * 0.4) + (ledCC2 * 0.8) + (ledCC3 * 0.8)) / (0.4 + 0.8 + 0.8);
   
   let frGPA = ((frCC1 * 0.25) + (frCC2 * 0.25) + (frCC3 * 0.5)) / (0.25 + 0.25 + 0.5);
   let enGPA = ((enCC1 * 0.25) + (enCC2 * 0.25) + (enCC3 * 0.5)) / (0.25 + 0.25 + 0.5);
   


   let phyGPA = ((electronicsGPA) + (phylabGPA))/2;
   let csGPA = ((dsaGPA*10/3) + (oopGPA*2) + (aiGPA*2))/(22/3);
   let langGPA = frGPA/2+enGPA/2;



   let overallGPA = (
   (mathGPA * (3+1/3)) +
   (phyGPA * (5*2/3)) +
   (csGPA * (22/3)) +
   (softGPA*2) + 
   (ledGPA*2) + 
   (langGPA * 2)) / 20; // Overall GPA

   
      // Checking the condition for the providing the
   // grade to student based on percentage
   let percentage = (overallGPA / 20) * 100;  
   let gpa = overallGPA;
   let cgpa = currentgpa*0.2;
  
   if (cgpa <= 30 && cgpa >= 13.5) {
      grades = "A";
   } else if (cgpa <= 13.4999999 && cgpa >= 12) {
      grades = "B";
   } else if (cgpa <= 11.99999 && cgpa >= 10) {
      grades = "C";
   } else {
      grades = "F";
   }



   //MONEY
   if (cgpa <= 30 && cgpa >= 13.5) {
     pul = "171.50";
     elaci = '"Əlaçı"';
  } else if (cgpa <= 13.4999999 && cgpa >= 11.5) {
     pul = "142.10";
     elaci = '"Həvəsləndirici"';
  } else if (cgpa <= 11.4999999 && cgpa >= 10) {
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


  if (mathGPA >= 16) {
   advicemath = "Your performance in mathematics is outstanding! Consider exploring advanced topics, joining math competitions, or seeking research opportunities to further excel in this field.";
} else if (mathGPA <= 15.9999 && mathGPA >= 13.5) {
   advicemath = "You're doing very well in mathematics! Keep up the good work by practicing regularly, seeking challenging problems, and collaborating with classmates on problem-solving.";
} else if (mathGPA <= 13.4999999 && mathGPA >= 11.5) {
   advicemath = "You're making solid progress in mathematics. Continue to focus on understanding core concepts, seeking help when needed, and exploring applications of mathematics in various fields.";
} else if (mathGPA <= 11.4999999 && mathGPA >= 10) {
   advicemath = "You're on the right path in mathematics. Make sure to review foundational topics, engage actively in class discussions, and practice problem-solving consistently to improve your skills.";
} else {
   advicemath = "While your mathematics GPA may be lower, don't lose heart. Identify areas where you need improvement, seek extra practice opportunities, and consider seeking assistance from tutors or online resources to strengthen your understanding.";
}

if (phyGPA >= 16){
   advicephy = "Your physics proficiency is exceptional! Consider diving into advanced topics or engaging in independent research to further elevate your understanding and expertise in the field.";
 } else if (phyGPA <= 15.9999 && phyGPA >= 13.5) {
   advicephy = "Great job on maintaining a high physics GPA! Challenge yourself with complex problems, seek out additional resources, and explore hands-on experiments to deepen your practical skills.";
 } else if (phyGPA <= 13.4999999 && phyGPA >= 11.5) {
   advicephy = "You're progressing well in physics. Ensure consistent practice, apply theoretical concepts in practical scenarios, and consider collaborative projects to enhance your understanding of challenging topics.";
 } else if (phyGPA <= 11.4999999 && phyGPA >= 10) {
   advicephy = "You're on the right path in physics. Strengthen your foundation by focusing on core principles, seek guidance from professors, and explore real-world applications through simulations or experiments.";
 } else {
   advicephy = "If your physics GPA is lower, don't be discouraged. Identify areas for improvement, dedicate extra time to problem-solving, and seek support from tutors or online resources to progressively enhance your physics skills.";
 }


 if (csGPA >= 16) {
   advicefac = "Your computer science journey, including DSA, OOP, and AI, is thriving! Keep pushing the boundaries of innovation.";
} else if (csGPA <= 15.9999 && csGPA >= 13.5) {
   advicefac = "Your dedication to computer science, with a focus on DSA, OOP, and AI, is paying off! Stay curious and keep exploring.";
} else if (csGPA <= 13.4999999 && csGPA >= 11.5) {
   advicefac = "Your progress in computer science, particularly in DSA, OOP, and AI, is commendable! Keep honing your skills and embracing challenges.";
} else if (csGPA <= 11.4999999 && csGPA >= 10) {
   advicefac = "You're making strides in computer science, including DSA, OOP, and AI! Stay focused, and your hard work will yield results.";
} else {
   advicefac = "Every setback in computer science, whether in DSA, OOP, or AI, is a stepping stone to success. Keep learning, adapting, and moving forward.";
}

 
// Determine advice based on ((softGPA + ledGPA)/2)
if (((softGPA + ledGPA)/2) >= 16) {
    advicesocial = "Your performance in soft skills and projects is exceptional! Consider taking on more challenging projects, collaborating with peers, and seeking leadership opportunities to further develop your abilities.";
} else if (((softGPA + ledGPA)/2) <= 15.9999 && ((softGPA + ledGPA)/2) >= 13.5) {
    advicesocial = "You're doing very well in developing your soft skills and projects! Keep up the good work by actively participating in team activities, seeking feedback, and exploring innovative project ideas.";
} else if (((softGPA + ledGPA)/2) <= 13.4999999 && ((softGPA + ledGPA)/2) >= 11.5) {
    advicesocial = "You're making solid progress in developing your soft skills and projects. Continue to focus on communication, teamwork, and project management to enhance your overall performance.";
} else if (((softGPA + ledGPA)/2) <= 11.4999999 && ((softGPA + ledGPA)/2) >= 10) {
    advicesocial = "You're on the right path in developing your soft skills and projects. Make sure to actively engage in group discussions, seek mentorship, and dedicate time to self-improvement.";
} else {
    advicesocial = "While your GPA for soft skills and projects may be lower, don't be discouraged. Identify areas for improvement, seek out relevant training opportunities, and actively seek feedback to enhance your skills.";
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
  
   document.getElementById("math").innerHTML = mathGPA.toFixed(2);
   document.getElementById("mathp").innerHTML = (mathGPA/0.2).toFixed(1);

   document.getElementById("electronics").innerHTML = electronicsGPA.toFixed(2);
   document.getElementById("electronicsp").innerHTML = (electronicsGPA/0.2).toFixed(1);

   document.getElementById("phylab").innerHTML = phylabGPA.toFixed(2);
   document.getElementById("phylabp").innerHTML = (phylabGPA/0.2).toFixed(1);

   document.getElementById("dsa").innerHTML = dsaGPA.toFixed(2);
   document.getElementById("dsap").innerHTML = (dsaGPA/0.2).toFixed(1);

   document.getElementById("oop").innerHTML = oopGPA.toFixed(2);
   document.getElementById("oopp").innerHTML = (oopGPA/0.2).toFixed(1);

   document.getElementById("ai").innerHTML = aiGPA.toFixed(2);
   document.getElementById("aip").innerHTML = (aiGPA/0.2).toFixed(1);

   document.getElementById("led").innerHTML = ledGPA.toFixed(2);
   document.getElementById("ledp").innerHTML = (ledGPA/0.2).toFixed(1);

   document.getElementById("soft").innerHTML = softGPA.toFixed(2);
   document.getElementById("softp").innerHTML = (softGPA/0.2).toFixed(1);


   document.getElementById("fr").innerHTML = frGPA.toFixed(2);
   document.getElementById("frp").innerHTML = (frGPA/0.2).toFixed(1);

   document.getElementById("en").innerHTML = enGPA.toFixed(2);
   document.getElementById("enp").innerHTML = (enGPA/0.2).toFixed(1);


   
   document.getElementById("math2").innerHTML = mathGPA.toFixed(2);
   document.getElementById("math2p").innerHTML = (mathGPA/0.2).toFixed(1);
   
   document.getElementById("phy").innerHTML = phyGPA.toFixed(2);
   document.getElementById("phyp").innerHTML = (phyGPA/0.2).toFixed(1);
   
   document.getElementById("cs").innerHTML = csGPA.toFixed(2);
   document.getElementById("csp").innerHTML = (csGPA/0.2).toFixed(1);
   
   document.getElementById("social").innerHTML = (ledGPA/2+softGPA/2).toFixed(2);
   document.getElementById("socialp").innerHTML = ((ledGPA/2+softGPA/2)/0.2).toFixed(1);
   
   document.getElementById("lang").innerHTML = langGPA.toFixed(2);
   document.getElementById("langp").innerHTML = (langGPA/0.2).toFixed(1);
   
   document.getElementById("type").innerHTML = elaci;
   document.getElementById("amount").innerHTML = pul;


   document.getElementById("advicegpa").innerHTML = advicegpa;
   document.getElementById("advicemath").innerHTML = advicemath;
   document.getElementById("advicephy").innerHTML = advicephy;
   document.getElementById("advicefac").innerHTML = advicefac;
   document.getElementById("advicesocial").innerHTML = advicesocial;
   document.getElementById("advicelang").innerHTML = advicelang   ;
   


}

window.onload = function() {
   calculateGPA();
 };