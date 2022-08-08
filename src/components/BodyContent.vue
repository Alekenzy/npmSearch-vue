<template>
    <ItemBlocks :objects="packages" />
    <right-widget />
</template>

<script>
import ItemBlocks from "./ItemBlocks.vue";

export default {
    props: {
        packages: {
            type: Object
        }
    },
    components: { ItemBlocks }
}
</script>

<style scoped>
</style>