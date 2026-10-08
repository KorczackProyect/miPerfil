// Keep the page controls separate from the reusable mission generator.
const missionMessage = document.getElementById('mission-message');
const generateButton = document.getElementById('generate-mission');

function showMission() {
  missionMessage.textContent = generateMission();
}

generateButton.addEventListener('click', showMission);
generateButton.disabled = false;
showMission();
