<template>
  <nav class="navbar">
    <div class="logo">N.A.V.R</div>
    <ul class="nav-links">
  <li><router-link to="/portfolio/profile" class="nav-item" exact-active-class="active-link">Profile</router-link></li>
  <li><router-link to="/portfolio/showcase" class="nav-item" exact-active-class="active-link">Showcase</router-link></li>
  <li><router-link to="/portfolio/contact" class="nav-item" exact-active-class="active-link">Contact</router-link></li>
  <li><router-link to="/portfolio/creative" class="nav-item" exact-active-class="active-link">Creative</router-link></li>
</ul>
    <button class="logout-button" @click="logout">Logout</button>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('user');
    this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');


.navbar {
  position: sticky;
  top: 0;
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  z-index: 1000;
}

.logo {
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: #cccccc;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffffff;
}

.nav-item {
  position: relative;
  color: #cccccc;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: #ffffff;
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4f46e5;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.active-link {
  color: #ffffff;
  font-weight: 600;
}

.active-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #4f46e5;
  transform: scaleX(0);
  transform-origin: left;
  animation: underline-grow 0.4s ease-out forwards;
}

@keyframes underline-grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}


.logout-button {
  background-color: #4f46e5;
  border: none;
  padding: 0.6rem 1.2rem;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-button:hover {
  background-color: #3730a3;
}
</style>
