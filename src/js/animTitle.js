import gsap from 'gsap'

/**
 * 
 * @param {object} item is href on DOM element
 */
export default function AnimTitle(item) {
    gsap.to(item, {
        duration: 10,
        delay: 3,
        x: 100,
        scale: 1.2,
        ease: "elastic",
        opacity: 1
    })
    gsap.to(item, {
        duration: 3,
        delay: 10,
        x: 300,
        scale: 1.2,
        rotation: 180,
        opacity: 0
    })
}