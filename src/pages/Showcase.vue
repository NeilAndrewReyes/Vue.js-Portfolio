<template>
  <section class="showcase-section">
    <h2 class="section-title">My Work & Projects</h2>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Login Authentication',
          description: 'A secure and user-friendly login system with authentication, error handling, and session management built using Vue.js.'
        },
        {
          id: 2,
          title: 'Portfolio Website',
          description: 'A sleek, dark-themed portfolio showcasing my skills, projects, and professional journey using Vue.js and modern UI design.'
        },
        {
          id: 3,
          title: 'Contact Page',
          description: 'A fully responsive contact page integrated with email functionality and social media links for easy communication.'
        },
        {
          id: 4,
          title: 'Click the Circle Game',
          description: 'A fun and challenging Vue.js game designed to test and improve your clicking speed and reflexes.'
        },
      ]

    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.showcase-section {
  background-color: #0d0d0d;
  color: #eee;
  padding: 0rem 1rem 5rem;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #e0e0ff;
  margin-bottom: 2rem;
  border-bottom: 3px solid #4f46e5;
  padding-bottom: 0.5rem;
  width: 100%;
  max-width: 900px;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
}

.project-card {
  background: #1a1a1a;
  border-radius: 1.25rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(79, 70, 229, 0.5);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-info {
  padding: 1rem 1.25rem 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-info h3 {
  margin: 0 0 0.5rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: #cbd5e1;
}

.project-info p {
  flex-grow: 1;
  font-weight: 400;
  color: #a1a1aa;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.4;
}

.project-link {
  align-self: flex-start;
  color: #4f46e5;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;
  border-bottom: 2px solid transparent;
}

.project-link:hover {
  color: #7c68ff;
  border-bottom-color: #7c68ff;
}
</style>
