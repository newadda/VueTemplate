<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2> {{ $route.query }} </h2>
    <h2>{{ api }}</h2>
    <h2>{{ $t("hello") }}</h2>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Vue from 'vue';

export default defineComponent({
  setup() {


    
    //this.count=this.$route.query;
  },
  data() {
  return {
    count: this.$route.query,
    api : import.meta.env
  }
}
})
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
