<template>
  <div id="app">
    <Header />
    <div class="main">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';

export default {
  components: { Header, Footer }
};
</script>

<style lang="scss">
@import '~@/styles/_reset.scss';
@import '~@/styles/_common.scss';

html,
body {
  font-size: 14px;
  line-height: 1.571428;
  font-family: 'PingFangSC', sans-serif;
  color: black(0.85);
  // background: linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, #000000 100%);
  background: #0C1014;
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
  }
}
</style>
