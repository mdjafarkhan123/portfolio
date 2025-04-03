<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
    <Header></Header>
    <main>
        <router-view></router-view>
    </main>
    <Footer> </Footer>
</template>

<style lang="scss" scoped>
@use "./styles/utils" as responsive;
main {
    z-index: 2;
    margin-bottom: 15em;
    pointer-events: none;
}

@include responsive.respond-to("laptop") {
    main {
        margin-bottom: 10em;
    }
}
</style>
