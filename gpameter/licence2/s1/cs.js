function calculateGPA() {
   // Get the input values
   let mathCC1 = parseFloat(document.getElementById("math-cc1").value);
   let mathCC2 = parseFloat(document.getElementById("math-cc2").value);
   let mathCC3 = parseFloat(document.getElementById("math-cc3").value);

   let elecmagCC1 = parseFloat(document.getElementById("elecmag-cc1").value);
   let elecmagCC2 = parseFloat(document.getElementById("elecmag-cc2").value);

   let electricityCC1 = parseFloat(document.getElementById("electricity-cc1").value);

   let softCC1 = parseFloat(document.getElementById("soft-cc1").value);
   let softCC2 = parseFloat(document.getElementById("soft-cc2").value);
   
   let signalCC1 = parseFloat(document.getElementById("signal-cc1").value);
   let signalCC2 = parseFloat(document.getElementById("signal-cc2").value);
   
   let systemCC1 = parseFloat(document.getElementById("system-cc1").value);
   let systemCC2 = parseFloat(document.getElementById("system-cc2").value);

   let ipCC1 = parseFloat(document.getElementById("ip-cc1").value);
   let ipCC2 = parseFloat(document.getElementById("ip-cc2").value);

   let backCC1 = parseFloat(document.getElementById("back-cc1").value);
   let backCC2 = parseFloat(document.getElementById("back-cc2").value);
   let backCC3 = parseFloat(document.getElementById("back-cc3").value);


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
     elecmagCC1, elecmagCC2,
     electricityCC1,
     softCC1, softCC2,
     signalCC1, signalCC2,
     systemCC1, systemCC2,
     ipCC1,ipCC2,
     backCC1, backCC2, backCC3,
     frCC1, frCC2, frCC3,
     enCC1, enCC2, enCC3
   ];

   const coefs = [
     1, 1.5, 2.5,
     1, 4,
     2, 
     1.5, 1.5, 
     1.2, 1.8, 
     1.5, 1.5, 
     1.5, 1.5, 
     0.3, 1.2, 1.5, 
     0.5, 0.5, 0.5, 
     0.5, 0.5, 0.5 
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











  if(isNaN(mathCC1)){
     mathCC1=0;
  }
  if(isNaN(mathCC2)){
     mathCC2=0;
  }
  if(isNaN(mathCC3)){
     mathCC3=0;
  }

  if(isNaN(elecmagCC1)){
     elecmagCC1=0;
  }
  if(isNaN(elecmagCC2)){
     elecmagCC2=0;
  }

  if(isNaN(electricityCC1)){
     electricityCC1=0;
  }

  if(isNaN(softCC1)){
     softCC1=0;
  }
  if(isNaN(softCC2)){
     softCC2=0;
  }

  if(isNaN(signalCC1)){
     signalCC1=0;
  }
  if(isNaN(signalCC2)){
     signalCC2=0;
  }

  if(isNaN(systemCC1)){
     systemCC1=0;
  }
  if(isNaN(systemCC2)){
     systemCC2=0;
  }

  if(isNaN(ipCC1)){
     ipCC1=0;
  }
  if(isNaN(ipCC2)){
     ipCC2=0;
  }


  if(isNaN(backCC1)){
     backCC1=0;
  }
  if(isNaN(backCC2)){
     backCC2=0;
  }
  if(isNaN(backCC3)){
     backCC3=0;
  }






  if(isNaN(frCC1)){
     frCC1=0;
  }
  if(isNaN(frCC2)){
     frCC2=0;
  }
  if(isNaN(frCC3)){
     frCC3=0;
  }
  if(isNaN(enCC1)){
     enCC1=0;
  }
  if(isNaN(enCC2)){
     enCC2=0;
  }
  if(isNaN(enCC3)){
     enCC3=0;
  }



























  let grades = "";
  let pul = "";
  let elaci = "";
  let advicegpa = "";
  let advicecomp = "";
  let advicelang = "";
  let advicephy = "";

   // Calculate the GPA
   let totalCredits = 30; // Total credits of all courses

   let mathGPA = ((mathCC1 * 1) + (mathCC2 * 1.5) + (mathCC3 * 2.5)) / 5;

   let elecmagGPA = ((elecmagCC1 * 1) + (elecmagCC2 * 4)) / 5;
   let electricityGPA = ((electricityCC1 * 2))/2;
   
   let softGPA = ((softCC1 * 1.5) + (softCC2 * 1.5)) / 3;
   let signalGPA = ((signalCC1 * 1.2) + (signalCC2 * 1.8)) / 3;
   let systemGPA = ((systemCC1 * 1.5) + (systemCC2 * 1.5)) / 3;
   let ipGPA = ((ipCC1 * 1.5) + (ipCC2*1.5))/3;
   let backGPA = ((backCC1 * 0.3) + (backCC2 * 1.2) + (backCC3 * 1.5)) / 3;

   let frGPA = ((frCC1 * 0.5) + (frCC2 * 0.5) + (frCC3 * 0.5)) / 1.5;
   let enGPA = ((enCC1 * 0.5) + (enCC2 * 0.5) + (enCC3 * 0.5)) / 1.5;


   let phyGPA = ((elecmagGPA * 5) + (electricityGPA*2))/7;
   let langGPA = (frGPA + enGPA)/2;
   let compGPA = ( softGPA*3 + signalGPA*3 + systemGPA*3 + ipGPA*3 + backGPA*3 )/15;



   let overallGPA = ((mathGPA * 5) + (elecmagGPA * 5) + (electricityGPA * 2) + (softGPA * 3) + (signalGPA * 3) + (systemGPA * 3) + (ipGPA * 3) + (backGPA * 3) + (enGPA * 1.5) + (frGPA * 1.5)) / totalCredits; // Overall GPA

   
      // Checking the condition for the providing the
   // grade to student based on percentage
   let percentage = (overallGPA / 20) * 100;  
   let gpa = overallGPA;
  
   if (gpa <= 30 && gpa >= 13.5) {
      grades = "A";
   } else if (gpa <= 13.4999999 && gpa >= 12) {
      grades = "B";
   } else if (gpa <= 11.99999 && gpa >= 10) {
      grades = "C";
   } else {
      grades = "F";
   }



   //MONEY
   if (gpa <= 30 && gpa >= 13.5) {
     pul = "171.50";
     elaci = '"Əlaçı"';
  } else if (gpa <= 13.4999999 && gpa >= 11.5) {
     pul = "142.10";
     elaci = '"Həvəsləndirici"';
  } else if (gpa <= 11.4999999 && gpa >= 10) {
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

  if (compGPA>=16){
     advicecomp = "Congratulations on excelling in your computer science subjects! Your dedication is evident. Keep up the outstanding work and continue to thrive in your studies.";
  } else if (compGPA <= 15.9999 && compGPA >= 13.5) {
     advicecomp = "Well done on maintaining a strong GPA in your computer science courses! Continue your commitment to excellence, and consider seeking additional challenges to further enhance your knowledge.";
  } else if (compGPA <= 13.4999999 && compGPA >= 11.5) {
     advicecomp = "Good job on your computer science GPA! Stay focused on your studies and explore opportunities to deepen your understanding of the subject matter. Your efforts are paying off.";
  } else if (compGPA <= 11.4999999 && compGPA >= 10) {
     advicecomp = "Congratulations on your progress in computer science! Continue to engage with the material and seek additional support if needed. Consistent effort will lead to further success.";
  } else {
     advicecomp = "Keep pushing yourself in your computer science studies. Consider revising your study strategies, seeking help when necessary, and aiming for improvement. Your dedication will pave the way for better results.";
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

   document.getElementById("phy").innerHTML = phyGPA.toFixed(2);
   document.getElementById("phyp").innerHTML = (phyGPA/0.2).toFixed(1);

   document.getElementById("elecmag").innerHTML = elecmagGPA.toFixed(2);
   document.getElementById("elecmagp").innerHTML = (elecmagGPA/0.2).toFixed(1);

   document.getElementById("electricity").innerHTML = electricityGPA.toFixed(2);
   document.getElementById("electricityp").innerHTML = (electricityGPA/0.2).toFixed(1);

   document.getElementById("soft").innerHTML = softGPA.toFixed(2);
   document.getElementById("softp").innerHTML = (softGPA/0.2).toFixed(1);

   document.getElementById("signal").innerHTML = signalGPA.toFixed(2);
   document.getElementById("signalp").innerHTML = (signalGPA/0.2).toFixed(1);

   document.getElementById("system").innerHTML = systemGPA.toFixed(2);
   document.getElementById("systemp").innerHTML = (systemGPA/0.2).toFixed(1);

   document.getElementById("ip").innerHTML = ipGPA.toFixed(2);
   document.getElementById("ipp").innerHTML = (ipGPA/0.2).toFixed(1);

   document.getElementById("back").innerHTML = backGPA.toFixed(2);
   document.getElementById("backp").innerHTML = (backGPA/0.2).toFixed(1);

   document.getElementById("fr").innerHTML = frGPA.toFixed(2);
   document.getElementById("frp").innerHTML = (frGPA/0.2).toFixed(1);

   document.getElementById("en").innerHTML = enGPA.toFixed(2);
   document.getElementById("enp").innerHTML = (enGPA/0.2).toFixed(1);



   
   document.getElementById("comp").innerHTML = compGPA.toFixed(2);
   document.getElementById("compp").innerHTML = (compGPA/0.2).toFixed(1);
   
   document.getElementById("lang").innerHTML = langGPA.toFixed(2);
   document.getElementById("langp").innerHTML = (langGPA/0.2).toFixed(1);
   
   document.getElementById("type").innerHTML = elaci;
   document.getElementById("amount").innerHTML = pul;


   document.getElementById("advicegpa").innerHTML = advicegpa;
   document.getElementById("advicecomp").innerHTML = advicecomp;
   document.getElementById("advicelang").innerHTML = advicelang;
   document.getElementById("advicephy").innerHTML = advicephy;
   


}

window.onload = function() {
   calculateGPA();
 };