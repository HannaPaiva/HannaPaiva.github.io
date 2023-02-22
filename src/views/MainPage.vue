
<template>
  <div>

    <SpinLoader :on="load"/>

    <h1>this is Home</h1>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>


  </div>
</template>
<script>
import SpinLoader from '../components/SpinLoader.vue'

export default {
  name: 'App',
  components: {
    SpinLoader
  },

  data(){
    return{
      load:true
    }
  }
}
</script> -->

<style scoped>
/*spinner-1*/
.spinner-1 {
  width: 30px;
  height: 30px;
  border-radius: 100% 0;
  box-shadow: 0 0 16px -1px rgba(255, 255, 255, 0.4);
  background: #8eecd6;
  animation: rotateANDcolor ease-in-out infinite 1.5s alternate-reverse;
}

.spinner-1:before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background: #8eecd6;
  border-radius: 0 100%;
  animation: rotateANDcolor ease-in-out infinite 1.5s alternate-reverse;
}

@keyframes rotateANDcolor {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);

    background: #ec8edd;
  }
}
</style>
  