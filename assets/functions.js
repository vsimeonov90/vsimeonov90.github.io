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
        roomsElement.insertAdjacentHTML('beforeend',`<span>${element}</span><br />`);
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

      roomsElement.innerHTML += `<h3>${todoLink.textContent}</h3>`;
      for (let element of todo) {
        roomsElement.innerHTML += `<span>${element}</span>${n}`
      }

      break;
    case 'post':
            roomsElement.innerHTML = `<h3>${postTitle}</h3>`;
          if (window.innerWidth >= 691) {
      roomsElement.insertAdjacentHTML('beforeend', `  <form id="questionForm">
      <input type="email" id="posterEmail" placeholder="${clientEmail}" style="width: 25%" required /><br />
      <textarea id="questionInput" placeholder="${textFormHolder}" style="width: 50%; height: 15rem; resize: none;" required></textarea>
      <p><button id="formButton" type="submit" style="width: 128px; height:32px; font-size: 110%;">${submitText}</button>
      </form>`);
          } else {
            roomsElement.insertAdjacentHTML('beforeend', `  <form id="questionForm">
            <input type="email" id="posterEmail" placeholder="${clientEmail}" style="width: 60%" required /><br />
            <textarea id="questionInput" placeholder="${textFormHolder}" style="width: 100%; height: 15rem; resize: none;" required></textarea>
            <p><button id="formButton" type="submit" style="width: 128px; height:32px; font-size: 110%;">${submitText}</button>
            </form>`);
          }
      break;
    case 'viewPosts':
      roomsElement.innerHTML = '<span id="questionList"></span>';
      loadQuestions();
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
  let urlParams = new URLSearchParams(qString);
  let page = urlParams.get('p');
  if (page) {
    printArray(page);
  }
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

// Function to post a new question
async function postQuestion() {
  const questionInput = document.getElementById('questionInput').value;
  const emailInput = document.getElementById('posterEmail').value;
  let d = new Date();
  let postTime = d.toLocaleString();
  if (!questionInput) {
    alert('Please enter a question!');
    return;
  }

  try {
    const response = await fetch(`${backendUrl}/recommendation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: questionInput,
        email: emailInput,
        tStamp: postTime,
      })
    });

    if (!response.ok) {
      throw new Error('Failed to post question');
    }

    const data = await response.json();
    alert(`Question added: ${data.question.content}`);
  } catch (error) {
    console.error(error);
    alert('Error adding question!');
  }
}

async function loadQuestions() {
  questionList.innerHTML = `${n}${plsWait}`;
  try {
    const response = await fetch(`${backendUrl}/recommendation`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch questions');
    // }

    const data = await response.json();
    const questionList = document.getElementById('questionList');
    questionList.innerHTML = ''; // Clear existing questions

    // data.questions.forEach((q) => {
    //   const li = document.createElement('li');
    //   li.textContent = q.content;
    //   questionList.appendChild(li);
    // });
    if (data.length < 1) {
      questionList.innerHTML = `${n}${noPosts}`;
      return;
    }
    for (let element of data) {
      const mArray = element['sender_mail'].split('@');
      const user = mArray[0];
      questionList.innerHTML += `<br /><span style="font-size:70%;">&nbsp;&nbsp;${sentBy}:  <b>${user}</b>, ${publishedOn}: ${element['created_at']}</span><p><div style="width: 100%; min-height: 128px; border: 1px solid #cccccc; padding: 2px 6px; background-color: #ffffff">${element['content']}</div><br />`;
    }
  } catch (error) {
    console.error(error);
    questionList.innerHTML = `${fetchQuestionsFail}`;
  }
}
