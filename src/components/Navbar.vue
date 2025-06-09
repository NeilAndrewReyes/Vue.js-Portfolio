<template>
  <nav class="navbar">
    <div class="logo">N.A.V.R</div>

    <div class="hamburger" @click="toggleMenu">
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </div>

    <div class="nav-group" :class="{ active: menuOpen }">
      <ul class="nav-links">
        <li>
          <router-link to="/portfolio/profile" class="nav-item" exact-active-class="active-link">Profile</router-link>
        </li>
        <li>
          <router-link to="/portfolio/showcase" class="nav-item" exact-active-class="active-link">Showcase</router-link>
        </li>
        <li>
          <router-link to="/portfolio/contact" class="nav-item" exact-active-class="active-link">Contact</router-link>
        </li>
        <li>
          <router-link to="/portfolio/creative" class="nav-item" exact-active-class="active-link">Creative</router-link>
        </li>
      </ul>
      <button class="logout-button" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
import { logout } from '../router'; // Adjust path if needed

export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    logout() {
      logout(); // resets isAuthenticated to false
      this.$router.push('/login'); // redirects to login page
    },
  },
};
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
  flex-shrink: 0;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  flex-shrink: 0;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  transition: 0.3s;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Nav links */
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
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
}


.logout-button:hover {
  background-color: #3730a3;
}

/* Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-group {
    position: absolute;
    top: 70px;
    right: 0;
    background: #1a1a1a;
    flex-direction: column;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    gap: 0;
  }

  .nav-group.active {
    max-height: 400px;
    padding: 1rem 0;
  }

  .nav-links {
    flex-direction: column;
    gap: 0;
    padding: 0;
  }

  .nav-links li {
    text-align: center;
    padding: 0.5rem 0;
  }

  .logout-button {
    margin-top: 0.5rem;
    width: 100%;
  }
}
</style>
