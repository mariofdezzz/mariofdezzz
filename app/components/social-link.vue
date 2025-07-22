<script setup lang="ts">
defineProps<{
  label: string;
}>();

const animationDelay = `${Math.random() * 5}s`;
</script>

<template>
  <a>
    <span class="link_label">{{ label }}</span>
    <span class="link_arrow" :style="{ animationDelay }">↗</span>
  </a>
</template>

<style>
a {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 3px;
}
.link_arrow {
  font-size: 0.75em;
  animation-name: rotate;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  10%,
  100% {
    transform: rotate(360deg);
  }
}
</style>
