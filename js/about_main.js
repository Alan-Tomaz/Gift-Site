function toReset() {
let formRadio = document.getElementById("radio-default");
formRadio.checked = true;
var temp = "Select car:";
var mySelect = document.getElementById('select-default');

for(var i, j = 0; i = mySelect.options[j]; j++) {
    if(i.value == temp) {
        mySelect.selectedIndex = j;
    }
}
mySelect.selectedIndex = 0;
let formName = document.getElementById("name");
formName.value = "";
let formTel = document.getElementById("tel");
formTel.value = "";
let formMail = document.getElementById("mail");
formMail.value = "";
let formPass = document.getElementById("pass");
formPass.value = "";
let formMsg = document.getElementById("msg");
formMsg.value = "";
let checkBox1 = document.getElementById("check-1");
checkBox1.checked = false;
let checkBox2 = document.getElementById("check-2");
checkBox2.checked = false;
let checkBox3 = document.getElementById("check-3");
checkBox3.checked = false;
let checkBox4 = document.getElementById("check-4");
checkBox4.checked = false;
let color = document.getElementById("color");
color.value = "#0192f9"
let date = document.getElementById("date");
date.value = "";
}
