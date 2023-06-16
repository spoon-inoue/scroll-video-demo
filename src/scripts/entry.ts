import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isSp, matchSp, resolvePath } from './utils'

gsap.registerPlugin(ScrollTrigger)
const video = document.querySelector<HTMLVideoElement>('.video-container .video')!
let tl: gsap.core.Timeline

if (isSp()) {
  // SPの場合は、gsapでcurrentTimeを更新する
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.video-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  })

  video.addEventListener('loadedmetadata', () => {
    tl.fromTo(video, { currentTime: 0 }, { currentTime: video?.duration })
  })
} else {
  // PCの場合は、ScrollyVideoを使う
  const { ScrollyVideo } = window as any

  new ScrollyVideo({
    scrollyVideoContainer: 'scrolly-video',
    src: video.src,
    cover: true,
    full: true,
  })
}

matchSp().onchange = () => {
  tl?.scrollTrigger?.kill()
  tl?.kill()
  location.reload()
}
