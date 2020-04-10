//mousing over bus image changes bus img to cyberpunk bus img
const funBusImg = document.querySelector(".intro img");
funBusImg.addEventListener('mouseover', event => {
    event.target.setAttribute("src", "img/cyberBus.jpg")
});

//single mouse click on map image changes map img to cyberpunk club img
const adventureImg = document.querySelector(".img-content img");
adventureImg.addEventListener('click', event => {
    event.target.setAttribute("src", 'img/cyber adventure.jpg');
});

//double mouse click on gondola image changes gondola img to cyberpunk porsche img
const funImg = document.querySelector(".inverse-content .img-content");
funImg.addEventListener('dblclick', event => {
    event.target.setAttribute("src", 'img/cyber fun.jpg');
});

//dragging boat/water image changes boat/water image to cyberpunk boat/water image
const destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener('drag', event => {
    event.target.setAttribute("src", 'img/cyberDestination.jpg');
});

//wheel over an area changes the body color to black and text color to neon pink
document.body.addEventListener('wheel', event => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "#ff0080";
});

//changes background to black when user scrolls through window
window.addEventListener('scroll', () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#ff0080";
});

//changes nav anchor elements text color to neon green upon a right mouse click; prevents default behavior of anchor elements activating links
const navElements = document.querySelectorAll(".main-navigation .nav-container .nav a");
navElements.forEach(element => {
    //change to neon green on right click
    element.addEventListener('contextmenu', event => {
        event.target.style.color = "#14FF00";
    });
    //prevents nav default behavior of redirecting to link upon click
    element.addEventListener('click', event => {
        event.preventDefault();
    });
});


//"Sign Me Up" buttons change to pink background/black text scheme on a mouseover and to black background/pink text scheme on a mouse click
const buttonElements = document.querySelectorAll(".home .content-pick .destination .btn");
buttonElements.forEach(element => {
    //pink background/black text scheme on a mouseover
    element.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "#ff0080";
        event.target.style.color = "black";
        event.stopPropagation();
    });

    //black background/pink text scheme on a mouse click
    element.addEventListener("click", event => {
        event.target.style.backgroundColor = "black";
        event.target.style.color = "#ff0080";
        event.stopPropagation();
    });
});

//"Fun Bus" heading changes to "Cyberpunk Bus" if mouse goes over it then goes off of it
const logoHeadingElement = document.querySelector(".logo-heading");
logoHeadingElement.addEventListener("mouseout", event => {
    event.target.textContent = "Cyberpunk Bus";
});


//resizing of window changes fun bus or cyber bus image to cyber ant man image
window.addEventListener("resize", () => {
    funBusImg.setAttribute("src", "img/cyber ant man.jpg");
});

//nav text changes to hot pink upon loading of page
window.addEventListener("load", () => {
    navElements.forEach(element => {
        element.style.color = "#ff0080";
    });
});


/*sets up two click listeners--
* one of these listens to the leftmost destination box and triggers green background color;
* the other listens to the content-pick box that contains the destination boxes and triggers yellow background.
* A stopPropagation() is included in the leftmost destination box's event listener to stop the click from propagating up to the container;
* therefore, that destinationBox turns green rather than yellow.
* */
const destinationBoxes = document.querySelectorAll(".content-pick .destination");

const destinationBoxesContainer = document.querySelector(".content-pick");

destinationBoxesContainer.addEventListener("click", event => {
    event.target.style.backgroundColor = "#650D89";
});

destinationBoxes[0].addEventListener("click", event => {
    event.target.style.backgroundColor = "#2DE2E6";
    event.stopPropagation();
});


