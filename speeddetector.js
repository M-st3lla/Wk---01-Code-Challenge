let carSpeed=parseInt(window.prompt("Enter car speed:"));
const speedLimit=70;
const kmPerDemeritPoint=5
const demeritPointPer5Km=1;
if(carSpeed<speedLimit){
    console.log("Ok")
}
else{
    let demeritPoints=Math.floor((carSpeed-speedLimit)/kmPerDemeritPoint);
    console.log (demeritPointsPer5Km*demeritPoints)
}
