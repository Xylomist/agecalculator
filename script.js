let btn=document.getElementById("btn");
let birth=document.getElementById("myDate");
let para=document.querySelector(".para");


btn.addEventListener("click",calculateage);


function calculateage(){
    let birthday=birth.value;
if(birthday===" "){
    alert("please enter a valid birthdate");
}else{
    let num=getage(birthday);
    para.innerText = `Your age is ${num} old`;

}
function getage(birthday){
    let currdate=new Date();
    let birthdate=new Date(birthday);
   let age=currdate.getFullYear()-birthdate.getFullYear();
   let month=currdate.getMonth()-birthdate.getMonth();
   if(month==0||month<0&&birthdate.getMonth()>currdate.getMonth()){
    age--;
   }

   return age;
}

}