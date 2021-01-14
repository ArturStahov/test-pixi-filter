import * as PIXI from 'pixi.js'
import { ShockwaveFilter } from 'pixi-filters';
import app from './appConfig.js'
import Cosmonaut from './Cosmonaut.js'
import '../images/45.jpg'
import '../images/23.png'
import '../images/kosmonavt.png'
import animTitle from './animTitle'
import animSubTitle from './animSubTitle'
import stackAnim from './steckAnim'
const generateRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export default class PixiApp {
    constructor() {
        document.body.appendChild(app.view);
        const loaders = new PIXI.Loader();
        loaders
            .add("bg", "./images/45.jpg")
            .add('earth', './images/23.png')
            .add('cosmon', './images/kosmonavt.png')
            .load(() => {
                this.setup()
            });
        this.title = document.querySelector('.title')
        this.subTitle = document.querySelectorAll('.sub_title')


        this.state;
        this.time = 0;
        this.earth;
        this.filterShockwave = new ShockwaveFilter();
        this.timeShock = 0

    }


    setup() {
        animTitle(this.title)
        if (this.subTitle) {
            animSubTitle(this.subTitle)
        }
        stackAnim()
        const Scene = new PIXI.Container()
        let bg = new PIXI.Sprite.from(PIXI.Texture.from("bg"));
        bg.position.set(app.screen.width / 2, app.screen.height / 2);
        bg.anchor.set(0.5);
        bg.scale.x = Math.min(app.screen.width / bg.width);
        bg.scale.y = Math.min(app.screen.height / bg.height);

        Scene.addChild(bg)

        this.earth = new PIXI.Sprite.from(PIXI.Texture.from("earth"));
        this.earth.position.set(app.screen.width / 2, app.screen.height / 2);
        this.earth.anchor.set(0.5);
        this.earth.width = 400;
        this.earth.height = 400;


        Scene.addChild(this.earth)

        this.message = new PIXI.Text('FrontEnd', {
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
        this.message.position.set(app.screen.width / 2, app.screen.height / 2);
        this.message.anchor.set(0.5);
        Scene.addChild(this.message)

        Scene.width = app.screen.width;
        Scene.height = app.screen.height
        Scene.x = app.screen.width / 2;
        Scene.y = app.screen.height / 2;
        Scene.pivot.set(app.screen.width / 2, app.screen.height / 2);
        Scene.filters = [this.filterShockwave];


        const CosmTexture = PIXI.Texture.from("cosmon")
        let cosmon = new Cosmonaut(CosmTexture)
        cosmon.x = 300;
        cosmon.y = 300;


        this.filterShockwave.center = [app.screen.width / 2, app.screen.height / 2]
        this.filterShockwave.amplitude = 30
        this.filterShockwave.brightness = 1.6



        app.stage.addChild(Scene);
        app.stage.addChild(cosmon);
        this.state = this.play;
        app.ticker.add(delta => this.gameLoop(delta));
    }


    gameLoop(delta) {
        this.state(delta);
    }

    play() {
        this.filterShockwave.time = (this.filterShockwave.time >= 4) ? 0 : this.filterShockwave.time + 0.01;

        this.earth.rotation -= 0.001;

        this.timeShock = (this.timeShock >= 2) ? 0 : this.timeShock + 0.01;
        if (this.timeShock >= 2) {
            this.filterShockwave.center = [generateRandomInt(0, 700), generateRandomInt(0, 700)]
            this.filterShockwave.amplitude = generateRandomInt(20, 100)
        }
    }







}