/* ================== ДАНІ ПРОДУКТІВ ================== */
const PRODUCTS = [
    {
        id: "colombia-nasa-wesx",
        title: "Colombia — Nasa Wesx",
        image: "static/products/Colombia_Nasa_Wesx.png",
        badges: ["Limited +", "OMNI ROAST"],   // [badge1, badge2]
        processing: "Натуральна",
        taste: "Полуниця,  Чорниця,  Манго,  Клементин ",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 1100,
        price: 900,
        inStock: true,
        category: "omni",                    // для фільтрації
        backHtml: `
      <section class="back-block">
      <h5>Про спільноту</h5>
      <p><strong>Nasa Wesx</strong> — громада корінного народу з гір Huila, Колумбія. Вони вирощують каву з повагою до землі та традицій, прагнучи гармонії з природою. Лот має характер, солодкість і глибокий сенс.</p>
    </section>
    
    <section class="back-block">
      <h5>Обсмажування</h5>
      <p><strong>OMNI Roast</strong> — спосіб обсмажування, що підходить і для фільтра, і для еспресо, з акцентом на фруктовість і солодкість.</p>
    </section>
    
    <section class="back-block">
      <h5>Метод обробки</h5>
      <p><strong>Натуральна обробка</strong> — ягоди сушать цілими на сонці. Це зберігає фруктові ноти, щільне тіло та медову солодкість.</p>
    </section>
    
    <section class="back-block">
      <h5>Постачання</h5>
      <p><strong>Belco</strong> — французька компанія сталого постачання без посередників, що напряму співпрацює з фермерами та громадами. Допомагає таким, як Nasa Wesx, виходити на міжнародний ринок, зберігаючи ідентичність.</p>
    </section>
    
    <section class="back-block">
      <h5>Чим особливий лот</h5>
      <p>Ягідна, свіжа кава з яскравим характером, яка ламає уявлення про традиційний смак.</p>
    </section>`
    },


    {
        id: "el-salvador—el-pinar",
        title: "El Salvador — El Pinar",
        image: "static/products/El_Salvador_El_Pinar.png",
        badges: ["Specialty", "OMNI ROAST"],   // [badge1, badge2]
        processing: "Натуральна",
        taste: "Карамель,  Цитрус,  Сухофрукти,  Крем",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "omni",                    // для фільтрації
        backHtml: `
      <section class="back-block">
  <h5>Про сорт</h5>
  <p><strong>Cuscatleco</strong> — гібрид Villa Sarchi × Timor, виведений для умов Сальвадору: витривалий до іржі, дає стабільний урожай і насичений, округлий смаковий профіль.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — універсальне обсмажування, яке розкриває зерно і у фільтрі, і в еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p><strong>Натуральна обробка</strong> — ягоди сушаться в м’якоті на сонці. Це зберігає максимум цукру, глибину, щільне тіло та яскраві фруктові нотки.</p>
</section>

<section class="back-block">
  <h5>Про ферму</h5>
  <p><strong>El Pinar</strong> — історія перетворення. Заснована у 1998 році Рене Мартінесом, який після війни повернувся до землі й почав вирощувати каву. Сьогодні його родина обробляє 4 ділянки серед соснових лісів.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p>Соковита, фруктова чашка зі щільним тілом і чистою солодкістю — баланс, який однаково класно працює у фільтрі та еспресо.</p>
</section>
`
    },

    {
        id: "tanzania-ileya",
        title: "Tanzania - Ileya",
        image: "static/products/Tanzania_Ileya.png",
        badges: ["Specialty", "FILTER ROAST"],
        processing: "Натуральна",
        taste: "Ягоди, Вино, Бузок",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "filter",                  
        backHtml: `
      <section class="back-block">
  <h5>Про походження</h5>
  <p><strong>Sambewe AMCOS</strong> створено у 2018 році об’єднанням груп <em>Lungwa FG, Nansama FG, Sambewe FG</em> та <em>Mandelewo FG</em>. Кооператив працює спільно, щоб підвищувати якість і стабільність лотів.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — універсальний профіль, що зберігає фруктову солодкість і чистоту смаку в фільтрі та дає щільне, збалансоване еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p><strong>Натуральна обробка</strong> із жорстким контролем якості: спершу ручне сортування переспілих і недостиглих ягід. Стиглі червоні ягоди занурюють у чисту воду — видаляють «флоутери». Далі щільні ягоди миють і переносять на столи для сушіння. У перші 10 днів перевертають двічі на годину; на ніч накривають, щоб вирівняти вологість. Сушіння контролюють близько 20 днів, загалом це триває 24–30 днів залежно від погоди, доки вміст вологи не знизиться до ≈10%. Після цього ягоди готові до подальшої обробки (депульпації/лущення сухої оболонки).</p>
</section>

<section class="back-block">
  <h5>Про кооператив</h5>
  <p>Sambewe AMCOS об’єднує фермерів регіону для спільних стандартів і стабільної якості, забезпечуючи прозорість процесів та кращий доступ до ринку.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p>Ретельне, тривале сушіння дає концентровану солодкість, чистий фруктовий характер і щільне тіло — профіль, який однаково добре працює у фільтрі та еспресо.</p>
</section>
`
    },
    {
        id: "kenya-kamuyu",
        title: "Kenya - Kamuyu",
        image: "static/products/KENYA_Kamuyu.png",
        badges: ["Specialty", "FILTER ROAST"],   // [badge1, badge2]
        processing: "Мита",
        taste: "Темні ягоди, Темний виноград, Червона смородина",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "filter",                    // для фільтрації
        backHtml: `
      <section class="back-block">
  <h5>Про походження</h5>
  <p><strong>Nyeri</strong> — центральні високогір’я Кенії між західними схилами гори Кенія та східним краєм Великої Рифтової долини. Регіон славиться червоними вулканічними ґрунтами, великою висотою та стабільним екваторіальним кліматом — основами для однієї з найкращих кав країни.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — універсальний профіль, що зберігає яскраву кислотність і чистоту у фільтрі та дає структуроване, солодке еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p><strong>Мита обробка</strong>: після ферментації та промивання зерно сушать під африканським сонцем на підвищених <em>African Beds</em> до вологості ≈12%.</p>
</section>

<section class="back-block">
  <h5>Про систему виробництва</h5>
  <p>У Кенії близько 160 000 га кави, значна частина — у дрібних фермерів, об’єднаних у кооперативи. Кава, як правило, продається на аукціонах у сезон збору врожаю; ціна визначається за якістю чашки та розміром зерна. Класифікація <strong>AA</strong> (екран 17/18) — найбільші зерна; позначення <strong>AA Plus</strong> вказує на особливо витончений і складний профіль.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p>Два врожаї на рік (основний і <em>fly crop</em>), висота та вулканічні ґрунти дають концентровану солодкість, яскраву кислотність і чисту, комплексну чашку.</p>
</section>
`
    },
    {
        id: "colomia-red-bourbon",
        title: "Colombia - Red Bourbon",
        image: "static/products/COLOMBIA_Red_Bourbon.png",
        badges: ["Specialty", "Filter ROAST"],   
        processing: "Подвійна ферментація",
        taste: "Малина, Ревінь, Троянда",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "filter",                    
        backHtml: `
      <section class="back-block">
  <h5>Про сорт</h5>
  <p><strong>Red Bourbon</strong> — різновид, відомий насиченістю, чистою солодкістю та довгим, медово-фруктовим післясмаком.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — універсальний профіль, що зберігає солодкість і шаруватий аромат у фільтрі та дає збалансоване, щільне еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p>Подвійна контрольована ферментація з гігієнічним протоколом: спершу сортування за розміром і щільністю, потім стерилізація озонованою водою та УФ. <strong>1-й етап</strong> — 48&nbsp;год із дріжджами <em>Saccharomyces pastorianus</em>. Після депульпації м’якоть (mucilage) та натуральні соки повертають у процес; <strong>2-й етап</strong> — ще 68&nbsp;год. Далі ретельне миття й сушіння при ~38 °C протягом ~48&nbsp;год.</p>
</section>

<section class="back-block">
  <h5>Про ферму</h5>
  <p><strong>La Macarena</strong> (≈1900 м) — ручний збір лише найстигліших ягід, акцент на стабільність якості й чистоту процесів.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p>Максимально збережена природна солодкість і багатошаровий аромат: стиглі фрукти, медова глибина та чиста, структурована чашка — виразний Red Bourbon із Колумбії.</p>
</section>
`
    },


    {
        id: "colombia—tabi-finca-el-paraíso",
        title: "Colombia — Tabi, Finca El Paraíso",
        image: "static/products/Colombia_Tabi_Finca_El_Paraiso.png",
        badges: ["Specialty", "OMNI ROAST"],   
        processing: "Натуральна з контрольованою ферментацією",
        taste: "Сушені фініки,  Мед,  Темна вишня,  Жасмин,  Темний шоколад ",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "omni",                   
        backHtml: `
      <section class="back-block">
  <h5>Про походження</h5>
  <p><strong>Valle del Cauca</strong> — серце південно-західної Колумбії: родючі долини, оточені Андами. Стабільний клімат із чергуванням дощів і сонця формує каву високої щільності та чистого профілю.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — універсальний профіль, що зберігає багатошарові фрукти у фільтрі та дає щільне, солодке еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p><strong>Подвійна анаеробна ферментація</strong> з інокуляцією й контрольованою сушкою. Використовують власну закваску, герметичні баки, контроль pH/температури/вологості; застосовують термічний шок і стерильну сушку для максимально чистої чашки.</p>
</section>

<section class="back-block">
  <h5>Про фермера</h5>
  <p><strong>Wilton Benítez</strong> — ферментаційний інженер і інноватор із 20-річним досвідом (мікробіологія, виноробство, пивоваріння). На <em>El Paraíso 92</em> працює “як у лабораторії”, завдяки чому його лоти перемагають на Barista та Brewer’s Cup.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p><strong>Tabi</strong> у виконанні Benítez — “класична гітара в руках майстра”: глибокий шоколад, медове тіло, легкий жасмин у післясмаку. Стабільний, концентрований смак із довгою, структурованою розв’язкою.</p>
</section>
`
    },
    {
        id: "colombia-quebraditas",
        title: "Colombia — Quebraditas",
        image: "static/products/Colombia_Quebraditas.png",
        badges: ["Limited +", "OMNI ROAST"],   // [badge1, badge2]
        processing: "Мита з інфузією ",
        taste: "Зелене яблуко, Кавун, Зефір, Лайм, Малина",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 1100,
        price: 900,
        inStock: true,
        category: "omni",                    // для фільтрації
        backHtml: `
      <section class="back-block">
  <h5>Про ферму</h5>
  <p><strong>Quebraditas</strong> — маленька сімейна ферма в горах Huila, Колумбія. Спеціалізується на мікролотах і експериментальних процесах, що дають глибокий, багатошаровий смак.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — профіль, придатний і для фільтру, і для еспресо, з акцентом на кислотність, чистоту та солодкість.</p>
</section>

<section class="back-block">
  <h5>Методи обробки</h5>
  <ul class="info-list">
    <li><strong>Мита інфузія:</strong> після депульпації зерно миють і витримують у соку кавових ягід чи спеціальній заквасці для насичення аромату.</li>
    <li><strong>Термічний шок:</strong> різка зміна температури (гаряча → холодна) “замикає” аромат і робить смак чистим та інтенсивним.</li>
    <li><strong>Закваска:</strong> ферментація з додаванням відібраних дріжджів/бактерій для стабільного, виразного профілю.</li>
  </ul>
</section>

<section class="back-block">
  <h5>Про підхід</h5>
  <p>Мікролоти з жорстким контролем процесів і експериментами з інфузіями та температурами — щоб розкрити максимум фруктовості без втрати чистоти чашки.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p>Кава змінює смак упродовж пиття: яблуко, лайм, зефір. Довгий, приємний післясмак — прямий результат експериментальної обробки.</p>
</section>
`
    },


    {
        id: "Colombia-el-paraiso",
        title: "Colombia — El Paraiso",
        image: "static/products/Colombia_El_Paraiso.png",
        badges: ["Specialty", "FILTER ROAST"],   // [badge1, badge2]
        processing: "Honey",
        taste: "Стиглий персик, Соковита диня, Тропічні фрукти",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "filter",                    // для фільтрації
        backHtml: `
      <section class="back-block">
  <h5>Про походження</h5>
  <p><strong>Huila, Колумбія</strong> — високогірний теруар (&gt;1800 м), що формує щільне зерно з чистою, комплексною кислотністю.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — зберігає соковитість і медову солодкість у фільтрі та дає збалансоване, оксамитове еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p><strong>Honey</strong> — після зняття шкірки частину муциледжу залишають на зерні під час сушіння. Це додає солодкості, щільності та фруктовості, зберігаючи чистоту профілю.</p>
</section>

<section class="back-block">
  <h5>Про ферму</h5>
  <p><strong>El Paraíso</strong> — легендарне господарство Уїли, відоме експериментальними методами. Саме honey-процес надав цьому лоту виняткової соковитості та питкості.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p>Поєднання рідкісної для регіону honey-обробки та високогірного теруару робить лот лімітованим і виразним: яскрава фруктовість, медова солодкість і збалансована чашка.</p>
</section>
`
    },
    {
        id: "colombia-yellow-bourbon-quebraditas",
        title: "Colombia — Yellow Bourbon, Quebraditas",
        image: "static/products/Colombia_La_Esperanza.png",
        badges: ["Specialty", "FILTER ROAST"],   // [badge1, badge2]
        processing: "Натуральна з термічним шоком",
        taste: "Апельсиновий цвіт Лічі, манго, Білий персик, Диня,  Оксамитове кремове тіло",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "filter",                    // для фільтрації
        backHtml: `
      <section class="back-block">
  <h5>Про сорт</h5>
  <p><strong>Yellow Bourbon</strong> — рідкісний різновид із природною солодкістю та чистою фруктовістю; добре тримає складні процеси, зберігаючи прозорий профіль.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — універсальний профіль, що підкреслює тропічну солодкість у фільтрі та дає щільне, збалансоване еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p><strong>Thermal Shock</strong>: після ферментації зерно промивають, чергуючи гарячу й холодну воду — гаряча “відкриває” пори, холодна фіксує ароматичні сполуки. У цьому лоті процес поєднано з дріжджами, вирощеними з кавової шкірки — результатом є надзвичайна фруктовість при кришталево чистій чашці.</p>
</section>

<section class="back-block">
  <h5>Про фермера</h5>
  <p><strong>Edison Argote</strong> — відомий фокусом на рідкісних сортах і експериментальних протоколах. Регіон <em>Huila</em> (висота, клімат, багаті ґрунти) дає базу для складних, але прозорих профілів.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p>Поєднання рідкісного Yellow Bourbon і технології Thermal Shock — високий ризик і майстерність у дуже малих об’ємах. У чашці — тропічна солодкість, яскрава фруктовість і глибока, кристально чиста структура.</p>
</section>
`
    },
    {
        id: "colombia-la-esperanza ",
        title: "Colombia — La Esperanza ",
        image: "static/products/Colombia_Yellow_Bourbon_Quebraditas.png",
        badges: ["Specialty", "FILTER ROAST"],
        processing: "Мита",
        taste: "Абрикос / нектарин, Кривавий апельсин, Червоні ягоди, Медова солодкість",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "filter",
        backHtml: `
      <section class="back-block">
  <h5>Про сорт</h5>
  <p><strong>Yellow Bourbon</strong> — рідкісний різновид із природною солодкістю та чистою фруктовістю; добре тримає складні процеси, зберігаючи прозорий профіль.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — універсальний профіль, що підкреслює тропічну солодкість у фільтрі та дає щільне, збалансоване еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p><strong>Thermal Shock</strong>: після ферментації зерно промивають, чергуючи гарячу й холодну воду — гаряча “відкриває” пори, холодна фіксує ароматичні сполуки. У цьому лоті процес поєднано з дріжджами, вирощеними з кавової шкірки — результатом є надзвичайна фруктовість при кришталево чистій чашці.</p>
</section>

<section class="back-block">
  <h5>Про фермера</h5>
  <p><strong>Edison Argote</strong> — відомий фокусом на рідкісних сортах і експериментальних протоколах. Регіон <em>Huila</em> (висота, клімат, багаті ґрунти) дає базу для складних, але прозорих профілів.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p>Поєднання рідкісного Yellow Bourbon і технології Thermal Shock — високий ризик і майстерність у дуже малих об’ємах. У чашці — тропічна солодкість, яскрава фруктовість і глибока, кристально чиста структура.</p>
</section>
`
    },
    {
        id: "ethiopia-gerba-96h-anaerobic",
        title: "Ethiopia — Gerba 96h Anaerobic",
        image: "static/products/Ethiopia_Gerba_96h_Anaerobic.png",
        badges: ["Specialty", "FILTER ROAST"],
        processing: "Натуральна",
        taste: "Полуничний лимонад, Кокос, Ананас, Манго, Тропічні фрукти",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "filter",
        backHtml: `
      <section class="back-block">
  <h5>Про походження</h5>
  <p><strong>Gerba, Guji</strong> — станція обробки на висоті 2200–2400 м н.р.м. Довше дозрівання ягід на такій висоті дає більше цукрів і органічних кислот — звідси інтенсивність та багатошаровість чашки.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — універсальний профіль, що тримає яскраві фрукти у фільтрі та дає чисте, солодке еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p><strong>96-годинна анаеробна ферментація</strong> у герметичних бочках без доступу кисню — контрольований процес, який витягує максимум фруктовості. Після ферментації зерно сушать на підвищених <em>African Beds</em>, стабілізуючи смак і зберігаючи яскравий характер.</p>
</section>

<section class="back-block">
  <h5>Про станцію</h5>
  <p><strong>Gerba</strong> спеціалізується на інноваційних процесах і суворому контролі якості — від відбору ягід до сушіння, щоб показати теруар Guji максимально чисто.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <p>Супер-ліміт: маємо лише ~10&nbsp;кг. У смаку — «полуничний лимонад» і тропічний коктейль, той самий ностальгійний вайб «легендарних ефіопій» кількарічної давнини. Вау-ефект із першого ковтка.</p>
</section>
`
    },
    {
        id: "ethiopia-hambela-wamena",
        title: "Ethiopia — Hambela Wamena   ",
        image: "static/products/Ethiopia_Hambela_Wamena.png",
        badges: ["Specialty", "FILTER ROAST"],
        processing: "Мита",
        taste: "Чорний чай, Абрикос , Лимон , Квіти",
        weight: "240 г",
        grinds: ["У зерні", "Еспресо", "Фільтр", "Френч-прес"],
        oldPrice: 900,
        price: 700,
        inStock: true,
        category: "filter",
        backHtml: `
      <section class="back-block">
  <h5>Про походження</h5>
  <p><strong>Guji</strong> — один із наймолодших і найамбітніших кавових регіонів Ефіопії: якщо Єргачеффе асоціюється з класичною квітковістю, то Guji дарує складніші фруктово-чайні профілі.</p>
  <p><strong>Hambela Wamena</strong> — високогірний район (&gt;2000 м), де ягоди дозрівають довше, формуючи щільніше зерно та насиченіший смак. Багаті мінералами вулканічні ґрунти й мікроклімат із перепадом температур зберігають яскраву кислотність.</p>
</section>

<section class="back-block">
  <h5>Обсмажування</h5>
  <p><strong>OMNI Roast</strong> — універсальний профіль, що підкреслює цитрус, квіткові відтінки та чисту солодкість у фільтрі й дає прозоре, збалансоване еспресо.</p>
</section>

<section class="back-block">
  <h5>Метод обробки</h5>
  <p><strong>Мита (washed)</strong>: після збору ягоди очищають від шкірки та м’якоті, ферментують у воді 24–48 годин, ретельно промивають і сушать на <em>African Beds</em>. Це забезпечує чистий, прозорий смак і чіткі дескриптори.</p>
</section>

<section class="back-block">
  <h5>Про профіль чашки</h5>
  <p>Для <strong>Hambela Wamena</strong> очікуй: цитрусову кислотність (лимон), легку квітковість (жасмин), фруктову солодкість (абрикос) і «чайний» післясмак.</p>
</section>

<section class="back-block">
  <h5>Чим особливий лот</h5>
  <ul class="info-list">
    <li>Щоденна класика, яка показує, чому Ефіопія — «колиска кави».</li>
    <li>Орієнтир для гостей: еталон «митої ефіопії» у чистому виконанні.</li>
    <li>Збалансований і зрозумілий, але з глибиною, що надихає досвідчених каволюбів.</li>
    <li>Не втомлює й пасує для щоденного смакування.</li>
  </ul>
</section>
`
    },
];



