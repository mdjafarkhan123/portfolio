<script setup>
import LogoSpinner from "../components/LogoSpinner.vue";
import Project from "../components/Project.vue";
import projects from "../data/project";

const works1 = projects.slice(0, 2);
const works2 = projects.slice(2, 4);
const resolveImagePath = (path) => new URL(path, import.meta.url).href;
</script>

<template>
    <div class="page-wrapper">
        <section class="hero">
            <div class="hero__container container">
                <div class="hero__image">
                    <img
                        src="../assets/images/1116-transformed 3.avif"
                        alt="Jafar Khan"
                    />
                </div>
                <div class="hero__data">
                    <h1 class="hero__title">Jafar Khan</h1>
                    <p class="hero__subtitle subtitle">
                        I am a freelance front-end developer from Dhaka,
                        Bangladesh
                    </p>
                </div>
            </div>
        </section>
        <section id="#about" class="about">
            <div class="about__background">
                <div class="about__container container">
                    <div class="about__jafar">
                        <div class="about__jafar__title">
                            <h2>About</h2>
                        </div>
                        <div class="about__jafar__content">
                            <div class="summary">
                                I am Jafar Khan, a freelance web designer and
                                developer with over 5 years of experience.
                            </div>
                            <p class="description">
                                Since 2020, I've brought more than 200 projects
                                to life, creating modern, interactive, and
                                high-performance websites for clients across the
                                globe. My priority is client satisfaction,
                                delivering high-quality, tailored solutions that
                                align with their vision. My 5-star average
                                rating across marketplaces reflects to my
                                dedication to quality, client satisfaction, and
                                delivering exceptional results. Whether you are
                                starting from scratch or elevating an existing
                                site, I'm here to craft a web experience that's
                                as unique as your vision.
                            </p>
                            <a href="#work" class="btn">View my work</a>
                        </div>
                    </div>
                    <div class="about__skills">
                        <div class="about__skills__title">
                            <h2>Skills</h2>
                        </div>
                        <div class="about__skills__content">
                            <ul class="skill__block">
                                <li class="skill__item">HTML</li>
                                <li class="skill__item">CSS</li>
                                <li class="skill__item">SCSS</li>
                                <li class="skill__item">JavaScript</li>
                                <li class="skill__item">React JS</li>
                                <li class="skill__item">Vue Js</li>
                            </ul>
                            <ul class="skill__block">
                                <li class="skill__item">Astro JS</li>
                                <li class="skill__item">GSAP</li>
                                <li class="skill__item">WordPress CMS</li>
                                <li class="skill__item">Git</li>
                                <li class="skill__item">Figma</li>
                                <li class="skill__item">PHP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="work" class="work">
            <div class="work__container container">
                <div class="work__content work__content-col1">
                    <div class="work__data">
                        <h2 class="work__title title">PROJECTS</h2>
                        <p class="work__subtitle subtitle">
                            Take a look at my works
                        </p>
                    </div>
                    <Project
                        v-for="item in works1"
                        :key="item.id"
                        :title="item.title"
                        :image="resolveImagePath(item.image)"
                        :category="item.tag"
                    ></Project>
                </div>
                <div class="work__content work__content-col2">
                    <Project
                        v-for="item in works2"
                        :key="item.id"
                        :title="item.title"
                        :image="resolveImagePath(item.image)"
                        :category="item.tag"
                    ></Project>
                    <div class="work__content__cta">
                        <p class="cta__title">Like what you see?</p>
                        <router-link to="/works" class="btn"
                            >Discover more</router-link
                        >
                    </div>
                </div>
            </div>
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
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/utils" as responsive;
.page-wrapper {
    --round: clamp(3.75rem, -0.116rem + 16.279vw, 12.5rem);
    background-color: var(--color-bg-dark);
    border-radius: 0 0 var(--round) var(--round);
    z-index: 2;
    overflow: hidden;
    pointer-events: all;
}
.hero {
    background-color: var(--color-bg-dark);
    &__container {
        flex-flow: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        padding-top: var(--space-xl);
        padding-bottom: var(--space-xl);
    }
    &__image {
        img {
            width: 100%;
            object-fit: cover;
            user-select: none;
            pointer-events: none;
        }
    }

    &__data {
        .hero__title {
            text-align: center;
            text-transform: uppercase;
        }

        .hero__subtitle {
            text-align: center;
        }
    }
}

.about {
    background-color: var(--color-bg-dark);
    padding-inline: var(--space-sm);
    &__background {
        border-radius: 3em;
        background-color: var(--color-bg-white);
    }
    &__container {
        padding-block: var(--space-xl);
        flex-flow: column;
        gap: var(--space-xl);
    }

    &__jafar {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        &__title {
            text-transform: uppercase;
            color: var(--color-heading-dark);
        }

        &__content {
            color: var(--color-text-dark);
            .summary {
                font-size: var(--fs-md);
                margin-bottom: 20px;
            }
            .btn {
                margin-top: var(--space-md);
            }
        }
    }

    &__skills {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        &__title {
            color: var(--color-heading-dark);
            text-transform: uppercase;
        }

        .skill__item {
            color: var(--color-text-dark);
            padding: 0.7em;
            border-bottom: 2px solid black;
        }
    }
}

.work {
    background-color: var(--color-bg-dark);
    &__container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        padding-block: var(--space-2xl);
        gap: 2em;
    }

    &__content {
        display: grid;
        gap: 2em;
        &__cta {
            .cta__title {
                text-align: start;
                font-size: var(--fs-md);
                margin-bottom: var(--space-sm);
            }

            .btn {
                color: var(--color-text-white);
            }
        }
    }
}

.cta {
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

@include responsive.respond-to("mobile") {
    .hero {
        &__container {
            padding-top: 0;
        }
        &__image {
            max-width: 620px;
            margin-bottom: -4em;
        }
    }

    .work {
        &__content-col1 {
            order: 2;
        }

        &__data {
            text-align: right;
        }
    }
}

@include responsive.respond-to("tablet") {
    .about {
        &__jafar,
        &__skills {
            flex-flow: row;
            justify-content: space-between;
            gap: 2em;
        }

        &__jafar__content,
        &__skills__content {
            width: 65%;
        }

        &__skills__content {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.3em;
        }
    }

    .work {
        &__container {
            grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
        }
    }
}

@include responsive.respond-to("laptop") {
    .about {
        &__skills__content {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
    }

    .work {
        &__container {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
