  if (!lang) {
    lang = 'BG';
    langToggle();
  }

  headElement.textContent = `${headTitle}`;
  langLink.textContent  = `${langTitle}`;

  printMain();

  menuBtn.addEventListener('click', menu);
  accrBtn.addEventListener('click', printAccr);
  accrBtn.addEventListener('mouseenter', hideMenu);
  bioLink.addEventListener('click', printBioHandler);
  skillsLink.addEventListener('click', printSkillsHandler);
  mainLink.addEventListener('click', printMainHandler);
  contactLink.addEventListener('click', printContact);
  langLink.addEventListener('click', langToggle);
  mainElement.addEventListener('click', hideMenu);
  headElement.addEventListener('click', reloadMain);
