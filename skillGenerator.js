const fs = require("fs");

function getRandomSkill(skills) {
  return skills[Math.floor(Math.random()*skills.length)];
}

const contents = fs.readFileSync("whatCanIDo.json");
const obj = JSON.parse(contents);
const skills = obj.skills;

const skill1 = getRandomSkill(skills);
const skill2 = getRandomSkill(skills);
const skill3 = getRandomSkill(skills);

const request = `I will pay you for ${skill1}, ${skill2}, and ${skill3}.`;
console.log(request);