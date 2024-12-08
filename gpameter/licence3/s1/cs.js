function calculateGPA() {
   // Get the input values
   let paralelCC1 = parseFloat(document.getElementById("paralel-cc1").value);
   let paralelCC2 = parseFloat(document.getElementById("paralel-cc2").value);

   let cloudCC1 = parseFloat(document.getElementById("cloud-cc1").value);
   let cloudCC2 = parseFloat(document.getElementById("cloud-cc2").value);
   
   let softwareCC1 = parseFloat(document.getElementById("software-cc1").value);
   let softwareCC2 = parseFloat(document.getElementById("software-cc2").value);



   let OSACC1 = parseFloat(document.getElementById("OSA-cc1").value);
   let OSACC2 = parseFloat(document.getElementById("OSA-cc2").value);
   let OSACC3 = parseFloat(document.getElementById("OSA-cc3").value);

   let mobileCC1 = parseFloat(document.getElementById("mobile-cc1").value);
   let mobileCC2 = parseFloat(document.getElementById("mobile-cc2").value);
   
   let probCC1 = parseFloat(document.getElementById("prob-cc1").value);
   let probCC2 = parseFloat(document.getElementById("prob-cc2").value);

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
      paralelCC1, paralelCC2,
      cloudCC1, cloudCC2,
      softwareCC1, softwareCC2,

      OSACC1, OSACC2, OSACC3,
      mobileCC1, mobileCC2,
      probCC1,probCC2,

      frCC1, frCC2, frCC3,

      acadwrCC1, acadwrCC2, acadwrCC3
   ];

   const coefs = [
      10/9*3/2, 10/9*3/2,
      10/9*3/2, 10/9*3/2,
      10/9*3/2, 10/9*3/2,

      2*5/7*20/30*3/2*3/2, 2*5/7*20/30*3/2*3/2, (10/3-(4*5/7*20/30)*3/2)*3/2,
      1.6*2/3*3/2, 2.4*2/3*3/2, 
      4/3*3/2,2*3/2,

      0.5*3/2,0.75*3/2,0.75*3/2,

      2/3*3/2,2/3*3/2,2/3*3/2
   ];









    if(isNaN(paralelCC1)){
      paralelCC1=0;
   }
   if(isNaN(paralelCC2)){
      paralelCC2=0;
   }
   
   if(isNaN(cloudCC1)){
      cloudCC1=0;
   }
   if(isNaN(cloudCC2)){
      cloudCC2=0;
   }
   
   if(isNaN(softwareCC1)){
      softwareCC1=0;
   }
   if(isNaN(softwareCC2)){
      softwareCC2=0;
   }
   
   if(isNaN(OSACC1)){
      OSACC1=0;
   }
   if(isNaN(OSACC2)){
      OSACC2=0;
   }
   if(isNaN(OSACC3)){
      OSACC3=0;
   }
   
   if(isNaN(mobileCC1)){
      mobileCC1=0;
   }
   if(isNaN(mobileCC2)){
      mobileCC2=0;
   }
   
   if(isNaN(probCC1)){
      probCC1=0;
   }
   if(isNaN(probCC2)){
      probCC2=0;
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
   
   if(isNaN(acadwrCC1)){
      acadwrCC1=0;
   }
   if(isNaN(acadwrCC2)){
      acadwrCC2=0;
   }
   if(isNaN(acadwrCC3)){
      acadwrCC3=0;
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
  let advicecs5a = "";
  let advicecs5b = "";
  let advicelang = "";
  let adviceprofprep = "";

   // Calculate the GPA
   let totalCredits = 30; // Total credits of all courses

   let paralelGPA = paralelCC1/2+paralelCC2/2;
   let cloudGPA = cloudCC1/2+cloudCC2/2;
   let softwareGPA = softwareCC1/2+softwareCC2/2;

   let OSAGPA = ((OSACC1 * 2*5/7) + (OSACC2 * 2*5/7) + (OSACC3 * 3*5/7)) / 5;
   let mobileGPA = ((mobileCC1 * 1.6) + (mobileCC2 * 2.4)) / 4;
   let probGPA = ((probCC1 * 2) + (probCC2 * 3)) / 5;
   
   let frGPA = ((frCC1 * 0.5) + (frCC2 * 0.75) + (frCC3 * 0.75)) / 2;
   let acadwrGPA = ((acadwrCC1 * 0.5) + (acadwrCC2 * 0.5) + (acadwrCC3 * 0.5)) / 1.5;

   
   let cs5aGPA = paralelGPA/3+cloudGPA/3+softwareGPA/3;
   let cs5bGPA = ((OSAGPA * 5) + (mobileGPA*4) + (probGPA*5))/14;
   let langGPA = frGPA;
   let profprepGPA = acadwrGPA;



   let overallGPA = ((cs5aGPA * 10) + (cs5bGPA * 14) + (frGPA * 3) + (profprepGPA * 3) ) / totalCredits; // Overall GPA

   
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

  if (cs5aGPA >= 16) {
   advicecs5a = "Exceptional performance! Your ability to excel in quality assurance, cloud technologies, and parallel computing highlights your technical prowess. Keep pushing boundaries and refining your skills for even greater success.";
} else if (cs5aGPA <= 15.9999 && cs5aGPA >= 13.5) {
   advicecs5a = "Great job maintaining a strong GPA! Your understanding of software reliability, scalable systems, and concurrent programming is commendable. Dive deeper into practical applications to strengthen your expertise.";
} else if (cs5aGPA <= 13.4999999 && cs5aGPA >= 11.5) {
   advicecs5a = "You’re doing well! Focus on reinforcing your knowledge of software testing, cloud platforms, and parallel algorithms. Practical projects can be an excellent way to enhance your learning and confidence.";
} else if (cs5aGPA <= 11.4999999 && cs5aGPA >= 10) {
   advicecs5a = "Keep going! Work on building a strong foundation in testing methodologies, cloud architecture, and parallel processing. Leverage tutorials and hands-on practice to make these concepts clearer.";
} else {
   advicecs5a = "This is a chance to regroup and refine your approach. Break down complex topics like certification standards, distributed computing, and concurrency into smaller steps, and seek guidance to overcome challenges.";
}


  if (cs5bGPA >= 16) {
   advicecs5b = "Outstanding work! Your mastery of complex topics like systems design, application development, and analytical methods showcases your dedication. Keep embracing challenges and refining your expertise.";
} else if (cs5bGPA <= 15.9999 && cs5bGPA >= 13.5) {
   advicecs5b = "Great job maintaining a strong performance! Your skills in technical problem-solving and data-driven thinking are solid. Stay curious and explore deeper applications of what you've learned.";
} else if (cs5bGPA <= 13.4999999 && cs5bGPA >= 11.5) {
   advicecs5b = "You’re making steady progress! Strengthen your understanding of foundational principles in system architectures, app design, and data analysis to build confidence in applying them.";
} else if (cs5bGPA <= 11.4999999 && cs5bGPA >= 10) {
   advicecs5b = "Keep going! Focus on grasping the essentials of system functionality, app logic, and statistical thinking. Seek out resources or mentors to help clarify tricky concepts and build momentum.";
} else {
   advicecs5b = "Take this as an opportunity to reset your approach. Concentrate on breaking down topics like systems and data into manageable parts, and don’t hesitate to seek support or experiment with new study methods.";
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
  
   document.getElementById("paralel").innerHTML = paralelGPA.toFixed(2);
   document.getElementById("paralelp").innerHTML = (paralelGPA/0.2).toFixed(1);

   document.getElementById("cloud").innerHTML = cloudGPA.toFixed(2);
   document.getElementById("cloudp").innerHTML = (cloudGPA/0.2).toFixed(1);

   document.getElementById("mobile").innerHTML = mobileGPA.toFixed(2);
   document.getElementById("mobilep").innerHTML = (mobileGPA/0.2).toFixed(1);

   document.getElementById("software").innerHTML = softwareGPA.toFixed(2);
   document.getElementById("softwarep").innerHTML = (softwareGPA/0.2).toFixed(1);

   document.getElementById("OSA").innerHTML = OSAGPA.toFixed(2);
   document.getElementById("OSAp").innerHTML = (OSAGPA/0.2).toFixed(1);

   document.getElementById("prob").innerHTML = probGPA.toFixed(2);
   document.getElementById("probp").innerHTML = (probGPA/0.2).toFixed(1);

   document.getElementById("fr").innerHTML = frGPA.toFixed(2);
   document.getElementById("frp").innerHTML = (frGPA/0.2).toFixed(1);

   document.getElementById("acadwr").innerHTML = acadwrGPA.toFixed(2);
   document.getElementById("acadwrp").innerHTML = (acadwrGPA/0.2).toFixed(1);



   
   document.getElementById("cs5a").innerHTML = cs5aGPA.toFixed(2);
   document.getElementById("cs5ap").innerHTML = (cs5aGPA/0.2).toFixed(1);
   document.getElementById("cs5b").innerHTML = cs5bGPA.toFixed(2);
   document.getElementById("cs5bp").innerHTML = (cs5bGPA/0.2).toFixed(1);
   
   document.getElementById("lang").innerHTML = langGPA.toFixed(2);
   document.getElementById("langp").innerHTML = (langGPA/0.2).toFixed(1);
   
   document.getElementById("profprep").innerHTML = profprepGPA.toFixed(2);
   document.getElementById("profprepp").innerHTML = (profprepGPA/0.2).toFixed(1);
   
   document.getElementById("type").innerHTML = elaci;
   document.getElementById("amount").innerHTML = pul;


   document.getElementById("advicegpa").innerHTML = advicegpa;
   document.getElementById("advicecs5a").innerHTML = advicecs5a;
   document.getElementById("advicecs5b").innerHTML = advicecs5b;
   document.getElementById("advicelang").innerHTML = advicelang;
   document.getElementById("adviceprofprep").innerHTML = adviceprofprep;
   


}

window.onload = function() {
   calculateGPA();
 };