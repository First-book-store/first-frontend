<template>
    <div class="flex text-gray-800">
        <!-- side bar -->
        <div class="w-1/6 shadow-lg h-screen sticky top-0 bg-gray-200">
            <h1 class="text-3xl italic text-center p-2">
                <router-link to="/">First</router-link>
            </h1>
            <h1 class="text-xl text-gray-100 bg-violet-500 py-2 px-6">
                <router-link to="/"><i class="fa-solid fa-gear"></i> DASHBOARD</router-link>
            </h1>
            <ul class="px-6 py-4">
                <li class="py-1.5" v-for="item in navItems" :key="item.name">
                    <router-link :to="item.path"><i :class="item.icon"></i> {{ item.name }}</router-link>
                </li>
            </ul>
        </div>

        <div class="w-5/6">
            <!-- navbar -->
            <nav class="flex justify-end sticky top-0">
                <ul class="p-2 px-6 text-xl flex bg-gray-200 shadow-lg">
                    <li class="px-2">
                        <router-link to="/">
                            <i class="fa-solid fa-gear"></i>
                        </router-link>
                    </li>
                    <li class="px-2">
                        <router-link to="/">
                            <i class="fa-solid fa-gear"></i>
                        </router-link>
                    </li>
                    <li class="px-2">
                        <router-link to="/">
                            <i class="fa-solid fa-gear"></i>
                        </router-link>
                    </li>
                </ul>
            </nav>

            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                navItems : [
                    {
                        name : 'Categories',
                        icon : 'fa-solid fa-bars',
                        path : '/'
                    },
                    {
                        name : 'Tags',
                        icon : 'fa-solid fa-tag',
                        path : '/'
                    },
                    {
                        name : 'Books',
                        icon : 'fa-solid fa-book',
                        path : '/'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>