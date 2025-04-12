<script setup>
import LogoSpinner from "../components/LogoSpinner.vue";
import Project from "../components/Project.vue";
import projects from "../data/project";
const resolveImagePath = (path) => new URL(path, import.meta.url).href;
</script>

<template>
    <main>
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
        <section class="cta">
            <div class="container cta__container">
                <div class="cta__content">
                    <h2 class="cta__title cta__title--small">Let's</h2>
                    <div class="cta__title-wrapper">
                        <h2 class="cta__title cta__title--big">BUILD</h2>
                        <router-link to="/contact#contact__title">
                            <LogoSpinner />
                        </router-link>
                        <h2 class="cta__title cta__title--big">GREAT</h2>
                    </div>
                    <h2 class="cta__title cta__title--small">
                        Things Together
                    </h2>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/utils" as responsive;
main {
    position: relative;
    z-index: 2;
    pointer-events: none;
}
.works {
    background-color: var(--color-bg-dark);
    padding: var(--space-md) 0 var(--space-2xl) 0;
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

.cta {
    --round: clamp(3.75rem, -0.116rem + 16.279vw, 12.5rem);
    background-color: var(--color-bg-dark);
    border-radius: 0 0 var(--round) var(--round);
    overflow: hidden;
    pointer-events: all;
    &__container {
        max-width: 1280px;
        background-color: var(--color-bg-dark);
    }
    &__content {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-sm);
        width: 100%;
        padding-bottom: var(--space-2xl);
    }
    &__title {
        text-align: center;
        &-wrapper {
            width: 100%;
            display: flex;
            flex-flow: column;
            align-items: center;
            .cta__image {
                width: clamp(10.625rem, 8.802rem + 7.674vw, 14.75rem);
                margin: var(--space-sm);
            }
        }
        &--small {
            font-size: var(--fs-xl);
        }

        &--big {
            font-size: var(--fs-2xl);
        }
    }
}

@include responsive.respond-to("laptop") {
    .works {
        &__showcase {
            grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        }
    }

    .cta {
        &__title-wrapper {
            flex-flow: row;
            justify-content: space-between;
        }
    }
}
</style>
