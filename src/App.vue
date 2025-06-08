<template>
  <div id="app">
    <Navbar v-if="!$route.path.includes('/login')" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: { Navbar }
};
</script>

<style>
#app {
  background-color: var(--bg-dark);
  min-height: 100vh;
  padding: 2rem;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  z-index: 1000;
}


html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #0f0f0f;
}
</style>
