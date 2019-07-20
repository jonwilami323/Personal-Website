<template>
  <div class="footer">
    <ul>
      <li>
        <a href="https://www.facebook.com/people/Jonathan-Wilson/100027603637673" target="_blank" rel="noopener"
          ><div class="png-container">
            <img :src="facebook" alt="facebook logo?">
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/jonsadventurousjourneys/"
          target="_blank"
          rel="noopener"
          ><div class="png-container">
            <img :src="instagram" alt="instagram logo?">
          </div>
        </a>
      </li>
      <li>
        <a href="https://github.com/jonwilami323" target="_blank" rel="noopener"
          ><div class="png-container" >
            <img :src="github" alt="github logo?" style="background-color: white; border-radius: 50%;">
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jonmwilson1/"
          target="_blank"
          rel="noopener"
          ><div class="png-container">
            <img :src="linkedin" alt="linkedin logo?">
          </div>
        </a>
      </li>
    </ul>
    <p>&copy; Jonathan Wilson 2019</p>
  </div>
</template>

<script>
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default {
  name: "Footer",
  props: {
    msg: String
  }, 
  data() {
    return {
      facebook: facebook,
      instagram: instagram,
      github: github,
      linkedin: linkedin
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding:0;
  margin-top: 1em;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.png-container {
    width: 40px;
    height: 40px;
}
/* resize images */
.png-container img {
    width: 100%;
    height: auto;
}
.footer {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: -2.5rem;
    background-color: #343A40;
    color: #ffffff;
    text-align: center;
  }
</style>
