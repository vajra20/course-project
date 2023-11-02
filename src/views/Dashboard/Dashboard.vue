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
                        <path d="M6 9L12 15L18 9" stroke="#757575" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-16 mt-14">
            <div class="bg-white shadow rounded-xl col-span-2 px-10 py-6">
                <div class="flex justify-between">
                    <div class="flex flex-col gap-y-1">
                        <span class=" text-2xl font-semibold tracking-tight text-black">Overview</span>
                        <span class=" text-sm text-[#ACACAC] font-normal tracking-tight">Video selesai (Hari)</span>
                    </div>
                    <select>
                        <option value="">Kategori</option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
            </div>
            <div class="col-span-1">
                <div class=" bg-white shadow rounded-xl col-span-1 px-10 py-6">
                    <div class="flex flex-col gap-y-1">
                        <span class=" text-2xl font-semibold tracking-tight text-black">Statistik</span>
                        <span class=" text-sm text-[#ACACAC] font-normal tracking-tight">Video ditonton</span>
                    </div>
                    <div class="py-6 flex justify-center items-center ">
                        <div class="relative bg-gray-200 w-60 h-60 rounded-full justify-center items-center flex">
                            <div class="bg-red-600 w-40 h-40 rounded-full flex justify-center items-center">
                                <span>65% Video Ditonton</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white col-span-3 w-full rounded-xl px-5 py-6">
                <div class="flex justify-between items-center px-5">
                    <span class=" text-2xl font-semibold tracking-tight text-black">Aktivitas Belajar</span>
                    <div class="flex gap-x-6">
                        <span>Search</span>
                        <span>Kategori</span>
                    </div>
                </div>
                <table class="w-full">
                    <thead class="text-[#B5B7C0] font-medium text-sm border-b">
                        <td>Nama Kursus</td>
                        <td>Progress</td>
                        <td>Status</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="flex items-center gap-x-6">
                                    <img class=" rounded-lg w-24 h-14" src="../../assets/laptop.png" alt="" />
                                    <div class="flex flex-col">
                                        <span class=" text-lg font-semibold">Dasar Pemrograman Web</span>
                                        <span class=" text-xs font-normal text-[#9197B3]">
                                            Materi pembelajaran mengenai pembuatan website ...
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="flex flex-col w-fit">
                                    <div class="flex justify-end ">
                                        <span class=" text-sm text-justify text-default-black font-normal">20%</span>
                                    </div>
                                    <div class="relative w-52 bg-[#C4C4C4] rounded-full h-2 opacity-50">
                                        <div class="absolute top-0 left-0 bg-[#1C1E53] opacity-70 w-11 h-2 rounded-full">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class=" underline text-[#2405F2] tracking-tight font-normal">Lanjutkan</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex items-center gap-x-6">
                                    <img class=" rounded-lg w-24 h-14" src="../../assets/laptop.png" alt="" />
                                    <div class="flex flex-col">
                                        <span class=" text-lg font-semibold">Dasar Pemrograman Web</span>
                                        <span class=" text-xs font-normal text-[#9197B3]">
                                            Materi pembelajaran mengenai pembuatan website ...
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="flex flex-col w-fit">
                                    <div class="flex justify-end ">
                                        <span class=" text-sm text-justify text-default-black font-normal">20%</span>
                                    </div>
                                    <div class="relative w-52 bg-[#C4C4C4] rounded-full h-2 opacity-50">
                                        <div class="absolute top-0 left-0 bg-[#1C1E53] opacity-70 w-11 h-2 rounded-full">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class=" underline text-[#2405F2] tracking-tight font-normal">Lanjutkan</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex items-center gap-x-6">
                                    <img class=" rounded-lg w-24 h-14" src="../../assets/laptop.png" alt="" />
                                    <div class="flex flex-col">
                                        <span class=" text-lg font-semibold">Dasar Pemrograman Web</span>
                                        <span class=" text-xs font-normal text-[#9197B3]">
                                            Materi pembelajaran mengenai pembuatan website ...
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="flex flex-col w-fit">
                                    <div class="flex justify-end ">
                                        <span class=" text-sm text-justify text-default-black font-normal">20%</span>
                                    </div>
                                    <div class="relative w-52 bg-[#C4C4C4] rounded-full h-2 opacity-50">
                                        <div class="absolute top-0 left-0 bg-[#1C1E53] opacity-70 w-11 h-2 rounded-full">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class=" underline text-[#2405F2] tracking-tight font-normal">Lanjutkan</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex items-center gap-x-6">
                                    <img class=" rounded-lg w-24 h-14" src="../../assets/laptop.png" alt="" />
                                    <div class="flex flex-col">
                                        <span class=" text-lg font-semibold">Dasar Pemrograman Web</span>
                                        <span class=" text-xs font-normal text-[#9197B3]">
                                            Materi pembelajaran mengenai pembuatan website ...
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="flex flex-col w-fit">
                                    <div class="flex justify-end ">
                                        <span class=" text-sm text-justify text-default-black font-normal">20%</span>
                                    </div>
                                    <div class="relative w-52 bg-[#C4C4C4] rounded-full h-2 opacity-50">
                                        <div class="absolute top-0 left-0 bg-[#1C1E53] opacity-70 w-11 h-2 rounded-full">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class=" underline text-[#2405F2] tracking-tight font-normal">Lanjutkan</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard"
}
</script>