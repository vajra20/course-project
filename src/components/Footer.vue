<template>
  <footer class="bg-purple-blue px-16" v-if="showFooter">
    <div class="py-16 flex items-center justify-between sm:flex-col sm:gap-10 sm:items-start md:flex-row">
      <div class="text-white">
        <h4 class="font-bold tracking-wider">[EDUFREE]</h4>
        <span>Bangun dan wujudkan cita bersama edufree</span>
      </div>
      <div class="flex items-start gap-24   :gap-14">
        <div class="flex flex-col text-white">
          <span class="text-xl font-medium mb-5">Sosial Media</span>
          <div class="flex flex-col gap-y-1">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
        <div class="flex flex-col text-white">
          <span class="text-xl font-medium mb-5">Program</span>
          <div class="flex flex-col gap-y-1">
            <span>Merdeka Belajar</span>
            <span>Finterpreneur</span>
          </div>
        </div>
        <div class="flex flex-col text-white">
          <span class="text-xl font-medium mb-5">DUKUNGAN</span>
          <div class="flex flex-col gap-y-1">
            <span>Tentang Kami</span>
            <span>Ketentuan</span>
            <span>Kebijakan Privasi</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-yellow-glow w-fit sm:w-full lg:w-fit rounded-t-md py-4 px-7">
      <div class="grid grid-cols-2 gap-x-7">
        <div class="flex flex-col gap-y-1">
          <span class="text-lg font-medium tracking-wider">Email</span>
          <span class="text-default-black opacity-80">contact@website.com</span>
        </div>
        <div class="flex flex-col gap-y-1">
          <span class="text-lg font-medium tracking-wider">Telephone</span>
          <span class="text-default-black opacity-80">+6288 999 222 333</span>
        </div>
      </div>
    </div>
  </footer>

  <div class="bg-white py-7 px-20" v-if="showFooter">
    <div class="flex items-center justify-between sm:flex-col sm:gap-3 md:flex-col lg:flex-row">
      <span class="text-lg font-medium tracking-wider">© Copyright EDUFREE 2021 - 2022</span>
      <div class="flex items-center gap-x-9 text-default-black">
        <span>HOME</span>
        <span>TENTANG KAMI</span>
        <span>KURSUS</span>
        <span>FAQ</span>
        <span>BLOG</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      showFooter: true,
      notFooter: ["/register", "/Register", "/Login", "/login", "/open-course", "/dashboard-learn", "/dashboard"],
    };
  },
  watch: {
    $route(to, from) {
      if (this.notFooter.includes(to.path)) {
        this.showFooter = false;
      } else {
        this.showFooter = true;
      }
    },
  },
};
</script>
