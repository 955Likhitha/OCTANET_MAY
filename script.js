let textBoxElement=document.getElementById("text_box");
let containerElement=document.getElementById("list_container");
function addTask()
{
    if(textBoxElement.value==='')
        {
            alert("You Need to Add Your Task List");
        }
    else
    {
        let liElement=document.createElement("li");//to create list
        liElement.innerHTML=textBoxElement.value;
        containerElement.appendChild(liElement);
        let button=document.createElement("button");
        button.innerHTML="Delete";
        liElement.appendChild(button);
    }
    textBoxElement.value=" ";
}
containerElement.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        
    }
}, false);
