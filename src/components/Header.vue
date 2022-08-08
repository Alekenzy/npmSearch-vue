<template>
  <div class="header">
    <div class="header-content">
        <icon-menu />
        <search-form v-model="modelValue"/>
        <AutoComplete :searchQuery="modelValue" :visible="isVisible"/>
    </div>
  </div>
</template>

<script>
import AutoComplete from '@/components/AutoComplete.vue';
export default {
    data() {
      return {
        modelValue: '',
        isVisible: false
      }
    },
    components: { AutoComplete },
    watch: {
      modelValue(newStr) {
        if(newStr != "") {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      }
    }
}
</script>

<style scoped>
.header {
    margin: 0;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 2px solid #00bdbd;
    position: relative;
}
</style>