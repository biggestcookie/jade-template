<script setup lang="ts">
import { useWakeLock } from "@vueuse/core";
import { onMounted } from "vue";

const { request } = useWakeLock();

onMounted(async () => {
  await request("screen");
});
</script>

<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">Hello World</h1>
      <p class="subtitle">
        My first website with
        <strong class="has-text-primary">Bulma</strong>!
      </p>
    </div>
  </section>
</template>
