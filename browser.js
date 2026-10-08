// Enhance the biography with a keyboard-accessible toggle.
// Keep the experience visible if JavaScript is unavailable.
const experienceButton = document.getElementById('toggle-experience');
const experienceDetails = document.getElementById('experience-details');

function toggleExperience() {
  const isExpanded = experienceButton.getAttribute('aria-expanded') === 'true';
  experienceDetails.hidden = isExpanded;
  experienceButton.setAttribute('aria-expanded', String(!isExpanded));
  experienceButton.textContent = isExpanded ? 'Show experience' : 'Hide experience';
}

experienceButton.hidden = false;
experienceButton.lang = 'en';
experienceButton.textContent = 'Show experience';
experienceButton.setAttribute('aria-expanded', 'false');
experienceDetails.hidden = true;
experienceButton.addEventListener('click', toggleExperience);
