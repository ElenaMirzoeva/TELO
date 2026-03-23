// ═══════════════════════════════════════════════
//  ТЕЛО — 12-week program data & application
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
//  SUPABASE — замени на свои данные
//  → supabase.com → создай проект
//  → Settings → API → Project URL + anon key
//  → SQL Editor → выполни supabase-setup.sql
//  → Authentication → Settings → отключи Confirm email
// ═══════════════════════════════════════════════
const SUPABASE_URL = 'https://rvyfkqzercbodzqfngwa.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_beQn-k-VBvosB07QjNgqow_DUKR7p6f';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const EMOTIONS = [
  'спокойствие', 'радость', 'тревога', 'грусть', 'злость',
  'скука', 'усталость', 'вина', 'стыд', 'одиночество',
  'возбуждение', 'раздражение', 'нежность', 'пустота', 'страх',
  'благодарность', 'гордость', 'растерянность'
];

const QUOTES = [
  '«тело — не проект по улучшению. это дом, в котором ты живёшь» — наоми вулф',
  '«голод — не враг. это язык твоего тела» — эвелин трайбл',
  '«нельзя ненавидеть себя в форму, которую полюбишь» — чери хаббард',
  '«если бы диеты работали, ты бы уже давно была на последней» — трэйси манн',
  '«тело знает. если замолчать и послушать — оно расскажет» — генин рот',
  '«исцеление — это не возвращение к прежнему. это становление тем, кем ты ещё не был(а)»',
  '«еда — не награда и не наказание. еда — это еда» — элизабет саттон',
  '«заботиться о себе — не эгоизм. это необходимость»',
  '«в тот момент, когда ты перестаёшь бороться с телом, оно начинает сотрудничать» — марк дэвид',
  '«процесс важнее результата. каждый день — это практика, а не экзамен»',
  '«ты не должен(на) заслужить еду. ты заслуживаешь еду просто потому, что живёшь»',
  '«переедание — это не слабость. это способ, которым психика справляется с тем, с чем не может справиться иначе»',
  '«нет плохой еды. есть разные потребности и разные моменты»',
  '«совершенство — ловушка. достаточно хорошо — это прекрасно»',
];

