<template>
  <div class="justify-between items-stretch bg-white flex flex-col">
    <Menu/>
    <div
      class="flex-col shadow-sm overflow-hidden relative flex min-h-[620px] w-full pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:px-5"
    >
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b3eb964a03133f01abae1d1e25403077bc7608da6011fbf324377471a6df3f?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b3eb964a03133f01abae1d1e25403077bc7608da6011fbf324377471a6df3f?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b3eb964a03133f01abae1d1e25403077bc7608da6011fbf324377471a6df3f?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b3eb964a03133f01abae1d1e25403077bc7608da6011fbf324377471a6df3f?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b3eb964a03133f01abae1d1e25403077bc7608da6011fbf324377471a6df3f?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b3eb964a03133f01abae1d1e25403077bc7608da6011fbf324377471a6df3f?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b3eb964a03133f01abae1d1e25403077bc7608da6011fbf324377471a6df3f?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6b3eb964a03133f01abae1d1e25403077bc7608da6011fbf324377471a6df3f?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
        class="absolute h-full w-full object-cover object-center inset-0"
      />
      <div
        class="relative text-white text-6xl font-bold leading-[67px] w-[560px] max-w-full mt-16 max-md:text-4xl max-md:leading-[54px] max-md:mt-10"
      >
        Bem-vindo ao futuro da mobilidade sustentável
      </div>
      <div
        class="relative text-white text-lg leading-7 w-[560px] max-w-full mt-6"
      >
        Na Stellantis focamos em soluções de mobilidade que melhor se ajustam às
        suas necessidades. Em menos de 1 minuto podemos sugerir a melhor forma
        para você se deslocar
      </div>
      <router-link :to="{ name: 'descubra'}"
        class="relative text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-white my-10 px-6 py-3 border-solid border-black max-md:px-5"
      >
        Descubra
      </router-link>
    </div>
    <div
      class="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5"
    >
      <div class="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div
          class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
          >
            <div
              class="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10"
            >
              <div
                class="text-black text-center text-base font-semibold leading-6 self-stretch max-md:max-w-full"
              >
                Revolução nos modelos de aluguel
              </div>
              <div
                class="self-stretch text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
              >
                Descubra o futuro do aluguel de carros
              </div>
              <div
                class="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full"
              >
                Planos de assinatura que cabem no seu bolso. E que vão te
                atender do jeito que você precisa.
              </div>
              <div class="self-stretch mt-8 py-2 max-md:max-w-full">
                <div
                  class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
                >
                  <div
                    class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
                  >
                    <div class="items-stretch flex grow flex-col max-md:mt-8">
                      <div
                        class="text-black text-xl font-bold leading-7 whitespace-nowrap"
                      >
                        Nano rental
                      </div>
                      <div class="text-black text-base leading-6 mt-4">
                        Alugueis rápidos, de algumas horas, para atender a
                        demanda de last mile.
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
                  >
                    <div class="items-stretch flex grow flex-col max-md:mt-8">
                      <div
                        class="text-black text-xl font-bold leading-7 whitespace-nowrap"
                      >
                        Long term rental
                      </div>
                      <div class="text-black text-base leading-6 mt-4">
                        Possibilidades de locação que variam de alguns dias até
                        meses!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-10 px-6 py-3 border-solid border-black self-start max-md:px-5"
              >
                Saiba mais
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31af31e6e26d185f7d3e01bd4eb9f70b9be3c14bca2d2335128ed6718548e727?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31af31e6e26d185f7d3e01bd4eb9f70b9be3c14bca2d2335128ed6718548e727?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31af31e6e26d185f7d3e01bd4eb9f70b9be3c14bca2d2335128ed6718548e727?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31af31e6e26d185f7d3e01bd4eb9f70b9be3c14bca2d2335128ed6718548e727?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31af31e6e26d185f7d3e01bd4eb9f70b9be3c14bca2d2335128ed6718548e727?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31af31e6e26d185f7d3e01bd4eb9f70b9be3c14bca2d2335128ed6718548e727?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31af31e6e26d185f7d3e01bd4eb9f70b9be3c14bca2d2335128ed6718548e727?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31af31e6e26d185f7d3e01bd4eb9f70b9be3c14bca2d2335128ed6718548e727?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
              class="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5"
    >
      <div
        class="items-stretch flex w-[116px] max-w-full gap-1 mt-16 max-md:mt-10"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0faa8b18428a60cda2ac4beb4b2ddb3fb9c80d43af605c137a236c1db91b28f8?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        /><img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2166558b48a46b0dadaaf14150b171b1f4661d5b0fbdb00f42b5511e0b4b80b1?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        /><img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/288d6c8917888fb9197101a4c865a39a2a4691edee116e3c0b87d1f17d15a8cd?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        /><img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf6441b9f8fe66fed4b3fab0e31ebe2df49a78a9476d5d56bc427169faa45ae?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        /><img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/96602d14eaac1578777e1b77e1df4e4ae2343e304b842d4fff9df2659b1dd41a?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        />
      </div>
      <div
        class="text-black text-center text-2xl font-bold leading-9 max-w-screen-md mt-8 max-md:max-w-full"
      >
        Eu tive uma experiência incrível alugando um carro elétrico. O processo
        foi tranquilo e o carro estava em excelente estado. A tecnologia é
        surpreendente!
      </div>
      <div
        class="items-center flex justify-between gap-5 mt-8 mb-10 py-1 max-md:max-w-full max-md:flex-wrap"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-square object-contain object-center w-14 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
        />
        <div class="items-stretch flex grow basis-[0%] flex-col my-auto">
          <div class="text-black text-base font-semibold leading-6">
            John Doe
          </div>
          <div class="text-black text-base leading-6 whitespace-nowrap">
            Marketing Manager, ABC Company
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c973f8627fa6db56c3f7372b12b2de235fedc687612ac212176b7430fad467b?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
    </div>
    <div
      class="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5"
    >
      <div class="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div
          class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
          >
            <div
              class="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10"
            >
              <div
                class="text-black text-center text-base font-semibold leading-6 self-stretch max-md:max-w-full"
              >
                Gestão de frota elétrica inteligente
              </div>
              <div
                class="self-stretch text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
              >
                Otimize suas operações de veículos elétricos conosco.
              </div>
              <div
                class="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full"
              >
                Nossos serviços de gestão de frota otimizam as operações de
                veículos elétricos para empresas, garantindo eficiência e
                rentabilidade. Com nossa experiência, você pode maximizar o
                potencial de sua frota de veículos elétricos e reduzir
                complexidades operacionais.
              </div>
              <div
                class="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-10 px-6 py-3 border-solid border-black self-start max-md:px-5"
              >
                Saiba mais
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce844e8a9a5ce737d5f9bedd6bd9b4d2f62ecca0e85781e6c217b3f79353dd9?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ce844e8a9a5ce737d5f9bedd6bd9b4d2f62ecca0e85781e6c217b3f79353dd9?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ce844e8a9a5ce737d5f9bedd6bd9b4d2f62ecca0e85781e6c217b3f79353dd9?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ce844e8a9a5ce737d5f9bedd6bd9b4d2f62ecca0e85781e6c217b3f79353dd9?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ce844e8a9a5ce737d5f9bedd6bd9b4d2f62ecca0e85781e6c217b3f79353dd9?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ce844e8a9a5ce737d5f9bedd6bd9b4d2f62ecca0e85781e6c217b3f79353dd9?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ce844e8a9a5ce737d5f9bedd6bd9b4d2f62ecca0e85781e6c217b3f79353dd9?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ce844e8a9a5ce737d5f9bedd6bd9b4d2f62ecca0e85781e6c217b3f79353dd9?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
              class="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5"
    >
      <div class="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div
          class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
          >
            <div
              class="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10"
            >
              <div
                class="text-black text-center text-base font-semibold leading-6 self-stretch max-md:max-w-full"
              >
                Infra as a service
              </div>
              <div
                class="self-stretch text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
              >
                Impulsionando o Futuro da Mobilidade Elétrica.
              </div>
              <div
                class="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full"
              >
                Por meio de um ecossistema de parcerias, fornecemos serviços
                abrangentes de instalação e manutenção de infraestrutura de
                carregamento para veículos elétricos. Nossa equipe de
                especialistas garante que suas estações de carregamento sejam
                instaladas de forma eficiente e mantidas nos mais altos padrões.
              </div>
              <div class="self-stretch mt-8 py-2 max-md:max-w-full">
                <div
                  class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
                >
                  <div
                    class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
                  >
                    <div class="items-stretch flex grow flex-col max-md:mt-8">
                      <div
                        class="text-black text-xl font-bold leading-7 whitespace-nowrap"
                      >
                        Instalação
                      </div>
                      <div class="text-black text-base leading-6 mt-4">
                        Oferecemos serviços profissionais de instalação para
                        estações de carregamento de veículos elétricos,
                        adaptados às suas necessidades.
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
                  >
                    <div class="items-stretch flex grow flex-col max-md:mt-8">
                      <div
                        class="text-black text-xl font-bold leading-7 whitespace-nowrap"
                      >
                        Manutenção
                      </div>
                      <div class="text-black text-base leading-6 mt-4">
                        Nossos serviços de manutenção garantem que sua
                        infraestrutura de carregamento funcione de maneira suave
                        e eficiente.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-10 px-6 py-3 border-solid border-black self-start max-md:px-5"
              >
                Saiba mais
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2a11d1213accb3f1f58f44b2ea18674a596215a6ff960d8904670048ec4dc6?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2a11d1213accb3f1f58f44b2ea18674a596215a6ff960d8904670048ec4dc6?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2a11d1213accb3f1f58f44b2ea18674a596215a6ff960d8904670048ec4dc6?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2a11d1213accb3f1f58f44b2ea18674a596215a6ff960d8904670048ec4dc6?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2a11d1213accb3f1f58f44b2ea18674a596215a6ff960d8904670048ec4dc6?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2a11d1213accb3f1f58f44b2ea18674a596215a6ff960d8904670048ec4dc6?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2a11d1213accb3f1f58f44b2ea18674a596215a6ff960d8904670048ec4dc6?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e2a11d1213accb3f1f58f44b2ea18674a596215a6ff960d8904670048ec4dc6?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
              class="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5"
    >
      <div class="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div
          class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
          >
            <div
              class="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10"
            >
              <div
                class="text-black text-center text-base font-semibold leading-6 self-stretch max-md:max-w-full"
              >
                Revenda de usados
              </div>
              <div
                class="self-stretch text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
              >
                Garantia de qualidade e Confiabilidade para carros elétricos
                Usados.
              </div>
              <div
                class="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full"
              >
                Explore nossa ampla seleção de carros elétricos usados, todos
                garantidos quanto à qualidade e confiabilidade. Encontre o carro
                elétrico perfeito para suas necessidades e junte-se à revolução
                da mobilidade sustentável.
              </div>
              <div
                class="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-10 px-6 py-3 border-solid border-black self-start max-md:px-5"
              >
                Saiba mais
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dda40860c8599501b35098e03ddcbff451d51c74acdd067d1f51989f93afb8dc?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dda40860c8599501b35098e03ddcbff451d51c74acdd067d1f51989f93afb8dc?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dda40860c8599501b35098e03ddcbff451d51c74acdd067d1f51989f93afb8dc?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dda40860c8599501b35098e03ddcbff451d51c74acdd067d1f51989f93afb8dc?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dda40860c8599501b35098e03ddcbff451d51c74acdd067d1f51989f93afb8dc?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dda40860c8599501b35098e03ddcbff451d51c74acdd067d1f51989f93afb8dc?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dda40860c8599501b35098e03ddcbff451d51c74acdd067d1f51989f93afb8dc?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dda40860c8599501b35098e03ddcbff451d51c74acdd067d1f51989f93afb8dc?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
              class="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5"
    >
      <div
        class="items-stretch flex w-[116px] max-w-full gap-1 mt-16 max-md:mt-10"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7f47d5e679cdf02da745abf9ffbb8035e6575a53a2fd14e7c99da814fb5b93c?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        /><img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b444d5c7ebc007bbdc8da60af963b908f738faebafe4eb2559c28dee907a6413?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        /><img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/acde5d5bd154b73db07f354c1669d240f39ef9b01204cba14ac95387cb422631?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        /><img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/776ddaa3b58a47412c4575cd2e6088ae33e03affa557bdba1ae78690f7009e9b?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        /><img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f1279e8ae8594d9e27ff1fc869c552f0b3e34ab2b9719d28007bc3bb2ed49c9?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
        />
      </div>
      <div
        class="text-black text-center text-2xl font-bold leading-8 mt-8 max-md:max-w-full"
      >
        Vendi meu carro elétrico de forma fácil e rápida! Recomendo
      </div>
      <div
        class="items-center flex justify-between gap-5 mt-8 mb-10 py-1 max-md:max-w-full max-md:flex-wrap"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc8e93d73c9045b8173aa08cdf6dcc29546901fa4a90e329394d73e2932cdaef?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc8e93d73c9045b8173aa08cdf6dcc29546901fa4a90e329394d73e2932cdaef?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc8e93d73c9045b8173aa08cdf6dcc29546901fa4a90e329394d73e2932cdaef?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc8e93d73c9045b8173aa08cdf6dcc29546901fa4a90e329394d73e2932cdaef?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc8e93d73c9045b8173aa08cdf6dcc29546901fa4a90e329394d73e2932cdaef?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc8e93d73c9045b8173aa08cdf6dcc29546901fa4a90e329394d73e2932cdaef?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc8e93d73c9045b8173aa08cdf6dcc29546901fa4a90e329394d73e2932cdaef?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc8e93d73c9045b8173aa08cdf6dcc29546901fa4a90e329394d73e2932cdaef?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-square object-contain object-center w-14 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
        />
        <div class="items-stretch flex grow basis-[0%] flex-col my-auto">
          <div class="text-black text-base font-semibold leading-6">
            Luisa M.
          </div>
          <div class="text-black text-base leading-6 whitespace-nowrap">
            Product Head, Ifit Solutions
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee8370196edd4b5361946b5035c8f99b490ee8a749462204a5454f94efd2ccd9?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
          class="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
    </div>
    <div
      class="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5"
    >
      <div class="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div
          class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
          >
            <div
              class="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10"
            >
              <div
                class="self-stretch text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
              >
                Participe das nossas comunidades!
              </div>
              <div
                class="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full"
              >
                Temos diferentes comunidades que você pode participar, a
                depender do seu perfil, necessidades e desejos relacionados à
                mobilidade!
              </div>
              <div
                class="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black mt-10 px-6 py-3 border-solid border-black max-md:px-5"
              >
                Entrar
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8eeb33b3a35aa904d4284f237509ab450a2fdea3dace0529ae234ba418d796b1?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeb33b3a35aa904d4284f237509ab450a2fdea3dace0529ae234ba418d796b1?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeb33b3a35aa904d4284f237509ab450a2fdea3dace0529ae234ba418d796b1?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeb33b3a35aa904d4284f237509ab450a2fdea3dace0529ae234ba418d796b1?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeb33b3a35aa904d4284f237509ab450a2fdea3dace0529ae234ba418d796b1?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeb33b3a35aa904d4284f237509ab450a2fdea3dace0529ae234ba418d796b1?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeb33b3a35aa904d4284f237509ab450a2fdea3dace0529ae234ba418d796b1?apiKey=d99bf8e00f15467ba435b2cd77500adf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeb33b3a35aa904d4284f237509ab450a2fdea3dace0529ae234ba418d796b1?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
              class="aspect-[1.54] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5"
    >
      <div
        class="items-stretch flex w-full justify-between gap-5 mt-16 mb-10 max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:mt-10"
      >
        <div class="items-stretch flex flex-col max-md:max-w-full">
          <div
            class="text-black text-4xl font-bold leading-10 max-md:max-w-full"
          >
            Junte-se ao nosso programa de fidelidade hoje!
          </div>
          <div class="text-black text-lg leading-7 mt-6 max-md:max-w-full">
            Converta aluguéis e compras em créditos para carregar veículos
            elétricos. <br /><br />Ganhe recompensas de acordo com a km
            utilizada nos EVS e pontos por gastos realizados na plataforma de
            MaaS - abastecimento, assinatura, rental, troca de veiculo, desconto
            nos pontos de abastecimento e experiencias de acordo com a
            comunidade!
          </div>
        </div>
        <div class="items-stretch self-center flex gap-4 my-auto">
          <div
            class="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5"
          >
            Join
          </div>
          <div
            class="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5"
          >
            Saiba mais
          </div>
        </div>
      </div>
    </div>
    <div
      class="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5"
    >
      <div class="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div
          class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            class="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0"
          >
            <div
              class="items-stretch self-stretch flex flex-col max-md:max-w-full max-md:mt-10"
            >
              <div
                class="text-black text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl"
              >
                Perguntas frequentes
              </div>
              <div class="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                Encontre respostas para as perguntas mais comuns sobre aluguel
                de veículos elétricos, recarga e programa de fidelidade.
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0"
          >
            <div
              class="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10"
            >
              <div
                class="justify-between items-center border flex gap-0 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5"
              >
                <div
                  class="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full"
                >
                  Como alugar um carro elétrico?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d533612b74da83af92b8b1e6de8b2a0dfc00c082b066c5372402ef49c08c87a4?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                  class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div
                class="justify-between items-center border flex gap-0 mt-4 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5"
              >
                <div
                  class="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full"
                >
                  Como funciona a recarga?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d533612b74da83af92b8b1e6de8b2a0dfc00c082b066c5372402ef49c08c87a4?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                  class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div
                class="justify-between items-center border flex gap-0 mt-4 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5"
              >
                <div
                  class="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full"
                >
                  Quais são os benefícios do programa de fidelidade?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d533612b74da83af92b8b1e6de8b2a0dfc00c082b066c5372402ef49c08c87a4?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                  class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div
                class="justify-between items-center border flex gap-0 mt-4 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5"
              >
                <div
                  class="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full"
                >
                  Quais são os tipos de locação disponíveis?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d533612b74da83af92b8b1e6de8b2a0dfc00c082b066c5372402ef49c08c87a4?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                  class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div
                class="justify-between items-center border flex gap-0 mt-4 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5"
              >
                <div
                  class="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full"
                >
                  Vocês revendem carros elétricos usados?
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d533612b74da83af92b8b1e6de8b2a0dfc00c082b066c5372402ef49c08c87a4?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                  class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5"
    >
      <div class="mt-8 pb-2 max-md:max-w-full">
        <div
          class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
        >
          <div
            class="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0"
          >
            <div
              class="items-stretch flex flex-col max-md:max-w-full max-md:mt-10"
            >
              <div class="text-black text-base leading-6 max-md:max-w-full">
                Mantenha-se atualizado sobre as últimas funcionalidades e
                lançamentos ao se inscrever em nossa newsletter.
              </div>
              <div
                class="items-stretch flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap"
              >
                <div
                  class="items-center border bg-white flex w-[365px] shrink-0 max-w-full h-12 flex-col border-solid border-black"
                ></div>
                <div
                  class="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border px-10 py-3 border-solid border-black max-md:px-5"
                >
                  Enviar
                </div>
              </div>
              <div class="text-black text-xs leading-5 mt-4 max-md:max-w-full">
                Ao se inscrever, você concorda com nossa Política de Privacidade
                e dá seu consentimento para receber atualizações de nossa
                empresa.
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0"
          >
            <div class="grow max-md:max-w-full max-md:mt-10">
              <div
                class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
              >
                <div
                  class="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
                >
                  <div class="items-stretch flex flex-col pb-2 max-md:mt-10">
                    <div
                      class="text-black text-base font-semibold leading-6 whitespace-nowrap"
                    >
                      Sobre
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-6"
                    >
                      Serviços
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-4"
                    >
                      Pricing
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-4"
                    >
                      Contato
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-4"
                    >
                      FAQs
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-4"
                    >
                      Blog
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0"
                >
                  <div class="items-stretch flex flex-col pb-2 max-md:mt-10">
                    <div
                      class="text-black text-base font-semibold leading-6 whitespace-nowrap"
                    >
                      Parceiros
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-6"
                    >
                      Suporte
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-4"
                    >
                      Termos
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-4"
                    >
                      Privacidade
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-4"
                    >
                      Cookies
                    </div>
                    <div
                      class="text-black text-sm leading-5 whitespace-nowrap mt-4"
                    >
                      Sitemap
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0"
                >
                  <div class="items-stretch flex grow flex-col max-md:mt-10">
                    <div
                      class="text-black text-base font-semibold leading-6 whitespace-nowrap"
                    >
                      Follow Us
                    </div>
                    <div
                      class="items-stretch flex justify-between gap-3 mt-4 py-2"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de61d358a8a3f8a6a25c4f8e06c22c54cb3bf5c7c2bf8173fbb01e24b7a6c95b?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                        class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div class="text-black text-sm leading-5">Facebook</div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 py-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/148d69a168439d04373be2582faa19c41c03de40194d82db65bb0b5c47e0b55e?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                        class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div class="text-black text-sm leading-5">Instagram</div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 py-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2709d11ddfac6952af1b2208b76f7d81a3e704e8e8c63e1ee78eb89693633326?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                        class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div class="text-black text-sm leading-5">Twitter</div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 py-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08b1a606c1dadf96d825b5dd9163ec8fe6a5edf0c99b4fba03f058416c8aa741?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                        class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div class="text-black text-sm leading-5">LinkedIn</div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 py-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5521e8ee119ec2c4fc27c9cb83b89adb6f7daf1bf3bd897da84645cf7659cfbc?apiKey=d99bf8e00f15467ba435b2cd77500adf&"
                        class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div class="text-black text-sm leading-5">YouTube</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-black flex shrink-0 h-px flex-col mt-20 max-md:max-w-full max-md:mt-10"
      ></div>
      <div
        class="justify-between items-stretch flex w-full gap-5 mt-8 mb-8 max-md:max-w-full max-md:flex-wrap"
      >
        <div class="text-black text-sm leading-5">
          © 2023 Relume. All rights reserved.
        </div>
        <div class="items-stretch flex justify-between gap-5">
          <div
            class="text-black text-sm leading-5 underline grow whitespace-nowrap"
          >
            Privacy Policy
          </div>
          <div class="text-black text-sm leading-5 underline">
            Terms of Service
          </div>
          <div
            class="text-black text-sm leading-5 underline grow whitespace-nowrap"
          >
            Cookie Settings
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Menu from "../components/Menu.vue";
</script>