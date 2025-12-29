<template>
  <div class="bg-[#EEF4FA] py-7 px-16">
    <span class="text-default-black font-medium opacity-70">Home > Kursus > Detail Kursus</span>
  </div>
  <div class="px-16 bg-white">
    <div class="sm:mt-24 lg:mt-32 sm:mb-24 lg:mb-44">
      <div class="flex justify-center items-center">
        <div class="w-full max-w-3xl">
          <input class="w-full bg-transparent border-2 border-gray-400 px-10 py-4 rounded-lg"
            placeholder="Cari Kursus..." />
        </div>
      </div>
      <div class="flex justify-center md:mt-10 sm:mt-5">
        <div class="sm:block md:hidden w-full">
          <select class="flex border-2 w-full p-2 rounded-md border-gray-400 select-blog">
            <option>Semua</option>
            <option>UI Design</option>
            <option>Programming</option>
            <option>Marketing</option>
            <option>Soft Skill</option>
            <option>Network</option>
            <option>Data Analyst</option>
          </select>
        </div>
        <div class="md:flex flex-wrap md:gap-y-2.5 justify-center gap-x-10 items-center sm:hidden text-center">
          <span class="text-[#2405F2] text-lg font-medium">Semua</span>
          <span class="text-default-black opacity-70 text-lg font-medium">UI Design</span>
          <span class="text-default-black opacity-70 text-lg font-medium">Programming</span>
          <span class="text-default-black opacity-70 text-lg font-medium">Marketing</span>
          <span class="text-default-black opacity-70 text-lg font-medium">Soft Skill</span>
          <span class="text-default-black opacity-70 text-lg font-medium">Network</span>
          <span class="text-default-black opacity-70 text-lg font-medium">Data Analyst</span>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-auto sm:grid-cols-1 sm:gap-10 lg:gap-x-5 my-16">
      <div class="flex flex-col lg:gap-y-8 sm:gap-y-4 w-full">
        <img class="w-full h-full max-h-[425px]" src="../../assets/write2.jpeg" alt="" />
        <div class="flex flex-col lg:gap-y-4 sm:gap-y-2">
          <span class="font-medium opacity-70 text-default-black">19 Jan 2022</span>
          <div class="flex flex-col gap-y-2">
            <h4 class="font-semibold tracking-wide">Cara Menjadi Seorang Ahli Teknologi Diusia Muda Dengan Modal Minim
            </h4>
            <span class="text-default-black font-normal tracking-wide opacity-70 text-lg">See how pivoting to Webflow
              changed one person's sales strategy and allowed him to attract. See how pivoting to Webflow changed one
              person's sales strategy
            </span>
          </div>
        </div>
        <div class="flex gap-x-3 items-center">
          <span class="font-medium tracking-normal">Selengkapnya</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
            <path
              d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
              fill="#282938" />
          </svg>
        </div>
      </div>
      <div class="sm:flex lg:flex flex-col md:grid md:grid-cols-2 lg:gap-12 sm:gap-6 md:gap-10 w-full">
        <div class="w-full flex justify-between items-center lg:items-start lg:gap-x-2 sm:gap-x-0">
          <div class="flex flex-col lg:gap-y-6 sm:gap-y-0 md:gap-y-3 justify-around">
            <span class="text-xl font-medium text-default-black capitalize sm:pr-8 md:pr-4 lg:pr-0">Mudah dalam membuat
              website
              tanpa
              coding</span>
            <span class="text-default-black opacity-70 lg:text-lg sm:text-sm font-normal">1 Februari 2022</span>
          </div>
          <img class="w-32 h-32 object-cover object-center" src="../../assets/code2.jpeg" alt="" />
        </div>
        <div class="w-full flex justify-between items-center lg:items-start lg:gap-x-2 sm:gap-x-0">
          <div class="flex flex-col lg:gap-y-6 sm:gap-y-0 md:gap-y-3 justify-around">
            <span class="text-xl font-medium text-default-black capitalize sm:pr-8 md:pr-4 lg:pr-0">Pelajari Alur
              Pembuatan Sebuah
              Design
              Product</span>
            <span class="text-default-black opacity-70 lg:text-lg sm:text-sm font-normal">5 Februari 2022</span>
          </div>
          <img class="w-32 h-32 object-cover object-left" src="../../assets/code.jpeg" alt="" />
        </div>
        <div class="w-full flex justify-between items-center lg:items-start lg:gap-x-2 sm:gap-x-0">
          <div class="flex flex-col lg:gap-y-6 sm:gap-y-0 md:gap-y-3 justify-around">
            <span class="text-xl font-medium text-default-black capitalize sm:pr-8 md:pr-4 lg:pr-0">Apa yang harus
              diperesiapkan
              untuk melamar
              pekerjaan</span>
            <span class="text-default-black opacity-70 lg:text-lg sm:text-sm font-normal">1 Maret 2022</span>
          </div>
          <img class="w-32 h-32 object-cover object-center" src="../../assets/code.jpeg" alt="" />
        </div>
        <div class="w-full flex justify-between items-center lg:items-start lg:gap-x-2 sm:gap-x-0">
          <div class="flex flex-col lg:gap-y-6 sm:gap-y-0 md:gap-y-3 justify-around">
            <span class="text-xl font-medium text-default-black capitalize sm:pr-8 md:pr-4 lg:pr-0">Pekerjaan bidang
              tekonolgi
              yang bisa
              didapatkan tanpa kuliah</span>
            <span class="text-default-black opacity-70 lg:text-lg sm:text-sm font-normal">5 Maret 2022</span>
          </div>
          <img class="w-32 h-32 object-cover object-right-top" src="../../assets/code.jpeg" alt="" />
        </div>
      </div>
    </div>

    <div class="lg:mb-32 sm:mb-16">
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:gap-10 sm:gap-14 md:gap-10">
        <div class="flex flex-col lg:gap-y-8 sm:gap-y-4 w-full">
          <img class="w-full h-full object-fill" src="../../assets/code.jpeg" alt="" />
          <div class="flex flex-col lg:gap-y-4 sm:gap-y-2">
            <span class="font-medium opacity-70 text-default-black">19 Jan 2022</span>
            <div class="flex flex-col gap-y-2">
              <h4 class="text-xl font-medium text-default-black leading-normal">Cara Mudah Untuk Memulai Belajar
                Programming -
                EDUFREE
              </h4>
              <span class="text-default-black font-normal opacity-70">Menjadi seorang programmer saat ini sudah sangat
                mudah untuk dipelajari oleh siapapun ...</span>
            </div>
          </div>
          <div class="flex gap-x-3 items-center">
            <span class="font-medium tracking-normal">Selengkapnya</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#282938" />
            </svg>
          </div>
        </div>
        <div class="flex flex-col lg:gap-y-8 sm:gap-y-4 w-full">
          <img class="w-full h-full object-fill" src="../../assets/figma.jpeg" alt="" />
          <div class="flex flex-col lg:gap-y-4 sm:gap-y-2">
            <span class="font-medium opacity-70 text-default-black">19 Jan 2022</span>
            <div class="flex flex-col gap-y-2">
              <h4 class="text-xl font-medium text-default-black leading-normal">Tips Membuat Website Landing Page Bussines
                - EDUFREE</h4>
              <span class="text-default-black font-normal opacity-70">Pentingnya website dalam menumbuhkan rasa
                kepercayaan terhadap bisnis, membuat ...</span>
            </div>
          </div>
          <div class="flex gap-x-3 items-center">
            <span class="font-medium tracking-normal">Selengkapnya</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#282938" />
            </svg>
          </div>
        </div>
        <div class="flex flex-col lg:gap-y-8 sm:gap-y-4 w-ful">
          <img class="w-full h-full object-fill" src="../../assets/gallery.jpeg" alt="" />
          <div class="flex flex-col lg:gap-y-4 sm:gap-y-2">
            <span class="font-medium opacity-70 text-default-black">19 Jan 2022</span>
            <div class="flex flex-col gap-y-2">
              <h4 class="text-xl font-medium text-default-black leading-normal">Cara Installasi Wordpress Untuk Pemula
                -EDUFREE</h4>
              <span class="text-default-black font-normal opacity-70">Membuat website saat ini sudah bisa tanpa codingan,
                kini kamu bisa membuatnya dengan ...</span>
            </div>
          </div>
          <div class="flex gap-x-3 items-center">
            <span class="font-medium tracking-normal">Selengkapnya</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#282938" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center w-full mb-40">
      <div class="flex gap-x-8 items-center">
        <button class="py-2 px-5 bg-yellow-glow rounded-md shadow-lg">
          <span class="text-white font-semibold">1</span>
        </button>
        <button class="py-2 px-5 bg-[#F5F5F5] rounded-md shadow-lg">
          <span class="text-[#656565] font-normal">2</span>
        </button>
        <button class="py-2 px-5 bg-[#F5F5F5] rounded-md shadow-lg">
          <span class="text-[#656565] font-normal">3</span>
        </button>
        <div class="mt-4">. . .</div>
        <button class="py-2 px-5 bg-[#F5F5F5] rounded-md shadow-lg">
          <span class="text-[#656565] font-normal">8</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllBlog",
};
</script>
