import * as PIXI from 'pixi.js'
import gsap from 'gsap'


export default class Cosmonaut extends PIXI.Container {
    constructor(cosmonautTexture) {
        super()
        this.cosmon = new PIXI.Sprite.from(cosmonautTexture)
        this.cosmon.width = 300;
        this.cosmon.height = 300;
        this.cosmon.pivot.set(0.5, 0.5)
        this.addChild(this.cosmon)
        this._anim()

    }

    _anim() {
        gsap.to(this.cosmon, {
            duration: 2450,
            delay: 0,
            rotation: 20,
            ease: "elastic",

            repeat: -1,
            yoyo: true

        });
        gsap.to(this.cosmon, {
            duration: 120,
            delay: 1,
            x: 470,
            y: 75,
            rotation: 1,
            ease: "elastic",
            modifiers: {
                y: gsap.utils.unitize(y => parseFloat(y) % 250), //force x value to be between 0 and 500 using modulus
            },
            repeat: 0,

        });
        gsap.to(this.cosmon, {
            duration: 220,
            delay: 10,
            x: -270,
            y: -75,
            rotation: 1,
            ease: "elastic",
            modifiers: {
                y: gsap.utils.unitize(y => parseFloat(y) % 250), //force x value to be between 0 and 500 using modulus
            },
            repeat: 1,
            yoyo: true

        });
    }


}