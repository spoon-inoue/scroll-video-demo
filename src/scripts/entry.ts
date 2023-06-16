import Lenis from '@studio-freight/lenis'
import { resolvePath } from './utils'

const { ScrollyVideo } = window as any

new ScrollyVideo({
  scrollyVideoContainer: 'scrolly-video',
  // src: resolvePath('videos/9mb_13s.mp4'),
  src: resolvePath('videos/7mb_20s.mp4'),
  // playbackRate: 20,
  frameThreshold: 0.001,
})

const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
