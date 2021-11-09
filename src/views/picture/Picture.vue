<template>
    <div class="picture">
        <beehive></beehive>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Beehive from '@/components/content/beehive/Beehive.vue'

export default defineComponent({
    name:'Picture',
    components:{ Beehive },
    setup() {
        
    },
})
</script>

<style lang="less" scoped>

</style>