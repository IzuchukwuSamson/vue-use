import { useDark, useToggle, useColorMode } from "@vueuse/core";

export const isDark = useDark({
  storageKey: "vitepress-theme-appearance",
});

export const colorMode = useColorMode();
export const toggleDark = useToggle();
