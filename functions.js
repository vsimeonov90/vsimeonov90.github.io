function printBioHandler() {
menuElement.setAttribute('style','display:none;');
printBio();
}

function printSkillsHandler() {
menuElement.setAttribute('style','display:none;');
printSkills();
}

function printMainHandler() {
menuElement.setAttribute('style','display:none;');
printMain();
}

function setBG() {
  localStorage.setItem('lang','BG');
  window.location.reload();
}

function setEN() {
  localStorage.setItem('lang','EN');
  window.location.reload();
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
      roomsElement.innerHTML += `🗸 ${skillSet[element]} <span id="${element}React"><span id="questinMark">?</span>
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
  } /*else {
    menuElement.setAttribute('style','display:none;');
    // roomsElement.setAttribute('style','display:flex;');
  }*/
}
