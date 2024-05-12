var setting = document.querySelector(".setting");
var darkbtn = document.getElementById("dark-mode");


function settingmenuToggle(){
    setting.classList.toggle("setting-height");
}
darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}