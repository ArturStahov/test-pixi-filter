import gsap from 'gsap'
import { Back } from 'gsap'

/**
 * 
 * @param {object} item is array href on DOM element
 */
export default function animSubTitle(itemArr) {
    let arr = Array.from(itemArr)

    gsap.to(arr, {
        duration: 5,
        delay: 1,
        x: 300,
        stagger: 2,
        ease: Back.easeOut,
        opacity: 1,
        repeat: -1,
    })
    gsap.to(arr, {
        duration: 2,
        delay: 3,

        stagger: 1,
        ease: Back.easeOut,
        opacity: 0,
        repeat: -1,
    })


}