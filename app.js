if (!lang) {
  localStorage.setItem('lang','EN');
}

printMain();

menuBtn.addEventListener('mouseenter', menu);
bioLink.addEventListener('click', printBioHandler);
skillsLink.addEventListener('click', printSkillsHandler);
mainLink.addEventListener('click', printMainHandler);
