<template>
  {{ isDark }}
  <br />

  {{ colorMode }}

  <br />
  <button @click="toggleDark()">Toggle Dark Mode</button>

  <button @click="colorMode = 'dark'">Dark Mode</button>
  <button @click="colorMode = 'light'">Light Mode</button>
  <button @click="colorMode = 'dim'">Dim Mode</button>
  <button @click="colorMode = 'cafe'">Cafe Mode</button>
</template>

<script setup lang="ts">
// import { useToggle,  } from "@vueuse/shared";
// import { isDark, toggleDark, colorMode } from "../composables/dark";

import { useDark, useColorMode } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const colorMode = useColorMode({
  modes: {
    dim: "dim",
    cafe: "cafe",
  },
  attribute: "theme",
});
</script>

<style>
/* .dark {
  background: #252525;
  color: white;
} */

/* /////// */
/* .dim {
  background: gray;
  color: white;
}

.cafe {
  background: #c0acac;
  color: black;
} */

[theme="dark"] {
  background: #252525;
  color: white;
}

[theme="dim"] {
  background: gray;
  color: white;
}

[theme="cafe"] {
  background: #c0acac;
  color: black;
}
</style>
