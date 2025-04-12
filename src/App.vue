<script setup>
import { onMounted, onUnmounted } from "vue";
import Lenis from "lenis";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";


const initLenis = () => {
    const lenis = new Lenis({
        duration: 1.2,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    onUnmounted(() => {
        lenis.destroy();
    });
};

onMounted(() => {
    initLenis();
});
</script>

<template>
    <Header></Header>
    <router-view></router-view>
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
