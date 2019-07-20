<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand">
        <router-link to="/">JonathanWilson</router-link>
      </a>
      <button
        class="navbar-toggler dropdownPoke"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto justify-content-center">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/projects">Projects</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: {
    currentPage: String,
  },
  data() {
    return {
      pageList: [
        { name: "Home", adr: "/" },
        { name: "About", adr: "/about" },
        { name: "Projects", adr: "/projects" }
      ]
    };
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.navbar-nav a {
  padding: 1em;
}
a:hover, a:active {
  color: rgb(0, 255, 179);
}
.navbar-brand {
  font-size: 2em;
}

</style>