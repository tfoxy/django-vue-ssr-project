<template>
    <div id="app">
        <div>Hello World</div>
        <input v-model="foo" />
        <div v-text="foo">V-TEXT</div>
        <div>{{ foobar }}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                foo: 'bar',
            };
        },
        props: {
            foobar: String,
        },
    };
</script>
<style scoped>
    #app {
        color: red;
    }
</style>
