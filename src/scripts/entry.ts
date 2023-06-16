import { resolvePath } from './utils'

const ScrollyVideo = (window as any).ScrollyVideo

new ScrollyVideo({
  scrollyVideoContainer: 'scrolly-video',
  // src: resolvePath('/videos/2.99mb_10s.mp4'),
  src: resolvePath('/videos/7.37mb_20s.mp4'),
  cover: true,
  full: true,
})
