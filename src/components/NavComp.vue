<template>
  <div class="flex gap-16 sm:gap-8">
          <div class="flex gap-9 sm:gap-5 text-white items-center">
            <span><router-link to="/">HOME</router-link></span>
            <span>TENTANG KAMI</span>
            <span>KURSUS</span>
            <span>FAQ</span>
            <div class="flex gap-x-1.5 items-center">
              <span><router-link to="/all-blog">BLOG</router-link></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8.33334 4.99992H5.00001C4.55798 4.99992 4.13406 5.17551 3.8215 5.48807C3.50894 5.80063 3.33334 6.22456 3.33334 6.66658V14.9999C3.33334 15.4419 3.50894 15.8659 3.8215 16.1784C4.13406 16.491 4.55798 16.6666 5.00001 16.6666H13.3333C13.7754 16.6666 14.1993 16.491 14.5119 16.1784C14.8244 15.8659 15 15.4419 15 14.9999V11.6666M11.6667 3.33325H16.6667M16.6667 3.33325V8.33325M16.6667 3.33325L8.33334 11.6666"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <button class="">
            <div class="border rounded-md border-white py-3.5 sm:py-2 px-11 sm:px-6 hover:text-purple-blue hover:font-medium hover:bg-white text-white transition-all">
              Login
            </div>
          </button>
        </div>
</template>

<script>
export default {
 name: "NavComp",
}
</script>

<style>

</style>