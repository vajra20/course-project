<template>
  <div class="bg-[#EEF4FA] py-7 px-16">
    <span class="text-default-black font-medium opacity-70">Home > Kursus </span>
  </div>

  <div class="px-16 bg-white">
    <div class="flex justify-center items-center mt-32">
      <div class="w-full max-w-3xl">
        <input class="w-full bg-transparent border-2 border-gray-400 px-10 py-4 rounded-lg"
          placeholder="Cari Kursus..." />
      </div>
    </div>
    <div class="flex justify-center md:mt-10 sm:mt-5">
      <div class="sm:block md:hidden w-full">
        <select class="flex border-2 w-full p-2 rounded-md border-gray-400">
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
    <div class="lg:gap-20 md:gap-10 lg:my-28 sm:my-20 flex flex-wrap">
      <div class="w-full sm:max-w-full md:max-w-md h-full md:flex-300 2xl:flex-400 ">
        <img class="rounded-t-lg w-full h-60 object-cover" src="../../assets/shop-1.jpeg" alt="" />
        <div class="py-6 px-4 flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h4 class="font-medium tracking-wide">Dasar Pemrograman WEB</h4>
            <span class="text-default-black opacity-60 font-normal text-justify">Materi pembelajaran mengenai pembuatan
              website tingkat pemula</span>
          </div>
          <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">4,5 Jam</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M14.752 11.1681L11.555 9.03607C11.4043 8.9355 11.229 8.87778 11.048 8.86907C10.867 8.86037 10.687 8.90102 10.5274 8.98667C10.3677 9.07232 10.2342 9.19975 10.1414 9.35535C10.0485 9.51095 9.99961 9.68886 10 9.87007V14.1331C9.99998 14.3141 10.0491 14.4918 10.1421 14.6471C10.2352 14.8024 10.3686 14.9295 10.5282 15.0149C10.6879 15.1004 10.8677 15.1408 11.0485 15.132C11.2293 15.1233 11.4044 15.0656 11.555 14.9651L14.752 12.8331C14.889 12.7417 15.0013 12.618 15.0789 12.4729C15.1566 12.3278 15.1972 12.1657 15.1972 12.0011C15.1972 11.8365 15.1566 11.6744 15.0789 11.5293C15.0013 11.3841 14.889 11.2604 14.752 11.1691V11.1681Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">20 Video</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.8">
                  <path
                    d="M10 3.62833C10.4479 3.12059 11.0397 2.76126 11.6968 2.59816C12.354 2.43507 13.0451 2.47594 13.6785 2.71533C14.3118 2.95473 14.8572 3.38131 15.2421 3.9383C15.627 4.49529 15.8332 5.15629 15.8332 5.83333C15.8332 6.51038 15.627 7.17138 15.2421 7.72837C14.8572 8.28536 14.3118 8.71193 13.6785 8.95133C13.0451 9.19073 12.354 9.2316 11.6968 9.06851C11.0397 8.90541 10.4479 8.54608 10 8.03833V3.62833ZM12.5 17.5H2.5V16.6667C2.5 15.3406 3.02678 14.0688 3.96447 13.1311C4.90215 12.1935 6.17392 11.6667 7.5 11.6667C8.82608 11.6667 10.0979 12.1935 11.0355 13.1311C11.9732 14.0688 12.5 15.3406 12.5 16.6667V17.5ZM12.5 17.5H17.5V16.6667C17.5001 15.7889 17.2692 14.9266 16.8304 14.1664C16.3916 13.4062 15.7604 12.7749 15.0003 12.336C14.2402 11.8971 13.3779 11.666 12.5002 11.666C11.6224 11.6659 10.7601 11.897 10 12.3358L12.5 17.5ZM10.8333 5.83333C10.8333 6.71739 10.4821 7.56524 9.85702 8.19036C9.2319 8.81548 8.38405 9.16667 7.5 9.16667C6.61594 9.16667 5.7681 8.81548 5.14298 8.19036C4.51786 7.56524 4.16667 6.71739 4.16667 5.83333C4.16667 4.94928 4.51786 4.10143 5.14298 3.47631C5.7681 2.85119 6.61594 2.5 7.5 2.5C8.38405 2.5 9.2319 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V5.83333Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">1.900 Siswa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:max-w-full md:max-w-md h-full md:flex-300 2xl:flex-400 ">
        <img class="rounded-t-lg h-60 object-cover w-full" src="../../assets/shop-2.jpeg" alt="" />
        <div class="py-6 px-4 flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h4 class="font-medium tracking-wide">Digital Marketing 101</h4>
            <span class="text-default-black opacity-60 font-normal text-justify">Materi mengenai strategi dan konsep
              marketing pemula</span>
          </div>
          <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">6,2 Jam</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M14.752 11.1681L11.555 9.03607C11.4043 8.9355 11.229 8.87778 11.048 8.86907C10.867 8.86037 10.687 8.90102 10.5274 8.98667C10.3677 9.07232 10.2342 9.19975 10.1414 9.35535C10.0485 9.51095 9.99961 9.68886 10 9.87007V14.1331C9.99998 14.3141 10.0491 14.4918 10.1421 14.6471C10.2352 14.8024 10.3686 14.9295 10.5282 15.0149C10.6879 15.1004 10.8677 15.1408 11.0485 15.132C11.2293 15.1233 11.4044 15.0656 11.555 14.9651L14.752 12.8331C14.889 12.7417 15.0013 12.618 15.0789 12.4729C15.1566 12.3278 15.1972 12.1657 15.1972 12.0011C15.1972 11.8365 15.1566 11.6744 15.0789 11.5293C15.0013 11.3841 14.889 11.2604 14.752 11.1691V11.1681Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">32 Video</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.8">
                  <path
                    d="M10 3.62833C10.4479 3.12059 11.0397 2.76126 11.6968 2.59816C12.354 2.43507 13.0451 2.47594 13.6785 2.71533C14.3118 2.95473 14.8572 3.38131 15.2421 3.9383C15.627 4.49529 15.8332 5.15629 15.8332 5.83333C15.8332 6.51038 15.627 7.17138 15.2421 7.72837C14.8572 8.28536 14.3118 8.71193 13.6785 8.95133C13.0451 9.19073 12.354 9.2316 11.6968 9.06851C11.0397 8.90541 10.4479 8.54608 10 8.03833V3.62833ZM12.5 17.5H2.5V16.6667C2.5 15.3406 3.02678 14.0688 3.96447 13.1311C4.90215 12.1935 6.17392 11.6667 7.5 11.6667C8.82608 11.6667 10.0979 12.1935 11.0355 13.1311C11.9732 14.0688 12.5 15.3406 12.5 16.6667V17.5ZM12.5 17.5H17.5V16.6667C17.5001 15.7889 17.2692 14.9266 16.8304 14.1664C16.3916 13.4062 15.7604 12.7749 15.0003 12.336C14.2402 11.8971 13.3779 11.666 12.5002 11.666C11.6224 11.6659 10.7601 11.897 10 12.3358L12.5 17.5ZM10.8333 5.83333C10.8333 6.71739 10.4821 7.56524 9.85702 8.19036C9.2319 8.81548 8.38405 9.16667 7.5 9.16667C6.61594 9.16667 5.7681 8.81548 5.14298 8.19036C4.51786 7.56524 4.16667 6.71739 4.16667 5.83333C4.16667 4.94928 4.51786 4.10143 5.14298 3.47631C5.7681 2.85119 6.61594 2.5 7.5 2.5C8.38405 2.5 9.2319 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V5.83333Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">930 Siswa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:max-w-full md:max-w-md h-full md:flex-300 2xl:flex-400 ">
        <img class="rounded-t-lg w-full h-60 object-cover" src="../../assets/shop-3.jpeg" alt="" />
        <div class="py-6 px-4 flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h4 class="font-medium tracking-wide">Data Science Dasar</h4>
            <span class="text-default-black opacity-60 font-normal text-justify">Materi pembelajaran mengenai dasar-dasar
              data science</span>
          </div>
          <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">8 Jam</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M14.752 11.1681L11.555 9.03607C11.4043 8.9355 11.229 8.87778 11.048 8.86907C10.867 8.86037 10.687 8.90102 10.5274 8.98667C10.3677 9.07232 10.2342 9.19975 10.1414 9.35535C10.0485 9.51095 9.99961 9.68886 10 9.87007V14.1331C9.99998 14.3141 10.0491 14.4918 10.1421 14.6471C10.2352 14.8024 10.3686 14.9295 10.5282 15.0149C10.6879 15.1004 10.8677 15.1408 11.0485 15.132C11.2293 15.1233 11.4044 15.0656 11.555 14.9651L14.752 12.8331C14.889 12.7417 15.0013 12.618 15.0789 12.4729C15.1566 12.3278 15.1972 12.1657 15.1972 12.0011C15.1972 11.8365 15.1566 11.6744 15.0789 11.5293C15.0013 11.3841 14.889 11.2604 14.752 11.1691V11.1681Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">46 Video</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.8">
                  <path
                    d="M10 3.62833C10.4479 3.12059 11.0397 2.76126 11.6968 2.59816C12.354 2.43507 13.0451 2.47594 13.6785 2.71533C14.3118 2.95473 14.8572 3.38131 15.2421 3.9383C15.627 4.49529 15.8332 5.15629 15.8332 5.83333C15.8332 6.51038 15.627 7.17138 15.2421 7.72837C14.8572 8.28536 14.3118 8.71193 13.6785 8.95133C13.0451 9.19073 12.354 9.2316 11.6968 9.06851C11.0397 8.90541 10.4479 8.54608 10 8.03833V3.62833ZM12.5 17.5H2.5V16.6667C2.5 15.3406 3.02678 14.0688 3.96447 13.1311C4.90215 12.1935 6.17392 11.6667 7.5 11.6667C8.82608 11.6667 10.0979 12.1935 11.0355 13.1311C11.9732 14.0688 12.5 15.3406 12.5 16.6667V17.5ZM12.5 17.5H17.5V16.6667C17.5001 15.7889 17.2692 14.9266 16.8304 14.1664C16.3916 13.4062 15.7604 12.7749 15.0003 12.336C14.2402 11.8971 13.3779 11.666 12.5002 11.666C11.6224 11.6659 10.7601 11.897 10 12.3358L12.5 17.5ZM10.8333 5.83333C10.8333 6.71739 10.4821 7.56524 9.85702 8.19036C9.2319 8.81548 8.38405 9.16667 7.5 9.16667C6.61594 9.16667 5.7681 8.81548 5.14298 8.19036C4.51786 7.56524 4.16667 6.71739 4.16667 5.83333C4.16667 4.94928 4.51786 4.10143 5.14298 3.47631C5.7681 2.85119 6.61594 2.5 7.5 2.5C8.38405 2.5 9.2319 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V5.83333Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">1.043 Siswa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:max-w-full md:max-w-md h-full md:flex-300 2xl:flex-400 ">
        <img class="rounded-t-lg w-full h-60 object-cover" src="../../assets/shop-4.jpeg" alt="" />
        <div class="py-6 px-4 flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h4 class="font-medium tracking-wide">Public Speaking Dasar</h4>
            <span class="text-default-black opacity-60 font-normal text-justify">Pelajari tentang konsep dan teori dasar
              public speaking </span>
          </div>
          <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">2,6 Jam</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M14.752 11.1681L11.555 9.03607C11.4043 8.9355 11.229 8.87778 11.048 8.86907C10.867 8.86037 10.687 8.90102 10.5274 8.98667C10.3677 9.07232 10.2342 9.19975 10.1414 9.35535C10.0485 9.51095 9.99961 9.68886 10 9.87007V14.1331C9.99998 14.3141 10.0491 14.4918 10.1421 14.6471C10.2352 14.8024 10.3686 14.9295 10.5282 15.0149C10.6879 15.1004 10.8677 15.1408 11.0485 15.132C11.2293 15.1233 11.4044 15.0656 11.555 14.9651L14.752 12.8331C14.889 12.7417 15.0013 12.618 15.0789 12.4729C15.1566 12.3278 15.1972 12.1657 15.1972 12.0011C15.1972 11.8365 15.1566 11.6744 15.0789 11.5293C15.0013 11.3841 14.889 11.2604 14.752 11.1691V11.1681Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">13 Video</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.8">
                  <path
                    d="M10 3.62833C10.4479 3.12059 11.0397 2.76126 11.6968 2.59816C12.354 2.43507 13.0451 2.47594 13.6785 2.71533C14.3118 2.95473 14.8572 3.38131 15.2421 3.9383C15.627 4.49529 15.8332 5.15629 15.8332 5.83333C15.8332 6.51038 15.627 7.17138 15.2421 7.72837C14.8572 8.28536 14.3118 8.71193 13.6785 8.95133C13.0451 9.19073 12.354 9.2316 11.6968 9.06851C11.0397 8.90541 10.4479 8.54608 10 8.03833V3.62833ZM12.5 17.5H2.5V16.6667C2.5 15.3406 3.02678 14.0688 3.96447 13.1311C4.90215 12.1935 6.17392 11.6667 7.5 11.6667C8.82608 11.6667 10.0979 12.1935 11.0355 13.1311C11.9732 14.0688 12.5 15.3406 12.5 16.6667V17.5ZM12.5 17.5H17.5V16.6667C17.5001 15.7889 17.2692 14.9266 16.8304 14.1664C16.3916 13.4062 15.7604 12.7749 15.0003 12.336C14.2402 11.8971 13.3779 11.666 12.5002 11.666C11.6224 11.6659 10.7601 11.897 10 12.3358L12.5 17.5ZM10.8333 5.83333C10.8333 6.71739 10.4821 7.56524 9.85702 8.19036C9.2319 8.81548 8.38405 9.16667 7.5 9.16667C6.61594 9.16667 5.7681 8.81548 5.14298 8.19036C4.51786 7.56524 4.16667 6.71739 4.16667 5.83333C4.16667 4.94928 4.51786 4.10143 5.14298 3.47631C5.7681 2.85119 6.61594 2.5 7.5 2.5C8.38405 2.5 9.2319 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V5.83333Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">900 Siswa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:max-w-full md:max-w-md h-full md:flex-300 2xl:flex-400 ">
        <img class="rounded-t-lg w-full h-60 object-cover" src="../../assets/shop-5.jpeg" alt="" />
        <div class="py-6 px-4 flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h4 class="font-medium tracking-wide">Jaringan Dasar</h4>
            <span class="text-default-black opacity-60 font-normal text-justify">Pemebelajaran jaringan komputer dasar
              untuk semua kalangan </span>
          </div>
          <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">4 Jam</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M14.752 11.1681L11.555 9.03607C11.4043 8.9355 11.229 8.87778 11.048 8.86907C10.867 8.86037 10.687 8.90102 10.5274 8.98667C10.3677 9.07232 10.2342 9.19975 10.1414 9.35535C10.0485 9.51095 9.99961 9.68886 10 9.87007V14.1331C9.99998 14.3141 10.0491 14.4918 10.1421 14.6471C10.2352 14.8024 10.3686 14.9295 10.5282 15.0149C10.6879 15.1004 10.8677 15.1408 11.0485 15.132C11.2293 15.1233 11.4044 15.0656 11.555 14.9651L14.752 12.8331C14.889 12.7417 15.0013 12.618 15.0789 12.4729C15.1566 12.3278 15.1972 12.1657 15.1972 12.0011C15.1972 11.8365 15.1566 11.6744 15.0789 11.5293C15.0013 11.3841 14.889 11.2604 14.752 11.1691V11.1681Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">17 Video</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.8">
                  <path
                    d="M10 3.62833C10.4479 3.12059 11.0397 2.76126 11.6968 2.59816C12.354 2.43507 13.0451 2.47594 13.6785 2.71533C14.3118 2.95473 14.8572 3.38131 15.2421 3.9383C15.627 4.49529 15.8332 5.15629 15.8332 5.83333C15.8332 6.51038 15.627 7.17138 15.2421 7.72837C14.8572 8.28536 14.3118 8.71193 13.6785 8.95133C13.0451 9.19073 12.354 9.2316 11.6968 9.06851C11.0397 8.90541 10.4479 8.54608 10 8.03833V3.62833ZM12.5 17.5H2.5V16.6667C2.5 15.3406 3.02678 14.0688 3.96447 13.1311C4.90215 12.1935 6.17392 11.6667 7.5 11.6667C8.82608 11.6667 10.0979 12.1935 11.0355 13.1311C11.9732 14.0688 12.5 15.3406 12.5 16.6667V17.5ZM12.5 17.5H17.5V16.6667C17.5001 15.7889 17.2692 14.9266 16.8304 14.1664C16.3916 13.4062 15.7604 12.7749 15.0003 12.336C14.2402 11.8971 13.3779 11.666 12.5002 11.666C11.6224 11.6659 10.7601 11.897 10 12.3358L12.5 17.5ZM10.8333 5.83333C10.8333 6.71739 10.4821 7.56524 9.85702 8.19036C9.2319 8.81548 8.38405 9.16667 7.5 9.16667C6.61594 9.16667 5.7681 8.81548 5.14298 8.19036C4.51786 7.56524 4.16667 6.71739 4.16667 5.83333C4.16667 4.94928 4.51786 4.10143 5.14298 3.47631C5.7681 2.85119 6.61594 2.5 7.5 2.5C8.38405 2.5 9.2319 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V5.83333Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">909 Siswa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:max-w-full md:max-w-md h-full md:flex-300 2xl:flex-400 ">
        <img class="rounded-t-lg w-full h-60 object-cover" src="../../assets/shop-6.jpeg" alt="" />
        <div class="py-6 px-4 flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h4 class="font-medium tracking-wide">UI/UX Pemula</h4>
            <span class="text-default-black opacity-60 font-normal text-justify">Dasar-dasar teori dan praktik tentang
              dunia ui/ux design</span>
          </div>
          <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">5 Jam</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M14.752 11.1681L11.555 9.03607C11.4043 8.9355 11.229 8.87778 11.048 8.86907C10.867 8.86037 10.687 8.90102 10.5274 8.98667C10.3677 9.07232 10.2342 9.19975 10.1414 9.35535C10.0485 9.51095 9.99961 9.68886 10 9.87007V14.1331C9.99998 14.3141 10.0491 14.4918 10.1421 14.6471C10.2352 14.8024 10.3686 14.9295 10.5282 15.0149C10.6879 15.1004 10.8677 15.1408 11.0485 15.132C11.2293 15.1233 11.4044 15.0656 11.555 14.9651L14.752 12.8331C14.889 12.7417 15.0013 12.618 15.0789 12.4729C15.1566 12.3278 15.1972 12.1657 15.1972 12.0011C15.1972 11.8365 15.1566 11.6744 15.0789 11.5293C15.0013 11.3841 14.889 11.2604 14.752 11.1691V11.1681Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">25 Video</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.8">
                  <path
                    d="M10 3.62833C10.4479 3.12059 11.0397 2.76126 11.6968 2.59816C12.354 2.43507 13.0451 2.47594 13.6785 2.71533C14.3118 2.95473 14.8572 3.38131 15.2421 3.9383C15.627 4.49529 15.8332 5.15629 15.8332 5.83333C15.8332 6.51038 15.627 7.17138 15.2421 7.72837C14.8572 8.28536 14.3118 8.71193 13.6785 8.95133C13.0451 9.19073 12.354 9.2316 11.6968 9.06851C11.0397 8.90541 10.4479 8.54608 10 8.03833V3.62833ZM12.5 17.5H2.5V16.6667C2.5 15.3406 3.02678 14.0688 3.96447 13.1311C4.90215 12.1935 6.17392 11.6667 7.5 11.6667C8.82608 11.6667 10.0979 12.1935 11.0355 13.1311C11.9732 14.0688 12.5 15.3406 12.5 16.6667V17.5ZM12.5 17.5H17.5V16.6667C17.5001 15.7889 17.2692 14.9266 16.8304 14.1664C16.3916 13.4062 15.7604 12.7749 15.0003 12.336C14.2402 11.8971 13.3779 11.666 12.5002 11.666C11.6224 11.6659 10.7601 11.897 10 12.3358L12.5 17.5ZM10.8333 5.83333C10.8333 6.71739 10.4821 7.56524 9.85702 8.19036C9.2319 8.81548 8.38405 9.16667 7.5 9.16667C6.61594 9.16667 5.7681 8.81548 5.14298 8.19036C4.51786 7.56524 4.16667 6.71739 4.16667 5.83333C4.16667 4.94928 4.51786 4.10143 5.14298 3.47631C5.7681 2.85119 6.61594 2.5 7.5 2.5C8.38405 2.5 9.2319 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V5.83333Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">1.150 Siswa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:max-w-full md:max-w-md h-full md:flex-300 2xl:flex-400 ">
        <img class="rounded-t-lg w-full h-60 object-cover" src="../../assets/shop-7.jpeg" alt="" />
        <div class="py-6 px-4 flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h4 class="font-medium tracking-wide">Bahasa Inggris Dasar</h4>
            <span class="text-default-black opacity-60 font-normal text-justify">Mudah dalam berbicara dengan bahasa
              inggris dengan menguasai grammar</span>
          </div>
          <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">12 Jam</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M14.752 11.1681L11.555 9.03607C11.4043 8.9355 11.229 8.87778 11.048 8.86907C10.867 8.86037 10.687 8.90102 10.5274 8.98667C10.3677 9.07232 10.2342 9.19975 10.1414 9.35535C10.0485 9.51095 9.99961 9.68886 10 9.87007V14.1331C9.99998 14.3141 10.0491 14.4918 10.1421 14.6471C10.2352 14.8024 10.3686 14.9295 10.5282 15.0149C10.6879 15.1004 10.8677 15.1408 11.0485 15.132C11.2293 15.1233 11.4044 15.0656 11.555 14.9651L14.752 12.8331C14.889 12.7417 15.0013 12.618 15.0789 12.4729C15.1566 12.3278 15.1972 12.1657 15.1972 12.0011C15.1972 11.8365 15.1566 11.6744 15.0789 11.5293C15.0013 11.3841 14.889 11.2604 14.752 11.1691V11.1681Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">50 Video</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.8">
                  <path
                    d="M10 3.62833C10.4479 3.12059 11.0397 2.76126 11.6968 2.59816C12.354 2.43507 13.0451 2.47594 13.6785 2.71533C14.3118 2.95473 14.8572 3.38131 15.2421 3.9383C15.627 4.49529 15.8332 5.15629 15.8332 5.83333C15.8332 6.51038 15.627 7.17138 15.2421 7.72837C14.8572 8.28536 14.3118 8.71193 13.6785 8.95133C13.0451 9.19073 12.354 9.2316 11.6968 9.06851C11.0397 8.90541 10.4479 8.54608 10 8.03833V3.62833ZM12.5 17.5H2.5V16.6667C2.5 15.3406 3.02678 14.0688 3.96447 13.1311C4.90215 12.1935 6.17392 11.6667 7.5 11.6667C8.82608 11.6667 10.0979 12.1935 11.0355 13.1311C11.9732 14.0688 12.5 15.3406 12.5 16.6667V17.5ZM12.5 17.5H17.5V16.6667C17.5001 15.7889 17.2692 14.9266 16.8304 14.1664C16.3916 13.4062 15.7604 12.7749 15.0003 12.336C14.2402 11.8971 13.3779 11.666 12.5002 11.666C11.6224 11.6659 10.7601 11.897 10 12.3358L12.5 17.5ZM10.8333 5.83333C10.8333 6.71739 10.4821 7.56524 9.85702 8.19036C9.2319 8.81548 8.38405 9.16667 7.5 9.16667C6.61594 9.16667 5.7681 8.81548 5.14298 8.19036C4.51786 7.56524 4.16667 6.71739 4.16667 5.83333C4.16667 4.94928 4.51786 4.10143 5.14298 3.47631C5.7681 2.85119 6.61594 2.5 7.5 2.5C8.38405 2.5 9.2319 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V5.83333Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">1.430 Siswa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:max-w-full md:max-w-md h-full md:flex-300 2xl:flex-400 ">
        <img class="rounded-t-lg w-full h-60 object-cover" src="../../assets/work.png" alt="" />
        <div class="py-6 px-4 flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h4 class="font-medium tracking-wide">Teknologi Cocok Tanaman</h4>
            <span class="text-default-black opacity-60 font-normal text-justify">Teknik penanaman dengan bantuan teknologi
              yang terbukti</span>
          </div>
          <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">7 Jam</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M14.752 11.1681L11.555 9.03607C11.4043 8.9355 11.229 8.87778 11.048 8.86907C10.867 8.86037 10.687 8.90102 10.5274 8.98667C10.3677 9.07232 10.2342 9.19975 10.1414 9.35535C10.0485 9.51095 9.99961 9.68886 10 9.87007V14.1331C9.99998 14.3141 10.0491 14.4918 10.1421 14.6471C10.2352 14.8024 10.3686 14.9295 10.5282 15.0149C10.6879 15.1004 10.8677 15.1408 11.0485 15.132C11.2293 15.1233 11.4044 15.0656 11.555 14.9651L14.752 12.8331C14.889 12.7417 15.0013 12.618 15.0789 12.4729C15.1566 12.3278 15.1972 12.1657 15.1972 12.0011C15.1972 11.8365 15.1566 11.6744 15.0789 11.5293C15.0013 11.3841 14.889 11.2604 14.752 11.1691V11.1681Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">24 Video</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.8">
                  <path
                    d="M10 3.62833C10.4479 3.12059 11.0397 2.76126 11.6968 2.59816C12.354 2.43507 13.0451 2.47594 13.6785 2.71533C14.3118 2.95473 14.8572 3.38131 15.2421 3.9383C15.627 4.49529 15.8332 5.15629 15.8332 5.83333C15.8332 6.51038 15.627 7.17138 15.2421 7.72837C14.8572 8.28536 14.3118 8.71193 13.6785 8.95133C13.0451 9.19073 12.354 9.2316 11.6968 9.06851C11.0397 8.90541 10.4479 8.54608 10 8.03833V3.62833ZM12.5 17.5H2.5V16.6667C2.5 15.3406 3.02678 14.0688 3.96447 13.1311C4.90215 12.1935 6.17392 11.6667 7.5 11.6667C8.82608 11.6667 10.0979 12.1935 11.0355 13.1311C11.9732 14.0688 12.5 15.3406 12.5 16.6667V17.5ZM12.5 17.5H17.5V16.6667C17.5001 15.7889 17.2692 14.9266 16.8304 14.1664C16.3916 13.4062 15.7604 12.7749 15.0003 12.336C14.2402 11.8971 13.3779 11.666 12.5002 11.666C11.6224 11.6659 10.7601 11.897 10 12.3358L12.5 17.5ZM10.8333 5.83333C10.8333 6.71739 10.4821 7.56524 9.85702 8.19036C9.2319 8.81548 8.38405 9.16667 7.5 9.16667C6.61594 9.16667 5.7681 8.81548 5.14298 8.19036C4.51786 7.56524 4.16667 6.71739 4.16667 5.83333C4.16667 4.94928 4.51786 4.10143 5.14298 3.47631C5.7681 2.85119 6.61594 2.5 7.5 2.5C8.38405 2.5 9.2319 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V5.83333Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">505 Siswa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:max-w-full md:max-w-md h-full md:flex-300 2xl:flex-400 ">
        <img class="rounded-t-lg w-full h-60 object-cover" src="../../assets/shop-8.jpeg" alt="" />
        <div class="py-6 px-4 flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h4 class="font-medium tracking-wide">Machine Learning 101</h4>
            <span class="text-default-black opacity-60 font-normal text-justify">Pelajari konsep dasar tentang mechine
              learning</span>
          </div>
          <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M12 8V12L15 15L12 8ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">7 Jam</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.8">
                  <path
                    d="M14.752 11.1681L11.555 9.03607C11.4043 8.9355 11.229 8.87778 11.048 8.86907C10.867 8.86037 10.687 8.90102 10.5274 8.98667C10.3677 9.07232 10.2342 9.19975 10.1414 9.35535C10.0485 9.51095 9.99961 9.68886 10 9.87007V14.1331C9.99998 14.3141 10.0491 14.4918 10.1421 14.6471C10.2352 14.8024 10.3686 14.9295 10.5282 15.0149C10.6879 15.1004 10.8677 15.1408 11.0485 15.132C11.2293 15.1233 11.4044 15.0656 11.555 14.9651L14.752 12.8331C14.889 12.7417 15.0013 12.618 15.0789 12.4729C15.1566 12.3278 15.1972 12.1657 15.1972 12.0011C15.1972 11.8365 15.1566 11.6744 15.0789 11.5293C15.0013 11.3841 14.889 11.2604 14.752 11.1691V11.1681Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">17 Video</span>
            </div>
            <div class="flex items-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.8">
                  <path
                    d="M10 3.62833C10.4479 3.12059 11.0397 2.76126 11.6968 2.59816C12.354 2.43507 13.0451 2.47594 13.6785 2.71533C14.3118 2.95473 14.8572 3.38131 15.2421 3.9383C15.627 4.49529 15.8332 5.15629 15.8332 5.83333C15.8332 6.51038 15.627 7.17138 15.2421 7.72837C14.8572 8.28536 14.3118 8.71193 13.6785 8.95133C13.0451 9.19073 12.354 9.2316 11.6968 9.06851C11.0397 8.90541 10.4479 8.54608 10 8.03833V3.62833ZM12.5 17.5H2.5V16.6667C2.5 15.3406 3.02678 14.0688 3.96447 13.1311C4.90215 12.1935 6.17392 11.6667 7.5 11.6667C8.82608 11.6667 10.0979 12.1935 11.0355 13.1311C11.9732 14.0688 12.5 15.3406 12.5 16.6667V17.5ZM12.5 17.5H17.5V16.6667C17.5001 15.7889 17.2692 14.9266 16.8304 14.1664C16.3916 13.4062 15.7604 12.7749 15.0003 12.336C14.2402 11.8971 13.3779 11.666 12.5002 11.666C11.6224 11.6659 10.7601 11.897 10 12.3358L12.5 17.5ZM10.8333 5.83333C10.8333 6.71739 10.4821 7.56524 9.85702 8.19036C9.2319 8.81548 8.38405 9.16667 7.5 9.16667C6.61594 9.16667 5.7681 8.81548 5.14298 8.19036C4.51786 7.56524 4.16667 6.71739 4.16667 5.83333C4.16667 4.94928 4.51786 4.10143 5.14298 3.47631C5.7681 2.85119 6.61594 2.5 7.5 2.5C8.38405 2.5 9.2319 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V5.83333Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <span class="font-normal text-justify text-default-black">200 Siswa</span>
            </div>
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
  name: "AllCourse",
};
</script>
