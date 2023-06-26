<template>
    <div class="flex text-gray-800">
        <!-- side bar -->
        <div class="sticky top-0 w-1/6 h-screen bg-gray-200 shadow-lg">
            <h1 class="p-2 text-3xl italic text-center">
                <router-link to="/">First</router-link>
            </h1>
            <h1 class="px-6 py-2 text-xl text-gray-100 bg-violet-500">
                <router-link :to="{name : 'Dashboard'}"><i class="fa-solid fa-gear"></i> DASHBOARD</router-link>
            </h1>
            <ul class="px-6 py-4">
                <li class="py-1.5" v-for="item in navItems" :key="item.name">
                    <router-link class="hover:text-violet-600" :to="{name : item.path}"><i :class="item.icon"></i> {{ item.name }}</router-link>
                </li>
            </ul>
        </div>

        <div class="w-5/6 text-gray-700">
            <!-- navbar -->
            <nav class="sticky top-0 flex justify-end">
                <ul class="flex p-2 px-4 text-xl shadow-lg">
                    <li class="px-3">
                        <router-link to="/">
                            <i class="fa-solid fa-gear"></i>
                        </router-link>
                    </li>
                    <li class="px-3">
                        <router-link to="/">
                            <i class="fa-solid fa-book-open"></i>
                        </router-link>
                    </li>
                    <li class="px-3">
                        <router-link to="/">
                            <i class="fa-solid fa-bell"></i>
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
                        path : 'Categories'
                    },
                    {
                        name : 'Tags',
                        icon : 'fa-solid fa-tag',
                        path : 'Tags'
                    },
                    {
                        name : 'Books',
                        icon : 'fa-solid fa-book-open',
                        path : 'Books'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>