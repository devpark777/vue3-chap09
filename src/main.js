import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'

//createApp(App).use(router).mount('#app')
//createApp(App).use(router).mixin(mixins).mount('#app')

const i18nStrings = {
    en: {
        hi: 'Hello!',
        mo : 'Good Morning!!!',
        bye : 'Good bye~~'
    },
    ko: {
        hi: '안녕하세요!',
        mo: '안녕히 주무셨서요!!!',
        bye : '안녕히 가시오..'
    }
}

const app = createApp(App)
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})
app.directive('pin', {
    mounted(el, binding) {
        el.style.position = 'fixed';
        el.style.top = binding.value.top + 'px';
        el.style.left = binding.value.left + 'px';             
    },
})
app.use(router)
app.use(i18nPlugin, i18nStrings)
app.mixin(mixins)
app.mount('#app')