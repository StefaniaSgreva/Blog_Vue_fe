<template>
    <h1>Signin</h1>
    <div class="container">
    <div class="row">
        <div class="col-12 col-sm8- offset-sm-2 col-md-6 offset-md-3 mt-5 py-3 bg-white form-wrapper rounded-3">
            
                <!-- <div class="alert alert-success" role="alert">
                   
                </div>
           
          
                <div class="alert alert-danger" role="alert">
                   
                </div> -->
          
            <div class="container">
                <h3>Login</h3>
                <hr>
                <form class="" action="/" method="post">
                    <div class="form-group mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="text" class="form-control" name="email" id="email">
                    </div>
                    <div class="form-group mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" name="password" id="password">
                    </div>
                    <div class="row mt-4 mb-3 mx-0">
                        <div class="col-12 col-sm-8 my-auto">
                        <a href="/signup">Don't have an account yet?</a>
                        </div>
                        <div class="col-12 col-sm-4 text-end">
                            <button type="submit" class="btn btn-outline-secondary">Login</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Signin'
}
</script>
    
<style lang="scss" scoped>

</style>