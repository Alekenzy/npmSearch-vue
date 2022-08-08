<template>
    <div class="currentPackage">
        <div class="container">
            <div class="title">
                Overview about <code>
                    {{page.name}}
                </code>
            </div>
            <hr/>
            <div class="pageName">
                Latest version: <code class="version">
                    {{versions.version}}
                </code>
            </div>
            <div class="readme" v-html="readme"></div>
        </div>
    </div>
</template>

<script>
import { marked } from "marked";
export default {
    props: {
        page: {
            type: Object,
            required: true
        },
        versions: {
            type: Object,
            required: true
        }
    },
    computed: {
        readme() {
            if (!this.versions.readme) {
                if (this.page.readme) {
                    return marked(this.page.readme);
                }
                return
            }
            return marked(this.versions.readme);    
        },
    },
}
</script>

<style scoped>
.currentPackage {
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    width: 100%;
    max-width: 1000px;
    margin: 50px;
    border-radius: 15px;
    background-color: #fff;
    box-sizing: border-box;
}

.title {
    margin-top: 30px;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}

.pageName {
    float: right;
}

.dependencies {
    background-color: white;
    color: black;
    box-sizing: border-box;
    margin-bottom: 50px;
}

.dependency code {
    box-sizing: border-box;
    padding: 0 5px;
    color: #ff0000;
    font-size: 15px;
    cursor: pointer;
}

.dependency {
    margin-left: 50px;
}

.version {
    font-size: 20px;
    margin-right: 10px;
    border-radius: 3px;
    margin-top: 10px;
}
</style>