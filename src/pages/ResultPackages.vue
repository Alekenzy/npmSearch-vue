<template>
  <BodyContent :packages="packages" />
</template>

<script>
import BodyContent from "@/components/BodyContent.vue";
import axios from 'axios'
export default {
  components: {
    BodyContent
  },
  data: () => ({
    packages: [],
    isObjectsLoading: false
  }),
  methods: {
        async getData(query) {
            try {
                this.isObjectsLoading = true;
                const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${query}`, {
                });
                this.packages = response.data;
            } catch (error) {
                alert("Error: " + error)
            } finally {
                this.isObjectsLoading = false;
            }
        }
    },
    
    mounted() {
        if(this.$route.query.q) {
            this.getData(this.$route.query.q)
        }
    },
  beforeRouteUpdate(to, from){
     if(to.query.q) {
            this.getData(to.query.q)
        }
    },
}
</script>

<style>

</style>