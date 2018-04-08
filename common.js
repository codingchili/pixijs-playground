const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

var app = new PIXI.Application();

renderer = PIXI.autoDetectRenderer(256, 256,
    {antialias: false, transparent: false, resolution: 1, backgroundColor: 0x0}
);

function resize() {
    renderer.view.style.position = "absolute";
    renderer.view.style.display = "block";
    renderer.autoResize = true;
    renderer.resize(window.innerWidth, window.innerHeight);
}

window.onresize = resize;
resize();

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();


var keys = [];
window.onkeyup = function (e) {
    keys[e.keyCode] = false;
};
window.onkeydown = function (e) {
    keys[e.keyCode] = true;
};