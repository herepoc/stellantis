<template>
  <div class="bg-white flex flex-col justify-center items-stretch">
    <div
      class="bg-white flex w-full flex-col items-stretch pb-12 max-md:max-w-full"
    >
      <Menu></Menu>
      <div
        class="self-center flex w-full max-w-[1210px] flex-col mt-40 mb-11 max-md:max-w-full max-md:my-10"
      >
        <div
          class="text-black text-base leading-6 tracking-wider self-stretch max-md:max-w-full"
        >
          Gostaríamos de saber um pouco mais sobre você para recomendar as
          melhores opções de mobilidade considerando o seu perfil
        </div>
        <div
          class="text-black text-4xl font-bold leading-10 tracking-wider self-stretch mt-7 max-md:max-w-full"
        >
          <span class="text-black">Eu me chamo </span
          ><span class="text-black">Luisa</span
          ><span class="text-black"> e dependo de soluções de mobilidade </span
          ><span class="font-semibold text-black"
            >entre 3 e 5 vezes por semana</span
          ><span class="text-black">, costumo me deslocar de </span
          ><span class="text-black">Vila Madalena</span
          ><span class="text-black"> até </span
          ><span class="text-black">Vila Leopoldina,</span
          ><span class="text-black"> meu custo mensal com mobilidade é </span
          ><span class="text-black">entre 1500 e 2000 reais, </span
          ><span class="text-black"
            >e nos meus deslocamentos busco principalmente</span
          >
        </div>
        <div
          class="text-zinc-50 text-center text-sm font-semibold leading-5 tracking-wide whitespace-nowrap justify-center items-stretch bg-black self-center ml-14 mt-3 px-4 py-2.5 rounded-3xl"
        >
          aproveitar a viagem
        </div>
        <div
          class="text-zinc-50 text-center text-sm font-semibold leading-5 tracking-wide whitespace-nowrap justify-center items-stretch bg-black self-center ml-14 mt-2 px-4 py-2.5 rounded-3xl"
        >
          planejar o percurso
        </div>
        <div
          class="text-zinc-50 text-center text-sm font-semibold leading-5 tracking-wide whitespace-nowrap justify-center items-stretch bg-black self-center ml-14 mt-2 px-4 py-2.5 rounded-3xl"
        >
          evitar riscos
        </div>
        <div
          class="text-zinc-50 text-center text-sm font-semibold leading-5 tracking-wide whitespace-nowrap justify-center items-stretch bg-black self-center ml-32 mt-2 px-4 py-2.5 rounded-3xl"
        >
          ser o mais sustentável possível
        </div>
        <div
          class="text-zinc-50 text-center text-sm font-semibold leading-5 tracking-wide whitespace-nowrap justify-center items-stretch bg-black self-center ml-14 mt-2.5 px-4 py-2.5 rounded-3xl"
        >
          conforto
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Menu from "../components/Menu.vue";
</script>