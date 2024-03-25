let basicSalary=parseInt(window.prompt("Enter Basic Salary: "));
if (basicSalary<24001){
    let PAYE=basicSalary*0.1;
    console.log("PAYE: "+PAYE);
}
else if(basicSalary<32334){
    let PAYE=basicSalary*0.25;
    console.log("PAYE: "+PAYE);
}
else if(basicSalary<500001){
    let PAYE=basicSalary*0.3;
    console.log("PAYE: "+PAYE);
}
else if(basicSalary<800001){
    let PAYE=basicSalary*0.325;
    console.log("PAYE: "+PAYE);
}
else{
    let PAYE=basicSalary*0.35;
    console.log("PAYE: "+PAYE);
}
let benefits=parseInt(window.prompt("Enter benefits:"));
const grossSalary=basicSalary + benefits
let NHIFdeductions

if (grossSalary<6000){
    console.log(NHIFdeductions==150);
}
else if(grossSalary<8000){
    console.log(NHIFdeductions==300);
}
else if(grossSalary<12000){
    console.log(NHIFdeductions==400);
}
else if(grossSalary<15000){
    console.log(NHIFdeductions==500);
}
else if(grossSalary<30000){
    console.log(NHIFdeductions==900);
}
else if(grossSalary<60000){
    console.log(NHIFdeductions==1300);
}
else if(grossSalary<100000){
    console.log(NHIFdeductions==1700);
}

console.log(grossSalary);
console.log(PAYE);
console.log(NHIFdeductions);
const netSalary = (grossSalary-PAYE-NHIFdeductions)
console.log(netSalary);