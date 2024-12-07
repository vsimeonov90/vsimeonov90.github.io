function hideMenu() {
  if (menuElement.getAttribute('style') === 'display:flex;') {
  menuElement.setAttribute('style','display:none;');
  }
}

function printBioHandler() {
hideMenu();
printBio();
}

function printSkillsHandler() {
  hideMenu();
  printSkills();
}

function printMainHandler() {
  hideMenu();
  printMain();
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
    reloadMain();
  }
}

function printBio() {
  roomsElement.innerHTML = `<h3>${bioTitle}</h3>`;
  for (let element of bio) {
    roomsElement.innerHTML += `<span>${element}</span><br />`;
  }
}

function printSkills() {
      roomsElement.innerHTML = `<h3>${skillTitle}</h3>`;
  for (let element in skillSet) {
      const elementPop = `${element}Popup`;
      roomsElement.innerHTML += `<span style="font-family: Pictograms;">%</span> ${skillSet[element]} <span id="${element}React"><span id="questinMark">?</span>
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

