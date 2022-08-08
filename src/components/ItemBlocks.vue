<template>
    <div class="objectsList">
              <div class="objects" v-for="obj in objects.objects" :key="obj.package.name">
                <div class="titleOfLi">
                  <span class="titleOfLiTitle" @click="$router.push(`/package/${obj.package.name}`)">
                        {{obj.package.name}}
                  </span>
                </div>
                <div class="descriptionOfLi">
                    {{obj.package.description}}
                </div>
                <div class="keywords">
                    <code class="keyword" v-for="keyword in obj.package.keywords" :key="keyword">
                        {{keyword}}
                    </code>
                </div>
              </div>
          </div>
</template>

<script>
export default {
    props: {
        objects: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.objectsList {
    box-sizing: border-box;
    padding: 30px 50px 30px 30px;
    margin-right: 400px;
    margin-top: 83px;
}

.objects {
    list-style: none;
    height: 100%;
    min-height: 100px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #00bdbd;
}

.titleOfLi {
    font-size: large;
    margin-bottom: 10px;
}

.titleOfLiTitle {
    text-decoration: none;
    cursor: pointer;
    color: #ffd700;
    transition-duration: 0.3s;
}

.titleOfLiTitle:hover {
    color: #8b7700;
}

.descriptionOfLi {
    width: 90%;
    max-width: 1000px;
    color: #ffffff86;
    font-size: 15px;
}

.keywords {
    margin-top: 10px;
    max-width: 90%;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    font-size: 13px;
}

code{
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

.keyword {
    margin-right: 10px;
    background-color: #5a5a5a;
    padding: 2px 5px;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    transition-duration: 0.3s;
}

.keyword:hover {
    background-color: #3d3d3d;
}

@media screen and (max-width: 1200px) {
    .objectsList {
      margin: 30px;
    }
  }
</style>