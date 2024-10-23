<template>
    <header>
        <h1>{{ title }}</h1>
    </header>

    <div class="input-fields">
        <input type="text" ref="name" />
        <button @click="handleClick" class="button">Focus Input</button>
        <button @click="toggleModal" class="button">Open Modal</button>

    </div>


    <teleport to=".modals" v-if="showModal" >
        <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
            <footer>Here is the the Slot</footer>

            <template v-slot:links>
                <p>Here is the named Slot | <code>v-slot:links</code></p>
                <a href="#" class="links">Sign up for now</a>
                <a href="#" class="links">More Info</a>
            </template>
        </Modal>
    </teleport>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
    name: "App",
    components: { Modal },
    data() {
        return {
            title: "The Journey of Vue Js",
            header: "Header Prop",
            text: " Text Prop ",
            showModal: false,
        };
    },
    methods: {
        handleClick() {
            console.log(this.$refs.name);
            this.$refs.name.classList.add("active");
            this.$refs.name.focus();
        },
        toggleModal() {
            this.showModal = !this.showModal;
        },
    },
};
</script>

<style>
#app , .modals{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin:0px;
    padding: 0px;

    /* transform-style: preserve-3d; */
}

h1 {
    color: #2cbb63;
    font-size: 40px;
    text-shadow: rgba(44, 187, 99, 0.15) 0 8px 16px;
    transition: text-shadow 0.3s ease; /* Smooth transition */
    cursor: pointer;
}

h1:hover {
    text-shadow: rgba(44, 187, 99, 0.3) 0 12px 24px;
}
.modal.sale {
    background: crimson;
    color: white;
}
.modal.sale h1 {
    color: white;
}
.modal .actions .links {
    color: #333;
    padding: 8px 1rem;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    min-width: 6rem;
    font-weight: 700;
    transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.modal .actions .links:hover {
    background-color: white;
    color: crimson;
}
.modal .actions p {
    flex: 100%;
    margin-block: 0px;
    font-size: 18px;
    font-style: italic;
    color: #ffffff7a;
}

input,
.input,
textarea,
select {
    -webkit-appearance: none;
    background-color: white;
    color: inherit;
    outline: none;
    resize: none;
    box-sizing: border-box;
    border-radius: 0.2em;
    border: 1px solid lightgray;
    box-shadow: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 0.6em;
    margin-right: 0.6em;
    min-width: 15em;

    /*  */

    border-radius: 4px;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
        rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
        rgba(44, 187, 99, 0.15) 0 16px 32px;
}
input::placeholder,
textarea::placeholder {
    color: lightgray;
}
input:hover:not(:disabled):not(:focus),
.input:hover:not(:disabled):not(:focus),
textarea:hover:not(:disabled):not(:focus),
select:hover:not(:disabled):not(:focus) {
    border-color: silver;
}
input:focus,
.input:focus,
textarea:focus,
select:focus {
    outline: 2px solid rgba(44, 187, 99, 0.3);
}
input:read-only,
textarea:read-only {
    color: darkgray;
}
input:disabled,
.input:disabled,
textarea:disabled,
select:disabled {
    background-color: whitesmoke;
    color: darkgray;
}

/* Buttons */

/* CSS */
.button {
    background-color: #c2fbd7;
    border-radius: 4px;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
        rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
        rgba(44, 187, 99, 0.15) 0 16px 32px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
        sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
        rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
        rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
}

.input-fields{
  display: flex;
  justify-content: center;
  gap:1rem;
}
</style>
