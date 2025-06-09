<template>
  <section class="contact-form-section">
    <div class="card">
      <h3>Get In Touch</h3>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <input type="text" v-model="form.name" placeholder="Your Name" required />
        <input type="email" v-model="form.email" placeholder="Your Email" required />
        <textarea v-model="form.message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Replace with real submission logic later
      console.log("Submitted:", this.form);
      alert("Message sent!");
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.contact-form-section,
.contact-form,
.contact-form input,
.contact-form textarea,
.contact-form button,
.card h3 {
  font-family: 'Inter', sans-serif;
}

.contact-form-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;
  background: #0d0d0d;
  color: #eee;
  min-height: 100vh;
}

.card {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.contact-form-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #e0e0ff;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #4f46e5;
  padding-bottom: 0.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-form input,
.contact-form textarea {
  background: #111;
  border: 1px solid #333;
  border-radius: 0.5rem;
  padding: 0.9rem 1rem;
  font-size: 1rem;
  color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 8px #4f46e5;
}

.contact-form textarea {
  min-height: 150px;
  resize: vertical;
}

.contact-form button {
  background: #4f46e5;
  border: none;
  padding: 0.9rem;
  border-radius: 0.5rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.contact-form button:hover {
  background: #7c68ff;
  transform: translateY(-2px);
}

@media (max-width: 720px) {
  .showcase-section {
    padding: 0rem 1rem 3rem;
  }

  .section-title {
    font-size: 1.7rem;
    max-width: 100%;
  }

  .projects-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project-card {
    border-radius: 1rem;
  }

  .project-info h3 {
    font-size: 1.1rem;
  }

  .project-info p {
    font-size: 0.9rem;
  }
}

</style>
