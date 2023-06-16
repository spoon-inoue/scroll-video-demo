import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { qs } from './utils'

gsap.registerPlugin(ScrollTrigger)

const video = qs<HTMLVideoElement>('.video-container video')

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.contents',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.5,
  },
})

video.addEventListener('loadedmetadata', () => {
  tl.fromTo(
    video,
    { currentTime: 0 },
    {
      currentTime: video.duration,
    },
  )
})
