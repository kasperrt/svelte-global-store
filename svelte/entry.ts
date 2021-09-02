import App from "./App.svelte";

const containerOne = document.querySelector("#svelte-container-1");
const containerTwo = document.querySelector("#svelte-container-2");

const appOne = new App({
  target: containerOne,
  props: {
    initial: "I am app one",
  },
});

const appTwo = new App({
  target: containerTwo,
  props: {
    initial: "I am app two",
  },
});

window.appOne = appOne;
window.appTwo = appTwo;
