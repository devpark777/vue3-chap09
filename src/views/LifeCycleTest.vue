<script>
import { onBeforeMount, onMounted } from '@vue/runtime-core'
export default {
    setup() {
        onBeforeMount(() => {
            console.log('Before mounted')
        }),
        onMounted( () => {
            console.log('Component is mounted')
        })       
    },
}
</script>