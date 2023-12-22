// Please copy and paste your GitHub Repo on line 2 (optional)
// <GitHub Repo>

// JavaScript Assessment Rubric: https://generation.instructure.com/courses/2342/assignments/143783

// Codecademy: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-challenge-project-find-your-hat/projects/find-your-hat

// Please break down your thinking process step-by-step (mandatory)
const prompt = require('prompt-sync')({ sigint: true });
const clear = require('clear-screen');

// สร้างตัวแปรต่างๆขึ้นมา
const ground = '🌴';
const hat = '💧';
const hole = '👺';
const actor = '👻';
let field = [];

// กำหนดขนาดของสนาม
const fieldGenerate = () => {
  clear();
  const arr = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => ground));
  return arr;
}
field = fieldGenerate(); /* เรียกใช้ฟังชั่นเพื่อสร้างฟิล */

// แสดง map ปัจจุบัน
const print = () => {
  clear();
  console.log(field.map(member => member.join('')).join('\n'));
}

// สำหรับเรียกใช้การสุ่มสำหรับตำแหน่งต่างๆ
const randomPosition = () => {
  return Math.floor(Math.random() * field.length);
}

// ทำ action ต่างๆ
const moveRight = () => {
  check(randomX, randomY);
  field[randomX][randomY] = actor;
}
const moveLeft = () => {
  check(randomX, randomY);
  field[randomX][randomY] = actor;
}
const moveUp = () => {
  check(randomX, randomY);
  field[randomX][randomY] = actor;
}
const moveDown = () => {
  check(randomX, randomY);
  field[randomX][randomY] = actor;
}

// ตรวจสอบค่าเพื่อไปทำ action ต่างๆ
const action = () => {
  const input = prompt('Enter your way ( w(↑) , a(←) , s(↓) , d(→) ) : ');
  (input.toUpperCase() === 'W') ? (randomX -= 1, moveUp()) :
    (input.toUpperCase() === 'A') ? (randomY -= 1, moveLeft()) :
      (input.toUpperCase() === 'S') ? (randomX += 1, moveDown()) :
        (input.toUpperCase() === 'D') ? (randomY += 1, moveRight()) : null;
}

// set ค่า position ของ hole
for (let index = 0; index < 22; index++) {
  const randomX = randomPosition();
  const randomY = randomPosition();
  field[randomX][randomY] = hole;

}
// set hat position
const hatPositionX = randomPosition();
const hatPositionY = randomPosition();
field[hatPositionX][hatPositionY] = hat;

// set ค่า position ของ actor
let randomX = randomPosition();
let randomY = randomPosition();
field[randomX][randomY] = actor; /* เซตตำแหน่งของ actor */

// check ว่าเราหลุดแมพหรือตกหลุมไหม
const check = (x, y) => {
  (field[x][y] === hat) ? (console.log('You win!'), playing = false) :
    (field[x][y] === hole) ? (console.log('You fell into a hole!'), playing = false) :
      (x >= field.length || x < 0 || y >= field[0].length || y < 0) ? (console.log('You fallen off the map.'), playing = false) :
        null;
  return playing;
}

//วน loop จนกว่าเกมจะจบ
let playing = true;
while (playing === true) {
  print();  /*แสดง map ปัจจุบันทุกครั้งก่อน*/
  action();  /* รับค่า input จากผู้ใช้และนำไปเช็คเงื่อนไขต่างๆ */
}
