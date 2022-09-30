---
sidebar: auto
---

# Введение

Начните работу с BootstrapVue3 и Bootstrap v5, самой популярной в мире платформы для создания адаптивных мобильных сайтов.

::: danger НЕ ГОТОВО К ПРОДАКШЕНУ
Этот проект все еще находится в **альфа-версии**. Предстоит много работы, если вы хотите внести свой вклад, вы можете использовать его и отправить [issue](https://github.com/cdmoro/bootstrap-vue-3/issues) или, что еще лучше, [pull request](https://github.com/cdmoro/bootstrap-vue-3/pulls) 😄.
:::

## Почему BootstrapVue3?

BootstrapVue3 — это попытка использовать компоненты [BootstrapVue](https://bootstrap-vue.org/) в Vue3, Bootstrap 5 и typescript. Другая цель состоит в том, чтобы компоненты были написаны простым и читабельным способом.

Как вы можете предположить, эта библиотека во многом вдохновлена [BootstrapVue](https://bootstrap-vue.org/), а также свойствами компонентов, событиями, слотами, директивами и т. д. Мы хотим сделать ее такой, потому что мы хотим иметь совместимость с BootstrapVue, чтобы было легко переключаться между библиотеками.

## Вклад и поддержка 🙌

Этот проект все еще находится в **альфа-версии**, так что предстоит еще много работы. Если вы хотите внести свой вклад, вы можете:

- отправить [issue](https://github.com/cdmoro/bootstrap-vue-3/issues/new)
- или лучше [pull request](https://github.com/cdmoro/bootstrap-vue-3/pulls)
- или еще лучше, посетите [мою страницу patreon](https://patreon.com/cdmoro) и поддержите меня 😄

## Разовые пожертвования

Или, если вы предпочитаете, вы можете сделать единовременное пожертвование через эти каналы:

[!["Купи мне кофе"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/cdmoro)
[![Купи мне кофе в cafecito.app](https://cdn.cafecito.app/imgs/buttons/button_2.svg)](https://cafecito.app/cdmoro)

## Требования

Чтобы использовать эту библиотеку, вам необходимо установить эти пакеты:

- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) `5.x.x`
- [Vue.js](https://v3.vuejs.org/) `3.x.x`

## Установить

### Установка - Vue.js

Для установки этой библиотеки вы можете использовать Yarn, NPM или PNPM:

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash
pnpm add bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>
</CodeGroup>

И в вашем `main.js/ts`:

```javascript
import {createApp} from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

// Необязательно, так как каждый компонент импортирует свою функциональность Bootstrap, 
// следующая строка не нужна
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
```

### Установка - Nuxt.js 3

Как и при установке Vue.js.

В приложении Nuxt3 установите необходимые пакеты для `bootstrap-vue-3`

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash
pnpm add bootstrap bootstrap-vue-3 @popperjs/core
```

  </CodeGroupItem>
</CodeGroup>

Откройте файл `nuxt.config.ts` или `nuxt.config.js` и настройте приложение на использование `bootstrap-vue-3`. Компоненты будут автоматически импортированы по мере необходимости.

```javascript
import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
  modules: ['bootstrap-vue-3/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.css'],
})
```

Наслаждайтесь этим в своем приложении без импорта.

```vue
<template>
  <div>
    <BButton variant="primary">Тест</BButton>
  </div>
</template>
```

## Сравнение с BoostrapVue

Как мы уже говорили, мы создали этот проект в [BootstrapVue](https://bootstrap-vue.org/). Мы считаем BootstrapVue лучшей реализацией Bootstrap `v4`, поэтому хороший подход состоит в том, чтобы реплицировать каждый компонент BootstrapVue, а также их свойства, события и т. д. и добавлять новые функции Bootstrap `v5`.

<!-- Чтобы следовать этому, мы реализуем список четности, где вы можете просматривать ход выполнения покрытых компонентов. Этот раздел еще не готов. -->

Вы можете просмотреть полный список в следующем [разделе](../reference/parityList.md).
