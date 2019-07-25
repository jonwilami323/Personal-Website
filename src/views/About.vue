<template>
  <div class="about">
    <h1>About</h1>
    <div class="png-container">
      <img :src="aboutMe" alt="Me" style="border-radius: 50%;">
    </div>
    <p>Brief Intro...Always looking for fun and challenging projects. Always looking for fun and challenging projects. 
      Always looking for fun and challenging projects. Always looking for fun and challenging projects. Always looking for fun and challenging projects. 
      Always looking for fun and challenging projects. Always looking for fun and challenging projects. Always looking for fun and challenging projects. 
    </p>
    <div>
      <b-button href="https://drive.google.com/file/d/1ce5czIl_dy6XT1l2i308iHFTbx8waciK/view?usp=sharing">Download Resume</b-button>
    </div>
    <h3>Interests</h3>
    <p>Brief Intro...Always looking for fun and challenging projects. Always looking for fun and challenging projects. 
      Always looking for fun and challenging projects. Always looking for fun and challenging projects.</p>
    <h3>Lists</h3>
    <ul>
      <li><router-link to="/books">Good Books</router-link></li>
      <li><router-link to="/travel">Travel</router-link></li>
      <li><router-link to="/resources">Resources</router-link></li>
    </ul>
    <div class="contact-info">
      <h3>Contact Me</h3>
        <b-card title="Contact Info" >
          <b-card-text>
            <i class="material-icons orange600">location_on</i>
            Provo, Utah 
          </b-card-text>
          <b-card-text>
            <i class="material-icons orange600">email</i>
            <a href="mailto:jonwilami@gmail.com">jonwilami@gmail.com</a> 
          </b-card-text>
          <b-card-text>
            <i class="material-icons">phone</i>
            540-335-6617 
          </b-card-text>
        </b-card>
    </div>
  </div>
</template>

<script>
import aboutMe from "../assets/img/aboutImg.png";
export default {
  name: "About",
  data() {
    return {
      aboutMe: aboutMe,
    };
  },
};
</script>

<style scoped>
.contact-info {
  margin-top: 2em;
  margin-bottom: 2em;
  text-decoration: none;

}
a.contact-info {
 text-decoration: none;
  
}
h3 {
  margin-top: 1em;
  margin-bottom: 1em;
}
.about {
  margin-right: 35em;
  margin-left: 35em;
} 
ol, ul {
    margin-left: 4em;
    padding: 0;
}
li {
  text-align: left;
}

/* @Media Queries */

/* Margin spacing */
@media only screen and (max-width: 1700px) {
  .about {
    margin-right: 0;
    margin-left: 0;
  }
  ol, ul {
    margin-left: 1em;
    padding: 0;
  }
}


</style>
