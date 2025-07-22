<script setup lang="ts">
import {
  IconsAstro,
  IconsChartjs,
  IconsCloudflare,
  IconsCss,
  IconsDeno,
  IconsDocker,
  IconsExpress,
  IconsFirebase,
  IconsGraphql,
  IconsHono,
  IconsJavascript,
  IconsJwt,
  IconsMongodb,
  IconsNest,
  IconsNuxt,
  IconsPinia,
  IconsPlaywright,
  IconsPostgresql,
  IconsTailwind,
  IconsTanstack,
  IconsTauri,
  IconsTypescript,
  IconsVercel,
  IconsVueuse,
} from '#components';

const carrouselItems = [
  IconsTypescript,
  IconsJavascript,
  IconsCss,
  IconsTailwind,
  IconsNuxt,
  IconsPinia,
  IconsVueuse,
  IconsAstro,

  IconsTanstack,
  IconsGraphql,
  IconsDeno,
  IconsExpress,
  IconsHono,
  IconsNest,
  IconsTauri,

  IconsMongodb,
  IconsPostgresql,

  IconsFirebase,
  IconsVercel,
  IconsCloudflare,

  IconsJwt,
  IconsPlaywright,
  IconsDocker,
  IconsChartjs,
];
</script>

<template>
  <div class="carousel-wrapper">
    <div id="carousel-track" class="carousel-track">
      <component
        :is="Icon"
        v-for="(Icon, index) in carrouselItems"
        :key="index"
        class="carousel-item"
      />

      <!-- Duplicate items for continuous scrolling effect -->
      <component
        :is="Icon"
        v-for="(Icon, index) in carrouselItems"
        :key="index"
        class="carousel-item"
      />
    </div>
  </div>
</template>

<style>
.carousel-wrapper {
  width: 100vw;
  overflow: hidden;
  position: relative;
  padding: 0 0.5rem;
}

.carousel-track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: scroll 30s linear infinite;
}

.carousel-item {
  flex: 0 0 auto;
  width: 20px;
  aspect-ratio: 1;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
