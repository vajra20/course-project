<template>
    <div class="bg-dashboard-user px-20 py-6">
      <div class="flex justify-between items-center">
        <svg width="25" height="20" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group 128">
            <line id="Line 4" y1="2" x2="40" y2="2" stroke="#282938" stroke-width="4" />
            <line id="Line 5" y1="17" x2="40" y2="17" stroke="#282938" stroke-width="4" />
            <line id="Line 6" y1="32" x2="40" y2="32" stroke="#282938" stroke-width="4" />
          </g>
        </svg>
  
        <div class="flex items-center gap-x-3">
          <img class="w-10 h-10 rounded-full object-cover" src="../../assets/profile2.png" alt="" />
          <div class="flex gap-x-10 items-center">
            <div class="flex flex-col">
              <span class="text-sm text-black font-normal">Hi, Dimas</span>
              <span class="text-xs font-medium text-[#757575]">Frontend Developer</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
  
      <div class="mt-14">
        <span class="text-lg font-medium text-default-black opacity-80">Dasar Pemrograman Web</span>
        <h2 class=" tracking-widest">Installasi Tools</h2>
        
        <div class="relative mt-10">
          <img class="w-full object-cover h-[600px] rounded-md" src="../../assets/shop-1.jpeg" alt="" />
          <div class="absolute w-full h-full top-0 bg-black opacity-60 rounded-md"></div>
          <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="109" height="123" viewBox="0 0 109 123" fill="none">
            <path
              d="M0.438692 5.28669C0.371517 1.43828 4.49556 -1.0397 7.86197 0.826335L106.33 55.4078C109.696 57.2738 109.78 62.0844 106.481 64.0667L9.97797 122.051C6.67873 124.034 2.47072 121.701 2.40354 117.853L0.438692 5.28669Z"
              fill="#FCD980"
            />
          </svg>
        </div>
      
        <div class="mt-8 flex flex-row justify-between mb-24">
          <button class="bg-yellow-glow rounded-md px-10 py-4 flex justify-center items-center">
            <span class="text-default-black font-medium ">Kembali</span>
          </button>
          <button class="bg-yellow-glow rounded-md px-10 py-4 flex justify-center items-center">
            <span class="text-default-black font-medium ">Selesai & Lanjut</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DashboardLearn",
  };
  </script>
  