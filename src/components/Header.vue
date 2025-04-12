<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

// Reactive state
const toggle = ref(false);
const y = ref(100);
const c = ref(100);

// DOM refs
const menuToggle = ref(null);
const path = ref(null);
const ul = ref(null);

// Animation control
let animationFrame = null;

// Reactive media query
const isLargeScreen = ref(window.matchMedia("(min-width: 1024px)").matches);
const mediaQuery = window.matchMedia("(min-width: 1024px)");
const updateMediaQuery = () => {
    isLargeScreen.value = mediaQuery.matches;
    if (isLargeScreen.value && toggle.value) {
        toggle.value = false;
    }
};
mediaQuery.addEventListener("change", updateMediaQuery);

function lerp(start, end, t) {
    return start + (end - start) * t;
}

function animate() {
    if (toggle.value) {
        y.value = lerp(y.value, 0, 0.1);
        c.value = lerp(c.value, 0, 0.125);
    } else {
        const speedY = isLargeScreen.value ? 0.033 : 0.1;
        const speedC = isLargeScreen.value ? 0.041 : 0.125;
        y.value = lerp(y.value, 100, speedY);
        c.value = lerp(c.value, 100, speedC);
    }

    if (path.value) {
        path.value.setAttribute(
            "d",
            `M 0 ${y.value} L 0 100 100 100 100 ${y.value} C 50 ${c.value}, 50 ${c.value}, 0 ${y.value}`
        );
    }

    if (
        (toggle.value && y.value < 0.1 && c.value < 0.1) ||
        (!toggle.value && y.value > 99.9 && c.value > 99.9)
    ) {
        cancelAnimationFrame(animationFrame);
        y.value = toggle.value ? 0 : 100;
        c.value = toggle.value ? 0 : 100;
        return;
    }

    animationFrame = requestAnimationFrame(animate);
}

// Toggle handler
function handleToggle() {
    toggle.value = !toggle.value;
    cancelAnimationFrame(animationFrame);
    if (toggle.value) {
        animate();
    } else {
        // Trigger animation only if needed
        if (y.value !== 100 || c.value !== 100) {
            animate();
        }
    }
}

// Watch toggle for menu visibility
watch(toggle, (newValue) => {
    if (ul.value) {
        if (newValue) {
            ul.value.style.display = "flex";
            setTimeout(() => {
                ul.value.classList.add("active");
            }, 50);
        } else {
            ul.value.classList.remove("active");
            setTimeout(() => {
                ul.value.style.display = "none";
            }, 500);
        }
    }
});

onMounted(() => {
    if (menuToggle.value) {
        menuToggle.value.addEventListener("click", handleToggle);
    }
    if (ul.value) {
        ul.value.addEventListener("click", handleToggle);
    }
});

onUnmounted(() => {
    if (menuToggle.value) {
        menuToggle.value.removeEventListener("click", handleToggle);
    }
    if (ul.value) {
        ul.value.removeEventListener("click", handleToggle);
    }
    mediaQuery.removeEventListener("change", updateMediaQuery);
    cancelAnimationFrame(animationFrame);
});
</script>

