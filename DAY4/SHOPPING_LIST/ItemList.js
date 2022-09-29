var list=document.querySelector(".list")


var count=0;
var btn=document.querySelector(".btn")

btn.addEventListener("click",()=>{
    var newElement=document.createElement("li")
    const node = document.createTextNode(document.querySelector('input').value);
    newElement.classList.add("li-1")
    newElement.appendChild(node)
    list.appendChild(newElement)
    var newButton=document.createElement("button");
    newButton.classList.add("btn-1")
   
    const node1=document.createTextNode("Delete");
    newButton.appendChild(node1);
    list.appendChild(newButton);
    count++;

})



deleteBtn.addEventListener("click",()=> {
    const remove=document.querySelector("li")
    remove.removeChild();
   
})








