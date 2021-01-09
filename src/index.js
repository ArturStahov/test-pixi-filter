
import * as PIXI from 'pixi.js'
import './styles.css';
import { ShockwaveFilter } from 'pixi-filters';

import './images/45.jpg'
import './images/23.png'


function registerPixiInspector() {
    window.__PIXI_INSPECTOR_GLOBAL_HOOK__ && window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });
}
registerPixiInspector()
const app = new PIXI.Application({
    transparent: true,
    resolution: window.devicePixelRatio,

});

app.renderer.backgroundColor = 0x000000;
app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.view.style.width = window.innerWidth + "px";
app.view.style.height = window.innerHeight + "px";

document.body.appendChild(app.view);

//alias
const loaders = new PIXI.Loader();

let message
let state;
let time = 0;
let earth
//load all resources 
loaders
    .add("bg", "./images/45.jpg")
    .add('earth', './images/23.png')
    .load(setup);

let filterShockwave = new ShockwaveFilter();


function setup() {
    const Scene = new PIXI.Container()
    let bg = new PIXI.Sprite.from(PIXI.Texture.from("bg"));
    bg.position.set(app.screen.width / 2, app.screen.height / 2);
    bg.anchor.set(0.5);
    bg.scale.x = Math.min(app.screen.width / bg.width);
    bg.scale.y = Math.min(app.screen.height / bg.height);

    Scene.addChild(bg)

    earth = new PIXI.Sprite.from(PIXI.Texture.from("earth"));
    earth.position.set(app.screen.width / 2, app.screen.height / 2);
    earth.anchor.set(0.5);
    earth.width = 400;
    earth.height = 400;


    Scene.addChild(earth)

    message = new PIXI.Text(`${time}`, {
        fontFamily: "Arial",
        fontSize: 76,
        fill: "white",
        stroke: "#ffffff",
        strokeThickness: 6,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    });
    message.position.set(app.screen.width / 2, app.screen.height / 2);
    message.anchor.set(0.5);
    Scene.addChild(message)

    Scene.width = app.screen.width;
    Scene.height = app.screen.height
    Scene.x = app.screen.width / 2;
    Scene.y = app.screen.height / 2;
    Scene.pivot.set(app.screen.width / 2, app.screen.height / 2);
    Scene.filters = [filterShockwave];

    filterShockwave.center = [app.screen.width / 2, app.screen.height / 2]




    app.stage.addChild(Scene);
    state = play;
    app.ticker.add(delta => gameLoop(delta));
}


function gameLoop(delta) {
    state(delta);
}

function play() {
    filterShockwave.time = (filterShockwave.time >= 1) ? 0 : filterShockwave.time + 0.01;
    time += 0.01
    message.text = Math.round(time).toString()
    earth.rotation -= 0.001;
}
