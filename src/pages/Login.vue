<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Welcome Back</h1>
      <p class="subtitle">Please log in to continue</p>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'admin') {
        localStorage.setItem('user', this.username);
        this.$router.push('/portfolio/profile');
      } else {
        this.error = 'Incorrect username or password';
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

html {
  padding-top: 1.5rem;
}

.login-container {
  height: 100vh;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
}

.login-box {
  background: #1a1a1a;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  color: #ffffff;
}

.login-box h1 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.subtitle {
  font-size: 0.95rem;
  color: #aaaaaa;
  margin-bottom: 0.5rem;
  text-align: center;
}

.login-box input {
  padding: 0.75rem 1rem;
  border: 1px solid #333333;
  background-color: #121212;
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 0.95rem;
  transition: border 0.2s;
}

.login-box input:focus {
  outline: none;
  border-color: #4f46e5;
  background-color: #1e1e1e;
}

.login-box button {
  padding: 0.75rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.login-box button:hover {
  background: #3730a3;
}

.error {
  color: #ff5c5c;
  font-size: 0.9rem;
  margin-top: -0.5rem;
}
</style>
