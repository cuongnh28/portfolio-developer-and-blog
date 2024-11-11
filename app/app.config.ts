import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: `Nguyễn Hồng Cường - Blog's của tôi`,
    description:
      'Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...',
    project: {
      links: {
        github: 'https://github.com/levinhtuyen/myblog',
      },
    },
    layout: {
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: `Nguyễn Hồng Cường - Blog's của tôi`,
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'Cuongnh28',
      links: {
        github: 'https://github.com/levinhtuyen/myblog',
        website: 'https://cuongnh28.work',
      },
    },
  },
})
