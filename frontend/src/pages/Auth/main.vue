<script seup lang="ts">
    import Login from './Login/index.vue'

    export default {
        data() {
            return {
                viewRender: 'Login' as 'Login'|'Register'
            }
        },
        components: {
            Login
        },
        methods: {
            changeView(viewName: 'Login'|'Register' ) {
                this.viewRender = viewName
            }
        }
    }
</script>

<template>
    <main>
        <Login
            v-if="viewRender === 'Login'"
            @change-view="changeView"
        />
        <h1 v-else-if="viewRender === 'Register'">TESTE 2</h1>
    </main>
</template>

<style scoped>
    main {
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: end;

        background-color: var(--color-background);
    }
</style>