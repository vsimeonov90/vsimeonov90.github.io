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
const bottomLinksElement = document.getElementById('bottompanel');
const sideLinksElement = document.getElementById('sidepanel');
const todoLink = document.getElementById('todoLink');
const timeElement = document.getElementById('timeSpan');
const timeElementMobile = document.getElementById('timeSpanMobile');
const qFormElement = document.getElementById('questionForm');
const qFormLinkElement = document.getElementById('qLink');
const backendUrl = 'https://port-viks.onrender.com'; // Replace with your Render backend URL
let lang = localStorage.getItem('lang');

let mainTitle = '';
let skillTitle = '';
let bioTitle = '';
let accrTitle = '';
let headTitle = '';
let clientEmail = '';
let textFormHolder = '';
let submitText = '';
let postTitle = '';
let sentBy = '';
let publishedOn = '';
let noPosts = '';

const p = '<span style="font-family: Pictograms;">'; // [p]ictogram
const pe = '</span>'; // [p]ictogram [e]nd
const n = '<br />'; // [n]ewline
const a = `${p}\>${pe}`; // [a]rrow
const t = `${p}%${pe}`; // [t]ick
const timeSpan = `<span id="timeSpan"></span>${n}`;
const timeSpanMobile = `<span id="timeSpanMobile"></span>${n}`;
// const qFormCode = `
// <form id="qForm">
// <input type="text" id="qInput" placeholder="Ask a question" required />
// <button>Submit</button>
// </form>
// `;

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
let contact = [];
const links = [
 `<a class="sideLink" href="https://www.udemy.com" target="blank">Udemy</a>`,
`<a class="sideLink" href="https://www.softuni.bg" target="blank">SoftUni</a>`,
`<a class="sideLink" href="https://www.freecodecamp.org" target="blank">freeCodeCamp</a>`,
`<a class="sideLink" href="https://www.exercism.org" target="blank">Exercism</a>`
];

const sideLinks = `${links[0]}${n}${links[1]}${n}${links[2]}${n}${links[3]}`;
const bottomLinks = `${links[0]} | ${links[1]} | ${links[2]} | ${links[3]}`;

