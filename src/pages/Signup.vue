<template>
    <h1>Signup</h1>
    <div class="container">
    <div class="row"> 
        <div class="col-12 col-sm8- offset-sm-2 col-md-6 offset-md-3 mt-5 py-3 bg-white form-wrapper rounded-3">
            
            <Alert v-if="msg" :msg="msg" :classAlert="classAlert"></Alert>
            
            <div class="container">
                <h3>Register</h3>
                <hr>
                <form @submit.prevent="register()" action="/register" method="post">
                    <div class="row">
                        <div class="col-12 col-sm-6 mb-3">
                            <div class="form-group">
                                <label for="firstname" class="form-label">First Name</label>
                                <input type="text" class="form-control" name="firstname" id="firstname" v-model="firstname">
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 mb-3">
                            <div class="form-group">
                                <label for="lastname" class="form-label">Last Name</label>
                                <input type="text" class="form-control" name="lastname" id="lastname" v-model="lastname">
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <div class="form-group">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" name="email" id="email" v-model="email">
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 mb-3">
                            <div class="form-group">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" name="password" id="password" v-model="password">
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 mb-3">
                            <div class="form-group">
                                <label for="password_confirm" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" name="password_confirm" id="password_confirm" v-model="password_confirm">
                            </div>  
                        </div>
                       

                        <div class="row my-3 mx-0">
                            <div class="col-12 col-sm-8 my-auto">
                                <a href="/signin">Alredy have an account</a>
                            </div>
                            <div class="col-12 col-sm-4 text-end">
                                <button type="submit" class="btn btn-outline-secondary">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Alert from '../components/Alert.vue';

// import axios from "axios";
// import { store } from "../store";

export default {
    name: 'Signup',
    data(){
        return{
            // store,
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            password_confirm: '',
            msg: null,
            classAlert: null
        }
    },
    components:{
        Alert,
    },
    methods:{
        register(){
            const form = new FormData();
            form.append('firstname', this.firstname);
            form.append('lastname', this.lastname);
            form.append('email', this.email);
            form.append('password', this.password);
            form.append('password_confirm', this.password_confirm);

            this.$guest
            .post('/register', form)
            .then(() => {
                this.msg = 'You have benn successfully registered!';
                this.classAlert = 'success';
            })
            .catch(err => {
                this.msg = err.response.data.message.console.error();
                this.classAlert = 'danger';
            })
            //axios
        }
    }
}
</script>
    
<style lang="scss" scoped>

</style>