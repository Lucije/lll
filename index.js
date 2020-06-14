import './index.html';
import './style.css';

new Vue({
  el: "#app",
  data: {
    upLikes: 0,
    downLikes: 0,
  },
  methods: {
    likeUp() {
      this.upLikes = this.upLikes + 1;
    },
    likeDown() {
      this.downLikes = this.downLikes + 1;
    }
  }
});