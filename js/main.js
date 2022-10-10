/*let choice = window.prompt("Informe sua Key, esta Key poderá mudar completamente sua experiência no site!");
console.log(choice);
let secretAction = document.getElementsByClassName("button-secret");
console.log(secretAction)
function secretPage(choice, num) {
switch(choice) {
    case "teste":
         secretAction = secretAction[num].setAttribute("action", "./html/secret1.html")
        return secretAction;
        break;
    case "teste1":
         secretAction = secretAction[num].setAttribute("action", "./html/secret2.html")
        return secretAction;
        break;
    case "teste2":
         secretAction = secretAction[num].setAttribute("action", "./html/secret3.html")
        return secretAction;
        break;
    case "teste3":
         secretAction = secretAction[num].setAttribute("action", "./html/secret4.html")
        return secretAction;
        break;
    default:  
         secretAction = secretAction[num].setAttribute("action", "./html/secret.html")
        return secretAction;
        break;
    }
}*/
let j = 0
function congratulations() {
let pCreate = document.createElement('p');
let p1;
pCreate.innerHTML = "Congratulations! 😄"
pCreate.setAttribute("id","para-1")
if (j == 0) {
for(j; j < 1; j++ ) {
document.getElementById('sec-1con-1').appendChild(pCreate);
}
}
else {
p1 = document.getElementById("para-1");
p1.remove();
j = 0;
}
}
//let secretAction = document.getElementsByClassName("button-secret");
