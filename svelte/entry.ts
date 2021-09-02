import App from "./App.svelte";
import AppThree from "./AppThree.svelte";

const containerOne = document.querySelector("#svelte-container-1");
const containerTwo = document.querySelector("#svelte-container-2");
const containerThree = document.querySelector("#svelte-container-3");

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

const appThree = new AppThree({
  target: containerThree,
  props: {
    initial: "I am app three",
  },
});

window.appOne = appOne;
window.appTwo = appTwo;
window.appThree = appThree;
