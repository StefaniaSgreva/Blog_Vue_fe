<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="(loggedIn ? '/' : '/signin')">{{ brand }}</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul v-if="!loggedIn" class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="ms-5" v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="{name : item.routeName}" active-class="active" class="nav-link">
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>
                <ul v-else>
                    <MenuLink path="/" text="Admin"></MenuLink>

                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="logout()">Link</a>
                    </li>
                </ul>
        
            </div>
        </div>
    </nav>
</template>

<script>
import MenuLink from '../components/MenuLink.vue';

export default {
    name: 'Nav',
    props:['loggedIn'],
    data(){
        return {
            // brand: import.meta.env.VUE_APP_APPNAME,
            brand: 'Ci Vue Blog',
            menuItems:[
                {
                    label: 'Signin',
                    routeName: 'signin'
                },
                {
                    label: 'Signup',
                    routeName: 'signup'
                },
            ]
        }
    },
    components:{
        MenuLink
    },
    methods:{
        logout(){
            console.log('logged out');
        }
    }

}
</script>

<style>

</style>