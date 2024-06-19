
function handleForm(){
    const formSection=document.getElementById("Forms");
    formSection.style.display="block";
}
let form1=document.getElementById("formss");
form1.addEventListener("submit",function(event){
    event.preventDefault()
});
function handleSubmit(){
    let form=document.getElementById("formss");
    let title=document.forms["myForm"]["title"].value;
    let desc=document.forms["myForm"]["desc"].value;
    const act=document.getElementById("ActiveProjects");
    const toadd=document.createElement("div");
    toadd.innerHTML=`Task Title is ${title} and Task Description is ${desc}  <button onclick="handleFinish(${title},${desc})">Finish</button>`;
    act.appendChild(toadd);
    formSection.style.display="none";
}
function handleFinish(title,desc){
        const finish=document.getElementById("FinishedProjects");
        finish.appendChild(div.innerHTML);
}
function handleDel(){
    const to=document.getElementById("tooo");

}

const Activetask=[
    
]