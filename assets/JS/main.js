let light=localStorage.getItem('light')
let them=document.querySelector("#theam")
let icon = document.getElementById("theam");
const enableLight=()=>{
    document.body.classList.add("light_mode")
    them.classList.remove("ri-sun-fill")
    them.classList.add(".mode","ri-moon-fill")
    localStorage.setItem('light','active')
}
const disableLight = () => {
    document.body.classList.remove("light_mode")
    them.classList.add("ri-sun-fill")
    them.classList.remove(".mode","ri-moon-fill")
    localStorage.setItem('light',null)
}

if(light==="active")enableLight();
icon.onclick=()=>{
    light=localStorage.getItem('light')
    light !== "active" ? enableLight() : disableLight()
}