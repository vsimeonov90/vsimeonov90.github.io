const roomsElement = document.getElementById('rooms');
const menuElement = document.getElementById('sitenav');
const menuBtn = document.getElementById('menuBtn');
const mainLink = document.getElementById('mainLink');
const bioLink = document.getElementById('bioLink');
const skillsLink = document.getElementById('skillsLink');
const contactLink = document.getElementById('contactLink');
let lang = localStorage.getItem('lang');

let greetMsg = '';
let skillTitle = '';
let bioTitle = '';

let skillSet = {
  lin: '',
  cSharp: '',
  linWeb: '',
  jsPack: ''
};

let moreInfo = {
  lin: '',
  cSharp: '',
  linWeb: '',
  jsPack: ''
};

let bio = [];
let main = [];
