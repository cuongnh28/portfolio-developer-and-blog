// @ts-ignore

import { reactive, computed } from 'vue'
export const useMetaSeoIndex = () => {
  const siteData = reactive({
    title: 'Nguyễn Hồng Cường - Portfolio developer',
    description:
      "Nguyễn Hồng Cường - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...",
    content: "Nguyễn Hồng Cường - Blog's của tôi",
    ogTitle: 'Nguyễn Hồng Cường - Portfolio developer',
    ogDescription:
      "Nguyễn Hồng Cường - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...",
    ogImage: 'https://cuongnh28.work/logo.jpg',
    ogType: 'article',
    ogLink: 'https://cuongnh28.work/',
    robots: 'index, follow',
    ogImageWidth: '1200',
    ogSideName: 'tuyenleblog.tech',
    ogImageHeight: '628',
  })

  useHead({
    // Can be static or computed
    title: computed(() => siteData.title),
    meta: [
      {
        name: 'description',
        content:
          "Nguyễn Hồng Cường - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...",
      },
      {
        property: 'og:title',
        content: "Nguyễn Hồng Cường - Blog's của tôi",
      },
      {
        property: 'og:url',
        content: computed(() => siteData.ogLink),
      },
      {
        property: 'og:type',
        content: computed(() => 'website'),
      },
      {
        property: 'og:description',
        content:
          "Nguyễn Hồng Cường - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...",
      },

      {
        property: 'og:image',
        content: 'https://cuongnh28.work/logo.jpg',
      },
      {
        name: 'robots',
        content: computed(() => siteData.robots),
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:site_name',
        content: computed(() => 'website'),
      },
      {
        property: 'og:image:height',
        content: computed(() => siteData.ogImageHeight),
      },
      {
        property: 'msvalidate.01',
        content: computed(() => '11B70B71EB4BE19284312ADFF0011957'),
      },
    ],

    link: [
      { rel: 'canonical', href: 'https://cuongnh28.work', id: 'canonical' },
    ],
  })
  return useHead
}
