// Each list provides one part of the message instead of complete missions.
const destinations = ['Korriban', 'Tython', 'Coruscant', 'Dromund Kaas', 'Alderaan'];
const objectives = [
  'recover a holocron',
  'rescue an explorer',
  'investigate a mysterious signal',
  'protect an ancient archive',
  'locate a lost artifact'
];
const conditions = [
  'without alerting the patrols',
  'before dawn',
  'without using the Force',
  'with help from a droid',
  'while keeping your identity secret'
];

function pickRandom(items) {
  // Math.random() returns a number from 0 (inclusive) to 1 (exclusive).
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

function generateMission() {
  // Make an independent random selection for each component.
  const destination = pickRandom(destinations);
  const objective = pickRandom(objectives);
  const condition = pickRandom(conditions);
  return `Your mission on ${destination} is to ${objective} ${condition}.`;
}

// Node provides module and require; the browser does not need these variables.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { destinations, objectives, conditions, pickRandom, generateMission };
  // Print only when running "node script.js", not when importing this file.
  if (require.main === module) {
    console.log(generateMission());
  }
}
