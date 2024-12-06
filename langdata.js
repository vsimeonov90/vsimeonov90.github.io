switch (lang) {

  case 'EN':
    menuBtn.textContent = 'My Portfolio';
    mainLink.textContent = 'Home';
    bioLink.textContent = 'Who am I?';
    skillsLink.textContent = 'My skills';
    contactLink.textContent = 'Contact';

    greetMsg = 'Welcome';
    bioTitle = 'The lonesome road of a simple tech enthusiast';
    skillTitle = 'What I may be of use with?';

    skillSet.lin = 'Extensive knowledge of Linux work environment.';
    skillSet.cSharp = 'Basic knowledge in C#';
    skillSet.linWeb = 'Working with WEB services under Linux.';
    skillSet.jsPack = 'JavaScript WEB package.';

    moreInfo.lin =  `- Installation and support of Linux-based OS.<br />
    - <b>bash</b> scripting and task automation.<br />
    - Setting up <b>systemd</b> and <b>runit</b> services.<br  />
    - Setting up <b>ufw</b>.<br />
    - Setting up <b>samba</b> for local file sharing.<br />
    - Installation and setup of Xorg and DEs/WMs.<br />
    - Practical experience under <b>Debian, Voidlinux, Slackware</b>.<br />
    - Remote control/access - <b>SSH</b> and <b>(S)FTP</b><br />`;

    moreInfo.cSharp = `- Writing short programs and outputting to console.<br />
    - Working under Linux with <b>dotnet</b> package: code compiling and execution.<br />`;

    moreInfo.linWeb = `- Installing, setting up and running <b>Apache HTTPD</b> web server on  Linux.<br />
    - <b>HTTPS</b> setup <b>Let's encrypt</b> and <b>certbot</b> for automatic key updates.<br />
    - Installing and running <b>MariaDB (MySQL)</b> DB server under Linux.<br />`;

    moreInfo.jsPack = `- Extensive knowledge in <b>JavaScript</b> front-end package for creating dymanic, interactive pages.<br />
    - Good knowledge of structuring pages with <b>HTML</b><br />
    - Good knowledge of styling wep pages with <b>CSS</b><br />`;

    bio = [
      ' I got acquainted with computers back in the distant 2005 -- at that time here in Bulgaria, IRC chat communication was viral.<br />',
      'From there on out, my interest got sparkled, first for IRC servers and networks, and later(one leading to the other), in Linux-based OS.<br />',
      'Although I don\'t have any academic accreditation for my knowledge in Linux working environment, I can honestly declare that after nearly 20 years of practical experience based on trial and error, as well as large quantities of information, derived from various sources throughout those years, such as <i>StackOverflow, LinuxQuestions, Arch Wiki</i> and many others, I do know my trade.<br />',
      'This fact by itself lead to my quick entry into bash scripting and the programming field in general (more extensively over the past 2 years).<br />',
      'My journey towards website creation began in the early days, back when I still had no comprehension of programming whatsoever. I recall adoring the creation of static websites back in the day, using a program called Web Page Maker, some 15+ years ago.<br />',
      '<h3>Now, let me share some insight about my fields of study:</h3>',
      'In 2009, I graduated from 97th high school "Miladinovi Brothers" with IT profile and excellent score.',
      'The following 3 years I spent learning "Wireless comms and broadcasting" in the "College of Telecommunications and Post" for my professional bachelor\'s degree. Along with other interesting stuff, I was officially introduced to C programming there.<br />',
      'After that, a long pause in this career. I had my reasons, but the details of this long interruption are irrelevant now. In 2024, I passed SoftUni.bg\'s "Programming Basics with C#" course with max score.<br />',
      'As of now, I am actively learning and continuing my programming to Advanced modules. I am taking advanced JavaScript courses in Udemy as I write this bio, and this website was done using a lot of the information from these courses actually.<br />',
      'I am determined to continue working in the field of fullstack development, as I have yet to learn back-end programming in JS(Node.js and other various frameworks), and new databases(mainly MongoDB, as I already have a little experience working with SQL). I plan on keeping my skills always fresh and top-tier for the future, in the ever-evolving world of programming.',
    ];

    break;

  case 'BG':
    menuBtn.textContent = 'Портфолио111';
    mainLink.textContent = 'Начало';
    bioLink.textContent = 'Повече за мен';
    skillsLink.textContent = 'Моите умения';
    contactLink.textContent = 'Връзка с мен';

    greetMsg = 'Добре дошли!';
    bioTitle = 'Самотният път на един любител на технологии';
    skillTitle = 'С какво бих могъл да съм полезен към момента?';

    skillSet.lin = 'Подробни знания за работата в Linux среда.';
    skillSet.cSharp = 'Базови познания по C#';
    skillSet.linWeb = 'Работа с уеб услуги под Linux.';
    skillSet.jsPack = 'JavaScript front-end пакет.';

    moreInfo.lin = `- Инсталация и поддръжка на Linux-базирани OS.<br />
    - <b>bash</b> скриптиране и автоматизация на задачи.<br />
    - Настройване на услуги в <b>systemd</b> и <b>runit</b>.<br  />
    - Настройване на защитна стена <b>ufw</b>.<br />
    - Настройване на <b>samba</b> локално споделяне на файлове.<br />
    - Инсталация и настройване на Xorg и графична среда (DE/WM).<br />
    - Практически опит с <b>Debian, Voidlinux, Slackware</b>.<br />
    - Контрол от разстояние - <b>SSH</b> и <b>(S)FTP</b><br />`;

    moreInfo.cSharp = `- Писане на кратки програми и извеждане към конзолата.<br />
    - Работа в Linux среда с пакета <b>dotnet</b>: компилация на код и изпълнение.<br />`;

    moreInfo.linWeb = `- Инсталация и пускане в действие на <b>Apache HTTPD</b> уеб сървър под Linux.<br />
    - <b>HTTPS</b> настройки с <b>Let's encrypt</b> и <b>certbot</b> за автоматично подновяване на ключовете.<br />
    - Инсталация и пускане в действие на <b>MariaDB (MySQL)</b> сървър за БД под Linux.<br />`;

    moreInfo.jsPack = `- Широки познания по базовия <b>JavaScript</b> пакет за създаване на динамични, интерактивни страници.<br />
    - Добри познания в структурирането на страници с <b>HTML</b><br />
    - Основни познания в стилизирането на изгледа с <b>CSS</b><br />`;

    bio = [
      'Запознах се с компютърната техника в далечната 2005-та година, по времето на нашумелия тогава в България, IRC протокол за текстова комуникация (чат).<br />',
      'Именно оттам тръгна интересът ми, първо към IRC сървърите и мрежите, после (по стечение на обстоятелствата) и към Linux.<br />',
      'Въпреки, че не притежавам академична акредитация за знанията си в Linux работната среда и Linux-базираните операционни системи, смело мога да заявя, че след близо 20 години практика на база „опит-грешка“, както и доста информация, черпена през цялото време от различни източници като <i>StackOverflow, LinuxQuestions, Arch Wiki</i> и много други, си разбирам от работата.<br />',
      'Именно на това се дължи и бързото ми навлизане в bash скриптирането и програмирането като цяло (по-задълбочено през последните 2 години).<br />',
      'Пътят си в създаването на уеб сайтове започнах още в ранните години, когато все още нямах дори основни понятия за програмиране. Спомням си, че обожавах да си правя статични сайтчета с една програма, наречена Web Page Maker още преди 15+ години.<br />',
      '<h3>А сега, да разкажа за обучението си:</h3>',
      'През 2009 година, завършвам средното си образование в 97-мо СОУ „Братя Миладинови“, със специалност IT и отличен общ успех.',
      'Следващите 3 години, до 2012 г. прекарвам в обучението си по специалност „Безжични комуникации и разпръскване“ във ВУ „Колеж по Телекомуникации и Пощи“, където, заедно с други интересни неща, се запознавам за пръв път и с програмирането.<br />',
      'След дълга пауза в тази област, причините за която мога да изброявам дълго, но не го смятам за нужно... през 2024 г. преминавам курса по „Основи на програмирането със С#“, от SoftUni.bg с максимален брой точки.<br />',
      'Към момента, продължавам обучението си по програмиране към Advanced, с подробния модул „JavaScript - The Complete Guide (2024) - Beginner to Advanced“ от Udemy.<br />',
      'Решен съм твърдо, да продължа работата си с уеб програмирането и да обхвана fullstack разработката на сайтове, а не само front-end програмирането. Тепърва ще започвам да се впускам в back-end програмирането с Node.js и най-различни други фреймуъркове. Имам желание да науча и нови БД (вероятно MongoDB, тъй като вече имам опит с SQL). Желая да поддържам уменията си винаги свежи и в крак с последните тенденции от вселената на програмните езици.'
    ];

    main = [
      'Казвам се Виктор Симеонов и съм „млад“ програмист!<br />',
      'Представям на Вашето внимание този малък уебсайт, който преставлява фактически и моето портфолио.',
      'Едва ли този малък проект ще може да обхване всички специфики на front-end програмирането, но ще се опитам да вкарам в него максимална динамика и интерактивност!<br />',
      'Всички документи на сайта ще бъдат достъпни в GitHub заедно с целия програмен код, за да можете да ги разгледате.',
    ];
    break;

  default:
    break;
}
