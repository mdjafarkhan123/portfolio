<script setup>
const { title, category, image, link } = defineProps({
    title: {
        type: String,
        default: "Untitled Project",
    },
    category: {
        type: Array,
        default: () => ["Development"], // Use a factory function for arrays/objects
    },
    image: {
        type: String,
        default: "/placeholder.jpg", // A fallback image path
    },

    link: {
        type: String,
        default: "#",
    },
});
</script>

<template>
    <div class="work-card">
        <div class="work-card__image">
            <img :src="image" :alt="title" />
        </div>
        <div class="work-card__content">
            <div class="work-card__data-wrapper">
                <div class="work-card__meta">
                    <span v-for="(item, index) in category" :key="index">
                        {{ item }}
                        <span v-if="index < category.length - 1" class="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                ></path>
                            </svg>
                        </span>
                    </span>
                </div>
                <h3 class="work-card__title">{{ title }}</h3>
            </div>
            <a
                :href="link"
                class="work-card__button btn btn--fill"
                :aria-label="`Visit ${title} project`"
            >
                <svg
                    width="30"
                    height="16"
                    viewBox="0 0 30 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M29.2071 8.70711C29.5976 8.31658 29.5976 7.68342 29.2071 7.29289L22.8431 0.928932C22.4526 0.538408 21.8195 0.538408 21.4289 0.928932C21.0384 1.31946 21.0384 1.95262 21.4289 2.34315L27.0858 8L21.4289 13.6569C21.0384 14.0474 21.0384 14.6805 21.4289 15.0711C21.8195 15.4616 22.4526 15.4616 22.8431 15.0711L29.2071 8.70711ZM0.5 9H28.5V7H0.5V9Z"
                        fill="white"
                    />
                </svg>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.work-card {
    color: var(--color-text-dark);
    background-color: var(--color-bg-white);
    overflow: hidden;
    border-radius: 40px;

    &__image {
        overflow: hidden;
        border-radius: 40px;

        img {
            aspect-ratio: 5 / 4;
            object-fit: cover;
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        gap: 1em;
        align-items: center;
        padding: 1.6em;

        .work-card__title {
            font-family: "Poppins";
            font-weight: 600;
        }

        .work-card__meta {
            display: flex;
            font-size: 0.8rem;
            font-weight: 500;

            .icon {
                margin-inline: 0.8em;

                svg {
                    color: var(--color-primary);
                    width: 8px;
                    height: auto;
                }
            }
        }

        .work-card__data-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.4em;
        }

        .work-card__button {
            padding: 0.6em 0.4em;
            line-height: 1;

            svg {
                vertical-align: middle;
                width: 50px;
            }
        }
    }
}
</style>
