# Аватар

> Аватары — это настраиваемый компонент, который обычно используется для отображения профиля пользователя
> в виде изображения, иконки или короткого текста. `<b-avatar>` предоставляет несколько реквизитов для
> настройки внешнего вида, таких как вариант цвета и округлость, а также дополнительно поддерживает действие
> в качестве кнопки, ссылки или ~~[ссылки маршрутизатора](/docs/reference/router-links)~~.

## Обзор

Аватары — это легковесные компоненты, которые по умолчанию отображаются встроенными, так что они центрируются по вертикали рядом с любым примыкающим обычным текстом. Их также можно использовать в качестве потомков других компонентов.

<ClientOnly>
  <b-card>
    <p>Using stand-alone:</p>
    <div class="mb-4">
      <b-avatar></b-avatar>
      <b-avatar variant="primary" text="BV"></b-avatar>
      <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
      <b-avatar variant="success" icon="people-fill"></b-avatar>
    </div>
    <p>Using in components (list group) example:</p>
    <b-list-group style="max-width: 300px;">
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mx-3"></b-avatar>
        <span class="me-auto">J. Circlehead</span>
        <b-badge>5</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="primary" text="BV" class="mx-3"></b-avatar>
        <span class="me-auto">BootstrapVue</span>
        <b-badge>12</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="info" src="https://placekitten.com/300/300" class="mx-3"></b-avatar>
        <span class="me-auto">Super Kitty</span>
        <b-badge>9</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="success" icon="people-fill" class="mx-3"></b-avatar>
        <span class="me-auto">ACME group</span>
        <b-badge>7</b-badge>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <p>Using stand-alone:</p>
  <div class="mb-4">
    <b-avatar></b-avatar>
    <b-avatar variant="primary" text="BV"></b-avatar>
    <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar variant="success" icon="people-fill"></b-avatar>
  </div>
  <p>Using in components (list group) example:</p>
  <b-list-group style="max-width: 300px;">
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar class="mx-3"></b-avatar>
      <span class="me-auto">J. Circlehead</span>
      <b-badge>5</b-badge>
    </b-list-group-item>
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar variant="primary" text="BV" class="mx-3"></b-avatar>
      <span class="me-auto">BootstrapVue</span>
      <b-badge>12</b-badge>
    </b-list-group-item>
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar variant="info" src="https://placekitten.com/300/300" class="mx-3"></b-avatar>
      <span class="me-auto">Super Kitty</span>
      <b-badge>9</b-badge>
    </b-list-group-item>
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar variant="success" icon="people-fill" class="mx-3"></b-avatar>
      <span class="me-auto">ACME group</span>
      <b-badge>7</b-badge>
    </b-list-group-item>
  </b-list-group>
</b-card>
```

## Типы аватаров

Содержимое аватара может быть изображением, иконкой или короткой текстовой строкой. Содержимое аватара по умолчанию представляет собой [иконку `'person-fill'`](/docs/icons), если не указано другое содержимое.

Вы также можете предоставить пользовательский контент через слот по умолчанию, хотя вам может потребоваться применить к контенту дополнительные стили.

### Содержимое изображения

Используйте свойство `src`, чтобы указать URL-адрес изображения, которое будет использоваться в качестве содержимого аватара. Изображение должно иметь соотношение сторон `1:1` (это означает, что ширина и высота должны быть равны), в противном случае произойдет искажение пропорций изображения. Изображение будет увеличено или уменьшено, чтобы соответствовать ограничивающей рамке аватара.

<ClientOnly>
  <b-card>
    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar src="https://placekitten.com/300/300"></b-avatar>
  <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
</b-card>
```

**Примечания:**

