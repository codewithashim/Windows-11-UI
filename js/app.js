

let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startManu")[0]

taskbar.addEventListener("click", () => {
    console.log("clicked");
    if (startmenu.style.bottom == "60px") {
        startmenu.style.bottom = "-865px"
    }
    else {
        startmenu.style.bottom = "60px"
    }
})
