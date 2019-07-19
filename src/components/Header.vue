<template>
 <div id="header">
     <h1>{{ name }}</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: {
    name: String
  }
};
</script>

<style scoped>
</style>