- При использовании сборщика модулей и относительных URL-адресов изображений проекта смотрите дополнительные сведения в справочном разделе [Разрешение исходного кода компонента img](/docs/reference/images).
- Свойство `src` имеет приоритет над свойствами `icon` и `text`.
- <span class="badge badge-secondary">2.11.0+</span> Если изображение не загружается, аватар возвращается к значению свойств `icon` или `text`. Если свойства `icon` или `text` не указаны, будет отображаться значок аватара по умолчанию. Кроме того, когда изображение не загружается, будет сгенерировано событие `img-error`.
- [Вариантные цвета](#variants) при использовании изображений, которые обычно не видны, если только изображение не загружается. Вариант повлияет на стиль фокуса, когда изображение аватара также является [активным аватаром](#actionable-avatars).

### Содержимое иконки

TODO это должно работать с любым шрифтом иконок, например, icon="fa fa-cogs"

Легко используйте один из [иконок BootstrapVue](/docs/icons) в качестве содержимого аватара с помощью параметра `icon`. Свойство должно быть установлено на допустимое имя значка. Иконки будут масштабироваться в соответствии со [свойством `size`](#sizing).

<ClientOnly>
  <b-card>
    <b-avatar icon="people-fill"></b-avatar>
    <b-avatar icon="star-fill"></b-avatar>
    <b-avatar icon="music-note" size="lg"></b-avatar>
    <b-avatar icon="star-fill" size="4em"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar icon="people-fill"></b-avatar>
  <b-avatar icon="star-fill"></b-avatar>
  <b-avatar icon="music-note" size="lg"></b-avatar>
  <b-avatar icon="star-fill" size="4em"></b-avatar>
</b-card>
```

**Примечания:**

- Свойство `icon` имеет приоритет над свойством `text`.
- Если свойства `text`, `src` или `icon` не предоставлены _и_ [слот по умолчанию](#custom-content) не имеет содержимого, то будет использоваться иконка `person-fill`.

### Текстовое содержимое

Вы можете указать короткую строку в качестве содержимого аватара через свойство `text`. Строка должна быть короткой (от 1 до 3 символов) и будет преобразована с помощью CSS, чтобы все символы были в верхнем регистре. Размер шрифта будет масштабироваться относительно [параметра свойства `size`](#sizing).

<ClientOnly>
  <b-card>
    <b-avatar text="BV"></b-avatar>
    <b-avatar text="a"></b-avatar>
    <b-avatar text="Foo"></b-avatar>
    <b-avatar text="BV" size="4rem"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar text="BV"></b-avatar>
  <b-avatar text="a"></b-avatar>
  <b-avatar text="Foo"></b-avatar>
  <b-avatar text="BV" size="4rem"></b-avatar>
</b-card>
```

### Пользовательский контент

Используйте слот `default` для отображения пользовательского контента в аватаре, для более точного управления его внешним видом или при использовании пользовательских значков или SVG, например:

<ClientOnly>
  <b-card>
    <b-avatar size="4em">Hello<br>World</b-avatar>
    <b-avatar size="4em">你好<br>世界</b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar size="4em">Hello<br />World</b-avatar>
  <b-avatar size="4em">你好<br />世界</b-avatar>
</b-card>
```

**Примечания:**

- Слот по умолчанию имеет приоритет над свойствами `text`, `src` и `icon`.
- Содержимое слота по умолчанию будет заключено в элемент `<span>`, чтобы обеспечить правильное центрирование.
- Возможно, вам потребуется применить дополнительные стили к пользовательскому контенту, чтобы компенсировать [форму компонента аватара](#rounding).

## Стайлинг

### Варианты

Используйте свойство `variant`, чтобы указать один из вариантов цветов темы Bootstrap. Вариант по умолчанию — `secondary`.

<ClientOnly>
  <b-card>
    <b-avatar variant="secondary"></b-avatar>
    <b-avatar variant="primary"></b-avatar>
    <b-avatar variant="dark"></b-avatar>
    <b-avatar variant="light"></b-avatar>
    <b-avatar variant="success"></b-avatar>
    <b-avatar variant="danger"></b-avatar>
    <b-avatar variant="warning"></b-avatar>
    <b-avatar variant="info"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar variant="secondary"></b-avatar>
  <b-avatar variant="primary"></b-avatar>
  <b-avatar variant="dark"></b-avatar>
  <b-avatar variant="light"></b-avatar>
  <b-avatar variant="success"></b-avatar>
  <b-avatar variant="danger"></b-avatar>
  <b-avatar variant="warning"></b-avatar>
  <b-avatar variant="info"></b-avatar>
</b-card>
```

При отображении иконки в качестве аватара цвета иконки рассчитываются на основе свойства `variant`. Результат либо `light`, либо `dark`. Вы можете переопределить рассчитанный цвет иконки, указав свойство `icon-variant`.

<ClientOnly>
  <b-card>
    <b-avatar variant="secondary" icon-variant="info"></b-avatar>
    <b-avatar variant="primary" icon-variant="dark"></b-avatar>
    <b-avatar variant="dark" icon-variant="warning"></b-avatar>
    <b-avatar variant="light" icon-variant="success"></b-avatar>
    <b-avatar variant="success" icon-variant="dark"></b-avatar>
    <b-avatar variant="danger" icon-variant="warning"></b-avatar>
    <b-avatar variant="warning" icon-variant="primary"></b-avatar>
    <b-avatar variant="info" icon-variant="secondary"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar variant="secondary" icon-variant="info"></b-avatar>
  <b-avatar variant="primary" icon-variant="dark"></b-avatar>
  <b-avatar variant="dark" icon-variant="warning"></b-avatar>
  <b-avatar variant="light" icon-variant="success"></b-avatar>
  <b-avatar variant="success" icon-variant="dark"></b-avatar>
  <b-avatar variant="danger" icon-variant="warning"></b-avatar>
  <b-avatar variant="warning" icon-variant="primary"></b-avatar>
  <b-avatar variant="info" icon-variant="secondary"></b-avatar>
</b-card>
```

При отображении текста внутри аватара цвета текста рассчитываются на основе свойства `variant`. Результат либо `light`, либо `dark`. Вы можете переопределить рассчитанный цвет значка, указав свойство `icon-variant`.

<ClientOnly>
  <b-card>
    <b-avatar variant="primary" text="P"></b-avatar>
    <b-avatar variant="primary" text-variant="dark" text="P"></b-avatar>
    <b-avatar variant="secondary" text="A"></b-avatar>
    <b-avatar variant="secondary" text-variant="info" text="A"></b-avatar>
    <b-avatar variant="warning" text="A"></b-avatar>
    <b-avatar variant="warning" text-variant="primary" text="A"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar variant="primary" text="P"></b-avatar>
  <b-avatar variant="primary" text-variant="dark" text="P"></b-avatar>
  <b-avatar variant="secondary" text="A"></b-avatar>
  <b-avatar variant="secondary" text-variant="info" text="A"></b-avatar>
  <b-avatar variant="warning" text="A"></b-avatar>
  <b-avatar variant="warning" text-variant="primary" text="A"></b-avatar>
</b-card>
```

### Размеры

По умолчанию аватары имеют размер `2.5em` (относительно текущего размера шрифта). Вы можете изменить размер аватара, изменив текущий размер шрифта, или использовать свойство `size`, чтобы указать явный размер. Размеры `sm`, `md` и `lg` по умолчанию равны `1.5em`, `2.5em` и `3.5em`. Числа преобразуются в значения пикселей. Любое другое значение _должно_ включать единицы измерения (такие как `px`, `em` или `rem`).

<ClientOnly>
  <b-card>
    <b-avatar></b-avatar>
    <b-avatar size="sm"></b-avatar>
    <b-avatar size="lg"></b-avatar>
    <b-avatar :size="24"></b-avatar>
    <b-avatar size="3em"></b-avatar>
    <b-avatar size="72px"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar></b-avatar>
  <b-avatar size="sm"></b-avatar>
  <b-avatar size="lg"></b-avatar>
  <b-avatar :size="24"></b-avatar>
  <b-avatar size="3em"></b-avatar>
  <b-avatar size="72px"></b-avatar>
</b-card>
```

**Примечание:** Аватары _всегда_ отображаются с соотношением сторон `1:1`.

### Square

Предпочитаете квадратную аватарку? просто установите свойство `square` в значение `true`.

<ClientOnly>
  <b-card>
    <b-avatar square></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar square></b-avatar>
</b-card>
```

### Rounding

`<b-avatar>` отображается с круглым радиусом границы. Вы можете изменить округление, установив свойство `rounded` в одно из значений `true`, `'circle'`, `'sm'`, `'lg'`, `'top'`, `'left'`, `'right'` или `'bottom'`.
Если задано значение `true` (или пустая строка `''`), используется значение по умолчанию Bootstrap для среднего округления.
Если задано значение `circle`, используется радиус границы 50%, в результате получается круг.

<ClientOnly>
  <b-card>
    <div class="d-flex" style="column-gap: 1%;">
      <b-avatar rounded="sm"></b-avatar>
      <b-avatar rounded></b-avatar>
      <b-avatar rounded="lg"></b-avatar>
      <b-avatar rounded="top"></b-avatar>
      <b-avatar rounded="left"></b-avatar>
      <b-avatar rounded="right"></b-avatar>
      <b-avatar rounded="bottom"></b-avatar>
      <b-avatar rounded="circle"></b-avatar>
      <b-avatar rounded="0"></b-avatar>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div class="d-flex" style="column-gap: 1%;">
    <b-avatar rounded="sm"></b-avatar>
    <b-avatar rounded></b-avatar>
    <b-avatar rounded="lg"></b-avatar>
    <b-avatar rounded="top"></b-avatar>
    <b-avatar rounded="left"></b-avatar>
    <b-avatar rounded="right"></b-avatar>
    <b-avatar rounded="bottom"></b-avatar>
    <b-avatar rounded="circle"></b-avatar>
    <b-avatar rounded="0"></b-avatar>
  </div>
</b-card>
```

**Примечания:**

- Свойство `square` имеет приоритет над свойством `rounded`.
- В качестве альтернативы свойству `square` вы можете установить значение `rounded` на строку `'0'`, чтобы получить квадратный аватар.

### Выравнивание

По умолчанию `<b-avatar>` будет центрирован по вертикали вместе с прилегающим к нему содержимым. В некоторых случаях вы можете захотеть изменить выравнивание, например, убедиться, что аватар, состоящий только из текста, выравнивает свой текст с соседним текстом. Просто установите для компонента класс [утилиты вертикального выравнивания](/docs/reference/utility-classes) , например, `<b-avatar class="align-baseline" ...>` или
`<b-avatar class="align-top" ...>` и т. д.

## Активные аватары

Легко создавайте аватары, которые реагируют на клики, ~~или аватары, которые меняют URL/маршрут при нажатии~~.
Активные аватары будут отображаться в последовательности вкладок документа и доступны как для программ чтения с экрана, так и для пользователей, использующих только клавиатуру.

Аватары-изображения, когда они активны, используют базовое преобразование масштаба изображения при наведении курсора.

### Кнопка

Хотите вызвать открытие модального окна или запустить действие? Установите свойство `button`, чтобы указать `<b-avatar>` отображать как элемент `<button>`. При отображении в виде кнопки компонент будет генерировать событие `click` при каждом нажатии.

<ClientOnly>
  <b-card>
    <b-list-group>
      <b-list-group-item>
        <b-avatar button @click="alertEvent" variant="primary" text="FF" class="align-baseline"></b-avatar>
        Button Text Avatar
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar button @click="alertEvent" src="https://placekitten.com/300/300"></b-avatar>
        Button Image Avatar
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar button @click="alertEvent" icon="star-fill" class="align-center"></b-avatar>
        Button Icon Avatar
      </b-list-group-item>
    </b-list-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-list-group>
    <b-list-group-item>
      <b-avatar
        button
        @click="alertEvent"
        variant="primary"
        text="FF"
        class="align-baseline"
      ></b-avatar>
      Button Text Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="alertEvent" src="https://placekitten.com/300/300"></b-avatar>
      Button Image Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar button @click="alertEvent" icon="star-fill" class="align-center"></b-avatar>
      Button Icon Avatar
    </b-list-group-item>
  </b-list-group>
</b-card>
```

Свойство `button-type` можно использовать для управления типом отображаемой кнопки. Поддерживаемые значения: `'button'` (по умолчанию), `'submit'` или `'reset'`.

### Ссылка

Хотите использовать аватар в качестве ссылки или ссылки на маршрутизатор? Просто установите свойство `href` или ~~`to`~~ (соответственно).
~~Свойство `to` может быть либо строковым путем, либо объектом `Location`. Свойство `to` требует, чтобы был установлен `Vue router` (или аналогичный)~~.

<ClientOnly>
  <b-card>
    <b-list-group>
      <b-list-group-item>
        <b-avatar href="#foo" variant="primary" text="FF" class="align-baseline"></b-avatar>
        Link Text Avatar
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar href="#bar" src="https://placekitten.com/300/300"></b-avatar>
        Link Image Avatar
      </b-list-group-item>
      <b-list-group-item>
        <b-avatar href="#baz" icon="star-fill" class="align-center"></b-avatar>
        Link Icon Avatar
      </b-list-group-item>
    </b-list-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-list-group>
    <b-list-group-item>
      <b-avatar href="#foo" variant="primary" text="FF" class="align-baseline"></b-avatar>
      Link Text Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar href="#bar" src="https://placekitten.com/300/300"></b-avatar>
      Link Image Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar href="#baz" icon="star-fill" class="align-center"></b-avatar>
      Link Icon Avatar
    </b-list-group-item>
  </b-list-group>
</b-card>
```

**Примечание:**

- Свойство `button` имеет приоритет над свойствами `href` и ~~`to`~~.
- ~~Дополнительные сведения о свойствах, совместимых с `<router-link>`, смотрите в [Справочном разделе о поддержке маршрутизаторов](/docs/reference/router-links).~~

## Значки аватаров

Легко добавьте значок на свой аватар с помощью свойств `badge` или слота `'badge'`, а вариант значка можно установить с помощью свойства `badge-variant`. Значок будет масштабироваться в зависимости от размера аватара.

<ClientOnly>
  <b-card>
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-variant="danger" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar badge badge-variant="warning" icon="people-fill"></b-avatar>
    <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar badge badge-variant="dark" text="BV"></b-avatar>
    <b-avatar square badge badge-variant="dark" text="BV"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar badge></b-avatar>
  <b-avatar badge badge-variant="danger" src="https://placekitten.com/300/300"></b-avatar>
  <b-avatar badge badge-variant="warning" icon="people-fill"></b-avatar>
  <b-avatar badge badge-variant="success" src="https://placekitten.com/300/300"></b-avatar>
  <b-avatar badge badge-variant="dark" text="BV"></b-avatar>
  <b-avatar square badge badge-variant="dark" text="BV"></b-avatar>
</b-card>
```

### Содержимое значка

Добавьте текстовое содержимое к значку, указав строку в свойстве `badge`, или используйте именованный слот `'badge'`.

<ClientOnly>
  <b-card>
    <b-avatar badge="BV"></b-avatar>
    <b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
    <b-avatar badge-variant="info" src="https://placekitten.com/300/300">
      <template #badge><b-icon icon="star-fill" variant="light"></b-icon></template>
    </b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar badge="BV"></b-avatar>
  <b-avatar badge="7" variant="primary" badge-variant="dark"></b-avatar>
  <b-avatar badge-variant="info" src="https://placekitten.com/300/300">
    <template #badge><b-icon icon="star-fill" variant="light"></b-icon></template>
  </b-avatar>
</b-card>
```

### Позиционирование значка

По умолчанию значок отображается в правом нижнем углу аватара. Вы можете использовать логические свойства `badge-top` и `badge-right` для переключения сторон. Объедините оба реквизита, чтобы переместить значок в правый верхний угол аватара.

<ClientOnly>
  <b-card>
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-left></b-avatar>
    <b-avatar badge badge-top></b-avatar>
    <b-avatar badge badge-left badge-top></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar badge></b-avatar>
  <b-avatar badge badge-left></b-avatar>
  <b-avatar badge badge-top></b-avatar>
  <b-avatar badge badge-left badge-top></b-avatar>
</b-card>
```

Используйте свойство `badge-offset` для управления смещением значка. `badge-offset` должен быть допустимой строкой длины CSS (например, `'2px'`, `'-2px'`, `'0.5em'` и т. д.). Положительные значения будут перемещать значок внутрь, а отрицательные значения будут перемещать значок наружу.

<ClientOnly>
  <b-card>
    <b-avatar badge></b-avatar>
    <b-avatar badge badge-offset="-0.5em"></b-avatar>
    <b-avatar badge badge-offset="-2px"></b-avatar>
    <b-avatar badge badge-offset="2px"></b-avatar>
    <b-avatar badge badge-top></b-avatar>
    <b-avatar badge badge-top badge-offset="-0.5em"></b-avatar>
    <b-avatar badge badge-top badge-offset="-2px"></b-avatar>
    <b-avatar badge badge-top badge-offset="2px"></b-avatar>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar badge></b-avatar>
  <b-avatar badge badge-offset="-0.5em"></b-avatar>
  <b-avatar badge badge-offset="-2px"></b-avatar>
  <b-avatar badge badge-offset="2px"></b-avatar>
  <b-avatar badge badge-top></b-avatar>
  <b-avatar badge badge-top badge-offset="-0.5em"></b-avatar>
  <b-avatar badge badge-top badge-offset="-2px"></b-avatar>
  <b-avatar badge badge-top badge-offset="2px"></b-avatar>
</b-card>
```

## Группы аватаров

Сгруппируйте несколько аватаров вместе, заключив их в компонент `<b-avatar-group>`:

<ClientOnly>
  <b-card>
    <b-avatar-group size="60px">
      <b-avatar></b-avatar>
      <b-avatar text="BV" variant="primary"></b-avatar>
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar text="OK" variant="danger"></b-avatar>
      <b-avatar variant="warning"></b-avatar>
      <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
      <b-avatar icon="music-note" variant="success"></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group size="60px">
    <b-avatar></b-avatar>
    <b-avatar text="BV" variant="primary"></b-avatar>
    <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
    <b-avatar text="OK" variant="danger"></b-avatar>
    <b-avatar variant="warning"></b-avatar>
    <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
    <b-avatar icon="music-note" variant="success"></b-avatar>
  </b-avatar-group>
</b-card>
```

**Примечания:**

- `variant`, `square` и `rounded` свойства в группе `<b-avatar-group>` будут иметь приоритет над соответствующими реквизитами на отдельных аватарах.

### Размер группы

Чтобы изменить размер аватаров, используйте свойство `size` в `<b-avatar-group>`. Свойство `size` принимает значения того же типа, что и свойство `size` на `<b-avatar>`. Обратите внимание, что свойство `size` будет игнорироваться для отдельных аватаров, если они помещены в `<b-avatar-group>`.

<ClientOnly>
  <b-card>
    <b-avatar-group size="5rem">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group size="5rem">
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
</b-card>
```

### Вариант группы

Используйте свойство `variant`, чтобы раскрасить все дочерние аватары в группе `<b-avatar-group>`. Обратите внимание, что параметр `variant`, если он установлен, переопределит параметр `variant`, указанный для отдельных аватаров.

<ClientOnly>
  <b-card>
    <b-avatar-group variant="success">
      <b-avatar></b-avatar>
      <b-avatar variant="info"></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group variant="success">
    <b-avatar></b-avatar>
    <b-avatar variant="info"></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
</b-card>
```

### Групповое округление

Подобно свойству `variant`, свойства `<b-avatar-group>` `square` и `rounded`, имеют приоритет над соответствующими свойствам на отдельных дочерних аватарах.

<ClientOnly>
  <b-card>
    <b-avatar-group rounded="lg">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group rounded="lg">
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
</b-card>
```

### Перекрытие групп

По умолчанию дочерние аватары внутри `<b-avatar-group>` будут перекрываться с коэффициентом `0.3` (относительно размера аватара). Вы можете контролировать величину перекрытия, установив свойство `overlap` на значение от `0` до `1`, где `0` означает отсутствие перекрытия, а `1` означает 100% перекрытие.

<ClientOnly>
  <b-card>
    <b-avatar-group size="3rem" overlap="0.65">
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
      <b-avatar></b-avatar>
    </b-avatar-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-avatar-group size="3rem" overlap="0.65">
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
    <b-avatar></b-avatar>
  </b-avatar-group>
</b-card>
```

**Примечание:**

`overlap` имеет эффект только тогда, когда вы также явно устанавливаете свойство `size`.

## Доступность

Используйте свойство `aria-label`, чтобы предоставить доступную, удобную для чтения с экрана метку для вашего аватара.
Если у вас есть значок, рекомендуется добавить к вашей арии-метке информацию о назначении или содержании значка (например, `'3 messages'`, `'online'` и т. д.).

Хотя событие `click` генерируется независимо от того, установлены ли свойства `button`, `href` или `to`, настоятельно рекомендуется использовать свойство `button`, когда событие клика должно инициировать действие (или использовать `to` или `href` при изменении маршрутов или URL-адресов) по соображениям доступности.

## Примечания по реализации

Аватары основаны на компонентах `<b-badge>` и `<b-button>`, и, как таковые, полагаются на варианты классов Bootstrap `badge-*` и `btn-*`, а также `rounded-*` [классы утилит](/docs/reference/utility-classes).

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

<script lang="ts" setup>
  import {ref, Ref} from 'vue';

  const alertEvent = (event: PointerEvent) => {
    alert(`Clicked`);
  }
</script>
