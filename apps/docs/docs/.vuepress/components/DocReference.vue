<template>
  <h2
    id="component-reference"
    tabindex="-1"
  >
    <a
      class="header-anchor"
      href="#component-reference"
      aria-hidden="true"
    >#</a> Справочник компонента
  </h2>

  <template v-for="(component, index) in reference.meta.components" :key="index">
    <h3 :id="component.component" tabindex="-1">
      <a class="header-anchor" :href="`#${component.component}`" aria-hidden="true">#</a>
      <code>&lt;{{ component.component }}&gt;</code>
    </h3>

    <template v-if="component.props">
      <h4
        id="properties"
        tabindex="-1"
      >
        Свойство
        <a
          class="header-anchor"
          href="#properties"
          aria-hidden="true"
        >#</a>
      </h4>

      <table>
        <thead>
          <tr>
            <th>Свойство</th>
            <th>Тип</th>
            <th>По умолчанию</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prop, index) in component.props" :key="index">
            <td class="text-nowrap">
              <code>{{ prop.prop }}</code>
            </td>
            <td v-html="
              Array.isArray(prop.type)
                ? prop.type.map((item) => `<code>${item}</code>`).join(' or ')
                : `<code>${prop.type}</code>`
            "></td>
            <td>
              <code>{{
                typeof prop.default === 'string' ? `'${prop.default}'` : prop.default
              }}</code>
            </td>
            <td>{{ prop.description }}</td>
          </tr>
        </tbody>
      </table>
    </template>

    <template v-if="component.events">
      <h4
        id="events"
        tabindex="-1"
      >
        <a
          class="header-anchor"
          href="#events"
          aria-hidden="true"
        >#</a> События
      </h4>

      <table>
        <thead>
          <tr>
            <th>Событие</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in component.events" :key="index">
            <td class="text-nowrap">
              <code>{{ event.event }}</code>
            </td>
            <td>{{ event.description }}</td>
          </tr>
        </tbody>
      </table>
    </template>

    <template v-if="component.slots">
      <h4
        id="slots"
        tabindex="-1"
      >
        <a
          class="header-anchor"
          href="#slots"
          aria-hidden="true"
        >#</a> Слоты
      </h4>

      <table>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(slot, index) in component.slots" :key="index">
            <td class="text-nowrap">
              <code>{{ slot.name }}</code>
            </td>
            <td>{{ slot.description }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </template>
</template>

<script setup lang="ts">
defineProps({
  reference: { type: Object, required: true },
})
</script>
