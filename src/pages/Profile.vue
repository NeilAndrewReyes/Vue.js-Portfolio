<template>
  <section class="profile-page">
    <div class="profile-container">
      <div class="top-info">
        <div class="profile-photo">
          <img src="../assets/Profile Picture.jpg" alt="Profile Photo" />
        </div>
        <div class="profile-info">
          <h1 class="name">Neil Andrew V. Reyes</h1>
          <h2 class="title">Computer Engineering Student</h2>
          <p class="bio">
            I’m a passionate Computer Engineering student with a strong focus on front-end development and embedded systems. I enjoy designing efficient software solutions and creating hardware projects such as Arduino-based applications. Eager to learn and grow, I’m dedicated to building innovative technologies that bridge the gap between software and hardware.
          </p>
        </div>
      </div>

      <div class="skills-section">
        <h3>Skills & Technologies</h3>
        <div class="skills-categories">
          <div class="category">
            <h4>Front-end</h4>
            <ul>
              <li class="js-skill">JavaScript</li>
              <li class="vue-skill">Vue.js</li>
              <li class="html-skill">HTML</li>
              <li class="css-skill">CSS</li>
            </ul>
          </div>
          <div class="category">
            <h4>Back-end</h4>
            <ul>
              <li class="node-skill">Node.js</li>
              <li class="firebase-skill">Firebase</li>
              <li class="mongo-skill">MongoDB</li>
            </ul>
          </div>
          <div class="category">
            <h4>Tools & Others</h4>
            <ul>
              <li class="git-skill">Git & GitHub</li>
              <li class="arduino-skill">Arduino</li>
              <li class="figma-skill">Figma</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <h3>Contact</h3>
        <ul>
          <li>Email: <a href="mailto:neilreyes1919@gmail.com">neilreyes1919@gmail.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/neilandrewvictorinoreyes" target="_blank"
              rel="noopener">neilandrewvictorinoreyes</a></li>
          <li>GitHub: <a href="https://github.com/NeilAndrewReyes" target="_blank"
              rel="noopener">NeilAndrewReyes</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProfilePage',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.profile-page {
  min-height: 100vh;
  background-color: #0f0f0f;
  display: flex;
  justify-content: center;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  color: #eee;
}

.profile-container {
  max-width: 900px;
  background: #1a1a1a;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.top-info {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.profile-photo {
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 15px #4f46e5;
  transition: box-shadow 0.3s;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.profile-photo:hover {
  box-shadow: 0 0 15px #7c68ff;
}

.profile-info {
  flex: 1;
}

.name {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
}

.title {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0.3rem 0 1rem 0;
  color: #a3a3a3;
}

.bio {
  font-size: 1rem;
  line-height: 1.5;
  color: #ccc;
}

.skills-section h3,
.contact-section h3 {
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #e0e0ff;
  border-bottom: 2px solid #4f46e5;
  padding-bottom: 0.3rem;
}

.skills-categories {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: nowrap;
}

.category {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.category h4 {
  margin: 0 0 0.4rem 0;
  font-weight: 600;
  color: #aaaaff;
  margin-bottom: 0.5rem;
}

.category ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding-left: 0;
  margin: 0;
  list-style: none;
  align-items: center;
}

.category ul li {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  user-select: none;
  cursor: default;
  background: transparent;
  border: 2px solid currentColor;
  transition: background-color 0.3s, color 0.3s;
}

.category:nth-child(1) {
  color: #4f46e5;
}

.category:nth-child(2) {
  color: #10b981;
}

.category:nth-child(3) {
  color: #f59e0b;
}

.js-skill {
  color: #f7df1e;
  border-color: #f7df1e;
}

.vue-skill {
  color: #42b883;
  border-color: #42b883;
}

.html-skill {
  color: #e44d26;
  border-color: #e44d26;
}

.css-skill {
  color: #264de4;
  border-color: #264de4;
}

.node-skill {
  color: #3c873a;
  border-color: #3c873a;
}

.firebase-skill {
  color: #ffcb2b;
  border-color: #ffcb2b;
}

.mongo-skill {
  color: #4db33d;
  border-color: #4db33d;
}

.git-skill {
  color: #f05032;
  border-color: #f05032;
}

.arduino-skill {
  color: #00979d;
  border-color: #00979d;
}

.figma-skill {
  color: #f24e1e;
  border-color: #f24e1e;
}

.contact-section ul {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1.5rem;
  list-style: none;
  padding-left: 0;
  margin: 0;
  color: #ccc;
  text-align: center;
}

.contact-section ul li {
  font-size: 1rem;
  flex: 1 1 200px;
}

.contact-section a {
  color: #4f46e5;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-section a:hover {
  color: #7c68ff;
  text-decoration: underline;
}


/* Responsive */
@media (max-width: 720px) {
  .top-info {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-info {
    width: 100%;
  }

  .skills-categories {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
