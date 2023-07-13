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
  <br />

  <!--Copy To Clipboard -->

  <div v-if="isSupported">
    <button @click="copy(source)">
      <!-- by default, `copied` will be reset in 1.5s -->
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </button>
    <br />
    <p>
      Current copied: <code>{{ text || "none" }}</code>
    </p>
  </div>
  <p v-else>Your browser does not support Clipboard API</p>
</template>

<script setup lang="ts">
// import { useToggle,  } from "@vueuse/shared";
// import { isDark, toggleDark, colorMode } from "../composables/dark";

import { useDark, useColorMode, useClipboard } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const colorMode = useColorMode({
  modes: {
    dim: "dim",
    cafe: "cafe",
  },
  attribute: "theme",
});

// Copy to clipboard
// const copyText = useClipboard()
const source = ref();
const { text, copy, copied, isSupported } = useClipboard({ source });
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
