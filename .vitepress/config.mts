import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Obsy Wiki',
  description: 'Вики Obsy Host',
  rewrites: {
    'eula.md': 'sections/faq/eula.md',
    'license-check.md': 'sections/faq/license-check.md',
    'op.md': 'sections/faq/op.md',
    'whitelist.md': 'sections/faq/whitelist.md',
    'faq.md': 'sections/faq/index.md',
    'basic-setup.md': 'sections/basic/index.md',
    'sftp.md': 'sections/basic/sftp.md',
    'proxy.md': 'sections/proxy/index.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Minecraft', link: '/sections/faq/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Minecraft',
        items: [
          {
            text: 'Частые вопросы',
            items: [
              { text: 'Обзор', link: '/sections/faq/' },
              { text: 'Проверка лицензии', link: '/sections/faq/license-check' },
              { text: 'Whitelist', link: '/sections/faq/whitelist' },
              { text: 'Принятие EULA', link: '/sections/faq/eula' },
              { text: 'Права оператора', link: '/sections/faq/op' },
              { text: 'Защита спавна', link: '/sections/faq/spawn-protection' },
              { text: 'Командные блоки', link: '/sections/faq/command-blocks' },
              { text: 'Отображение скинов', link: '/sections/faq/skins' }
            ]
          },
          {
            text: 'Базовая настройка сервера',
            items: [
              { text: 'Обзор', link: '/sections/basic/' },
              { text: 'Подключение к SFTP', link: '/sections/basic/sftp' },
              { text: 'Как загрузить карту', link: '/sections/basic/upload-map' },
              { text: 'Как загрузить датапак', link: '/sections/basic/upload-datapack' },
              { text: 'server.properties', link: '/sections/basic/server-properties' },
              { text: 'Как установить плагины', link: '/sections/basic/install-plugins' }
            ]
          },
          {
            text: 'Прокси',
            items: [
              { text: 'Что такое прокси?', link: '/sections/proxy/' }
            ]
          }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
