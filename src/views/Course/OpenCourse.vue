<template>
  <div class="flex justify-center items-center flex-col w-full gap-y-8 px-10 h-screen">
    <img src="../../assets/success.png" alt="" class="base:w-full sm:w-auto h-auto base:object-fill rounded-md" />
    <div class="flex flex-col items-center gap-3">
      <h2 class="text-center leading-normal base:hidden sm:block">Selamat! Kursus Anda Telah Di Buka</h2>
      <h3 class="text-center leading-tight base:block sm:hidden">Selamat! Kursus Anda Telah Di Buka</h3>
      <span
        class="sm:w-10/12 sm:text-lg base:text-base font-normal text-default-black tracking-wider text-center base:w-full">
        Kursus
        yang anda pilih
        sudah
        di buka, Silahkan klik button dibawah ini </span>
    </div>
    <div class="flex justify-center sm:mt-8 base:mt-0 base:w-full">
      <button class="bg-yellow-glow rounded-md sm:py-5 sm:px-14 base:py-2.5 base:px-7 base:w-full sm:w-fit">
        <span class="tracking-widest base:text-base sm:text-lg font-semibold">IKUTI KURSUS</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenCourse",
};
</script>
