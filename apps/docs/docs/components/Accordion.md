# Аккордеон

Создавайте вертикально сворачивающиеся аккордеоны в сочетании с компонентом `<b-collapse>`.

## Как это работает

`<b-accordion-item>` использует компонент `<b-collapse>` внутри, чтобы сделать его сворачиваемым. Чтобы отобразить развернутый аккордеон, добавьте свойство `visible` к компоненту `<b-accordion-item>`.

::: tip
Анимационный эффект этого компонента зависит от медиа-запроса с уменьшенным движением. Смотрите раздел [уменьшенное движение в нашей документации по специальным возможностям](https://getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion).
:::

## Пример

Щелкните аккордеоны ниже, чтобы развернуть/свернуть содержимое аккордеона.

<ClientOnly>
    <b-card class="text-dark">
        <b-accordion>
            <b-accordion-item title="Accordion Item #1" visible>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #2">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #3">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </b-accordion-item>
        </b-accordion>
    </b-card>
</ClientOnly>

```html
<b-accordion>
  <b-accordion-item title="Accordion Item #1" visible>
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It's also worth noting
    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
    does limit overflow.
  </b-accordion-item>
  <b-accordion-item title="Accordion Item #2">
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It's also worth noting
    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
    does limit overflow.
  </b-accordion-item>
  <b-accordion-item title="Accordion Item #3">
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It's also worth noting
    that just about any HTML can go within the <code>.accordion-body</code>, though the transition
    does limit overflow.
  </b-accordion-item>
</b-accordion>
```

### Flush

Добавьте свойство `flush`, чтобы удалить цвет фона по умолчанию, некоторые границы и некоторые закругленные углы, чтобы отображать аккордеоны от края до края с их родительским контейнером.

<ClientOnly>
    <b-card class="text-dark bg-light">
        <b-accordion flush>
            <b-accordion-item title="Accordion Item #1">
                Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the first item's accordion body.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #2">
                Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the second item's accordion body. Let's imagine this being filled with some actual content.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #3">
                Placeholder content for this accordion, which is intended to demonstrate the <code>flush</code> property. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
            </b-accordion-item>
        </b-accordion>
    </b-card>
</ClientOnly>

```html
<b-accordion flush>
  <b-accordion-item title="Accordion Item #1">
    Placeholder content for this accordion, which is intended to demonstrate the
    <code>flush</code> property. This is the first item's accordion body.
  </b-accordion-item>
  <b-accordion-item title="Accordion Item #2">
    Placeholder content for this accordion, which is intended to demonstrate the
    <code>flush</code> property. This is the second item's accordion body. Let's imagine this being
    filled with some actual content.
  </b-accordion-item>
  <b-accordion-item title="Accordion Item #3">
    Placeholder content for this accordion, which is intended to demonstrate the
    <code>flush</code> property. This is the third item's accordion body. Nothing more exciting
    happening here in terms of content, but just filling up the space to make it look, at least at
    first glance, a bit more representative of how this would look in a real-world application.
  </b-accordion-item>
</b-accordion>
```

### Всегда открыты

Добавьте свойство `free`, чтобы элементы аккордеона оставались открытыми при открытии другого элемента.

<ClientOnly>
    <b-card class="text-dark">
        <b-accordion free>
            <b-accordion-item title="Accordion Item #1">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #2">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #3">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>default</code> slot, though the transition does limit overflow.
            </b-accordion-item>
        </b-accordion>
    </b-card>
</ClientOnly>

```html
<b-accordion free>
  <b-accordion-item title="Accordion Item #1">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It's also worth noting
    that just about any HTML can go within the <code>default</code> slot, though the transition does
    limit overflow.
  </b-accordion-item>
  <b-accordion-item title="Accordion Item #2">
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It's also worth noting
    that just about any HTML can go within the <code>default</code> slot, though the transition does
    limit overflow.
  </b-accordion-item>
  <b-accordion-item title="Accordion Item #3">
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
    collapse plugin adds the appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    modify any of this with custom CSS or overriding our default variables. It's also worth noting
    that just about any HTML can go within the <code>default</code> slot, though the transition does
    limit overflow.
  </b-accordion-item>
</b-accordion>
```

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>
