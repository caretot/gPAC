function calculateGPA() {
   // Get the input values
   
   let odepdeCC1 = parseFloat(document.getElementById("odepde-cc1").value);
   let odepdeCC2 = parseFloat(document.getElementById("odepde-cc2").value);
   let odepdeCC3 = parseFloat(document.getElementById("odepde-cc3").value);

   let fluidCC1 = parseFloat(document.getElementById("fluid-cc1").value);
   let fluidCC2 = parseFloat(document.getElementById("fluid-cc2").value);
   let fluidCC3 = parseFloat(document.getElementById("fluid-cc3").value);

   let ertrheoCC1 = parseFloat(document.getElementById("ertrheo-cc1").value);
   let inverseCC1 = parseFloat(document.getElementById("inverse-cc1").value);
   let inverseCC2 = parseFloat(document.getElementById("inverse-cc2").value);
   let remoteCC1 = parseFloat(document.getElementById("remote-cc1").value);
   let remoteCC2 = parseFloat(document.getElementById("remote-cc2").value);

   let seismicCC1 = parseFloat(document.getElementById("seismic-cc1").value);
   let nearCC1 = parseFloat(document.getElementById("near-cc1").value);
   let fieldCC1 = parseFloat(document.getElementById("field-cc1").value);

   let geologyazCC1 = parseFloat(document.getElementById("geologyaz-cc1").value);
   let geologyazCC2 = parseFloat(document.getElementById("geologyaz-cc2").value);
   let petrelCC1 = parseFloat(document.getElementById("petrel-cc1").value);

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
      fluidCC1, fluidCC2, fluidCC3,

      ertrheoCC1, 
      inverseCC1, inverseCC2, 
      remoteCC1, remoteCC2,

      seismicCC1, nearCC1, fieldCC1,

      geologyazCC1, geologyazCC2, petrelCC1,

      frCC1, frCC2, frCC3,
      acadwrCC1, acadwrCC2, acadwrCC3
   ];
   

   const coefs = [
      0.75,0.75,1.5,
      1,1.5,0.5,

      2.4,
      0.8,1.6,
      0.6,0.6,

      2,2,4,

      0.5,1.5,2,

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
   
   if (isNaN(fluidCC1)) {
      fluidCC1 = 0;
   }
   if (isNaN(fluidCC2)) {
      fluidCC2 = 0;
   }
   if (isNaN(fluidCC3)) {
      fluidCC3 = 0;
   }
   
   if (isNaN(ertrheoCC1)) {
      ertrheoCC1 = 0;
   }
   
   if (isNaN(inverseCC1)) {
      inverseCC1 = 0;
   }
   if (isNaN(inverseCC2)) {
      inverseCC2 = 0;
   }
   
   if (isNaN(remoteCC1)) {
      remoteCC1 = 0;
   }
   if (isNaN(remoteCC2)) {
      remoteCC2 = 0;
   }
   
   if (isNaN(seismicCC1)) {
      seismicCC1 = 0;
   }
   if (isNaN(nearCC1)) {
      nearCC1 = 0;
   }
   if (isNaN(fieldCC1)) {
      fieldCC1 = 0;
   }
   
   if (isNaN(geologyazCC1)) {
      geologyazCC1 = 0;
   }
   if (isNaN(geologyazCC2)) {
      geologyazCC2 = 0;
   }
   if (isNaN(petrelCC1)) {
      petrelCC1 = 0;
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
  let advicephy = "";
  let advicegp2a = "";
  let advicegp2b = "";
  let advicegeomain = "";
  let advicelang = "";
  let adviceprofprep = "";

   // Calculate the GPA
   let totalCredits = 30; // Total credits of all courses

   let odepdeGPA = ((odepdeCC1 * 0.75) + (odepdeCC2 * 0.75) + (odepdeCC3 * 1.5)) / 3;
   let fluidGPA = ((fluidCC1 * 1) + (fluidCC2 * 1.5) + (fluidCC3 * 0.5)) / 3;
   let ertrheoGPA = ertrheoCC1;
   let inverseGPA = ((inverseCC1 * 0.8) + (inverseCC2 * 1.6)) / 2.4;
   let remoteGPA = ((remoteCC1 * 1.6) + (remoteCC2 * 1.6)) / 3.2;

   let seismicGPA = seismicCC1;
   let nearGPA = nearCC1;
   let fieldGPA = fieldCC1;
   
   let geologyazGPA = ((geologyazCC1 * 0.5) + (geologyazCC2 * 1.5)) / 2;
   let petrelGPA = petrelCC1;

   let frGPA = ((frCC1 * 0.5) + (frCC2 * 0.75) + (frCC3 * 0.75)) / 2;
   let acadwrGPA = ((acadwrCC1 * 0.5) + (acadwrCC2 * 0.5) + (acadwrCC3 * 0.5)) / 1.5;

   let mathGPA = odepdeGPA;
   let physicsGPA = fluidGPA;
   let gp2aGPA = (ertrheoGPA*2.4 + inverseGPA*2.4 + remoteGPA*1.2) / 6;
   let gp2bGPA = ((seismicGPA * 2) + (nearGPA*2) + (fieldGPA*4))/8;
   let geologyGPA = geologyazGPA/2 + petrelGPA/2;
   let langGPA = frGPA;
   let profprepGPA = acadwrGPA;



   let overallGPA = ((mathGPA * 3) + (physicsGPA * 3) + (gp2aGPA * 6) + (gp2bGPA * 8) + (geologyGPA * 4) + (frGPA * 3) + (profprepGPA * 3) ) / totalCredits; // Overall GPA

   
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
 
// ADVICE PHY
if (physicsGPA >= 16) {
   advicephy = "Outstanding work in physics for fluid mechanics! Your grasp of fluid flow principles and their geological applications is impressive. Keep exploring complex scenarios to expand your expertise.";
 } else if (physicsGPA <= 15.9999 && physicsGPA >= 13.5) {
   advicephy = "Great progress in physics for fluid mechanics! You’re on the right path. Continue connecting theoretical knowledge with practical geological problems.";
 } else if (physicsGPA <= 13.4999 && physicsGPA >= 11.5) {
   advicephy = "Good effort in physics! Strengthen your understanding of fluid mechanics principles and focus on applying them effectively to soil-related geological contexts.";
 } else if (physicsGPA <= 11.4999 && physicsGPA >= 10) {
   advicephy = "You’ve shown potential in physics for fluid mechanics. Invest more time in understanding core concepts and practice applying them to geological challenges.";
 } else {
   advicephy = "Fluid mechanics can be challenging, but with consistent effort and support, you can improve. Focus on the fundamentals and seek clarification for complex topics.";
 }
 
// ADVICE GP2A
if (gp2aGPA >= 16) {
   advicegp2a = "Fantastic performance in GP2A subjects! Your understanding of earth rheology, remote sensing, and inverse methods is exemplary. Continue pushing boundaries and engaging with advanced problems.";
 } else if (gp2aGPA <= 15.9999 && gp2aGPA >= 13.5) {
   advicegp2a = "Strong performance in GP2A! You’re mastering complex topics like earth rheology and remote sensing. Keep applying these concepts in interdisciplinary contexts.";
 } else if (gp2aGPA <= 13.4999 && gp2aGPA >= 11.5) {
   advicegp2a = "Good effort in GP2A subjects! Strengthen your theoretical understanding and focus on problem-solving to enhance your proficiency.";
 } else if (gp2aGPA <= 11.4999 && gp2aGPA >= 10) {
   advicegp2a = "You’re showing potential in GP2A. Dedicate more time to understanding core principles, especially in areas like inverse methods, and practice consistently.";
 } else {
   advicegp2a = "GP2A topics can be demanding, but persistence is key. Review the basics, practice regularly, and seek support from resources or instructors to improve.";
 }
// ADVICE GP2B
if (gp2bGPA >= 16) {
   advicegp2b = "Excellent work in GP2B subjects! Your skills in seismic acquisition, processing, and near-surface geophysics are top-notch. Fieldwork expertise is especially commendable. Keep striving for even greater achievements.";
 } else if (gp2bGPA <= 15.9999 && gp2bGPA >= 13.5) {
   advicegp2b = "Great job in GP2B! Your understanding of seismic methods and fieldwork is strong. Continue building on this foundation to tackle more advanced challenges.";
 } else if (gp2bGPA <= 13.4999 && gp2bGPA >= 11.5) {
   advicegp2b = "Good effort in GP2B subjects! Focus on connecting theoretical knowledge with practical applications, especially during fieldwork sessions.";
 } else if (gp2bGPA <= 11.4999 && gp2bGPA >= 10) {
   advicegp2b = "You’re making progress in GP2B. Allocate more time to practice and focus on improving your understanding of seismic methods and their applications.";
 } else {
   advicegp2b = "GP2B subjects require both theoretical and practical understanding. Stay motivated, seek guidance during fieldwork, and refine your seismic processing techniques.";
 }
  
 // ADVICE GEOLOGY
if (geologyGPA >= 16) {
   advicegeomain = "Exceptional performance in geology! Your proficiency in Petrel software and your understanding of Azerbaijan’s geology are outstanding. Continue applying these skills to complex geological modeling tasks and regional analysis.";
 } else if (geologyGPA <= 15.9999 && geologyGPA >= 13.5) {
   advicegeomain = "Strong performance in geology! You’re demonstrating solid knowledge of Petrel software and regional geology. Keep refining your technical and analytical abilities for continued growth.";
 } else if (geologyGPA <= 13.4999 && geologyGPA >= 11.5) {
   advicegeomain = "Good effort in geology! Focus on mastering the functionalities of Petrel software and deepening your understanding of Azerbaijan’s geological context.";
 } else if (geologyGPA <= 11.4999 && geologyGPA >= 10) {
   advicegeomain = "You’re making progress in geology! Allocate more time to practice Petrel software and review key concepts about Azerbaijan’s geology for improvement.";
 } else {
   advicegeomain = "Geology topics can be complex but rewarding. Focus on building a strong foundation in Petrel software and regional geological analysis. Seek guidance if needed to enhance your skills.";
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

   document.getElementById("fluid").innerHTML = fluidGPA.toFixed(2);
   document.getElementById("fluidp").innerHTML = (fluidGPA/0.2).toFixed(1);

   document.getElementById("ertrheo").innerHTML = ertrheoGPA.toFixed(2);
   document.getElementById("ertrheop").innerHTML = (ertrheoGPA/0.2).toFixed(1);

   document.getElementById("inverse").innerHTML = inverseGPA.toFixed(2);
   document.getElementById("inversep").innerHTML = (inverseGPA/0.2).toFixed(1);

   document.getElementById("remote").innerHTML = remoteGPA.toFixed(2);
   document.getElementById("remotep").innerHTML = (remoteGPA/0.2).toFixed(1);

   document.getElementById("seismic").innerHTML = seismicGPA.toFixed(2);
   document.getElementById("seismicp").innerHTML = (seismicGPA/0.2).toFixed(1);



   
   document.getElementById("near").innerHTML = nearGPA.toFixed(2);
   document.getElementById("nearp").innerHTML = (nearGPA/0.2).toFixed(1);

   document.getElementById("field").innerHTML = fieldGPA.toFixed(2);
   document.getElementById("fieldp").innerHTML = (fieldGPA/0.2).toFixed(1);

   document.getElementById("geologyaz").innerHTML = geologyazGPA.toFixed(2);
   document.getElementById("geologyazp").innerHTML = (geologyazGPA/0.2).toFixed(1);

   document.getElementById("petrel").innerHTML = petrelGPA.toFixed(2);
   document.getElementById("petrelp").innerHTML = (petrelGPA/0.2).toFixed(1);


   document.getElementById("fr").innerHTML = frGPA.toFixed(2);
   document.getElementById("frp").innerHTML = (frGPA/0.2).toFixed(1);

   document.getElementById("acadwr").innerHTML = acadwrGPA.toFixed(2);
   document.getElementById("acadwrp").innerHTML = (acadwrGPA/0.2).toFixed(1);



   
   document.getElementById("math").innerHTML = mathGPA.toFixed(2);
   document.getElementById("mathp").innerHTML = (mathGPA/0.2).toFixed(1);
   
   document.getElementById("physics").innerHTML = physicsGPA.toFixed(2);
   document.getElementById("physicsp").innerHTML = (physicsGPA/0.2).toFixed(1);
   
   document.getElementById("gp2a").innerHTML = gp2aGPA.toFixed(2);
   document.getElementById("gp2ap").innerHTML = (gp2aGPA/0.2).toFixed(1);
   
   document.getElementById("gp2b").innerHTML = gp2bGPA.toFixed(2);
   document.getElementById("gp2bp").innerHTML = (gp2bGPA/0.2).toFixed(1);
   
   document.getElementById("geomain").innerHTML = geologyGPA.toFixed(2);
   document.getElementById("geomainp").innerHTML = (geologyGPA/0.2).toFixed(1);

   document.getElementById("lang").innerHTML = langGPA.toFixed(2);
   document.getElementById("langp").innerHTML = (langGPA/0.2).toFixed(1);
   
   document.getElementById("profprep").innerHTML = profprepGPA.toFixed(2);
   document.getElementById("profprepp").innerHTML = (profprepGPA/0.2).toFixed(1);
   
   document.getElementById("type").innerHTML = elaci;
   document.getElementById("amount").innerHTML = pul;


   document.getElementById("advicegpa").innerHTML = advicegpa;
   document.getElementById("advicemath").innerHTML = advicemath;
   document.getElementById("advicephy").innerHTML = advicephy;
   document.getElementById("advicegp2a").innerHTML = advicegp2a;
   document.getElementById("advicegp2b").innerHTML = advicegp2b;
   document.getElementById("advicegeomain").innerHTML = advicegeomain;
   document.getElementById("advicelang").innerHTML = advicelang;
   document.getElementById("adviceprofprep").innerHTML = adviceprofprep;
   


}

window.onload = function() {
   calculateGPA();
 };