// ДОДАЙ вище renderProducts()
function getRoastClass(p) {
    // 1) пріоритет: category
    const byCat = (p.category || '').toLowerCase();
    if (byCat.includes('omni'))   return 'badge-omni';
    if (byCat.includes('filter')) return 'badge-filter';

    // 2) fallback: текст другого бейджа
    const roast = (p.badges?.[1] || '').toLowerCase();
    if (roast.includes('omni'))   return 'badge-omni';
    if (roast.includes('filter')) return 'badge-filter';

    return ''; // якщо не впізнали
}

/* ================== РЕНДЕР КАРТОК ================== */
function fmtUAH(n){ return `${Number(n).toLocaleString('uk-UA')} UAH`; }

function renderProducts(list = PRODUCTS) {
    const grid = document.getElementById('products-grid');
    const tpl = document.getElementById('product-template');
    if (!grid || !tpl) return;

    grid.innerHTML = '';
    list.forEach(p => {
        const node = tpl.content.cloneNode(true);
        const card = node.querySelector('.product-card');

        card.dataset.productId = p.id;

        // front
        node.querySelector('.product-image').src = p.image;
        node.querySelector('.product-image').alt = p.title;
        node.querySelector('.product-title').textContent = p.title;
        node.querySelector('[data-field="processing"]').textContent = p.processing || '';
        node.querySelector('[data-field="taste"]').textContent = p.taste || '';
        node.querySelector('.weight').textContent = p.weight || '';

        // badges
        const b1 = node.querySelector('.badge-1');
        const b2 = node.querySelector('.badge-2');
        b1.textContent = p.badges?.[0] || '';
        b2.textContent = p.badges?.[1] || '';

        const cl = getRoastClass(p);
        b2.classList.remove('badge-omni','badge-filter');
        if (cl) b2.classList.add(cl);

        // ціни
        const oldEl = node.querySelector('[data-field="oldPrice"]');
        const priceEl = node.querySelector('[data-field="price"]');
        if (p.oldPrice) oldEl.textContent = fmtUAH(p.oldPrice);
        else oldEl.closest('div').style.display = 'none'; // ховаємо блок, якщо немає старої ціни
        priceEl.textContent = fmtUAH(p.price);

        // помел
        const select = node.querySelector('.grind-select');
        (p.grinds || []).forEach(g => {
            const opt = document.createElement('option');
            opt.textContent = g;
            select.appendChild(opt);
        });

        // back
        node.querySelector('.back-align').textContent = p.title;
        node.querySelector('[data-field="backHtml"]').innerHTML = p.backHtml || '';

        // наявність
        const addBtn = node.querySelector('.add-to-cart');
        if (!p.inStock) {
            addBtn.disabled = true;
            addBtn.textContent = 'Немає в наявності';
            addBtn.classList.add('is-out'); // можна стилізувати в CSS (сірий фон, курсор: not-allowed)
        }

        grid.appendChild(node);

    });
    document.dispatchEvent(new CustomEvent('products:rendered'));
}


