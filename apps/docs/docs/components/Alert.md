# Уведомление

> Предоставляйте контекстные сообщения обратной связи для типичных действий пользователя с помощью нескольких доступных и гибких предупреждающих сообщений.

## Обзор

Уведомления доступны для любой длины текста, а также для дополнительной кнопки закрытия (и дополнительной кнопки автоматического закрытия).

<ClientOnly>
  <b-card>
    <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show>Success Alert</b-alert>
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        Dismissible Alert!
    </b-alert>
    <b-alert
      v-model="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged" >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
  </b-card>
</ClientOnly>

```html
<b-alert show>Default Alert</b-alert>
<b-alert variant="success" show>Success Alert</b-alert>
<b-alert v-model="showDismissibleAlert" variant="danger" dismissible> Dismissible Alert! </b-alert>
<b-alert
  v-model="dismissCountDown"
  dismissible
  variant="warning"
  @dismissed="dismissCountDown=0"
  @dismiss-count-down="countDownChanged"
>
  <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
  <b-progress
    variant="warning"
    :max="dismissSecs"
    :value="dismissCountDown"
    height="4px"
  ></b-progress>
</b-alert>
<b-button @click="showAlert" variant="info" class="m-1">
  Show alert with count-down timer
</b-button>
<b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
  Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
</b-button>

<script lang="ts" setup>
  import {ref} from 'vue'

  const dismissSecs = 10
  const dismissCountDown = ref(0)
  const showDismissibleAlert = ref(false)

  const countDownChanged = (countDown) => {
    dismissCountDown.value = countDown
  }

  const showAlert = () => {
    dismissCountDown.value = dismissSecs
  }
</script>
```

## Видимое состояние

Используйте свойство `show` для управления состоянием видимости предупреждения. По умолчанию оповещения **не** отображаются. Установите свойство `show`, чтобы явно отображать их.

Свойство `show` принимает логическое значение `true` или `false` для отображения и скрытия предупреждения соответственно.

### Поддержка `v-model`

