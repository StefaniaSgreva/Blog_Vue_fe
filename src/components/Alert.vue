<template>
  <div class="col-12">
    <div :class="'alert alert-' + activeClass" role="alert">
        {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'Alert',
    props: ['msg', 'activeClass']
}
</script>

<style>

</style>