// якщо в продукті category не задано — виводимо з бейджів
function inferCategory(p) {
    const c = (p.category || '').toString().toLowerCase();
    if (c === 'filter' || c === 'omni') return c;

    // fallback по бейджах
    const txt = (p.badges || []).join(' ').toLowerCase();
    if (txt.includes('filter')) return 'filter';
    if (txt.includes('omni'))   return 'omni';

    // за замовчуванням трактуємо як omni (еспресо)
    return 'omni';
}

// нормалізуй усіх одразу
PRODUCTS.forEach(p => { p.id = (p.id || '').trim(); p.category = inferCategory(p); });


function applyFilter(key) {
    let list = PRODUCTS;

    // показуємо лише ті, що в наявності (inStock !== false)
    if (key === 'filter') {
        list = PRODUCTS.filter(p => inferCategory(p) === 'filter' && p.inStock !== false);
    }
    if (key === 'espresso') {
        // espresso = наші omni-рости
        list = PRODUCTS.filter(p => inferCategory(p) === 'omni' && p.inStock !== false);
    }

    renderProducts(list);

    // акуратний скрол до секції з товарами
    const sec = document.querySelector('.products-section');
    if (sec) window.scrollTo({ top: sec.offsetTop, behavior: 'smooth' });
}


function setupCategories() {
    // працює і з #product-categories, і з .categories
    const wrap = document.getElementById('product-categories') || document.querySelector('.categories');
    if (!wrap) return;

    // керування активним станом
    let active = null;
    const setActive = (el) => {
        wrap.querySelectorAll('.cat-item').forEach(b => b.classList.remove('active'));
        if (el) el.classList.add('active');
        active = el;
    };

    // клік по категорії
    wrap.addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-item');
        if (!btn || !wrap.contains(btn)) return;

        const key = (btn.dataset.cat || '').toLowerCase();

        // повторний клік по активній — скидає фільтр
        if (active === btn) {
            setActive(null);
            renderProducts(PRODUCTS);
            return;
        }

        setActive(btn);
        applyFilter(key);
    });

    // доступність з клавіатури
    wrap.querySelectorAll('.cat-item').forEach(btn => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
        btn.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
        });
    });
}

// ---- ЕКСПОРТ у глобальний скоуп (щоб уникнути "випадкової" недоступності з інших файлів)
window.PRODUCTS = PRODUCTS;
window.renderProducts = renderProducts;


// ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(PRODUCTS);
    setupCategories();
});




