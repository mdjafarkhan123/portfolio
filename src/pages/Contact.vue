<script setup></script>

<template>
    <main>
        <section id="contact" class="contact">
            <div class="contact__container container">
                <div class="contact__texts">
                    <h1 id="contact__title" class="contact__title">
                        LET'S WORK TOGETHER
                    </h1>
                    <p class="contact__subtitle subtitle">
                        Have a project in mind? Feel free to reach out to me
                    </p>
                </div>
                <form action="" autocomplete class="contact__form">
                    <div class="input-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            required
                        />
                    </div>

                    <div class="input-group">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Your phone(optional)"
                        />
                        <input
                            type="text"
                            name="service"
                            id="service"
                            placeholder="Type of service (development, design)"
                            required
                        />
                    </div>
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Tell me about your project"
                        required
                    ></textarea>
                    <button type="submit" class="btn">Send message</button>
                </form>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/utils" as responsive;

.contact {
    --round: clamp(3.75rem, -0.116rem + 16.279vw, 12.5rem);
    pointer-events: all;
    background-color: var(--color-bg-dark);
    padding: var(--space-md) 0 var(--space-2xl) 0;
    border-radius: 0 0 var(--round) var(--round);
    &__container {
        flex-flow: column;
        gap: var(--space-lg);
    }
    &__text,
    &__form {
        width: 100%;
    }
    &__title,
    &__subtitle {
        text-align: center;
    }
    &__title {
        margin-bottom: var(--space-sm);
    }

    &__form {
        @mixin input-style() {
            width: 100%;
            color: var(--color-text-white);
            background-color: transparent;
            border: none;
            border-bottom: 1px solid white;
            padding: 1em;
            &::placeholder {
                color: rgba(255, 255, 255, 0.699);
                font-size: 1.2rem;
            }
            &:focus {
                border-bottom: 1px solid var(--color-primary);
                outline: none;
            }
        }
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .input-group {
            width: 100%;
            display: flex;
            flex-flow: column;
            input {
                @include input-style();
            }
        }

        textarea {
            @include input-style();
            &::placeholder {
                color: var(--color-text-white);
            }
        }
    }
}

@include responsive.respond-to("mobile") {
    .contact {
        .input-group {
            flex-flow: row;
            gap: var(--space-sm);
        }
    }
}
</style>
