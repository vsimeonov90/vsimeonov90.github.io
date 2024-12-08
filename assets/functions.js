function hideMenu() {
  if (menuElement.getAttribute('style') === 'display:flex;') {
  menuElement.setAttribute('style','display:none;');
  }
}

function reloadMain()
{
  window.location.replace('index.html');
}

function langToggle() {
  if (lang === 'EN') {
  localStorage.setItem('lang','BG');
  window.location.reload();
  } else if (lang === 'BG') {
    localStorage.setItem('lang', 'EN');
    window.location.reload();
  }
}

function printBio() {
  roomsElement.innerHTML = `<h3>${bioTitle}</h3>`;
  for (let element of bio) {
    roomsElement.innerHTML += `<span>${element}</span><br />`;
  }
}
function printTodo() {
  // Tab to edit
  roomsElement.innerHTML = `<h3>${todoLink.textContent}</h3>`;
  for (let element of todo) {
    roomsElement.innerHTML += `<span>${element}</span>${n}`
}
}

function printSkills() {
      roomsElement.innerHTML = `<h3>${skillTitle}</h3>`;
  for (let element in skillSet) {
      const elementPop = `${element}Popup`;
      roomsElement.innerHTML += `${a} ${skillSet[element]} <span id="${element}React"><span id="questinMark">?</span>
      <span id="${elementPop}">${moreInfo[element]}</span><br /></span>`;
  }
}

function printMain() {
  roomsElement.innerHTML = `<h3>${greetMsg}</h3>`;
  for (let element of main) {
      roomsElement.innerHTML += `<span>${element}</span><br />`;
  }
}

function menu() {
  if (menuElement.getAttribute('style') === 'display:none;') {
    menuElement.setAttribute('style','display:flex;');
    // roomsElement.setAttribute('style','display:none;');
  }
}

function printAccr() {
    hideMenu();
  roomsElement.innerHTML = `<h3>${accrTitle}</h3>`;
  for (let element of accr) {
    roomsElement.innerHTML += `<span>${element}</span><br />`;
  }
}

function printContact() {
  hideMenu();
  roomsElement.innerHTML = `<h3>${contactTitle}</h3>`;
  for (let element of contactInfo) {
    roomsElement.innerHTML += `<span>${element}</span><br />`;
  }
}

function getParams() {
  let qString = window.location.search;
  console.log(qString);
  let urlParams = new URLSearchParams(qString);
  let page = urlParams.get('p');
  console.log(page);
  switch (page) {
    case 'bio':
      printBio();
      break;
    case 'skills':
      printSkills();
      break;
    case 'contact':
      printContact();
      break;
    case 'accr':
      printAccr();
      break;
    default:
      break;
  }
}

