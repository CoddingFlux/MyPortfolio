let light=localStorage.getItem('light')
let them=document.querySelector("#theam")
let icon = document.getElementById("theam");
const enableLight=()=>{
    document.body.classList.add("light_mode")
    let img1=document.querySelector('.aboutme')
    let img2=document.querySelector('.skills')
    img1.style.backgroundImage="url('')"
    img2.style.backgroundImage="url('')"

    them.classList.remove("ri-sun-fill")
    them.classList.add(".mode","ri-moon-fill")
    localStorage.setItem('light','active')
}
const disableLight = () => {

    document.body.classList.remove("light_mode")
    document.querySelector('.aboutme').style.backgroundImage="url('assets/image/img/About_me.png')"
    them.classList.add("ri-sun-fill")
    them.classList.remove(".mode","ri-moon-fill")
    localStorage.setItem('light',null)
}

if(light==="active")enableLight();
icon.onclick=()=>{
    light=localStorage.getItem('light')
    light !== "active" ? enableLight() : disableLight()
}

function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  function closePopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = 'none');
    document.getElementById('overlay').style.display = 'none';
  }