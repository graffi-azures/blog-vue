<template>
  <div>
    <div v-if="$route.meta.headerAlive">
      <HeaderCop></HeaderCop>
    </div>
    <BackTop></BackTop>

    <div id="v-content" v-bind:style="{ minHeight: Height + 'px' }">
      <router-view />
    </div>
    <div v-if="$route.meta.keepAlive">
      <FooterCop></FooterCop>
    </div>
  </div>
</template>

<script>
import HeaderCop from "./components/HeaderCop";
import BackTop from "./components/BackTop";
import FooterCop from "./components/FooterCop";

export default {
  name: 'App',
  components: {
    FooterCop,
    BackTop,
    HeaderCop,
  },
  data(){
    return{
      Height:0
    }
  },
  mounted () {
    this.Height = document.documentElement.clientHeight - 100
    window.onresize = () => { this.Height = document.documentElement.clientHeight - 100 }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}
</style>
