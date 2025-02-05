function calculateGPA() {
   // Get the input values
   
   let odepdeCC1 = parseFloat(document.getElementById("odepde-cc1").value);
   let odepdeCC2 = parseFloat(document.getElementById("odepde-cc2").value);
   let odepdeCC3 = parseFloat(document.getElementById("odepde-cc3").value);

   let fluidCC1 = parseFloat(document.getElementById("fluid-cc1").value);
   let fluidCC2 = parseFloat(document.getElementById("fluid-cc2").value);
   let fluidCC3 = parseFloat(document.getElementById("fluid-cc3").value);

   let ertrheoCC1 = parseFloat(document.getElementById("ertrheo-cc1").value);
   let geologyazCC1 = parseFloat(document.getElementById("geologyaz-cc1").value);
   let remoteCC1 = parseFloat(document.getElementById("remote-cc1").value);
   let remoteCC2 = parseFloat(document.getElementById("remote-cc2").value);

   let seismicCC1 = parseFloat(document.getElementById("seismic-cc1").value);
   let wellCC1 = parseFloat(document.getElementById("well-cc1").value);
   let reservoirCC1 = parseFloat(document.getElementById("reservoir-cc1").value);
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

      ertrheoCC1,geologyazCC1,
      remoteCC1, remoteCC2,

      seismicCC1,wellCC1,reservoirCC1,petrelCC1,

      frCC1, frCC2, frCC3,
      acadwrCC1, acadwrCC2, acadwrCC3
   ];
   

   const coefs = [
      0.75,0.75,1.5,
      1,1.5,0.5,

      2.4,2.4,
      0.6,0.6,

      3,3,3,3,

      0.75,1.125,1.125,
      1,1,1
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
   
   if (isNaN(geologyazCC1)) {
      geologyazCC1 = 0;
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
   if (isNaN(wellCC1)) {
      wellCC1 = 0;
   }
   if (isNaN(reservoirCC1)) {
      reservoirCC1 = 0;
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
  let advicegp = "";
  let advicepegeology = "";
  let advicelang = "";
  let adviceprofprep = "";

   // Calculate the GPA
   let totalCredits = 30; // Total credits of all courses

   let odepdeGPA = ((odepdeCC1 * 0.75) + (odepdeCC2 * 0.75) + (odepdeCC3 * 1.5)) / 3;
   
   let fluidGPA = ((fluidCC1 * 1) + (fluidCC2 * 1.5) + (fluidCC3 * 0.5)) / 3;
   
   let ertrheoGPA = ertrheoCC1;
   let geologyazGPA = geologyazCC1;
   let remoteGPA = ((remoteCC1 * 1.6) + (remoteCC2 * 1.6)) / 3.2;

   let seismicGPA = seismicCC1;
   let wellGPA = wellCC1;
   let reservoirGPA = reservoirCC1;
   let petrelGPA = petrelCC1;

   let frGPA = ((frCC1 * 0.5) + (frCC2 * 0.75) + (frCC3 * 0.75)) / 2;
   let acadwrGPA = ((acadwrCC1 * 0.5) + (acadwrCC2 * 0.5) + (acadwrCC3 * 0.5)) / 1.5;

   let mathGPA = odepdeGPA;
   let physicsGPA = fluidGPA;
   let gpGPA = (ertrheoGPA*2.4 + geologyazGPA*2.4 + remoteGPA*1.2) / 6;
   let pegelogyGPA = ((wellGPA*2) + (seismicGPA * 2) + (reservoirGPA*2) + (petrelGPA*2))/8;
   let langGPA = frGPA;
   let profprepGPA = acadwrGPA;



   let overallGPA = ((mathGPA * 3) + (physicsGPA * 3) + (gpGPA * 6) + (pegelogyGPA * 12) + (frGPA * 3) + (profprepGPA * 3) ) / totalCredits; // Overall GPA

   
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
 
// ADVICE GP
if (gpGPA >= 16) {
   advicegp = "Fantastic performance in GP2A subjects! Your understanding of earth rheology, remote sensing, and geology of Azerbaijan is exemplary. Continue pushing boundaries and engaging with advanced problems.";
 } else if (gpGPA <= 15.9999 && gpGPA >= 13.5) {
   advicegp = "Strong performance in GP2A! You’re mastering complex topics like earth rheology and remote sensing. Keep applying these concepts in interdisciplinary contexts.";
 } else if (gpGPA <= 13.4999 && gpGPA >= 11.5) {
   advicegp = "Good effort in GP2A subjects! Strengthen your theoretical understanding and focus on problem-solving to enhance your proficiency.";
 } else if (gpGPA <= 11.4999 && gpGPA >= 10) {
   advicegp = "You’re showing potential in GP2A. Dedicate more time to understanding core principles, especially in areas like geology of Azerbaijan, and practice consistently.";
 } else {
   advicegp = "GP2A topics can be demanding, but persistence is key. Review the basics, practice regularly, and seek support from resources or instructors to improve.";
 }


// ADVICE PETROLEUM GEOLOGY
if (pegelogyGPA >= 16) {
   advicepegeology = "Outstanding performance in wells, reservoirs, seismic, and Petrel software! Your understanding of reservoir modeling, seismic interpretation, and well analysis is exemplary. Keep leveraging your skills to achieve even more significant accomplishments.";
} else if (pegelogyGPA <= 15.9999 && pegelogyGPA >= 13.5) {
   advicepegeology = "Great work in wells, reservoirs, seismic, and Petrel software! Your grasp of seismic data interpretation and reservoir analysis is solid. Continue honing these skills for more advanced challenges.";
} else if (pegelogyGPA <= 13.4999 && pegelogyGPA >= 11.5) {
   advicepegeology = "Good effort in understanding wells, reservoirs, seismic, and Petrel software! Focus on improving your reservoir characterization and seismic interpretation to bridge theory and practice.";
} else if (pegelogyGPA <= 11.4999 && pegelogyGPA >= 10) {
   advicepegeology = "Progress is evident in wells, reservoirs, seismic, and Petrel software. Dedicate more time to mastering reservoir analysis and seismic workflows for better results.";
} else {
   advicepegeology = "Improvement needed in wells, reservoirs, seismic, and Petrel software. Stay committed, seek mentorship, and refine your skills in seismic interpretation and reservoir modeling.";
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

   document.getElementById("geologyaz").innerHTML = geologyazGPA.toFixed(2);
   document.getElementById("geologyazp").innerHTML = (geologyazGPA/0.2).toFixed(1);

   document.getElementById("remote").innerHTML = remoteGPA.toFixed(2);
   document.getElementById("remotep").innerHTML = (remoteGPA/0.2).toFixed(1);

   document.getElementById("seismic").innerHTML = seismicGPA.toFixed(2);
   document.getElementById("seismicp").innerHTML = (seismicGPA/0.2).toFixed(1);

   document.getElementById("well").innerHTML = wellGPA.toFixed(2);
   document.getElementById("wellp").innerHTML = (wellGPA/0.2).toFixed(1);

   document.getElementById("reservoir").innerHTML = reservoirGPA.toFixed(2);
   document.getElementById("reservoirp").innerHTML = (reservoirGPA/0.2).toFixed(1);

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
   
   
   document.getElementById("gp").innerHTML = gpGPA.toFixed(2);
   document.getElementById("gpp").innerHTML = (gpGPA/0.2).toFixed(1);
   
   document.getElementById("pegeology").innerHTML = pegelogyGPA.toFixed(2);
   document.getElementById("pegeologyp").innerHTML = (pegelogyGPA/0.2).toFixed(1);

   document.getElementById("lang").innerHTML = langGPA.toFixed(2);
   document.getElementById("langp").innerHTML = (langGPA/0.2).toFixed(1);
   
   document.getElementById("profprep").innerHTML = profprepGPA.toFixed(2);
   document.getElementById("profprepp").innerHTML = (profprepGPA/0.2).toFixed(1);
   
   document.getElementById("type").innerHTML = elaci;
   document.getElementById("amount").innerHTML = pul;


   document.getElementById("advicegpa").innerHTML = advicegpa;
   document.getElementById("advicemath").innerHTML = advicemath;
   document.getElementById("advicephy").innerHTML = advicephy;
   document.getElementById("advicegp").innerHTML = advicegp;
   document.getElementById("advicepegeology").innerHTML = advicepegeology;
   document.getElementById("advicelang").innerHTML = advicelang;
   document.getElementById("adviceprofprep").innerHTML = adviceprofprep;
   


}

window.onload = function() {
   calculateGPA();
 };