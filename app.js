let images = [...document.getElementsByTagName("img")];
images.map(image => {
    image.addEventListener("click", (e) => { 
        if (document.getElementsByClassName("big").length > 0) {
            document.getElementsByClassName("big")[0].classList.remove("big")
        }
        e.target.classList.add("big");
    })
})