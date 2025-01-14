import AnchoredHeading from './anchored-heading'
import ComponentDoc from './component-doc.vue'
import {computed, defineComponent, h, ref, toRefs, resolveComponent} from 'vue'
import {usePageData} from '@vuepress/client'

export default defineComponent({
  name: 'BDVComponents',
  setup(props, {attrs}) {
    const pagedata: any = usePageData()
    return {
      pagedata,
    }
  },
  render() {
    return [
      h(AnchoredHeading, {id: 'component-reference'}, () => 'Справочник компонента'),
      this.pagedata.componentReference.meta.components.map(
        ({component, emits, rootEventListeners, slots, aliases, props: propsMeta, version}) => {
          return h(ComponentDoc, {
            component,
            emits,
            rootEventListeners,
            slots,
            aliases,
            propsMeta,
            version,
          })
        }
      ),
    ]
  },
})
