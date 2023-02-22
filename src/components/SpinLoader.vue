

<!-- Componente  -->
<!-- <template>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
    props: {
      title: String,
      content: String
    }
  }
  </script> -->

<!-- View -->
  <!-- <template>
    <div>
      <my-component title="Hello, world!" content="This is a simple example of a Vue.js component." />
    </div>
  </template>
  
  <script>
  import MyComponent from '@/components/MyComponent.vue'
  
  export default {
    name: 'App',
    components: {
      MyComponent
    }
  }
  </script> -->

<template>
    <div class ="place-center">
        <div v-if="on" class="spinner-1"> </div>
    </div>
</template>
  
<script>
export default {
    name: 'SpinLoader',
    props: {
        on: Boolean
    }
}
</script>

<style scoped>
/*spinner-1*/

.place-center{
    margin: 0;
    display: flex;
    place-items: center;
    align-items: center;
  justify-content: center;
    min-width: 320px;
    min-height: 100vh;
}
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
  