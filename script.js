var settingsmenu = document.querySelector(".settings-menu"); 
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
     settingsmenu.classList.toggle("settings-menu-height");   
}
 darkBtn.onclick = function(){ 
   darkBtn.classList.toggle("dark-btn-on");
   document.body.classList.toggle("dark-theme");

if(localStorage.getItems("theme") == "light"){
   localStorage.setItems("theme", "dark");
}
else{
   localStorage.setItems("theme", "light");
}

 } 

 if (localStorage.getItem("theme") == "light"){
   darkBtn.classList.remove("darkBtn-btn-on");
   document.body.classList.remove("dark-theme");
 }

 else if (localStorage.getItem("theme") == "dark"){
   darkBtn.classList.add("darkBtn-btn-on");
   document.body.classList.add("dark-theme");
 }
else{
   localStorage.setItem("theme", "light");
}    