const PROGRAM = [
  {
    week: 1,
    title: 'Знакомство с голодом',
    type: 'physiology',
    tag: 'физиология',
    tagClass: 'tag-physiology',
    summary: 'Изучаем текущее состояние: как ты ешь, почему, что чувствуешь. Осваиваем шкалу голода и насыщения.',
    content: {
      theory: [
        'Что такое осознанное питание — не диета и не ограничения, а внимание к сигналам тела',
        'Шкала голода и насыщения (1—10): учимся различать физический голод от других состояний',
        'Функции еды: энергия, удовольствие, социальная, эмоциональная, ритуальная',
        'Тарелка здорового питания Гарварда — баланс БЖУ без подсчёта калорий',
        'Ритмы питания: почему регулярность важнее состава',
        'Работа с ценностями: зачем тебе это и что ты хочешь на самом деле'
      ],
      practice: {
        title: 'Практика: сканирование голода',
        description: '3 раза в день остановись на 30 секунд. Закрой глаза. Спроси тело: "какой у меня сейчас голод по шкале от 1 до 10?" Запиши цифру в дневник. Не пытайся угадать "правильный" ответ — любой ответ правильный.'
      }
    },
    materials: [
      { title: 'Тарелка здорового питания', type: 'article', source: 'Harvard T.H. Chan', url: 'https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/' },
      { title: '10 принципов интуитивного питания', type: 'article', source: 'Intuitive Eating', url: 'https://www.intuitiveeating.org/10-principles-of-intuitive-eating/' },
      { title: 'Что такое осознанное питание', type: 'article', source: 'Harvard Health', url: 'https://www.health.harvard.edu/staying-healthy/8-steps-to-mindful-eating' },
      { title: 'Шкала голода и насыщения', type: 'tool', source: 'практика', url: 'https://en.wikipedia.org/wiki/Intuitive_eating#Hunger_scale' },
    ],
    checklist: [
      'Определить свою текущую шкалу голода и насыщения',
      'Записать 5 приёмов пищи в дневник с наблюдениями',
      'Сканировать голод 3 раза в день (практика 30 сек)',
      'Записать текущие пищевые привычки — без оценок',
      'Определить 3 ценности и цели на программу',
      'Попробовать есть один приём пищи без телефона / экрана'
    ]
  },
  {
    week: 2,
    title: 'Карта привычек',
    type: 'behavior',
    tag: 'поведение',
    tagClass: 'tag-behavior',
    summary: 'Исследуем пищевые привычки, триггеры еды не по голоду, автоматизмы. Дневник как инструмент осознанности.',
    content: {
      theory: [
        'Автоматическое vs осознанное поведение: как привычки формируются нейрологически (петля привычки Чарлза Дахигга)',
        'Триггеры еды не по голоду: время, место, люди, эмоции, мысли, доступность',
        'Дневник питания — не для контроля калорий, а для наблюдения за паттернами',
        'Разница между рестрикцией (ограничением) и осознанным выбором',
        'Феномен «запретного плода»: почему запреты усиливают тягу',
        'Микропривычки BJ Fogg: маленькие шаги вместо революций'
      ],
      practice: {
        title: 'Практика: карта триггеров',
        description: 'Каждый раз, когда ты ешь не по голоду (или хочешь есть не по голоду), запиши: что произошло за 15 минут до → что ты почувствовал(а) → что сделал(а). Через неделю у тебя будет карта паттернов.'
      }
    },
    materials: [
      { title: 'Петля привычки — как работают привычки', type: 'article', source: 'James Clear', url: 'https://jamesclear.com/three-steps-habit-change' },
      { title: 'Tiny Habits — маленькие привычки', type: 'video', source: 'TEDx / BJ Fogg', url: 'https://www.youtube.com/watch?v=AdKUJxjn-R8' },
      { title: 'Сила привычки — конспект книги Дахигга', type: 'article', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/The_Power_of_Habit' },
    ],
    checklist: [
      'Вести дневник питания каждый день',
      'Записать 3 триггера переедания или еды не по голоду',
      'Заметить 2 автоматические пищевые привычки',
      'Попробовать есть без отвлечений хотя бы 1 раз в день',
      'Замечать момент «хочу есть» — записать, что ему предшествовало',
      'Попробовать одну микропривычку (напр. стакан воды утром)'
    ]
  },
  {
    week: 3,
    title: 'Эмоции и еда',
    type: 'psychology',
    tag: 'психология',
    tagClass: 'tag-psychology',
    summary: 'Связь эмоций и пищевого поведения. Учимся различать эмоциональный и физический голод. Первые техники саморегуляции.',
    content: {
      theory: [
        'Эмоциональный голод vs физический: 7 ключевых различий',
        'Колесо эмоций Плутчика: учимся называть то, что чувствуем',
        'Почему мы заедаем: нейрохимия комфортной еды (дофамин, серотонин)',
        'DBT-навыки: техника STOP (остановись → сделай шаг назад → наблюдай → действуй осознанно)',
        'Самосострадание Кристин Нефф: три компонента — доброта к себе, общечеловечность, осознанность',
        'Различия между подавлением эмоций и их регуляцией'
      ],
      practice: {
        title: 'Практика: STOP перед едой',
        description: 'Когда чувствуешь импульс есть не по голоду: S — остановись. T — сделай вдох. O — наблюдай: что я чувствую? что мне нужно на самом деле? P — выбери осознанно. Если после этого хочешь есть — ешь. Без вины.'
      }
    },
    materials: [
      { title: 'Колесо эмоций Плутчика', type: 'tool', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Robert_Plutchik#Plutchik\'s_wheel_of_emotions' },
      { title: 'Самосострадание — упражнения', type: 'article', source: 'Kristin Neff', url: 'https://self-compassion.org/category/exercises/' },
      { title: 'DBT навыки: что это и как работает', type: 'article', source: 'Psychology Today', url: 'https://www.psychologytoday.com/us/therapy-types/dialectical-behavior-therapy' },
      { title: 'Дыхание 4-7-8 — видеоинструкция', type: 'video', source: 'Andrew Weil', url: 'https://www.youtube.com/watch?v=PmBYdfv5RSk' },
    ],
    checklist: [
      'Различить эмоциональный и физический голод хотя бы 2 раза',
      'Попробовать технику STOP перед едой 3 раза',
      'Записать 3 эмоции, которые предшествовали еде',
      'Сделать практику заземления (5-4-3-2-1)',
      'Сделать дыхательную практику (4-7-8) хотя бы 1 раз',
      'Написать себе одно сострадательное сообщение'
    ]
  },
  {
    week: 4,
    title: 'Интеграция',
    type: 'integration',
    tag: 'интеграция',
    tagClass: 'tag-integration',
    summary: 'Каникулы — время отдохнуть, повторить, закрепить. Суммируем первый блок, фиксируем инсайты.',
    content: {
      theory: [
        'Пауза — тоже часть работы. Нервная система лучше учится через ритм: нагрузка → отдых',
        'Повторение и закрепление: нейропластичность требует времени',
        'Что ты уже знаешь: голод, привычки, эмоции — три слоя одного процесса',
        'Рефлексия: что было самым сложным? что удивило? что уже изменилось?'
      ],
      practice: {
        title: 'Практика: письмо себе',
        description: 'Напиши себе письмо от имени мудрой, сострадательной части себя. Поддержи себя. Отметь, что уже сделано. Обними свои сложности. Это письмо — для тебя.'
      }
    },
    materials: [
      { title: 'Нейропластичность — как мозг меняется', type: 'video', source: 'TED-Ed', url: 'https://www.youtube.com/watch?v=ELpfYCZa87g' },
      { title: 'Как вести рефлексивный дневник', type: 'article', source: 'Positive Psychology', url: 'https://positivepsychology.com/journaling-for-mindfulness/' },
    ],
    checklist: [
      'Записать 3 главных инсайта за первый блок',
      'Повторить любимую практику из первых трёх недель',
      'Отдохнуть один день без заданий — без вины',
      'Записать свой прогресс — что изменилось?',
      'Написать себе сострадательное письмо'
    ]
  },
  {
    week: 5,
    title: 'Глубже в тело',
    type: 'physiology',
    tag: 'физиология',
    tagClass: 'tag-physiology',
    summary: 'Типы переедания, снятие запретов с еды, работа с жаждой и голодом, легализация «запрещённых» продуктов.',
    content: {
      theory: [
        'Типы переедания: депривационное (от ограничений), эмоциональное, хаотическое, бинджевое',
        'Снятие запретов: принцип «unconditional permission to eat» из Intuitive Eating',
        'Почему легализация еды снижает переедание (исследования Элин Саттер)',
        'Жажда и голод: как отличить, работа с напитками',
        'Что такое «еда для удовольствия» и почему она необходима',
        'Макро- и микронутриенты без подсчёта: принцип «достаточности»'
      ],
      practice: {
        title: 'Практика: легализация одного продукта',
        description: 'Выбери один «запрещённый» продукт. Купи его. Положи на видное место. Ешь его, когда хочешь. Наблюдай: что происходит с тягой через 3-5 дней? Запиши наблюдения.'
      }
    },
    materials: [
      { title: 'Intuitive Eating — книга (обзор)', type: 'book', source: 'Tribole & Resch', url: 'https://www.intuitiveeating.org/resources/' },
      { title: 'Ellyn Satter — компетентное питание', type: 'article', source: 'Ellyn Satter Institute', url: 'https://www.ellynsatterinstitute.org/how-to-eat/eating-competence/' },
      { title: 'Почему диеты не работают', type: 'video', source: 'TED / Sandra Aamodt', url: 'https://www.youtube.com/watch?v=jn0Ygp7pMbA' },
    ],
    checklist: [
      'Определить свой тип переедания (или несколько)',
      'Легализовать один «запрещённый» продукт',
      'Записать наблюдения за тягой к этому продукту',
      'Пить воду перед едой — отследить разницу голода и жажды',
      'Включить один приём «еды для радости» без условий',
      'Составить свою тарелку-ориентир (без калорий, по ощущениям)'
    ]
  },
  {
    week: 6,
    title: 'Тревога и стыд',
    type: 'psychology',
    tag: 'психология',
    tagClass: 'tag-psychology',
    summary: 'Глубинная работа с тревогой, стыдом и виной вокруг еды и тела. Продвинутые техники эмоциональной регуляции.',
    content: {
      theory: [
        'Тревога и пищевое поведение: как тревога запускает переедание или рестрикцию',
        'Стыд vs вина: стыд — «я плохой», вина — «я сделал плохо». Разница критична',
        'Окно толерантности (Дэн Сигел): гипервозбуждение и гиповозбуждение',
        'DBT-навыки TIPP: температура, интенсивная нагрузка, ритм дыхания, парное расслабление мышц',
        'Техника «описание без оценки»: видеть факты, не интерпретации',
        'Работа с внутренним критиком: кто он и откуда'
      ],
      practice: {
        title: 'Практика: TIPP для острой тревоги',
        description: 'T — опусти лицо в холодную воду на 30 сек (активирует рефлекс ныряния). I — 10 приседаний или бег на месте 1 мин. P — дыхание 4-7-8. P — расслабь последовательно каждую группу мышц от ног до лица.'
      }
    },
    materials: [
      { title: 'Окно толерантности — что это', type: 'article', source: 'NICABM', url: 'https://www.nicabm.com/how-to-help-your-clients-understand-their-window-of-tolerance/' },
      { title: 'Стыд и уязвимость', type: 'video', source: 'TED / Brené Brown', url: 'https://www.youtube.com/watch?v=iCvmsMzlF7o' },
      { title: 'Прогрессивная мышечная релаксация', type: 'video', source: 'медитация', url: 'https://www.youtube.com/watch?v=1nZEdqcGVzo' },
      { title: 'Тело хранит счёт — обзор книги', type: 'book', source: 'Бессел ван дер Колк', url: 'https://en.wikipedia.org/wiki/The_Body_Keeps_the_Score' },
    ],
    checklist: [
      'Попробовать TIPP при тревоге хотя бы 1 раз',
      'Записать 3 ситуации, вызывающие стыд вокруг еды/тела',
      'Переписать одну стыдящую мысль нейтрально (факт без оценки)',
      'Определить своего внутреннего критика: чей это голос?',
      'Практиковать «описание без оценки» 2 раза',
      'Сделать практику прогрессивной мышечной релаксации'
    ]
  },
  {
    week: 7,
    title: 'Движение как радость',
    type: 'behavior',
    tag: 'поведение',
    tagClass: 'tag-behavior',
    summary: 'Переосмысление отношений с движением: не наказание за еду, а удовольствие тела. Практики контакта с телом.',
    content: {
      theory: [
        'Движение ≠ спорт ≠ наказание. Отделяем движение от «отработки калорий»',
        'Joyful movement: принцип движения ради удовольствия, а не долга',
        'Интероцепция: способность чувствовать внутренние сигналы тела',
        'Проприоцепция: ощущение тела в пространстве — практики заземления',
        'Как стресс хранится в теле (Бессел ван дер Колк: «тело хранит счёт»)',
        'Танец, растяжка, прогулка, дыхание — всё считается'
      ],
      practice: {
        title: 'Практика: 5 минут радостного движения',
        description: 'Включи любимую музыку. Двигайся как хочешь — без правил, без формы. Потянись. Потрясись. Покрутись. Замри. Послушай, что чувствует тело. Нет правильного способа. Есть только твой.'
      }
    },
    materials: [
      { title: 'Body Scan — медитация сканирования тела', type: 'video', source: 'Jon Kabat-Zinn', url: 'https://www.youtube.com/watch?v=_DTmGtznab4' },
      { title: 'Интероцепция — чувствуем тело изнутри', type: 'article', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Interoception' },
      { title: 'Joyful movement — движение без насилия', type: 'article', source: 'Intuitive Eating', url: 'https://www.intuitiveeating.org/10-principles-of-intuitive-eating/' },
    ],
    checklist: [
      'Записать 5 видов движения, которые приносят удовольствие',
      'Сделать 5 минут «радостного движения» 3 раза на неделе',
      'Потянуться утром — медленно, с вниманием к ощущениям',
      'Пройтись 15 минут пешком без наушников, наблюдая за ощущениями',
      'Заметить, в какой части тела ты чувствуешь стресс',
      'Сделать body scan перед сном (сканирование тела вниманием)'
    ]
  },
  {
    week: 8,
    title: 'Интеграция',
    type: 'integration',
    tag: 'интеграция',
    tagClass: 'tag-integration',
    summary: 'Создание собственной системы. Объединяем физиологию, эмоции и поведение в целостный подход.',
    content: {
      theory: [
        'Собственная система питания: что работает именно для тебя',
        'Суммирование: голод → эмоция → привычка → действие. Весь цикл',
        'Создание своих принципов и опоры — не правил, а ориентиров',
        'Гибкость vs жёсткость: почему «хорошие дни» и «плохие дни» — ловушка',
        'Оттачивание техник: что оставить, что отпустить'
      ],
      practice: {
        title: 'Практика: мои принципы',
        description: 'Запиши 5-7 принципов отношений с едой и телом, которые ты ХОЧЕШЬ (не «должен»). Напр.: «я ем, когда голодна», «я останавливаюсь, когда сыта, но не виню себя, если не получается», «движение — для радости».'
      }
    },
    materials: [
      { title: 'Гибкое мышление в питании', type: 'article', source: 'Psychology Today', url: 'https://www.psychologytoday.com/us/blog/eating-mindfully/201801/flexible-vs-rigid-dieting' },
      { title: 'Как создать устойчивые привычки', type: 'video', source: 'James Clear', url: 'https://www.youtube.com/watch?v=PZ7lDrwYdZc' },
    ],
    checklist: [
      'Написать 5-7 своих принципов отношений с едой/телом',
      'Выбрать 3 техники из программы, которые работают лучше всего',
      'Записать главные инсайты второго блока',
      'Отдохнуть — день без заданий',
      'Перечитать свои дневниковые записи и заметить изменения'
    ]
  },
  {
    week: 9,
    title: 'Нейрофизиология стресса',
    type: 'physiology',
    tag: 'физиология',
    tagClass: 'tag-physiology',
    summary: 'Как стресс влияет на пищевое поведение, кортизол и тяга к еде, нейрофизиология привычек.',
    content: {
      theory: [
        'Кортизол и пищевое поведение: почему стресс вызывает тягу к сладкому и жирному',
        'Дофаминовая петля: привычка → триггер → действие → награда → закрепление',
        'Нейропластичность: мозг перестраивается, но требуется время (66 дней — миф и реальность)',
        'Сон и аппетит: как недосып увеличивает грелин и снижает лептин',
        'Еда для радости vs еда для утешения: тонкая грань',
        'Изменения веса на протяжении жизни: нормальные колебания, set point theory'
      ],
      practice: {
        title: 'Практика: аудит стресса',
        description: 'Запиши все источники стресса за последнюю неделю. Раздели на 3 колонки: могу изменить / могу изменить отношение / не могу повлиять. Для первой колонки — запиши один маленький шаг. Для второй — запиши новую интерпретацию. Третью — отпусти.'
      }
    },
    materials: [
      { title: 'Кортизол и стрессовое питание', type: 'article', source: 'Harvard Health', url: 'https://www.health.harvard.edu/staying-healthy/why-stress-causes-people-to-overeat' },
      { title: 'Как сон влияет на аппетит', type: 'article', source: 'Sleep Foundation', url: 'https://www.sleepfoundation.org/physical-health/sleep-and-overeating' },
      { title: 'Дофамин и привычки — нейронаука', type: 'video', source: 'Andrew Huberman', url: 'https://www.youtube.com/watch?v=QmOF0crdyRU' },
      { title: 'Set Point Theory — вес тела', type: 'article', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Set_point_theory_(body_weight)' },
    ],
    checklist: [
      'Провести аудит стресса (3 колонки)',
      'Отследить связь «стресс → тяга к еде» 2 раза',
      'Наладить один аспект сна (время засыпания, экран, температура)',
      'Составить блюдо с ориентацией на состояние (что нужно телу сейчас?)',
      'Включить 1 «еду для радости» без условий и вины',
      'Записать, как изменилось отношение к «запрещённым» продуктам'
    ]
  },
  {
    week: 10,
    title: 'Образ тела',
    type: 'psychology',
    tag: 'психология',
    tagClass: 'tag-psychology',
    summary: 'Работа с образом тела, выстраивание новых отношений с собой. Принятие ≠ сдача. Принятие = начало.',
    content: {
      theory: [
        'Образ тела (body image): как формируется, из чего состоит',
        'Спектр отношений с телом: ненависть → терпимость → нейтральность → уважение → благодарность → любовь',
        'Не обязательно любить тело. Достаточно перестать воевать с ним',
        'ACT (терапия принятия и ответственности): ценности важнее чувств',
        'Медиа-грамотность: как соцсети искажают восприятие тела',
        'Телесный опыт vs телесная оценка: жить В теле, а не СМОТРЕТЬ на него'
      ],
      practice: {
        title: 'Практика: благодарность телу',
        description: 'Встань перед зеркалом. Посмотри на себя. Скажи 5 вещей, за которые ты благодарен(на) своему телу — НЕ за внешность, а за функции. «Спасибо, руки, что вы обнимаете. Спасибо, ноги, что вы несёте меня.»'
      }
    },
    materials: [
      { title: 'ACT — терапия принятия и ответственности', type: 'article', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Acceptance_and_commitment_therapy' },
      { title: 'Сила уязвимости', type: 'video', source: 'TED / Brené Brown', url: 'https://www.youtube.com/watch?v=iCvmsMzlF7o' },
      { title: 'Self-Compassion — книга (обзор)', type: 'book', source: 'Kristin Neff', url: 'https://self-compassion.org/the-three-elements-of-self-compassion-2/' },
      { title: 'Образ тела — что это и как формируется', type: 'article', source: 'NEDC', url: 'https://nedc.com.au/eating-disorders/eating-disorders-explained/body-image/' },
    ],
    checklist: [
      'Определить своё текущее место на спектре отношений с телом',
      'Практика благодарности телу перед зеркалом',
      'Написать 10 функций тела, за которые благодарен(на)',
      'Провести ревизию соцсетей: отписаться от аккаунтов, ухудшающих самочувствие',
      'Найти одну вещь в теле, которая тебе нравится (или нейтральна)',
      'Записать, как изменилось отношение к телу с начала программы'
    ]
  },
  {
    week: 11,
    title: 'Устойчивые привычки',
    type: 'behavior',
    tag: 'поведение',
    tagClass: 'tag-behavior',
    summary: 'Закрепление изменений, работа с саботажем и мотивацией, создание устойчивых паттернов.',
    content: {
      theory: [
        'Мотивация — не топливо, а побочный продукт действий (начни → появится мотивация)',
        'Саботаж: внутренний саботажник и его функция (защита от неизвестности)',
        'Рецидивы — часть процесса, не провал. Модель Прохазки: стадии изменений',
        'Привычка «достаточно хорошо»: отпустить перфекционизм',
        'Система поддержки: окружение, которое помогает',
        'Стратегии для сложных ситуаций: праздники, стресс, путешествия'
      ],
      practice: {
        title: 'Практика: план на сложную ситуацию',
        description: 'Выбери одну повторяющуюся сложную ситуацию (напр. праздничный стол, стресс на работе). Запиши: 1) что обычно происходит 2) что я хочу сделать вместо этого 3) какая техника мне поможет 4) что я скажу себе, если не получится.'
      }
    },
    materials: [
      { title: 'Стадии изменений — модель Прохазки', type: 'article', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Transtheoretical_model' },
      { title: 'Внутренний саботажник — как с ним работать', type: 'article', source: 'Psychology Today', url: 'https://www.psychologytoday.com/us/blog/evolution-the-self/201110/the-path-unconditional-self-acceptance' },
      { title: 'Atomic Habits — сила маленьких изменений', type: 'video', source: 'James Clear', url: 'https://www.youtube.com/watch?v=PZ7lDrwYdZc' },
    ],
    checklist: [
      'Составить план на одну сложную ситуацию',
      'Определить своего «внутреннего саботажника» — что он говорит?',
      'Ответить саботажнику с состраданием',
      'Практиковать «достаточно хорошо» — отпустить перфекционизм в одном деле',
      'Определить 2 человека из своей системы поддержки',
      'Записать 5 изменений, которые уже стали привычками'
    ]
  },
  {
    week: 12,
    title: 'Финал: ты и тело',
    type: 'integration',
    tag: 'финал',
    tagClass: 'tag-integration',
    summary: 'Подведение итогов, дальнейший план, закрепление. Ты уже не тот/та, кто начинал(а).',
    content: {
      theory: [
        'Суммирование всего пути: физиология + психология + поведение',
        'Что изменилось: измеримые и неизмеримые результаты',
        'Дальнейший план: что делать после программы',
        'Когда обращаться за профессиональной помощью (психолог, нутрициолог, психиатр)',
        'Рецидив — не конец, а информация. Как возвращаться на путь',
        'Ты — эксперт по своему телу. Доверяй себе'
      ],
      practice: {
        title: 'Практика: письмо из будущего',
        description: 'Напиши себе письмо от имени себя через год. Опиши, какие у тебя отношения с едой и телом. Как ты живёшь. Что чувствуешь. Это не план — это намерение. Сохрани и перечитай через год.'
      }
    },
    materials: [
      { title: 'Когда обратиться к специалисту по РПП', type: 'article', source: 'NEDA', url: 'https://www.nationaleatingdisorders.org/help-support/contact-helpline/' },
      { title: 'Intuitive Eating — все ресурсы', type: 'tool', source: 'Tribole & Resch', url: 'https://www.intuitiveeating.org/resources/' },
      { title: 'Самосострадание — все практики', type: 'tool', source: 'Kristin Neff', url: 'https://self-compassion.org/category/exercises/' },
    ],
    checklist: [
      'Написать письмо себе из будущего',
      'Записать 10 главных инсайтов за всю программу',
      'Составить персональный план поддержки на следующие 3 месяца',
      'Перечитать все записи в дневнике — заметить путь',
      'Отпраздновать завершение — по-своему, как хочется',
      'Поблагодарить себя. Серьёзно. Вслух.'
    ]
  }
];

const RESOURCES = [
  {
    category: 'книги',
    title: 'Intuitive Eating',
    author: 'Evelyn Tribole, Elyse Resch',
    description: 'Базовая книга по осознанному питанию. 10 принципов, которые меняют отношения с едой навсегда. Есть перевод на русский.',
    url: 'https://www.intuitiveeating.org/resources/'
  },
  {
    category: 'книги',
    title: 'Тело хранит счёт',
    author: 'Бессел ван дер Колк',
    description: 'Как травма живёт в теле и как с ней работать. Фундаментальная работа о связи тела и психики.',
    url: 'https://en.wikipedia.org/wiki/The_Body_Keeps_the_Score'
  },
  {
    category: 'книги',
    title: 'Self-Compassion',
    author: 'Kristin Neff',
    description: 'Самосострадание как навык: доброта к себе, осознанность, общечеловечность. Практики и исследования.',
    url: 'https://self-compassion.org/the-three-elements-of-self-compassion-2/'
  },
  {
    category: 'техника',
    title: 'STOP перед едой',
    author: 'DBT-навык',
    description: 'S — остановись. T — сделай вдох. O — наблюдай: что я чувствую? P — выбери осознанно. Универсальная техника паузы между импульсом и действием.',
    url: 'https://www.psychologytoday.com/us/therapy-types/dialectical-behavior-therapy'
  },
  {
    category: 'техника',
    title: 'TIPP для острой тревоги',
    author: 'DBT-навык',
    description: 'Температура (холодная вода на лицо) → Интенсивная нагрузка (30 сек) → Ритмичное дыхание (4-7-8) → Парная мышечная релаксация.',
    url: 'https://www.psychologytoday.com/us/therapy-types/dialectical-behavior-therapy'
  },
  {
    category: 'техника',
    title: 'Дыхание 4-7-8',
    author: 'Andrew Weil',
    description: 'Вдох 4 секунды → задержка 7 секунд → выдох 8 секунд. Активирует парасимпатическую нервную систему, снижает тревогу.',
    url: 'https://www.youtube.com/watch?v=PmBYdfv5RSk'
  },
  {
    category: 'техника',
    title: '5-4-3-2-1 заземление',
    author: 'grounding technique',
    description: 'Назови 5 вещей, которые видишь → 4 которые слышишь → 3 которые чувствуешь → 2 которые нюхаешь → 1 которую ощущаешь на вкус.',
    url: 'https://www.urmc.rochester.edu/behavioral-health-partners/bhp-blog/april-2018/5-4-3-2-1-coping-technique-for-anxiety.aspx'
  },
  {
    category: 'практика',
    title: 'Шкала голода 1—10',
    author: 'Intuitive Eating',
    description: '1 = голодный обморок, 5 = нейтрально, 10 = невыносимая переполненность. Цель — есть на 3-4, заканчивать на 6-7. Без жёстких правил.',
    url: 'https://www.intuitiveeating.org/10-principles-of-intuitive-eating/'
  },
  {
    category: 'практика',
    title: 'Body Scan',
    author: 'MBSR (Jon Kabat-Zinn)',
    description: 'Лёжа или сидя, медленно перемещай внимание от ступней до макушки. Замечай ощущения без оценки. 5-15 минут.',
    url: 'https://www.youtube.com/watch?v=_DTmGtznab4'
  },
  {
    category: 'наука',
    title: 'Set Point Theory',
    author: 'нейробиология',
    description: 'Тело стремится к определённому весу через регуляцию аппетита и метаболизма. Диеты нарушают этот механизм, вызывая «эффект маятника».',
    url: 'https://en.wikipedia.org/wiki/Set_point_theory_(body_weight)'
  },
  {
    category: 'наука',
    title: 'Дофаминовая петля привычек',
    author: 'нейробиология',
    description: 'Триггер → действие → награда → дофамин → закрепление. Понимание петли позволяет сознательно менять привычки, не борясь с собой.',
    url: 'https://jamesclear.com/three-steps-habit-change'
  },
  {
    category: 'наука',
    title: 'Гарвардская тарелка',
    author: 'Harvard T.H. Chan School',
    description: '½ овощи и фрукты, ¼ цельные злаки, ¼ белок. Здоровые жиры. Вода. Простой визуальный ориентир без подсчётов.',
    url: 'https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/'
  }
];

// ═══════════════════════════════════════════════
//  STATE & STORAGE
// ═══════════════════════════════════════════════

const STORAGE_KEY = 'telo_app_data';
let currentUser = null;

function defaultState() {
  return { name: '', startDate: null, currentWeek: 1, journal: [], checklists: {}, settings: {} };
}

function loadStateLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return defaultState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = defaultState();

// ═══════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', async () => {
  buildEmotionSelector();
  setupModalClose();

  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    currentUser = session.user;
    console.log('[telo] user created_at:', currentUser.created_at);
    state = loadStateLocal();
    if (!state.startDate && currentUser.created_at) {
      state.startDate = currentUser.created_at.split('T')[0];
      saveState();
      console.log('[telo] set startDate from auth:', state.startDate);
    }
    document.getElementById('authScreen').style.display = 'none';
    initApp();
    loadFromSupabase().then(() => {
      console.log('[telo] supabase loaded, startDate:', state.startDate);
      calculateCurrentWeek();
      renderDashboard();
      renderProgram();
      renderJournal();
      renderChecklists();
      renderTrackers();
    }).catch(err => console.error('[telo] supabase load failed:', err));
  } else {
    document.getElementById('authScreen').style.display = 'flex';
  }
});

function initApp() {
  calculateCurrentWeek();
  renderDashboard();
  renderProgram();
  renderJournal();
  renderChecklists();
  renderTrackers();
  renderResources();
  updateSidebarFooter();
}

// ═══════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════

function showAuthTab(tab) {
  document.getElementById('loginForm').style.display = tab === 'login' ? 'flex' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'flex' : 'none';
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
  document.getElementById('authError').textContent = '';
}

async function handleLogin(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const errorEl = document.getElementById('authError');
  btn.disabled = true;
  btn.textContent = 'загрузка...';
  errorEl.textContent = '';
  errorEl.style.color = '';
  try {
    const { data, error } = await sb.auth.signInWithPassword({
      email: document.getElementById('loginEmail').value.trim(),
      password: document.getElementById('loginPassword').value,
    });
    if (error) throw error;
    currentUser = data.user;
    await loadFromSupabase();
    document.getElementById('authScreen').style.display = 'none';
    initApp();
  } catch (err) {
    errorEl.textContent = translateAuthError(err.message);
  } finally {
    btn.disabled = false;
    btn.textContent = 'войти';
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const errorEl = document.getElementById('authError');
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'загрузка...';
  errorEl.textContent = '';
  errorEl.style.color = '';

  if (!name) { errorEl.textContent = 'введи имя'; btn.disabled = false; btn.textContent = 'создать аккаунт'; return; }

  try {
    const { data, error } = await sb.auth.signUp({
      email: document.getElementById('regEmail').value.trim(),
      password: document.getElementById('regPassword').value,
    });
    if (error) throw error;

    if (!data.session) {
      errorEl.textContent = 'проверь почту — отправили ссылку для подтверждения';
      errorEl.style.color = 'var(--success)';
      btn.disabled = false;
      btn.textContent = 'создать аккаунт';
      return;
    }

    currentUser = data.user;
    const startDate = new Date().toISOString().split('T')[0];
    await sb.from('profiles').insert({ id: currentUser.id, name, start_date: startDate, checklists: {} });

    state = defaultState();
    state.name = name;
    state.startDate = startDate;
    saveState();
    document.getElementById('authScreen').style.display = 'none';
    initApp();
  } catch (err) {
    errorEl.textContent = translateAuthError(err.message);
  } finally {
    btn.disabled = false;
    btn.textContent = 'создать аккаунт';
  }
}

async function handleSignOut() {
  await sb.auth.signOut();
  currentUser = null;
  state = defaultState();
  localStorage.removeItem(STORAGE_KEY);
  document.getElementById('authScreen').style.display = 'flex';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-dashboard').classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('[data-page="dashboard"]').classList.add('active');
}

function translateAuthError(msg) {
  const map = {
    'Invalid login credentials': 'неверный email или пароль',
    'User already registered': 'этот email уже зарегистрирован',
    'Password should be at least 6 characters': 'пароль — минимум 6 символов',
    'Unable to validate email address: invalid format': 'некорректный email',
    'Email rate limit exceeded': 'слишком много попыток, подожди',
    'Signup requires a valid password': 'введи пароль',
  };
  return map[msg] || msg;
}

// ═══════════════════════════════════════════════
//  SUPABASE SYNC
// ═══════════════════════════════════════════════

async function loadFromSupabase() {
  const { data: profile, error: profileErr } = await sb.from('profiles')
    .select('*').eq('id', currentUser.id).maybeSingle();
  console.log('[telo] profile:', profile, 'err:', profileErr);

  if (profile) {
    state.name = profile.name || state.name;
    state.startDate = profile.start_date
      || (profile.created_at && profile.created_at.split('T')[0])
      || state.startDate;
    state.checklists = profile.checklists || state.checklists || {};
    if (!profile.start_date && state.startDate) {
      sb.from('profiles').update({ start_date: state.startDate })
        .eq('id', currentUser.id).then(() => console.log('[telo] backfilled start_date'));
    }
  } else {
    const fallbackDate = (currentUser.created_at && currentUser.created_at.split('T')[0])
      || new Date().toISOString().split('T')[0];
    if (!state.startDate) state.startDate = fallbackDate;
    console.log('[telo] no profile found, creating one. fallbackDate:', fallbackDate);
    await sb.from('profiles').upsert({
      id: currentUser.id,
      name: state.name || currentUser.email?.split('@')[0] || '',
      start_date: state.startDate,
      checklists: state.checklists || {}
    });
  }
  const { data: entries } = await sb.from('journal_entries')
    .select('*').eq('user_id', currentUser.id)
    .order('timestamp', { ascending: false });
  state.journal = (entries || []).map(e => ({
    id: e.id, timestamp: e.timestamp, date: e.date, food: e.food,
    hunger: e.hunger, satiation: e.satiation, hungerType: e.hunger_type,
    emotions: e.emotions || [], notes: e.notes,
  }));
  saveState();
}

async function syncProfile() {
  if (!currentUser) return;
  const payload = { checklists: state.checklists };
  if (state.startDate) payload.start_date = state.startDate;
  sb.from('profiles').update(payload)
    .eq('id', currentUser.id).then(() => {});
}

async function syncNewJournalEntry(entry) {
  if (!currentUser) return;
  const { data } = await sb.from('journal_entries').insert({
    user_id: currentUser.id, timestamp: entry.timestamp, date: entry.date,
    food: entry.food, hunger: entry.hunger, satiation: entry.satiation,
    hunger_type: entry.hungerType, emotions: entry.emotions, notes: entry.notes,
  }).select().single();
  if (data) {
    const local = state.journal.find(e => e.timestamp === entry.timestamp);
    if (local) local.id = data.id;
    saveState();
  }
}

async function syncDeleteJournalEntry(id) {
  if (!currentUser) return;
  sb.from('journal_entries').delete().eq('id', id).then(() => {});
}

// ═══════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById('page-' + pageId).classList.add('active');
  document.querySelector(`[data-page="${pageId}"]`).classList.add('active');

  if (window.innerWidth < 768) {
    document.getElementById('sidebar').classList.remove('open');
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ═══════════════════════════════════════════════
//  WEEK CALCULATION
// ═══════════════════════════════════════════════

function calculateCurrentWeek() {
  if (!state.startDate) {
    console.warn('[telo] startDate is empty, defaulting to week 1');
    state.currentWeek = 1;
    return;
  }
  const parts = state.startDate.split('T')[0].split('-');
  const start = new Date(+parts[0], +parts[1] - 1, +parts[2]);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  state.currentWeek = Math.min(12, Math.max(1, Math.floor(diffDays / 7) + 1));
  console.log(`[telo] startDate=${state.startDate}, diffDays=${diffDays}, week=${state.currentWeek}`);
}

function updateSidebarFooter() {
  document.getElementById('sidebarWeek').textContent = `неделя ${state.currentWeek} из 12`;
  const now = new Date();
  const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  document.getElementById('sidebarDate').textContent = `${now.getDate()} ${months[now.getMonth()]}`;
}

// ═══════════════════════════════════════════════
//  DASHBOARD
// ═══════════════════════════════════════════════

function renderDashboard() {
  updateSidebarFooter();
  const hour = new Date().getHours();
  let greetWord = hour < 12 ? 'доброе утро' : hour < 17 ? 'добрый день' : 'добрый вечер';
  document.getElementById('greeting').textContent = `${greetWord}, ${state.name}`;

  const week = PROGRAM[state.currentWeek - 1];
  document.getElementById('dashTitle').textContent = `Неделя ${state.currentWeek}: ${week.title}`;
  document.getElementById('dashDesc').textContent = week.summary;

  document.getElementById('statWeek').textContent = state.currentWeek;
  document.getElementById('statEntries').textContent = state.journal.length;

  const weekKey = 'week_' + state.currentWeek;
  const checkData = state.checklists[weekKey] || [];
  const totalChecks = week.checklist.length;
  const doneChecks = checkData.filter(Boolean).length;
  document.getElementById('statChecked').textContent = totalChecks ? Math.round((doneChecks / totalChecks) * 100) + '%' : '0%';

  document.getElementById('statStreak').textContent = calculateStreak();

  document.getElementById('dailyQuote').textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  const taskList = document.getElementById('dashTasks');
  const weekChecklist = week.checklist.slice(0, 5);
  const weekCheckState = state.checklists[weekKey] || new Array(week.checklist.length).fill(false);
  taskList.innerHTML = weekChecklist.map((task, i) => `
    <li class="dash-task-item">
      <button class="dash-task-check ${weekCheckState[i] ? 'done' : ''}" onclick="toggleDashCheck(${i})"></button>
      <span class="dash-task-text ${weekCheckState[i] ? 'done' : ''}">${task}</span>
    </li>
  `).join('');

  const focusEl = document.getElementById('dashFocus');
  focusEl.innerHTML = `
    <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:16px; line-height:1.7">${week.summary}</p>
    <div class="exercise-card">
      <h5>${week.content.practice.title}</h5>
      <p>${week.content.practice.description}</p>
    </div>
  `;

  renderWeekIntro();
}

function toggleDashCheck(index) {
  const weekKey = 'week_' + state.currentWeek;
  if (!state.checklists[weekKey]) {
    state.checklists[weekKey] = new Array(PROGRAM[state.currentWeek - 1].checklist.length).fill(false);
  }
  state.checklists[weekKey][index] = !state.checklists[weekKey][index];
  saveState();
  syncProfile();
  renderDashboard();
  renderChecklists();
}

function calculateStreak() {
  if (!state.journal.length) return 0;
  const dates = [...new Set(state.journal.map(e => e.date))].sort().reverse();
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  if (dates[0] !== today && dates[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 0; i < dates.length - 1; i++) {
    const curr = new Date(dates[i]);
    const prev = new Date(dates[i + 1]);
    const diff = (curr - prev) / 86400000;
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}

// ═══════════════════════════════════════════════
//  PROGRAM
// ═══════════════════════════════════════════════

function renderProgram() {
  const timeline = document.getElementById('programTimeline');
  const typeIcons = { video: '▶', article: '✦', book: '◈', tool: '◎' };
  timeline.innerHTML = PROGRAM.map((week, i) => {
    const blockClass = i + 1 < state.currentWeek ? 'completed' : i + 1 === state.currentWeek ? 'current' : '';
    const integrationClass = week.type === 'integration' ? 'integration' : '';
    const materialsHtml = (week.materials && week.materials.length) ? `
      <div class="week-materials">
        <h4>Где изучать</h4>
        <div class="materials-grid">
          ${week.materials.map(m => `
            <a class="material-link" href="${m.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
              <div class="material-icon type-${m.type}">${typeIcons[m.type] || '→'}</div>
              <div class="material-info">
                <div class="material-title">${m.title}</div>
                <div class="material-source">${m.source}</div>
              </div>
              <span class="material-arrow">↗</span>
            </a>
          `).join('')}
        </div>
      </div>
    ` : '';
    return `
      <div class="week-block ${blockClass} ${integrationClass}">
        <div class="week-dot">${week.week}</div>
        <div class="week-card" onclick="toggleWeekDetail(${i})">
          <div class="week-card-header">
            <h3>Неделя ${week.week}: ${week.title}</h3>
            <span class="week-tag ${week.tagClass}">${week.tag}</span>
          </div>
          <p>${week.summary}</p>
          <div class="week-detail" id="weekDetail${i}">
            <div class="week-detail-section">
              <h4>Что изучаем</h4>
              <ul>
                ${week.content.theory.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>
            <div class="exercise-card">
              <h5>${week.content.practice.title}</h5>
              <p>${week.content.practice.description}</p>
            </div>
            ${materialsHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleWeekDetail(index) {
  const detail = document.getElementById('weekDetail' + index);
  detail.classList.toggle('open');
}

// ═══════════════════════════════════════════════
//  JOURNAL
// ═══════════════════════════════════════════════

function renderJournal() {
  const container = document.getElementById('journalEntries');
  if (!state.journal.length) {
    container.innerHTML = `
      <div class="empty-state">
        <svg fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
        <p>здесь появятся твои записи о еде, эмоциях и наблюдениях</p>
        <button class="btn btn-ghost" onclick="openJournalModal()">создать первую запись</button>
      </div>
    `;
    return;
  }

  const sorted = [...state.journal].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  container.innerHTML = sorted.map((entry, i) => {
    const date = new Date(entry.timestamp);
    const months = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
    const dateStr = `${date.getDate()} ${months[date.getMonth()]}, ${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;

    const hungerDots = Array.from({length: 10}, (_, j) => `<div class="scale-dot ${j < entry.hunger ? 'filled' : ''}"></div>`).join('');
    const satiationDots = Array.from({length: 10}, (_, j) => `<div class="scale-dot ${j < entry.satiation ? 'filled' : ''}"></div>`).join('');

    const hungerTypes = { physical: 'физический', emotional: 'эмоциональный', mixed: 'смешанный', social: 'социальный', habitual: 'по привычке' };
    const typeLabel = entry.hungerType ? hungerTypes[entry.hungerType] || '' : '';

    return `
      <div class="journal-entry">
        <div class="journal-entry-header">
          <div class="journal-date">${dateStr}</div>
          <div class="journal-entry-actions">
            <button onclick="deleteJournalEntry(${i})" title="удалить">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h10M5 6V4a1 1 0 011-1h4a1 1 0 011 1v2M6 10v3M10 10v3"/></svg>
            </button>
          </div>
        </div>
        <div class="journal-scales">
          <div class="scale-item"><span class="scale-label">голод:</span><div class="scale-dots">${hungerDots}</div><span>${entry.hunger}</span></div>
          <div class="scale-item"><span class="scale-label">насыщение:</span><div class="scale-dots">${satiationDots}</div><span>${entry.satiation}</span></div>
          ${typeLabel ? `<div class="scale-item"><span class="scale-label">тип:</span><span>${typeLabel}</span></div>` : ''}
        </div>
        ${entry.food ? `<div class="journal-content"><p><strong>еда:</strong> ${escapeHtml(entry.food)}</p></div>` : ''}
        ${entry.notes ? `<div class="journal-content" style="margin-top:8px"><p><strong>заметки:</strong> ${escapeHtml(entry.notes)}</p></div>` : ''}
        ${entry.emotions && entry.emotions.length ? `<div class="journal-emotions">${entry.emotions.map(e => `<span class="emotion-tag">${e}</span>`).join('')}</div>` : ''}
      </div>
    `;
  }).join('');
}

function buildEmotionSelector() {
  const container = document.getElementById('emotionSelector');
  container.innerHTML = EMOTIONS.map(e => `<button type="button" class="emotion-btn" data-emotion="${e}" onclick="toggleEmotion(this)">${e}</button>`).join('');
}

let selectedEmotions = [];

function toggleEmotion(btn) {
  const emotion = btn.dataset.emotion;
  if (selectedEmotions.includes(emotion)) {
    selectedEmotions = selectedEmotions.filter(e => e !== emotion);
    btn.classList.remove('selected');
  } else {
    selectedEmotions.push(emotion);
    btn.classList.add('selected');
  }
}

function openJournalModal() {
  selectedEmotions = [];
  document.querySelectorAll('.emotion-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('jFood').value = '';
  document.getElementById('jHunger').value = 5;
  document.getElementById('jHungerVal').textContent = '5';
  document.getElementById('jSatiation').value = 5;
  document.getElementById('jSatiationVal').textContent = '5';
  document.getElementById('jHungerType').value = '';
  document.getElementById('jNotes').value = '';
  document.getElementById('journalModal').classList.add('open');
}

function closeJournalModal() {
  document.getElementById('journalModal').classList.remove('open');
}

function saveJournalEntry() {
  const entry = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    date: new Date().toISOString().split('T')[0],
    food: document.getElementById('jFood').value.trim(),
    hunger: parseInt(document.getElementById('jHunger').value),
    satiation: parseInt(document.getElementById('jSatiation').value),
    hungerType: document.getElementById('jHungerType').value,
    emotions: [...selectedEmotions],
    notes: document.getElementById('jNotes').value.trim()
  };
  state.journal.push(entry);
  saveState();
  syncNewJournalEntry(entry);
  closeJournalModal();
  renderJournal();
  renderDashboard();
  renderTrackers();
}

function deleteJournalEntry(displayIndex) {
  const sorted = [...state.journal].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  const entryId = sorted[displayIndex].id;
  state.journal = state.journal.filter(e => e.id !== entryId);
  saveState();
  syncDeleteJournalEntry(entryId);
  renderJournal();
  renderDashboard();
  renderTrackers();
}

function setupModalClose() {
  document.getElementById('journalModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeJournalModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeJournalModal();
  });
}

// ═══════════════════════════════════════════════
//  CHECKLISTS
// ═══════════════════════════════════════════════

let activeChecklistWeek = null;

function renderChecklists() {
  if (activeChecklistWeek === null) activeChecklistWeek = state.currentWeek;

  const nav = document.getElementById('checklistNav');
  nav.innerHTML = PROGRAM.map((w, i) => {
    const weekKey = 'week_' + (i + 1);
    const checks = state.checklists[weekKey] || [];
    const allDone = w.checklist.length > 0 && checks.filter(Boolean).length === w.checklist.length;
    const isActive = activeChecklistWeek === i + 1;
    return `<button class="week-nav-btn ${isActive ? 'active' : ''} ${allDone ? 'completed' : ''}" onclick="selectChecklistWeek(${i + 1})">${i + 1}</button>`;
  }).join('');

  const week = PROGRAM[activeChecklistWeek - 1];
  const weekKey = 'week_' + activeChecklistWeek;
  if (!state.checklists[weekKey]) {
    state.checklists[weekKey] = new Array(week.checklist.length).fill(false);
  }
  const checks = state.checklists[weekKey];
  const done = checks.filter(Boolean).length;
  const total = week.checklist.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  document.getElementById('checklistProgress').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px">
      <span style="font-family:var(--font-display); font-size:1.1rem">Неделя ${activeChecklistWeek}: ${week.title}</span>
      <span class="week-tag ${week.tagClass}">${week.tag}</span>
    </div>
    <div class="progress-bar-container">
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      <span class="progress-text">${done}/${total}</span>
    </div>
  `;

  document.getElementById('checklistItems').innerHTML = week.checklist.map((item, i) => `
    <div class="checklist-item ${checks[i] ? 'checked' : ''}" onclick="toggleCheck(${i})">
      <div class="check-box"></div>
      <div class="check-text">${item}</div>
    </div>
  `).join('');
}

function selectChecklistWeek(weekNum) {
  activeChecklistWeek = weekNum;
  renderChecklists();
}

function toggleCheck(index) {
  const weekKey = 'week_' + activeChecklistWeek;
  if (!state.checklists[weekKey]) {
    state.checklists[weekKey] = new Array(PROGRAM[activeChecklistWeek - 1].checklist.length).fill(false);
  }
  state.checklists[weekKey][index] = !state.checklists[weekKey][index];
  saveState();
  syncProfile();
  renderChecklists();
  if (activeChecklistWeek === state.currentWeek) renderDashboard();
}

// ═══════════════════════════════════════════════
//  TRACKERS
// ═══════════════════════════════════════════════

function renderTrackers() {
  const grid = document.getElementById('trackerGrid');

  const last7 = getLast7DaysData();
  const journalDates = getJournalCalendarData();

  grid.innerHTML = `
    ${renderHungerTracker(last7)}
    ${renderEmotionTracker()}
    ${renderJournalCalendar(journalDates)}
    ${renderChecklistProgress()}
  `;
}

function getLast7DaysData() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayEntries = state.journal.filter(e => e.date === dateStr);
    const dayNames = ['вс','пн','вт','ср','чт','пт','сб'];
    days.push({
      date: dateStr,
      label: dayNames[d.getDay()],
      entries: dayEntries,
      avgHunger: dayEntries.length ? dayEntries.reduce((s, e) => s + e.hunger, 0) / dayEntries.length : 0,
      avgSatiation: dayEntries.length ? dayEntries.reduce((s, e) => s + e.satiation, 0) / dayEntries.length : 0
    });
  }
  return days;
}

function renderHungerTracker(days) {
  const maxH = 100;
  const bars = days.map(d => {
    const hHeight = d.avgHunger ? (d.avgHunger / 10) * maxH : 4;
    const sHeight = d.avgSatiation ? (d.avgSatiation / 10) * maxH : 4;
    return `
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px">
        <div style="display:flex; align-items:flex-end; gap:2px; height:${maxH}px">
          <div class="tracker-bar primary" style="height:${hHeight}px; width:12px" title="голод: ${d.avgHunger.toFixed(1)}"></div>
          <div class="tracker-bar accent" style="height:${sHeight}px; width:12px" title="насыщение: ${d.avgSatiation.toFixed(1)}"></div>
        </div>
        <span style="font-size:0.7rem; color:var(--text-muted)">${d.label}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="tracker-card">
      <h4>Голод и насыщение</h4>
      <div style="display:flex; gap:16px; margin-bottom:12px">
        <span style="font-size:0.75rem; color:var(--primary)">● голод</span>
        <span style="font-size:0.75rem; color:var(--accent)">● насыщение</span>
      </div>
      <div style="display:flex; align-items:flex-end; gap:8px">${bars}</div>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:12px">средние значения за последние 7 дней</p>
    </div>
  `;
}

function renderEmotionTracker() {
  const emotionCounts = {};
  state.journal.forEach(e => {
    (e.emotions || []).forEach(em => {
      emotionCounts[em] = (emotionCounts[em] || 0) + 1;
    });
  });

  const sorted = Object.entries(emotionCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const max = sorted.length ? sorted[0][1] : 1;

  if (!sorted.length) {
    return `
      <div class="tracker-card">
        <h4>Частые эмоции</h4>
        <p style="font-size:0.88rem; color:var(--text-muted); padding:20px 0">начни вести дневник — здесь появится карта твоих эмоций</p>
      </div>
    `;
  }

  const bars = sorted.map(([emotion, count]) => {
    const width = Math.max(8, (count / max) * 100);
    return `
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px">
        <span style="font-size:0.82rem; width:100px; text-align:right; color:var(--text-secondary)">${emotion}</span>
        <div style="flex:1; height:20px; background:var(--border-light); border-radius:10px; overflow:hidden">
          <div style="height:100%; width:${width}%; background:linear-gradient(90deg, var(--secondary), var(--secondary-light)); border-radius:10px; transition:width 0.3s"></div>
        </div>
        <span style="font-size:0.78rem; color:var(--text-muted); min-width:20px">${count}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="tracker-card">
      <h4>Частые эмоции</h4>
      ${bars}
    </div>
  `;
}

function getJournalCalendarData() {
  const dates = new Set(state.journal.map(e => e.date));
  return dates;
}

function renderJournalCalendar(dates) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = now.toISOString().split('T')[0];

  const dayNames = ['пн','вт','ср','чт','пт','сб','вс'];
  const monthNames = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];

  let offset = firstDay === 0 ? 6 : firstDay - 1;
  let cells = dayNames.map(d => `<div class="mini-cal-day" style="font-weight:600; font-size:0.65rem">${d}</div>`).join('');
  for (let i = 0; i < offset; i++) cells += '<div class="mini-cal-day"></div>';
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const hasEntry = dates.has(dateStr);
    const isToday = dateStr === today;
    cells += `<div class="mini-cal-day ${hasEntry ? 'has-entry' : ''} ${isToday ? 'today' : ''}">${d}</div>`;
  }

  const streak = calculateStreak();

  return `
    <div class="tracker-card">
      <h4>${monthNames[month]}</h4>
      <div class="mini-calendar">${cells}</div>
      <div class="streak-display">
        <div class="streak-number">${streak}</div>
        <div class="streak-label">дней подряд<br>ведёшь дневник</div>
      </div>
    </div>
  `;
}

function renderChecklistProgress() {
  const weekBars = PROGRAM.map((w, i) => {
    const weekKey = 'week_' + (i + 1);
    const checks = state.checklists[weekKey] || [];
    const total = w.checklist.length;
    const done = checks.filter(Boolean).length;
    const pct = total ? (done / total) * 100 : 0;
    const isCurrent = i + 1 === state.currentWeek;
    return `
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px">
        <div style="width:100%; height:80px; background:var(--border-light); border-radius:4px; display:flex; align-items:flex-end; overflow:hidden">
          <div style="width:100%; height:${pct}%; background:${isCurrent ? 'var(--primary)' : 'var(--secondary-light)'}; border-radius:4px 4px 0 0; transition:height 0.3s"></div>
        </div>
        <span style="font-size:0.65rem; color:${isCurrent ? 'var(--primary)' : 'var(--text-muted)'}; font-weight:${isCurrent ? '700' : '400'}">${i + 1}</span>
      </div>
    `;
  }).join('');

  const totalTasks = PROGRAM.reduce((s, w) => s + w.checklist.length, 0);
  const totalDone = PROGRAM.reduce((s, w, i) => {
    const checks = state.checklists['week_' + (i + 1)] || [];
    return s + checks.filter(Boolean).length;
  }, 0);

  return `
    <div class="tracker-card">
      <h4>Прогресс чек-листов</h4>
      <div style="display:flex; gap:6px; margin-bottom:12px">${weekBars}</div>
      <p style="font-size:0.85rem; color:var(--text-secondary)">выполнено <strong>${totalDone}</strong> из <strong>${totalTasks}</strong> заданий</p>
    </div>
  `;
}

// ═══════════════════════════════════════════════
//  RESOURCES
// ═══════════════════════════════════════════════

function renderResources() {
  const grid = document.getElementById('resourceGrid');
  grid.innerHTML = RESOURCES.map(r => `
    <div class="resource-card">
      <div class="resource-category">${r.category}</div>
      <h4>${r.title}</h4>
      ${r.author ? `<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:6px">${r.author}</p>` : ''}
      <p>${r.description}</p>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════
//  WEEK INTRO
// ═══════════════════════════════════════════════

function renderWeekIntro() {
  const week = PROGRAM[state.currentWeek - 1];
  const el = document.getElementById('weekIntro');
  const theory = week.content.theory.slice(0, 3);
  const resources = getWeekResources(state.currentWeek);
  const practiceShort = week.content.practice.description.split('.').slice(0, 2).join('.') + '.';

  el.innerHTML = `
    <h3>
      <span style="font-size:1.3rem">📖</span>
      с чего начать: неделя ${state.currentWeek}
    </h3>
    <div class="week-intro-items">
      <div class="week-intro-item">
        <span class="intro-arrow">→</span>
        <div><strong>изучи:</strong> ${theory.map(t => t.split(':')[0].split('—')[0].trim().toLowerCase()).join(' · ')}</div>
      </div>
      <div class="week-intro-item">
        <span class="intro-arrow">→</span>
        <div><strong>практика:</strong> ${week.content.practice.title.replace('Практика: ', '').toLowerCase()} — ${practiceShort.toLowerCase()}</div>
      </div>
      ${resources.length ? `
      <div class="week-intro-item">
        <span class="intro-arrow">→</span>
        <div><strong>почитай:</strong> ${resources.map(r => r.url ? `<a href="${r.url}" target="_blank" rel="noopener" style="color:var(--primary);text-decoration:underline;text-underline-offset:2px">${r.title}</a> (${r.author})` : `${r.title} (${r.author})`).join(', ')}</div>
      </div>` : ''}
      <div class="week-intro-item">
        <span class="intro-arrow">→</span>
        <div><strong>первый шаг:</strong> ${week.checklist[0].charAt(0).toLowerCase() + week.checklist[0].slice(1)}</div>
      </div>
    </div>
  `;
}

function getWeekResources(weekNum) {
  const map = {
    1: ['Шкала голода 1—10', 'Гарвардская тарелка'],
    2: ['Дофаминовая петля привычек'],
    3: ['STOP перед едой', '5-4-3-2-1 заземление', 'Дыхание 4-7-8'],
    4: [],
    5: ['Intuitive Eating', 'Set Point Theory'],
    6: ['TIPP для острой тревоги', 'Тело хранит счёт'],
    7: ['Body Scan'],
    8: [],
    9: ['Дофаминовая петля привычек', 'Set Point Theory'],
    10: ['Self-Compassion'],
    11: [],
    12: [],
  };
  const titles = map[weekNum] || [];
  return RESOURCES.filter(r => titles.includes(r.title));
}

// ═══════════════════════════════════════════════
//  UTILS
// ═══════════════════════════════════════════════

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
