import fs from 'fs';
// ye log.txt ke andar jo data hai usko line by line read karega 
// stream ke saath use hota hai 
import readline from 'readline'

let errorcount=0;
let infocount=0;
let warningcount=0;
//readline.createInterface => stream ko line by line tod dega 
// or yhan niche stream create ho rha hai 
const rl=readline.createInterface({
    //fs.createReadStream("log.txt")
    //File ko thoda-thoda read karta hai
    input:fs.createReadStream("log.txt"),

});
//Jab bhi nayi line milegi, ye function chalega
rl.on("line", (line) => {
    // error hua toh ye mtlb aa jayega smjha mai kya ho rha hai yhan toh 
  if (line.includes("ERROR")) {
    errorcount++;
  } else if (line.includes("INFO")) {
    infocount++;
  } else if (line.includes("WARNING")) {
    warningcount++;
  }
});
//yhan show ho jayenge ussa file mai kitne error warning or infos hain 

rl.on("close",()=>{
  console.log(" Log Summary Report");
  console.log("---------------------");
  console.log("Errors   :", errorcount);
  console.log("Infos    :", infocount);
  console.log("Warnings :", warningcount);

});