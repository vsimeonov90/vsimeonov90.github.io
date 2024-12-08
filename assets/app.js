  if (!lang) {
    lang = 'BG';
    langToggle();
  }

  headElement.textContent = `${headTitle}`;
  langLink.textContent  = `${langTitle}`;

  printMain();

  menuBtn.addEventListener('click', menu);
  menuBtnMobile.addEventListener('click', menu);
  accrBtn.addEventListener('mouseenter', hideMenu);
  langLink.addEventListener('click', langToggle);
  langLinkMobile.addEventListener('click', langToggle);
  mainElement.addEventListener('click', hideMenu);
  headElement.addEventListener('click', reloadMain);

  document.addEventListener("DOMContentLoaded", (event) => {
    getParams();
    sideLinksElement.innerHTML = sideLinks;
    sideLinksElement.innerHTML += `${n}<span style="font-size: 80%">2024, Viktor Simeonov</span>`;
    bottomLinksElement.innerHTML = bottomLinks;
    bottomLinksElement.innerHTML += `${n}<span style="font-size: 80%">2024, Viktor Simeonov</span>`;

  });
