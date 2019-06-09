// Your code goes here
/*## Task 2: Create Unique Event Listeners

* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events).
using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
	* [X] `mouseover`
	* [ ] `keydown`
	* [X] `wheel`
	* [X] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	* [ ] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`*/



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

document.body.addEventListener('scroll', event => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "#ff0080";
});

const navElements = document.querySelectorAll(".main-navigation .nav-container .nav a");
navElements.forEach(element => {
    element.addEventListener('contextmenu', event => {
        event.target.style.color = "#14FF00";
    });
});


// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]


//
// element.addEventListener('click', (event) => {//Handle event});
//
//
//     https://www.affaritampa.com/wp-content/uploads/Party-Bus-Tampa-8.jpg