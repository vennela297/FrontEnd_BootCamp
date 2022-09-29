function changeContent()
{
var rn = window.prompt("Input the Row number(0,1,2)", "0");
var cn = window.prompt("Input the Column number(0,1)","0");
var content = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
console.log(document.getElementById('myTable'))
x[parseInt(cn,10)].innerHTML=content;
}