
function calculateGPA() {
    // Get the input values
    let mathCC1 = parseFloat(document.getElementById("math-cc1").value);
    let mathCC2 = parseFloat(document.getElementById("math-cc2").value);
    let mathCC3 = parseFloat(document.getElementById("math-cc3").value);

    let phyCC1 = parseFloat(document.getElementById("phy-cc1").value);
    let phyCC2 = parseFloat(document.getElementById("phy-cc2").value);
    let phyCC3 = parseFloat(document.getElementById("phy-cc3").value);
    
    let frCC1 = parseFloat(document.getElementById("fr-cc1").value);
    let frCC2 = parseFloat(document.getElementById("fr-cc2").value);
    let frCC3 = parseFloat(document.getElementById("fr-cc3").value);

    let enCC1 = parseFloat(document.getElementById("en-cc1").value);
    let enCC2 = parseFloat(document.getElementById("en-cc2").value);
    let enCC3 = parseFloat(document.getElementById("en-cc3").value);

    let bsCC1 = parseFloat(document.getElementById("bs-cc1").value);
    let bsCC2 = parseFloat(document.getElementById("bs-cc2").value);

    
    let dtstrcCC1 = parseFloat(document.getElementById("dtstrc-cc1").value);
    let dtstrcCC2 = parseFloat(document.getElementById("dtstrc-cc2").value);
    let dtstrcCC3 = parseFloat(document.getElementById("dtstrc-cc3").value);

    
    let cmparcCC1 = parseFloat(document.getElementById("cmparc-cc1").value);
    let cmparcCC2 = parseFloat(document.getElementById("cmparc-cc2").value);
    let cmparcCC3 = parseFloat(document.getElementById("cmparc-cc3").value);

        
    let databaseCC1 = parseFloat(document.getElementById("database-cc1").value);
    let databaseCC2 = parseFloat(document.getElementById("database-cc2").value);
    let databaseCC3 = parseFloat(document.getElementById("database-cc3").value);



















    let currentcoef =0;
    let currentgpa =0;
    let currenttotalgrades=0;
    const midterms = [mathCC1, mathCC2, mathCC3, phyCC1, phyCC2, phyCC3, frCC1, frCC2, frCC3, enCC1, enCC2, enCC3, bsCC1, bsCC2, 
      dtstrcCC1, dtstrcCC2, dtstrcCC3,
      cmparcCC1, cmparcCC2, cmparcCC3,
      databaseCC1, databaseCC2, databaseCC3
   ];
    const coefs = [2, 1, 3, 1, 2, 3, 0.5, 0.75, 0.75, 0.5, 0.75, 0.75, 1, 1, 
      1.8, 1.8, 2.4,
      0.5, 1, 1.5,
      0.3, 1.2, 1.5
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
   if(isNaN(phyCC1)){
      phyCC1=0;
   }
   if(isNaN(phyCC2)){
      phyCC2=0;
   }
   if(isNaN(phyCC3)){
      phyCC3=0;
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
   if(isNaN(bsCC1)){
      bsCC1=0;
   }
   if(isNaN(bsCC2)){
      bsCC2=0;
   }






   if(isNaN(dtstrcCC1)){
      dtstrcCC1=0;
   }
   if(isNaN(dtstrcCC2)){
      dtstrcCC2=0;
   }
   if(isNaN(dtstrcCC3)){
      dtstrcCC3=0;
   }


   if(isNaN(cmparcCC1)){
      cmparcCC1=0;
   }
   if(isNaN(cmparcCC2)){
      cmparcCC2=0;
   }
   if(isNaN(cmparcCC3)){
      cmparcCC3=0;
   }

   if(isNaN(databaseCC1)){
      databaseCC1=0;
   }
   if(isNaN(databaseCC2)){
      databaseCC2=0;
   }
   if(isNaN(databaseCC3)){
      databaseCC3=0;
   }
 
 
 
 
 






















   let grades = "";


    // Calculate the GPA
    let totalCredits = 30; // Total credits of all courses
    let mathGPA = ((mathCC1 * 2) + (mathCC2 * 1) + (mathCC3 * 3)) / 6;
    let phyGPA = ((phyCC1 * 1) + (phyCC2 * 2) + (phyCC3 * 3)) / 6;
    let frGPA = ((frCC1 * 0.5) + (frCC2 * 0.75) + (frCC3 * 0.75)) / 2;
    let enGPA = ((enCC1 * 0.5) + (enCC2 * 0.75) + (enCC3 * 0.75)) / 2;
    let bsGPA = ((bsCC1 * 1) + (bsCC2 * 1)) / 2;
    
    let dtstrcGPA = ((dtstrcCC1 * 1.8) + (dtstrcCC2 * 1.8) + (dtstrcCC3 * 2.4)) / 6;
    let cmparcGPA = ((cmparcCC1 * 0.5) + (cmparcCC2 * 1) + (cmparcCC3 * 1.5)) / 3;
    let databaseGPA = ((databaseCC1 * 0.3) + (databaseCC2 * 1.2) + (databaseCC3 * 1.5)) / 3;

   






    let overallGPA = ((mathGPA * 6) + (phyGPA * 6) + (frGPA * 2) + (enGPA * 2) + (bsGPA * 2) + (dtstrcGPA * 6) + (cmparcGPA * 3) + (databaseGPA * 3)) / totalCredits; // Overall GPA

    
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






    if (currentgpa*0.2 >= 10) {
        document.getElementById("resultcolor").style.backgroundColor = "rgb(53, 76, 53)";
        document.getElementById("resultcolor").style.color = "white";
      } else {
        document.getElementById("resultcolor").style.backgroundColor = "rgb(95, 22, 22)";
        document.getElementById("resultcolor").style.color = "black";
      }
      


    // Display the GPA
    document.getElementById("gpa").innerHTML = overallGPA.toFixed(4);
    document.getElementById("percentage").innerHTML = percentage.toFixed(2);

    document.getElementById("cgpa").innerHTML = (currentgpa*0.2).toFixed(4);
    document.getElementById("cpercentage").innerHTML = (currentgpa).toFixed(2);
    


    document.getElementById("math").innerHTML = mathGPA.toFixed(2);
    document.getElementById("mathp").innerHTML = (mathGPA/0.2).toFixed(1);

    document.getElementById("phy").innerHTML = phyGPA.toFixed(2);
    document.getElementById("phyp").innerHTML = (phyGPA/0.2).toFixed(1);

    document.getElementById("fr").innerHTML = frGPA.toFixed(2);
    document.getElementById("frp").innerHTML = (frGPA/0.2).toFixed(1);

    document.getElementById("en").innerHTML = enGPA.toFixed(2);
    document.getElementById("enp").innerHTML = (enGPA/0.2).toFixed(1);

    document.getElementById("bs").innerHTML = bsGPA.toFixed(2);
    document.getElementById("bsp").innerHTML = (bsGPA/0.2).toFixed(1);

    document.getElementById("dtstrc").innerHTML = dtstrcGPA.toFixed(2);
    document.getElementById("dtstrcp").innerHTML = (dtstrcGPA/0.2).toFixed(1);

    document.getElementById("cmparc").innerHTML = cmparcGPA.toFixed(2);
    document.getElementById("cmparcp").innerHTML = (cmparcGPA/0.2).toFixed(1);

    document.getElementById("database").innerHTML = databaseGPA.toFixed(2);
    document.getElementById("databasep").innerHTML = (databaseGPA/0.2).toFixed(1);

}

window.onload = function() {
    calculateGPA();
  };