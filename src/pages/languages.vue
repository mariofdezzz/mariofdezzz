<script setup lang="ts">
import AstroIcon from "../components/icons/astro.vue";
import ChartjsIcon from "../components/icons/chartjs.vue";
import CloudflareIcon from "../components/icons/cloudflare.vue";
import CssIcon from "../components/icons/css.vue";
import DenoIcon from "../components/icons/deno.vue";
import DockerIcon from "../components/icons/docker.vue";
import ExpressIcon from "../components/icons/express.vue";
import FirebaseIcon from "../components/icons/firebase.vue";
import GraphqlIcon from "../components/icons/graphql.vue";
import HonoIcon from "../components/icons/hono.vue";
import JavascriptIcon from "../components/icons/javascript.vue";
import JwtIcon from "../components/icons/jwt.vue";
import MongodbIcon from "../components/icons/mongodb.vue";
import NestIcon from "../components/icons/nest.vue";
import NuxtIcon from "../components/icons/nuxt.vue";
import PiniaIcon from "../components/icons/pinia.vue";
import PlaywrightIcon from "../components/icons/playwright.vue";
import PostgresqlIcon from "../components/icons/postgresql.vue";
import TailwindIcon from "../components/icons/tailwind.vue";
import TanstackIcon from "../components/icons/tanstack.vue";
import TauriIcon from "../components/icons/tauri.vue";
import TypescriptIcon from "../components/icons/typescript.vue";
import VercelIcon from "../components/icons/vercel.vue";
import VueuseIcon from "../components/icons/vueuse.vue";
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-track" id="carousel-track">
      <TypescriptIcon />
      <JavascriptIcon />
      <CssIcon />
      <TailwindIcon />
      <NuxtIcon />
      <PiniaIcon />
      <VueuseIcon />
      <AstroIcon />

      <TanstackIcon />
      <GraphqlIcon />
      <DenoIcon />
      <ExpressIcon />
      <HonoIcon />
      <NestIcon />
      <TauriIcon />

      <MongodbIcon />
      <PostgresqlIcon />

      <FirebaseIcon />
      <VercelIcon />
      <CloudflareIcon />

      <JwtIcon />
      <PlaywrightIcon />
      <DockerIcon />
      <ChartjsIcon />

      <!-- Loop -->
      <TypescriptIcon />
      <JavascriptIcon />
      <CssIcon />
      <TailwindIcon />
      <NuxtIcon />
      <PiniaIcon />
      <VueuseIcon />
      <AstroIcon />

      <TanstackIcon />
      <GraphqlIcon />
      <DenoIcon />
      <ExpressIcon />
      <HonoIcon />
      <NestIcon />
      <TauriIcon />

      <MongodbIcon />
      <PostgresqlIcon />

      <FirebaseIcon />
      <VercelIcon />
      <CloudflareIcon />

      <JwtIcon />
      <PlaywrightIcon />
      <DockerIcon />
      <ChartjsIcon />
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
  animation: scroll 20s linear infinite;
}

.carousel-track > * {
  flex: 0 0 auto;
  width: 200px;
  aspect-ratio: 1;
  /*
      width: 200px;
      height: 120px;
      margin: 0 10px;
      background: #fff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: #111;
      font-weight: bold;*/
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
