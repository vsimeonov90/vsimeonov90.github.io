const headElement = document.getElementById('headerBanner');
const headMain = document.getElementById('header');
const mainElement = document.getElementById('main');
const roomsElement = document.getElementById('textcontent');
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
var lang = localStorage.getItem('lang');

var homeTitle;
var skillTitle;
var bioTitle;
var accrTitle;
var headTitle;
var clientEmail;
var textFormHolder;
var submitText;
var postTitle;
var sentBy;
var publishedOn;
var noPosts;
var plsWait;
var fetchQuestionsFail;

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

const skillSet = {
  lin: '',
  cSharp: '',
  linWeb: '',
  jsPack: ''
};

const moreInfo = {
  lin: '',
  cSharp: '',
  linWeb: '',
  jsPack: ''
};

const bio = [];
const home = [];
const accr = [];
const contact = [];
const links = [
  `<a class="sideLink" href="https://www.render.com" target="blank">Render</a>`,
`<a class="sideLink" href="https://www.github.com" target="blank">GitHub</a>`,
`<a class="sideLink" href="https://www.udemy.com" target="blank">Udemy</a>`,
`<a class="sideLink" href="https://www.softuni.bg" target="blank">SoftUni</a>`,
`<a class="sideLink" href="https://www.freecodecamp.org" target="blank">freeCodeCamp</a>`,
`<a class="sideLink" href="https://www.exercism.org" target="blank">Exercism</a>`
];

const sideLinks = `${links[0]}${n}${links[1]}${n}${links[2]}${n}${links[3]}${n}${links[4]}${n}${links[5]}`;
const bottomLinks = `${links[0]} | ${links[1]} | ${links[2]} | ${links[3]} | ${links[4]} | ${links[5]}`;

