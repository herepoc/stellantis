<template>
  <div
    class="bg-white flex w-full items-stretch justify-between gap-5 px-20 max-md:max-w-full max-md:flex-wrap max-md:px-5">
    <router-link :to="{ name: 'index'}">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1bd873ca63e47e82295d2ae8083d0a536aceee99f1a2ac272cfa786d35850c62?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bd873ca63e47e82295d2ae8083d0a536aceee99f1a2ac272cfa786d35850c62?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bd873ca63e47e82295d2ae8083d0a536aceee99f1a2ac272cfa786d35850c62?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bd873ca63e47e82295d2ae8083d0a536aceee99f1a2ac272cfa786d35850c62?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bd873ca63e47e82295d2ae8083d0a536aceee99f1a2ac272cfa786d35850c62?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bd873ca63e47e82295d2ae8083d0a536aceee99f1a2ac272cfa786d35850c62?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bd873ca63e47e82295d2ae8083d0a536aceee99f1a2ac272cfa786d35850c62?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bd873ca63e47e82295d2ae8083d0a536aceee99f1a2ac272cfa786d35850c62?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
        class="aspect-[1.43] object-contain object-center w-[114px] overflow-hidden shrink-0 max-w-full"
      />
    </router-link>
    <div
      class="self-center flex items-start justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap"
    >
      <div
        class="text-black text-center text-xl leading-8 whitespace-nowrap self-start"
      >
        Serviços
      </div>
      <div class="text-black text-center text-xl leading-8">
        Sustentabilidade
      </div>
      <div class="text-black text-center text-xl leading-8">
        Programa de fidelidade
      </div>
      <router-link :to="{name: 'aluguel'}"
                   class="text-black text-center text-xl leading-8 grow whitespace-nowrap self-start"
      >
        Comunidade
      </router-link>
    </div>
  </div>


</template>
<script setup>
</script>