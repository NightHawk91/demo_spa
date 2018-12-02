<template>
  <section class="section">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  import FirstPage from './components/page1'
  import SecondPage from './components/page2'
  import ThirdPage from './components/page3'
  import FourthPage from './components/page4'

  Vue.use(VueRouter);

  const routes = [
    { path: '/', component: FirstPage },
    { path: '/second', component: SecondPage },
    { path: '/third', component: ThirdPage },
    { path: '/fourth', component: FourthPage },
  ];

  const router = new VueRouter({
    routes
  });

  export default {
    components: {
      FirstPage,
      SecondPage,
      ThirdPage,
      FourthPage,
    },
    router,
  }
</script>

<style lang="scss">

</style>
