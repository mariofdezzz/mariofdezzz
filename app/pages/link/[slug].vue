<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const label = slug
  .split('_')
  .map(capitalize)
  .join('')
  .split('-')
  .map(capitalize)
  .join(' ');

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
  <SocialLink :label />
</template>
