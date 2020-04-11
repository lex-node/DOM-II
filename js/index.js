/***************
 INTRO ALERT
 ***************/
window.addEventListener("load", e => alert('This is an interactive page. Try mousing over, clicking on, scrolling on and doing other stuff to the elements to see cool effects.'));

/***************
 MAGNIFY DRAGGED TEXT
 ***************/
let paras = Array.from(document.querySelectorAll('p'));
console.log(paras);
const dragHandler = function (e) {
    e.target.style = "font-size: x-large";
    console.log('select handler fired');
}
paras.forEach(para => {
    para.draggable = "true";
    para.addEventListener("drag", dragHandler, false);
})


/***************
 THERE IS NO ESCAPE
 ***************/
const noEscape = document.createElement("img");
noEscape.src = 'img/no-exit-2.jpg';
const body = document.querySelector("body");
const container = document.querySelector('.container.home');

window.addEventListener("keydown", e => {
    if (e.keyCode === 27) {
        body.removeChild(container);
        body.prepend(noEscape);
        window.addEventListener("keydown", e => {
            if (e.keyCode === 27) {
                body.removeChild(noEscape);
                body.prepend(container);
                alert("there is no escape; consider yourself warned!!!");
            }
        })
    }
})


/***************
 GHOST BUS
 ***************/
const busPic = document.getElementById("busPic");
const mouseOverHandler = function (e) {
    e.target.style = "opacity: 0; position: absolute";
    ;
}
busPic.addEventListener("mouseover", mouseOverHandler, false);


/***************
 GHOST BUS HAUNTS FOOTER
 ***************/
const footer = document.querySelector("footer");
let footerChildrens = footer.children
footer.addEventListener("dblclick", e => {
    footer.removeChild(footerChildrens[0]);
    footer.appendChild(busPic);
    busPic.style = "opacity : 2; display: block; margin-left: auto; margin-right: auto; width: 50%;";
    busPic.removeEventListener("mouseover", mouseOverHandler);
})

/***************
 WHEEL OF FORTUNE
 ***************/
let funPic = document.querySelector("#fun");
funPic.addEventListener('wheel', e => {
    funPic.src = "img/tenor.gif"
});

/***************
 COLOR SWAP
 ***************/
window.addEventListener("scroll", e => document.querySelector('body').style = "background-color : red");
document.querySelector('.main-navigation').addEventListener("click", e => event.target.style = "background-color: red");

/***************
 MOBY DICK
 ***************/
window.addEventListener("resize", () => document.querySelector('#adventure').src = "img/mobydick.jpg");

/***************
 SUPER PHUN BUS
 ***************/
document.querySelector('.logo-heading').addEventListener("select", e => document.querySelector('.logo-heading').textContent = "Super Phun Bus");

