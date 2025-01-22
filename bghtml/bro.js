let username;

document.getElementById("p2").onclick = function(){
   username=document.getElementById("p1").value;
   document.getElementById("p3").textContent = `Hello ${username}`;

}