<template>
    <div id="app">
        <div>Hello World</div>
        <input v-model="foo" />
        <div v-text="foo">V-TEXT</div>
    </div>
</template>
<script>
    export default {
        data: {
            foo: 'bar',
        },
    };
</script>
<style scoped>
    #app {
        color: red;
    }
</style>
