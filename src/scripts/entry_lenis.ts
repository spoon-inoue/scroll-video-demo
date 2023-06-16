import Lenis from '@studio-freight/lenis'
import { qs } from './utils'

const video = qs<HTMLVideoElement>('.video-container video')

const lenis = new Lenis()

video.addEventListener('loadedmetadata', () => {
  lenis.on('scroll', () => {
    video.currentTime = video.duration * lenis.progress
  })
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
