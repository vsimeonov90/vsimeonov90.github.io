  if (!lang) {
    setEN();
  }

  headElement.innerHTML = `<br /><span style="font-size: 1.5rem;"><b>${headTitle}</b></span><br />`;
  headElement.innerHTML += `<span style="font-size: 1.2rem;"><b>${headSubTitle}</b></span><br />`;
  headElement.innerHTML += `<br /><a class="menuLink" id="langLink" href="#">${langTitle}</a><br /><br />`;

  printMain();

  menuBtn.addEventListener('mouseenter', menu);
  accrBtn.addEventListener('click', printAccr);
  accrBtn.addEventListener('mouseenter', hideMenu);
  bioLink.addEventListener('click', printBioHandler);
  skillsLink.addEventListener('click', printSkillsHandler);
  mainLink.addEventListener('click', printMainHandler);
  contactLink.addEventListener('click', printContact);
  langLink.addEventListener('click', langToggle);
