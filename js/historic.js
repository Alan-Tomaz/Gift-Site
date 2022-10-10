let row1 = document.getElementById(`row-1`);
row1.addEventListener("click", () => {
    window.location.href = `#location-1`;
});
/*
for (let i = 1; i <= 2; i++) {
  const row = document.getElementById(`row-${i}`);
  row.addEventListener("click", () => {
    window.location.href = ``;
  });
}
*/
let activeRow;
let newActiveRow;
function changeActivate(num) {
if(activeRow == undefined) {
activeRow = document.getElementsByClassName("active-row");
}  
newActiveRow = document.getElementById(`row-${num}`);
console.log(activeRow);
console.log(newActiveRow);
newActiveRow.style.fontWeight = "bold";
newActiveRow.style.color = "#009879";
newActiveRow.style.backgroundColor = "#f3f3f3";
if(activeRow == document.getElementsByClassName("active-row")) {
activeRow[0].style.fontWeight = "normal";
activeRow[0].style.color = "black";
activeRow[0].style.backgroundColor = "white";
}
else {
activeRow.style.fontWeight = "normal";
activeRow.style.color = "black";
activeRow.style.backgroundColor = "white";
}
activeRow = newActiveRow;
console.log(activeRow);
return activeRow; 
}