const headElement = document.getElementById('headerBanner');
const headMain = document.getElementById('header');
const mainElement = document.getElementById('main');
const roomsElement = document.getElementById('viewport');
const menuElement = document.getElementById('sitenav');
const menuBtn = document.getElementById('menuBtn');
const mainLink = document.getElementById('mainLink');
const bioLink = document.getElementById('bioLink');
const skillsLink = document.getElementById('skillsLink');
const contactLink = document.getElementById('contactLink');
const langLink = document.getElementById('langLink');
const accrBtn = document.getElementById('accrBtn');
let lang = localStorage.getItem('lang');

let greetMsg = '';
let skillTitle = '';
let bioTitle = '';
let accrTitle = '';
let headTitle = '';

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
let accr = [];
