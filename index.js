//opg 1

/*let userinput = prompt("Please enter a value:");
let value = parseFloat(userinput); 

if (value > 0){
    alert("the number is posetiv")
}else if (value <0){
    alert("the value is negativ")
}else{
    alert("the number is zero")
}*/

//opg 2

/*let userinput = prompt("Please enter a value:");
let value = parseFloat(userinput); 

if(value % 2 == 0) {
    alert("the number is even")
}

else{
    alert("the number is odd")
}*/

//opg 3
/*
let userinput = prompt("Please enter a value:");
let value = parseFloat(userinput); 

if(value > 50) {
    alert("du har bestått")
}
else {
    alert("du har ikke bestått")
}
*/

//opg 4
/*
let userinput = prompt("skriv in dine poeng");
let value = parseFloat(userinput); 

if(value > 50 && value > 100 || value <0) {
    alert("dette er ikke en mulig verdi")
}
else if( value > 50) {
    alert("du har bestårr")
}
else {
    alert("du har ikke bestått")
}
*/

//opg 5

/*
let userinput = prompt("hvilket dagsnummer er det(1-7)");
let value = parseFloat(userinput); 

if (value == 1){
    alert("Mandag")
}
else if(value == 2){
    alert("Tirsdag")
}
else if(value ==3){
    alert("Onsdag")
}
else if(value == 4){
    alert("Torsdag")
}
else if(value == 5){
    alert ("Fredag")
}
else if(value == 6){
    alert("Lørdag")
}
else if(value == 7){
    alert("Søndag")
}
else{
    alert("detter er ikke en dag i uken, skriv en verdi 1-7")
}
*/

//opg 6

/*switch (new Date().getDay()) {
    case 0:
        day = "søndag";
        text = "det er søndag"
        console.log(text);
        break;
    case 1:
        day = "mandag";
        text = "det er mandag"
        console.log(text);
        break
    case 2:
        day = "tirsdag";
        text = "det er tirsdag"
        console.log(text);
        break;
    case 3:
        day = "onsdag";
        text = "det er onsdag"
        console.log(text);
        break;
    case 4:
        day = "torsdag";
        text = "det er torsdag"
        console.log(text);
        break;
    case 5:
        day = "fredag";
        text = "det er fredag"
        console.log(text);
        break;
    case 6: 
        day = "lørdag";
        text = "det er lørdag"
        console.log(text);
        break;
}
*/

//opg 7
/*
var key = prompt("Hva vil du gjøre?")
let a = 8, b = 4;
switch (key) {
    case "+":
        alert(a+b)
        break;
    case "-":
        alert(a-b)
        break;
    case "*":
        alert(a*b)
        break;
    case "/":
        alert(a/b)
        break;
    default:
        alert("Skrive bare + - * eller /")
        break;
}
*/

//opg 8
/*
let userinput1 = prompt("Please enter a value:");
let a = parseFloat(userinput1); 
let userinput2 = prompt("Please enter a value:");
let b = parseFloat(userinput2); 

if (a>b) {
    alert(a)
}
else if(b>a) {
    alert(b)
}
else{
    alert("de er like")
}
*/

//opg 9
/*
var karakter1 = parseInt(prompt("Skriv inn en karakter"));
var karakter2 = parseInt(prompt("Skriv inn en karakter"));

var gjennomsnitt = (karakter1+karakter2) /2

if (gjennomsnitt > 50) {
    alert(`gjennomsnitet er ${gjennomsnitt}, du har beståt`)
}
else  {
    alert(`gjennomsnitet er ${gjennomsnitt}, du har ikke beståt`)
}
*/

//opg 10
/*
var userinput = parseInt(prompt("Skriv inn et tall"));
console.log("rest når delt på 3");
let rest = userinput % 3;
console.log(rest);
if (rest >0){
    console.log("kan ikke delse på 3")
}
*/

//opg 11

/*
var userinput = parseInt(prompt("Skriv inn et tall"));
console.log("rest når delt på 5");
let rest = userinput % 5;
console.log(rest);
if (rest >0){
    console.log("kan ikke delse på 5")
}
    */

//opg 12
/*
var userinput = parseInt(prompt("Skriv inn et tall"));

function erdelelig(userinput) {
    return userinput % 3 === 0 && userinput % 5 === 0;
}

if (erdelelig(userinput)) {
    alert(userinput + ' er delelig både med 3 og 5');
}
else {
    alert(userinput + ' er ikke delelig på 3 og 5');
}
*/

var userinput = parseInt(prompt("Skriv inn et tall"));

function erdelelig(userinput) {
    return userinput % 3 || 0 && userinput % 5 === 0;
}

if (erdelelig(userinput)) {
    alert(userinput + ' er delelig med 5');
}
else if {
    alert(userinput + ' er delelig med 4');
}
else{
    alert(userinput + ' er ikke delelig på 3 og 5');
}