<template>
    <header class="header">
        <div class="header__container">
            <div class="header__nav">
                <div class="header__logo">
                    <router-link to="/" aria-label="Home">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M29.2338 37.5381L39.75 39.875L37.4131 29.3587C38.9044 26.5699 39.75 23.3837 39.75 20C39.75 9.02334 30.8517 0.125 19.875 0.125C8.89843 0.125 0 9.02334 0 20C0 30.9766 8.89843 39.875 19.875 39.875C23.2587 39.875 26.4449 39.0295 29.2338 37.5381ZM28.6583 33.3381L27.3594 34.0327C25.0773 35.2531 22.5273 35.9 19.875 35.9C11.0936 35.9 3.975 28.7814 3.975 20C3.975 11.2187 11.0936 4.1 19.875 4.1C28.6563 4.1 35.775 11.2187 35.775 20C35.775 22.6523 35.1281 25.2023 33.9078 27.4843L33.2132 28.7832L34.5146 34.6395L28.6583 33.3381ZM29.8125 20H25.8375C25.8375 23.2931 23.1681 25.9625 19.875 25.9625C16.5819 25.9625 13.9125 23.2931 13.9125 20H9.9375C9.9375 25.4883 14.3867 29.9375 19.875 29.9375C25.3633 29.9375 29.8125 25.4883 29.8125 20Z"
                                fill="#17F700"
                            ></path>
                        </svg>
                    </router-link>
                </div>
                <div class="header__action">
                    <router-link to="/contact" class="btn"
                        >Get in touch</router-link
                    >
                </div>
                <div
                    class="header__toggler"
                    ref="menuToggle"
                    role="button"
                    :aria-expanded="toggle"
                    aria-label="Toggle navigation menu"
                >
                    <input type="checkbox" v-model="toggle" />
                    <svg viewBox="0 0 32 32">
                        <path
                            class="line line-top-bottom"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        ></path>
                        <path class="line" d="M7 16 27 16"></path>
                    </svg>
                </div>
                <div
                    class="header__menu header__menu-wrapper"
                    :class="{ active: toggle }"
                >
                    <svg
                        class="transition"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <path
                            ref="path"
                            class="path"
                            fill="var(--color-bg-white)"
                            d="M 0 100 L 0 100 100 100 100 100 C 50 100, 50 100, 0 100"
                        ></path>
                    </svg>
                    <ul ref="ul" class="header__menu-items">
                        <li class="header__menu-item">
                            <router-link to="/" class="header__menu-item-link"
                                >Home</router-link
                            >
                        </li>
                        <li class="header__menu-item">
                            <router-link
                                to="/#about"
                                class="header__menu-item-link"
                                >About</router-link
                            >
                        </li>
                        <li class="header__menu-item">
                            <router-link
                                to="/works"
                                class="header__menu-item-link"
                                >Works</router-link
                            >
                        </li>
                        <li class="header__menu-item">
                            <router-link
                                to="/contact"
                                class="header__menu-item-link"
                                >Contact</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: relative;
    z-index: 3;
    background-color: var(--color-bg-dark);

    &__container {
        max-width: 1920px;
        display: flex;
        padding-block: 0.5em;
        padding-inline: 1em;
        z-index: inherit;
    }

    &__nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        z-index: inherit;
    }

    &__logo {
        cursor: pointer;
        flex-grow: 1;
        z-index: inherit;
    }

    &__action {
        .btn {
            font-size: clamp(0.875rem, 0.709rem + 0.698vw, 1.25rem);
            color: var(--color-text-white);
            padding: clamp(0.625rem, 0.459rem + 0.698vw, 1rem)
                clamp(1.25rem, 0.952rem + 1.19vw, 1.875rem);
        }
    }

    &__toggler {
        --size: clamp(3.125rem, 2.645rem + 1.829vw, 4.063rem);
        position: relative;
        display: flex;
        width: var(--size);
        height: var(--size);
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary);
        border-radius: 100px;
        gap: 5px;
        z-index: inherit;
        overflow: hidden;

        input {
            width: var(--size);
            height: var(--size);
            appearance: none;
            position: absolute;
            cursor: pointer;
            z-index: 1;
        }

        input:checked + svg {
            transform: rotate(-45deg);
        }

        input:checked + svg .line-top-bottom {
            stroke-dasharray: 20 300;
            stroke-dashoffset: -32.42;
        }

        svg {
            pointer-events: none;
            height: clamp(2rem, 0.488vw + 1.795rem, 2.4rem);
            transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);

            .line {
                fill: none;
                stroke: white;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 2;
                transition: stroke-dasharray 100ms cubic-bezier(0.4, 0, 0.2, 1),
                    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
            }

            .line-top-bottom {
                stroke-dasharray: 12 63;
            }
        }
    }

    &__menu-wrapper {
        position: fixed;
        width: 100%;
        min-height: 100vh;
        left: 0;
        top: 0;
        z-index: 1;
        pointer-events: none;
        transition: transform 0.5s ease;

        &.active {
            transform: translateY(0);
            pointer-events: auto;
        }
    }

    &__menu {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .transition {
        position: absolute;
        left: 0;
        top: -20px;
        width: 100%;
        min-height: calc(100vh + 40px);
        z-index: 1;

        .path {
            transition: d 0.05s ease;
        }
    }

    &__menu-items {
        display: none;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        opacity: 0;
        z-index: 2;
        transition: opacity 0.5s ease;
        pointer-events: none;

        &.active {
            opacity: 1;
            pointer-events: auto;
        }
    }

    &__menu-item {
        font-size: var(--fs-xl);
        font-weight: 700;

        &-link {
            color: var(--color-text-dark);
            text-decoration: none;
            transition: color 0.2s ease;

            &:hover {
                color: var(--color-primary);
            }
        }
    }
}
</style>
