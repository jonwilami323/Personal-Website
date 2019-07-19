<template>
  <div id="app">
    <Header name="JonathanWilson"/>
    <Footer />
    

  </div>
</template>

<!--Global site tag (gtag.js) - Google Analytics-->
<!--This site tag should be placed on every page-->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-142191551-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-142191551-1');
</script>
<!--End of Google tag-->

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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
