<template>
  <div id="app">
    <Header/>
    <div id="content-wrap">
      <router-view/>
    </div>
    <Footer /> 
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Footer,
    Header
  }
};
</script>

<style>
/*Standardizing margins and paddings globally*/
:root {
  box-sizing: border-box;
}
html {
  height: 100%;
  box-sizing: border-box;
}
*,
::before,
::after {
  box-sizing: inherit;
}
/* body * + * {
  margin-top: 1.5em;
} */


body {
  margin:0;
  padding:0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}
#content-wrap {
  padding-bottom: 7.3rem;    /* Footer height */
}
</style>
