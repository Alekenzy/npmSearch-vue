<template>
        <form class="search-form" @submit.prevent="search">
            <input
                type="search"
                class="input"
                :value="modelValue"
                @input="updateInput"
            >
            <button class="button">search</button>
        </form>
</template>

<script>
export default {
    name: 'search-form',
    props: {
        modelValue: {
            type: String
        }
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        },
        search() {
            this.$router.push(`/search?q=${this.modelValue}`)
        }
    }
}
</script>

<style>
.search-form {
    display: flex;
    align-items: center;
}
.input {
    margin: 0 20px;
    font-size: 100%;
    background-color: #5a5a5a;
    color: #fff;
    width: 100%;
    height: 30px;
    border: 0;
    outline: 0;
    border-bottom: 3px solid #00bdbd;
    border-radius: 5px;
}

.button {
    width: 80px;
    height: 30px;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: #008a8a;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition-duration: 0.3s;
}
.button:hover {
    background-color: #006666;
}
</style>