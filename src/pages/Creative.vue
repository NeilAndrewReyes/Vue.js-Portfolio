<template>
  <section class="creative-section">
    <div class="card">
      <h2 class="section-title">🎯 Click the Circle Game</h2>
      <p v-if="!started" class="instructions">
        Click the circle as many times as you can in 30 seconds!
      </p>
      <p v-if="started" class="game-info">
        Score: {{ score }} | Time Left: {{ timeLeft }}s
      </p>
      <button v-if="!started" @click="startGame">Start Game</button>

      <div
        v-if="started"
        class="circle"
        :style="{ top: y + 'px', left: x + 'px' }"
        @click="handleClick"
      ></div>

      <div v-if="gameOver" class="result">
        <h3>Game Over!</h3>
        <p>Your final score: {{ score }}</p>
        <button @click="startGame">Play Again</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      timeLeft: 30,
      x: 100,
      y: 100,
      started: false,
      gameOver: false,
      interval: null,
      timer: null,
    };
  },
  methods: {
    startGame() {
      this.score = 0;
      this.timeLeft = 30;
      this.started = true;
      this.gameOver = false;
      this.moveCircle();
      this.timer = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft <= 0) {
          clearInterval(this.timer);
          this.endGame();
        }
      }, 1000);
    },
    moveCircle() {
      this.interval = setInterval(() => {
        this.x = Math.floor(Math.random() * (window.innerWidth - 100));
        this.y = Math.floor(Math.random() * (window.innerHeight - 200));
      }, 700);
    },
    handleClick() {
      this.score++;
      this.x = Math.floor(Math.random() * (window.innerWidth - 100));
      this.y = Math.floor(Math.random() * (window.innerHeight - 200));
    },
    endGame() {
      clearInterval(this.interval);
      this.started = false;
      this.gameOver = true;
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.creative-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;
  min-height: 100vh;
  background-color: #0d0d0d;
  color: #eee;
  font-family: 'Inter', sans-serif;
}

.card {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.section-title {
  font-size: 1.75rem;
  color: #e0e0ff;
  margin-bottom: 1rem;
  border-bottom: 2px solid #4f46e5;
  padding-bottom: 0.5rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}

.instructions, .game-info {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
}

button {
  padding: 10px 20px;
  margin-top: 1rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.3s ease, transform 0.2s ease;
  font-family: 'Inter', sans-serif;
}

button:hover {
  background-color: #7c68ff;
  transform: translateY(-2px);
}

.circle {
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: #00bcd4;
  border-radius: 50%;
  cursor: pointer;
  transition: top 0.3s ease, left 0.3s ease;
  z-index: 2;
}

.result {
  margin-top: 2rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
}
</style>

