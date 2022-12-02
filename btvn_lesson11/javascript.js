// Write a program to create a traffic light.
// Note: When you click on red button, the red light is displayed
// When you click on  yellow button, the yellow light is displayed
// When you click on  green button, the green light is displayed

function stop(){
    blacklight();
    document.getElementById("stopLight").style.backgroundColor="red";
}
function slow(){
    blacklight();
    document.getElementById("slowLight").style.backgroundColor="yellow";
}
function go(){
    blacklight();
    document.getElementById("goLight").style.backgroundColor="green";
}
function blacklight(){
    document.getElementById("stopLight").style.backgroundColor="black";
    document.getElementById("slowLight").style.backgroundColor="black";
    document.getElementById("goLight").style.backgroundColor="black";

}
