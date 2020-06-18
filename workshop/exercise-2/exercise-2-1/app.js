// Preset values
const FROGS = 3;

const track = document.getElementById("track");
//Create for loop that makes use of FROGS to know how many lanes to create.
for (let laneNum = 1; laneNum <= FROGS; laneNum++) {
  // create a list element li
  let lane = document.createElement("li");
  track.appendChild(lane);
  // add span to track
  let number = document.createElement("span");
  number.innerText = laneNum;
  track.appendChild(number);
  //   assign id to each lane
  lane.id = `frog-${laneNum}`;
}

// empty array
let racers = [];
//frogs from frogstable pushed into empty array racers
for (let i = 1; i <= FROGS; i++) {
  const newFrog = frogStable[i];
  racers.push(newFrog);
}
//console
console.log(racers);

//
racers.forEach(function (racer, id) {
  //new span added
  const newFrog = document.createElement("span");
  //number of frog assigned
  newFrog.innerText = `${racer.number}`;
  //new class added to the frog
  newFrog.classList.add("frog");
  //background color added to the frog
  newFrog.style.background = racer.color;
  //newFrog appended to each lane
  document.getElementById(`frog-${id + 1}`).appendChild(newFrog);
  //progress
  racers[id].progress = 0;
  racers[id].lane = `frog-${id + 1}`;

  const frogProgress = document.createElement("span");
  frogProgress.id = racers[id].name;
  document.getElementById(`frog-${id + 1}`).appendChild(newFrog);
});
