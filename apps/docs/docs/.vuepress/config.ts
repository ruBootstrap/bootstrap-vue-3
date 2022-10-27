// import {viteBundler} from '@vuepress/bundler-vite'
// import {defaultTheme} from '@vuepress/theme-default'
import {searchPlugin} from '@vuepress/plugin-search'
import {componentReference} from './PluginComponentReference'
import {defineUserConfig, defaultTheme, viteBundler} from 'vuepress'

export default defineUserConfig({
  lang: 'ru-RU',
  base: '/',
  title: 'BootstrapVue 3',
  head: [['link', {rel: 'icon', href: '/bootstrap-vue-3/favicon.ico'}]],
  port: 8082,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Поиск',
        },
      },
    }),
    componentReference,
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/logo.png',
    repo: 'https://github.com/ruBootstrap/bootstrap-vue-3',
    docsDir: 'apps/docs/docs',
    editLink: true,
    editLinkText: 'Изменить эту страницу',
    lastUpdatedText: 'Последнее обновление',
    contributors: false,
    lastUpdated: true,
    colorMode: 'light',
    themePlugins: {
      mediumZoom: false,
    },
    navbar: [
      {text: 'Главная', link: '/'},
      {text: 'Документация', link: '/getting-started/'},
      {
        text: 'Справочник',
        children: [
          {text: 'Компоненты', link: '/components/'},
          {text: 'Типы', link: '/reference/types.md'},
          {text: 'Сравнение с BootstrapVue', link: '/reference/parityList.md'},
        ],
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Компоненты',
          children: [
            '/components/README.md',
            '/components/Accordion.md',
            '/components/Alert.md',
            '/components/Avatar.md',
            '/components/Badge.md',
            '/components/Breadcrumb.md',
            '/components/Button.md',
            '/components/ButtonGroup.md',
            '/components/ButtonToolbar.md',
            '/components/Card.md',
            '/components/Carousel.md',
            '/components/Collapse.md',
            '/components/Dropdown.md',
            '/components/Form.md',
            '/components/FormCheckbox.md',
            '/components/FormGroup.md',
            '/components/FormInput.md',
            '/components/FormRadio.md',
            '/components/FormSelect.md',
            '/components/FormTags.md',
            '/components/FormTextarea.md',
            '/components/GridSystem.md',
            '/components/Image.md',
            '/components/InputGroup.md',
            '/components/Link.md',
            '/components/ListGroup.md',
            '/components/Modal.md',
            '/components/Nav.md',
            '/components/Navbar.md',
            '/components/Offcanvas.md',
            '/components/Overlay.md',
            '/components/Pagination.md',
            '/components/Placeholder.md',
            '/components/Popover.md',
            '/components/Progress.md',
            '/components/Skeleton.md',
            '/components/Spinner.md',
            '/components/Table.md',
            '/components/Tabs.md',
            '/components/Toast.md',
          ],
        },
      ],
    },
  }),
})
