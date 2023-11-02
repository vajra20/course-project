<template>
  <div class="bg-white">
    <div class="flex flex-col gap-y-10 sm:gap-y-5 sm:px-0 sm:py-0 md:px-16 md:py-14">
      <div class="flex gap-x-1 items-center sm:px-8 sm:pt-5 md:px-0 md:pt-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
          <path
            d="M2.5 7.99992H17.5M8.33333 3.33325L2.5 7.99992L8.33333 3.33325ZM2.5 7.99992L8.33333 12.6666L2.5 7.99992Z"
            stroke="#282938" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-xl font-semibold"> Homepage </span>
      </div>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 overflow-hidden">
        <div class="w-full h-full max-h-screen relative">
          <div class="absolute bg-purple-blue/[.6] w-full h-full z-auto"></div>
          <div class="bg-[url('../assets/write.png')] object-left h-full w-full bg-cover bg-no-repeat bg-center">
            <!-- Dekstop -->
            <div class="sm:hidden md:block lg:block block">
              <div class="text-white z-auto relative p-28 flex flex-col gap-y-6">
                <h1>Selangkah Lebih Dekat Dengan Impianmu</h1>
                <span class="w-full max-w-sm leading-7">Sebuah layanan E-Learning gratis yang siap membantumu menjadi
                  seorang ahli</span>
              </div>
            </div>

            <!-- Mobile -->
            <div class="sm:block md:hidden lg:hidden hidden p-28 relative z-auto text-white ">
              <div class="flex flex-col gap-y-4">
                <span class="text-3xl font-semibold tracking-wider">Register</span>
                <span class="w-4/5">Persiapkan diri untuk masa depan yang penuh dengan bintang</span>
              </div>
              <div class="flex justify-start my-12 text-white">
                <div class="w-full flex flex-col gap-y-4">
                  <input class="bg-transparent border-2 border-yellow-glow rounded-lg px-8 py-5" type="text"
                    placeholder="Your Name" />
                  <input class="bg-transparent border-2 border-yellow-glow rounded-lg px-8 py-5" type="email"
                    placeholder="Email" />
                  <input class="bg-transparent border-2 border-yellow-glow rounded-lg px-8 py-5" type="password"
                    placeholder="Pas*********" />
                </div>
              </div>
              <button class="bg-yellow-glow rounded-md py-4 flex justify-center items-center w-full">
                <span class="text-default-black tracking-widest font-bold text-lg">DAFTAR</span>
              </button>
              <div class="flex mt-7 text-white text-lg font-normal tracking-wider justify-center">
                <span>Sudah punya akun?</span> &nbsp;
                <span class="underline cursor-pointer">Login</span>
              </div>
            </div>

          </div>
        </div>

        <div class="sm:hidden md:block lg:block">
          <div class="bg-purple-blue w-full flex flex-col justify-center py-20 px-28 h-full max-h-screen">
            <div class="flex flex-col text-white gap-y-4">
              <span class="text-3xl font-semibold tracking-wider">Register</span>
              <span class="w-4/5">Persiapkan diri untuk masa depan yang penuh dengan bintang</span>
            </div>
            <div class="flex justify-start my-12 text-white">
              <div class="w-full flex flex-col gap-y-4">
                <input class="bg-transparent border-2 border-gray-500 rounded-lg px-8 py-5" type="text"
                  placeholder="Your Name" />
                <input class="bg-transparent border-2 border-gray-500 rounded-lg px-8 py-5" type="email"
                  placeholder="Email" />
                <input class="bg-transparent border-2 border-gray-500 rounded-lg px-8 py-5" type="password"
                  placeholder="Pas*********" />
              </div>
            </div>
            <button class="bg-yellow-glow rounded-md py-4">
              <span class="text-default-black tracking-widest font-bold text-lg">DAFTAR</span>
            </button>
            <div class="flex mt-7 text-white text-lg font-normal tracking-wider justify-center">
              <span>Sudah punya akun?</span> &nbsp;
              <span class="underline cursor-pointer">Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
