<script setup>
import Project from "../components/Project.vue";
import projects from "../data/project";
const resolveImagePath = (path) => new URL(path, import.meta.url).href;
</script>

<template>
    <section class="works">
        <div class="works__container container">
            <div class="works__data">
                <h1 class="works__title">PROJECTS</h1>
                <p class="works__subtitle subtitle">
                    Checkout some of my latest works - Each project is built
                    with care and creativity
                </p>
            </div>
            <div class="works__showcase">
                <Project
                    v-for="item in projects"
                    :key="item.id"
                    :title="item.title"
                    :image="resolveImagePath(item.image)"
                    :category="item.tag"
                ></Project>
            </div>
        </div>
        <div class="works__helper-section"></div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/utils" as responsive;
.works {
    --round: clamp(3.75rem, -0.116rem + 16.279vw, 12.5rem);
    background-color: var(--color-bg-dark);
    padding: var(--space-md) 0 var(--space-2xl) 0;
    border-radius: 0 0 var(--round) var(--round);
    z-index: 2;
    overflow: hidden;
    pointer-events: all;
    &__container {
        background-color: var(--color-bg-dark);
        flex-flow: column;
        gap: var(--space-xl);
    }
    &__data {
        display: flex;
        flex-flow: column;
        gap: var(--space-sm);
        text-align: center;
    }

    &__showcase {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2em;
    }
}

@include responsive.respond-to("laptop") {
    .works {
        &__showcase {
            grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        }
    }
}
</style>
