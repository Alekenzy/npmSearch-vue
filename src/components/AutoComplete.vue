<template>
  <div class="autocomplete" v-show="visible">
    <div class="autocomplete__content">
      <div class="autocomplete__item" v-for="item in items.slice(0, 5)" :key="item.name">
        <div class="autocomplete__item__title">
          <span class="title" @click="$router.push(`/package/${item.package.name}`)">
            {{ item.package.name }}
          </span>
        </div>
        <div class="autocomplete__item__description">
          <span class="description">
            {{ item.package.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: [],
      isObjectsLoading: false,
    }
  },
  props: {
    searchQuery: {
      type: String
    },
    visible: {
      type: Boolean
    }
  },
  methods: {
    async getData(query) {
      try {
        this.isObjectsLoading = true;
        const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${query}`, {
        });
        this.items = response.data.objects;
      } catch (error) {
        alert("Error: " + error);
      } finally {
        this.isObjectsLoading = false;
      }
    }
  },
  watch: {
    searchQuery(newQuery) {
      if (this.visible) {
        this.getData(newQuery);
      }
    }
  }
}
</script>

<style scoped>
.autocomplete {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  position: absolute;
  right: 18px;
  top: 55px;
  z-index: 1
}

.autocomplete__content {
  background-color: #fff;
  width: 300px;
  color: #000;
}

.autocomplete__item {
  border-bottom: 2px solid #00bdbd;
}

.autocomplete__item__title {
  padding: 10px 0;
  font: bold;
  background-color: #cfcfcf;
}

.autocomplete__item__description {
  padding: 10px 10px;
  background-color: #7c7c7c;
}

.title {
  margin: 10px;
  cursor: pointer;
}

.description {
  margin: 10px;
  color: #ffffff;
}
</style>