Вы можете использовать директиву `v-model` для создания двусторонних привязок данных, как в
`v-model="showDismissibleAlert"`. Полезно, когда вы используете отклонение, потому что, когда пользователь закрывает предупреждение, ваша переменная будет обновлена. Не используйте свойство `show` при использовании `v-model`. Свойство v-model принимает логическое значение `true` или `false` для отображения и скрытия оповещения соответственно, действуя как свойство `show`. Также можно установить положительное целое число (представляющее секунды), чтобы создать самозакрывающееся оповещение. Дополнительные сведения см. в разделе [Автоматическое закрытие предупреждений](#auto-dismissing-alerts) ниже.

## Контекстные варианты

Для правильного оформления `<b-alert>`, используйте один из четырех обязательных контекстных вариантов, установив свойство `variant` в одно из следующих значений: `info`, `success`, `warning` или `danger`. По умолчанию это `info`.

<ClientOnly>
  <b-card>
    <b-alert show variant="primary">Primary Alert</b-alert>
    <b-alert show variant="secondary">Secondary Alert</b-alert>
    <b-alert show variant="success">Success Alert</b-alert>
    <b-alert show variant="danger">Danger Alert</b-alert>
    <b-alert show variant="warning">Warning Alert</b-alert>
    <b-alert show variant="info">Info Alert</b-alert>
    <b-alert show variant="light">Light Alert</b-alert>
    <b-alert show variant="dark">Dark Alert</b-alert>
  </b-card>
</ClientOnly>

```html
<b-alert show variant="primary">Primary Alert</b-alert>
<b-alert show variant="secondary">Secondary Alert</b-alert>
<b-alert show variant="success">Success Alert</b-alert>
<b-alert show variant="danger">Danger Alert</b-alert>
<b-alert show variant="warning">Warning Alert</b-alert>
<b-alert show variant="info">Info Alert</b-alert>
<b-alert show variant="light">Light Alert</b-alert>
<b-alert show variant="dark">Dark Alert</b-alert>
```

### Передача смысла вспомогательным технологиям

Использование цветовых вариантов для добавления значения обеспечивает только визуальную индикацию, которая не будет передана пользователям вспомогательных технологий, таких как программы чтения с экрана. Убедитесь, что информация, обозначенная цветом, либо очевидна из самого содержимого (например, видимый текст), либо включена с помощью альтернативных средств, таких как дополнительный текст, скрытый с помощью класса `.visually-hidden`.

## Дополнительный контент внутри предупреждений

`<b-alerts>` может также содержать дополнительные элементы HTML, такие как заголовки и абзацы, которые будут окрашены в соответствующий цвет, соответствующий варианту.

<ClientOnly>
  <b-card>
    <b-alert show variant="success">
      <h4 class="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <hr>
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </b-alert>
  </b-card>
</ClientOnly>

```html
<b-alert show variant="success">
  <h4 class="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example text is going to run
    a bit longer so that you can see how spacing within an alert works with this kind of content.
  </p>
  <hr />
  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
  </p>
</b-alert>
```

### Цвет ссылок в оповещениях

Используйте служебный CSS-класс `.alert-link`, чтобы быстро предоставить соответствующие цветные ссылки в любом предупреждении.
Используйте на `<a>` или `<b-link>`.

<ClientOnly>
  <b-card>
    <b-alert show variant="primary"><a href="#" class="alert-link">Primary Alert</a></b-alert>
    <b-alert show variant="secondary"><a href="#" class="alert-link">Secondary Alert</a></b-alert>
    <b-alert show variant="success"><a href="#" class="alert-link">Success Alert</a></b-alert>
    <b-alert show variant="danger"><a href="#" class="alert-link">Danger Alert</a></b-alert>
    <b-alert show variant="warning"><a href="#" class="alert-link">Warning Alert</a></b-alert>
    <b-alert show variant="info"><a href="#" class="alert-link">Info Alert</a></b-alert>
    <b-alert show variant="light"><a href="#" class="alert-link">Light Alert</a></b-alert>
    <b-alert show variant="dark"><a href="#" class="alert-link">Dark Alert</a></b-alert>
  </b-card>
</ClientOnly>

```html
<b-alert show variant="primary"><a href="#" class="alert-link">Primary Alert</a></b-alert>
<b-alert show variant="secondary"><a href="#" class="alert-link">Secondary Alert</a></b-alert>
<b-alert show variant="success"><a href="#" class="alert-link">Success Alert</a></b-alert>
<b-alert show variant="danger"><a href="#" class="alert-link">Danger Alert</a></b-alert>
<b-alert show variant="warning"><a href="#" class="alert-link">Warning Alert</a></b-alert>
<b-alert show variant="info"><a href="#" class="alert-link">Info Alert</a></b-alert>
<b-alert show variant="light"><a href="#" class="alert-link">Light Alert</a></b-alert>
<b-alert show variant="dark"><a href="#" class="alert-link">Dark Alert</a></b-alert>
```

## Закрываемые оповещения

Используя свойство `dismissible`, можно отклонить любой встроенный `<b-alert>`. Это добавит кнопку закрытия `X`. Используйте свойство `dismiss-label`, чтобы изменить текст скрытой метки, связанный с кнопкой закрытия.

<ClientOnly>
  <b-card>
    <b-alert show dismissible>
      Dismissible Alert! Click the close button over there <b>&rArr;</b>
    </b-alert>
  </b-card>
</ClientOnly>

```html
<b-alert show dismissible>
  Dismissible Alert! Click the close button over there <b>&rArr;</b>
</b-alert>
```

### Автоматическое закрытие оповещений

Чтобы создать `<b-alert>`, который автоматически закрывается через определенный период времени, установите `v-model` на количество секунд, в течение которых вы хотите, чтобы `<b-alert>` оставалось видимым. Поддерживается только целое число секунд.

<ClientOnly>
  <b-card>
    <b-alert
      v-model="autoDismissCountDown"
      dismissible
      variant="warning"
      @dismissed="autoDismissCountDown=0"
      @dismiss-count-down="autoDismissCountDownChanged"
    >
      This alert will dismiss after {{ autoDismissCountDown }} seconds...
    </b-alert>
    <b-button @click="showAutoDismissAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
  </b-card>
</ClientOnly>

```html
<b-alert
  v-model="autoDismissCountDown"
  dismissible
  variant="warning"
  @dismissed="autoDismissCountDown=0"
  @dismiss-count-down="autoDismissCountDownChanged"
>
  This alert will dismiss after {{ autoDismissCountDown }} seconds...
</b-alert>
<b-button @click="showAutoDismissAlert" variant="info" class="m-1">
  Show alert with count-down timer
</b-button>

<script lang="ts" setup>
  import {ref} from 'vue'

  const autoDismissSecs = 5
  const autoDismissCountDown = ref(0)

  const autoDismissCountDownChanged = (countDown) => {
    autoDismissCountDown.value = countDown
  }

  const showAutoDismissAlert = () => {
    autoDismissCountDown.value = autoDismissSecs
  }
</script>
```

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const dismissSecs = 10;
  const dismissCountDown = ref(0);
  const showDismissibleAlert = ref(false);

  const countDownChanged = (countDown) => {
      dismissCountDown.value = countDown
  };

  const showAlert = () => {
    dismissCountDown.value = dismissSecs
  };

  const autoDismissSecs = 5;
  const autoDismissCountDown = ref(0);

  const autoDismissCountDownChanged = (countDown) => {
      autoDismissCountDown.value = countDown
  };

  const showAutoDismissAlert = () => {
    autoDismissCountDown.value = autoDismissSecs
  };

</script>
