let score = 95;
let attendedAllClasses = true;

if (score >= 60){
 console.log("Student has passed the exam.");
 if (attendedAllClasses) {
     console.log("Great job attending all classes!");
 } else {
     console.log("You need improvement.");
     if(attendedAllClasses){
         console.log("Try your best to attend all your classes.");
     }
 }
}