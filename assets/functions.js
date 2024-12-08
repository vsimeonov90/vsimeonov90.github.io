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

function printArray(which) {
  let title;
  switch (which) {
    case 'bio':
    case 'accr':
    case 'contact':
    case 'main':
      title = eval(which + 'Title');
      roomsElement.innerHTML = `<h3>${title}</h3>`;
      for (let element of eval(which)) {
        roomsElement.innerHTML += `<span>${element}</span><br />`;
      }


      break;

    case 'skill':
      roomsElement.setAttribute('style','line-height: 24px;');
      title = eval(which + 'Title');
      roomsElement.innerHTML = `<h3>${title}</h3>`;
      for (let element in skillSet) {
        const elementPop = `${element}Popup`;
        roomsElement.innerHTML += `${a} ${skillSet[element]} <span id="${element}React"><span id="questinMark">?</span>
        <span id="${elementPop}">${moreInfo[element]}</span><br /></span>`;
      }

      break;

    case 'todo':

      roomsElement.innerHTML = `<h3>${todoLink.textContent}</h3>`;
      for (let element of todo) {
        roomsElement.innerHTML += `<span>${element}</span>${n}`
      }

      break;

    default: break;
  }
}

function menu() {
  if (menuElement.getAttribute('style') === 'display:none;') {
    menuElement.setAttribute('style','display:flex;');
    // roomsElement.setAttribute('style','display:none;');
  }
}

function getParams() {
  let qString = window.location.search;
  console.log(qString);
  let urlParams = new URLSearchParams(qString);
  let page = urlParams.get('p');
  console.log(page);
  printArray(page);
}

function formatTime(num){
  return num < 10 ? '0' + num: num;
}

function time() {
    let d = new Date();
    let s = formatTime(d.getSeconds());
    let m = formatTime(d.getMinutes());
    let h = formatTime(d.getHours());
    let stamp = `${h}:${m}:${s}`;
    timeElement.textContent = `${d.toLocaleString()}`;
    timeElementMobile.textContent = `${d.toLocaleString()}`;
    // console.log(stamp);
}
console.log(window.innerWidth);
