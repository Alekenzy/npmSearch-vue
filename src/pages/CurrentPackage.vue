<template>
  <DrawCurrentPackage :page="page" :versions="versions" :isPageLoading="isPageLoading"/>
</template>

<script>
import axios from "axios";
import DrawCurrentPackage from "@/components/DrawCurrentPackage.vue";
export default {
  data() {
        return {
            page: {},
            versions: {},
            isPageLoading: false,
        }
    },
    components: {
      DrawCurrentPackage
    },
    methods: {
      async getDataOfPackage(query) {
        try {
          this.isPageLoading = true;
          const response = await axios.get(`https://registry.npmjs.org/${query}`, {
          });
          this.page = response.data;
          let arrayed = Object.keys(response.data.versions);
          let last = arrayed.sort().slice(arrayed.length-1, arrayed.length);
          this.versions = response.data.versions[last]
          // console.log(response.data);
          // console.log(this.versions);
        } catch (error) {
          console.error("Error: " + error)
        } finally {
          this.isPageLoading = false;
        }
      },
    //   dependencies: (obj) => {
    //     let objs = Object.keys(obj).sort();

    //     const list = () => {
    //       return <div className={cl.dependencies}><h2>Dependencies:</h2>  {objs.map((item) => {
    //         return <div key={item} className={cl.dependency}>
    //           <code>{item}</code>
    //         </div>
    //       })}
    //       </div>
    //     }
    //     return list();
    //   }
    },
    mounted() {
        this.getDataOfPackage(this.$route.params.name);
    },
    beforeRouteUpdate(to, from) {
      this.getDataOfPackage(to.params.name);
    }
}
</script>

<style scoped>

</style>