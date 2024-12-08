const headElement = document.getElementById('headerBanner');
const headMain = document.getElementById('header');
const mainElement = document.getElementById('main');
const roomsElement = document.getElementById('viewport');
const menuElement = document.getElementById('sitenav');
const menuBtn = document.getElementById('menuBtn');
const menuBtnMobile = document.getElementById('menuBtnMobile');
const accrBtnMobile = document.getElementById('accrBtnMobile');
const mainLink = document.getElementById('mainLink');
const bioLink = document.getElementById('bioLink');
const skillsLink = document.getElementById('skillsLink');
const contactLink = document.getElementById('contactLink');
const langLink = document.getElementById('langLink');
const langLinkMobile = document.getElementById('langLinkMobile');
const accrBtn = document.getElementById('accrBtn');
let lang = localStorage.getItem('lang');

let greetMsg = '';
let skillTitle = '';
let bioTitle = '';
let accrTitle = '';
let headTitle = '';

const p = '<span style="font-family: Pictograms;">';
const pe = '</span>';
const arrowTick = `${p}\>${pe}`;
const normalTick = `${p}%${pe}`;
menuBtnMobile.innerHTML = `${p}4${pe}`;
accrBtnMobile.innerHTML = `${p})${pe}`;
langLinkMobile.innerHTML = `${p}w${pe}`;

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
