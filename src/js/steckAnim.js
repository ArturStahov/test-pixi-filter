import gsap from 'gsap'

const css = document.querySelector('.ico-css')
const html = document.querySelector('.ico-html')
const js = document.querySelector('.ico-js')
const react = document.querySelector('.ico-react')
const node = document.querySelector('.ico-node')
const webpack = document.querySelector('.ico-webpack')
const pixi = document.querySelector('.ico-pixi')
const sass = document.querySelector('.ico-sass')
const npm = document.querySelector('.ico-npm')


export default function stackAnim() {
    gsap
        .timeline({
            defaults: {
                duration: 3,
                delay: 1
            }
        })
        .to(css, {
            x: 300,
            y: 10,
            scale: 2,
            ease: "bounce",
            opacity: 1
        })
        .to(html, {
            x: 260,
            y: 80,
            scale: 2,
            ease: "bounce",
            opacity: 1
        }, '-=1')
        .to(js, {
            x: 230,
            y: 150,
            scale: 2,
            ease: "bounce",
            opacity: 1
        }, '-=1')
        .to(react, {
            x: 200,
            y: 220,
            scale: 2,
            ease: "bounce",
            opacity: 1
        }, '-=1')
        .to(node, {
            x: 170,
            y: 290,
            scale: 2,
            ease: "bounce",
            opacity: 1
        }, '-=1')
        .to(webpack, {
            x: 140,
            scale: 2,
            y: 360,
            ease: "bounce",
            opacity: 1
        }, '-=1')
        .to(pixi, {
            x: 100,
            y: 400,
            scale: 2,
            ease: "bounce",
            opacity: 1
        }, '-=1')
        .to(sass, {
            x: 30,
            y: 450,
            scale: 2,
            ease: "bounce",
            opacity: 1
        }, '-=1')
        .to(npm, {
            x: -100,
            y: 500,
            scale: 2,
            ease: "bounce",
            opacity: 1
        }, '-=1')
}