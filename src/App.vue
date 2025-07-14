<template>
  <RouterView />
</template>

<style>
:root,
[data-theme="light"] {
  box-sizing: border-box;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  color: #e7a100;
}

[data-theme="dark"] {
  color: #c38001;
}
</style>

<style>
body {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
body > svg {
  height: 100%;
  fill: black;
}
</style>
