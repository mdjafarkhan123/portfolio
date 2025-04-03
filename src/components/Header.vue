<script setup></script>

<template>
    <header class="header">
        <div class="header__container">
            <div class="header__nav">
                <div class="header__logo">
                    <router-link to="/">
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
                            />
                        </svg>
                    </router-link>
                </div>
                <div class="header__action">
                    <router-link to="/contact" class="btn btn--primary">
                        Get in touch
                    </router-link>
                </div>
                <div class="header__menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    z-index: 999;
    background-color: var(--color-bg-dark);
    &__container {
        display: flex;
        padding-block: 0.5em;
        padding-inline: 1em;
    }

    &__nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }
    &__logo {
        cursor: pointer;
        flex-grow: 1;
    }

    &__action {
        .btn {
            color: var(--color-text-white);
        }
    }
    &__menu {
        background-color: var(--color-primary);
        min-width: 50px;
        min-height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 100px;
        cursor: pointer;
        svg {
            fill: white;
            width: 25px;
            height: auto;
        }
    }
}
</style>
