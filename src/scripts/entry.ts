import { resolvePath } from './utils'

const { ScrollyVideo } = window as any

new ScrollyVideo({
  scrollyVideoContainer: 'scrolly-video',
  src: resolvePath('videos/9mb_13s.mp4'),
  cover: true,
  full: true,
})
