const playerNameEl = document.querySelector('.username');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }