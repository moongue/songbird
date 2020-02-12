const birdsData = [
  [
    {
      id: 1,
      name: 'Пингвин',
      species: 'Pygoscelis adeliae',
      description: 'Пингвин Адели́ — нелетающая птица из отряда пингвинообразных. Один из самых распространённых видов пингвинов. Пингвин Адели гнездится на побережье Антарктиды и ближайших к материку островах: Южных Шетландских, Оркнейских и Южных Сандвичевых',
      image: 'https://sun9-40.userapi.com/c854528/v854528271/1f12f1/vaUbd8WviSc.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
    },
    {
      id: 2,
      name: 'Болотная сова',
      species: 'Asio flammeus',
      description: 'Болотная сова — птица отряда совообразных с короткими ушными пучками перьев, состоящими лишь из 3—4 перьев. Сверху ржавчинного цвета с тёмными и беловатыми продольными пятнами, снизу — светлее с простыми тёмно-коричневыми стержневыми пятнами.',
      image: 'https://imgprx.livejournal.net/f54ae23f43a560b10df5663e90e1b6e427ac5350/8hdHeaBNRS0HEHbGg0Ax9ldQWvekCP1aplzEqvBwklY2wdqr5zaqzN-cWh__Jaakh-h-hGO8vyYengxz1_34QzVT_loivNlJuBqp62z7MyOlG6ytBDEDIgslO8JFBvPw',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC407665-Leipoa_ocellata-FL%20Hattah%20NP%2020Oct15%208.04am%20LS117980a.mp3'
    },
    {
      id: 3,
      name: 'Беркут',
      species: 'Aquila chrysaetos',
      description: 'Одна из наиболее известных хищных птиц семейства ястребиных, самый крупный орёл. Распространён в Северном полушарии, где обитает преимущественно в горах, в меньшей степени на равнинных открытых и полуоткрытых ландшафтах. Избегает жилых районов, чувствителен к беспокойству со стороны человека.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/%D0%91%D0%B5%D1%80%D0%BA%D1%83%D1%82_%28Aquila_chrysaetos%29.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HMJIMVISCP/XC518798-guila%20Real-%5BAudioTrimmer.com%5D.mp3'
    },
    {
      id: 4,
      name: 'Сапсан',
      species: 'Falco peregrinus',
      description: 'Хищная птица из семейства соколиных, распространённая на всех континентах, кроме Антарктиды. Размером с серую ворону, выделяется тёмным, аспидно-серым оперением спины, пёстрым светлым брюхом и чёрной верхней частью головы, а также чёрными «усами».',
      image: 'https://web-zoopark.ru/wp-content/uploads/2018/06/2-509.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/UGKDXJQJTC/XC524492-P1240024.mp3'
    },
    {
      id: 5,
      name: 'Удод',
      species: 'Upupa epops',
      description: 'Небольшая ярко окрашенная птица с длинным узким клювом и хохолком, иногда раскрываемым в виде веера. Широко распространён в южных и центральных областях Европы и Азии, а также почти на всей территории Африки.',
      image: 'https://cdn.fishki.net/upload/post/2018/03/06/2530882/2301093.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/LNDCYHUSPR/XC522078-Abubilla-%20Upupa%20epops.mp3'
    },
    {
      id: 6,
      name: 'Камышница',
      species: 'Gallinula chloropus',
      description: 'Небольшая, размером с голубя, водоплавающая птица из семейства пастушковых, широко распространённая на всех материках, за исключением Австралии и Антарктиды. Типичный обитатель разнообразных водоёмов со стоячей или проточной водой и заболоченными, заросшими берегами.',
      image: 'https://photoclub.by/images/main62/627180_main.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SHDHTEQQKR/XC524425-Gallinule.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Обыкновенный гоголь',
      species: 'Bucephala clangula',
      description: 'птица семейства утиных, нырковая утка средней величины с большой округлой головой, коротким клювом и контрастным чёрно-белым оперением. Распространена в зоне лесов северного полушария — как в Евразии, так и в Америке.',
      image: 'https://belsat.eu/wp-content/uploads/2016/01/hohal1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RNMRWBXEZJ/XC511551-Brilduiker%2C%20wingbeats%2C%202910119%2C%200305%20uur.mp3'
    },
    {
      id: 2,
      name: 'Огарь',
      species: 'Tadorna ferruginea',
      description: 'водоплавающая птица семейства утиных, родственная пеганке. Характерно оранжево-коричневое оперение, при этом голова имеет более светлую окраску. Крылья белые с чёрными маховыми перьями.',
      image: 'https://animalreader.ru/wp-content/uploads/2015/06/ogar-golosistaja-krasnaja-utka-animal-reader.-ru-003.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MCFGTDXKHO/XC507039-Teil6.mp3'
    },
    {
      id: 3,
      name: 'Гуменник',
      species: 'Anser fabalis',
      description: 'Крупная птица буровато-серой окраски, напоминающий серого гуся. Клюв чёрный с оранжевой полоской посередине. Самец и самка не отличаются по окраске, однако самка несколько мельче.',
      image: 'https://barentsmap.com/upload/iblock/193/193cc9ad2c152b76029f0026dd402cf5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/XC511820-S%C3%A4dg%C3%A5s-lockl%C3%A4te%20uppflog%20flock-Ekeskog%2C%20T%C3%B6reboda%20Vg-%282019-11-09%2009-41%29-LS143538.mp3'
    },
    {
      id: 4,
      name: 'Канадская казарка',
      species: 'Branta canadensis',
      description: 'Голова и шея блестящие чёрные с крупными белыми пятнами по бокам головы, захватывающими щёку, подбородок и горло. Изредка небольшая белая отметина также имеется на лбу. Грудь, верхняя часть брюха и бока от сероватого или почти белого до волнистого шоколадно-коричневого или бурого.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Canada_goose_flight_cropped_and_NR.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ELJNEGDKGC/XC522376-Grote%20Canadese%20gans%20contactroep.mp3'
    },
    {
      id: 5,
      name: 'Обыкновенная гага',
      species: 'Somateria mollissima',
      description: 'Крупная морская птица из семейства утиных, распространённая вдоль северных побережий Европы, Восточной Сибири и Северной Америки. Бо́льшую часть жизни проводит в море на небольшом расстоянии от берега, где её часто можно увидеть «танцующей» на волнах либо летящей очень низко над водой.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Somateria_mollissima_male_female.jpg/1280px-Somateria_mollissima_male_female.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487987-2018-07-25%20Blonduos%20180725%20Eider%20a%20duvet%20divers%20grognement%20%286%29.mp3'
    },
    {
      id: 6,
      name: 'Краснозобая гагара',
      species: 'Gavia stellata',
      description: 'Самая мелкая из гагар. Белых пятен на спине и крыльях нет, есть только мелкие белые крапины, которых издали не видно, верх тела и крыльев кажутся однотонно серыми. Брюхо белое. Голова и бока шеи серые, по задней стороне шеи белые полоски.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gavia_stellata_-Iceland_-swimming-8.jpg/275px-Gavia_stellata_-Iceland_-swimming-8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487876-2018-07-19%20Reykholar%20-%20Brajanslaekur%20-%20Latrabajarg%20180719%20Plongeon%20catmarin%20divers%20%283%29.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Буроголовая гаичка',
      species: 'Poecile montanus',
      description: 'Небольшая подвижная синица, населяющая зону лесов Европы и Азии. В отличие от близкой родственницы черноголовой гаички, больше тяготеет к хвойному лесу и по этой причине встречается в более северных широтах.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Poecile_montanus.JPG/275px-Poecile_montanus.JPG',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC519604-181006_04%2C%209.30h%20%20matkop%2C%20chaamse%20bossen%20bij%20boerenbaan%2C%20contactroep%2C%201%20ex%2C%20ter%20plaatse%2C%20niet%20gezien%2C%20goudhaan%2C%20pimpelmees%2C%20koolmees%2C%20gaai%20%282%29.MP3'
    },
    {
      id: 2,
      name: 'Белозобый дрозд',
      species: 'Turdus torquatus',
      description: 'Белозобый дрозд очень похож на чёрного дрозда по величине и структуре. У самцов чёрное оперение с заметной толстой белой полоской на груди. Нижняя часть клюва у самцов оранжевого цвета. У самок оттенок оперения скорее коричневый, а полоска на груди светло-серая.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Turdus_torquatus2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CPHOABQOXS/XC509749-ringdrossel6%20191021-222248%2039.38.0.mp3'
    },
    {
      id: 3,
      name: 'Хохлатая синица',
      species: 'Lophophanes cristatus',
      description: 'Небольшая певчая птица семейства синицевых, распространённая на большей части Европы. В северных и средних широтах обычна в хвойных, реже смешанных лесах. На юге-западе Европы, в частности на Пиренейском полуострове и во Франции селится в широколиственных лесах с густым подлеском',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Lophophanes_cristatus_-_01.jpg/800px-Lophophanes_cristatus_-_01.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/URREFGVMYF/XC524206-200202_1262-ampl-cut.mp3'
    },
    {
      id: 4,
      name: 'Воробьиный сыч',
      species: 'Glaucidium passerinum',
      description: 'Верх серовато-бурый или тёмно-коричневый, с белыми пестринами, которые на голове мельче, а на спине крупнее, и беловатым поперечным рисунком на маховых и рулевых. Низ белый с бурыми продольными полосами. По бокам зоба и груди тёмное с белыми отметинами пятно.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/V%C3%A4rbkakk.JPG/275px-V%C3%A4rbkakk.JPG',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC509468-190419_0897_GP_Karl.mp3'
    },
    {
      id: 5,
      name: 'Длиннохвостая неясыть',
      species: 'Strix uralensis',
      description: 'Это одна из самых крупных неясытей. Её длина достигает 70 см, размах крыльев около 115 см, длина крыла примерно 35–40 см, хвоста 30 см. Главный отличительный признак вида – длинный, клиновидный, с темными полосами хвост',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Strix_uralensis.jpg/800px-Strix_uralensis.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VEMODJZIOL/XC511907-Slaguggla%20191213%20for%20Xeno.mp3'
    },
    {
      id: 6,
      name: 'Желтоголовый королёк',
      species: 'Regulus regulus',
      description: 'Очень подвижная птица, постоянно перепархивает с одной ветки на другую, на тонких веточках принимает различные позы, в том числе и вниз головой. Как правило, держится в верхней части кроны деревьев и малозаметна с земли. Гнездится в хвойных и смешанных лесах, в том числе глухой темнохвойной тайге',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Regulus_regulus_60North_cropped.jpg/275px-Regulus_regulus_60North_cropped.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC522842-2019-11-24%20Acheres%20Roitelet%20huppe%20cris%20de%20vol%20courts.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Сорока',
      species: 'Pica pica',
      description: 'Благодаря характерному чёрно-белому оперению и необычно длинному хвосту, сорока неповторима и легко узнаваема. Голова, шея, грудь и спина чёрные с фиолетовым или синевато-зелёным металлическим отливом, живот и плечи белые.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Sroka_Pica_Pica_II.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PNYKOPBQBQ/XC524924-PICPIC250120-T001%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Курица',
      species: 'Gallus gallus',
      description: 'Самая многочисленная и распространённая домашняя птица, которая является одомашненной формой банкивской джунглевой курицы. Летает плохо, недалеко',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Female_pair.jpg/800px-Female_pair.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZYMFKVCIGP/XC498034-rjf_ubin_call.mp3'
    },
    {
      id: 3,
      name: 'Галка',
      species: 'Coloeus monedula',
      description: 'Птица, один из наиболее мелких представителей семейства врановых. Традиционно этот вид включали в род во́роны (Corvus), современные исследователи относят галку к роду Coloeus.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Coloeus_monedula_-Ham_Common%2C_London_Borough_of_Richmond_upon_Thames%2C_England-8.jpg/1280px-Coloeus_monedula_-Ham_Common%2C_London_Borough_of_Richmond_upon_Thames%2C_England-8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC525887-ab-077%20kawka%20f%20pokarm%20%282%29.mp3'
    },
    {
      id: 4,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description: 'Грачи всеядны, но главным образом питаются червями и личинками насекомых, которых они находят, копаясь в земле своим крепким клювом. Любят большими стаями следовать за пашущими землю.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Rook_-_Corvus_frugilegus_%28476445950%29.jpg/275px-Rook_-_Corvus_frugilegus_%28476445950%29.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HMJIMVISCP/XC521497-713_0308.MP3'
    },
    {
      id: 5,
      name: 'Морская чайка',
      species: 'Larus marinus',
      description: 'Морская чайка может достигать длины 75 см и является самым крупным видом чаек. Она весит до 2 кг, а размах её крыльев составляет около 170 см.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Great_Black-backed_Gull.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC478855-2018-08-18%20Gardskagi%20180818%20Goelands%20marins%20cris%20de%20vol%20d%20un%20couple.mp3'
    },
    {
      id: 6,
      name: 'Глухарь',
      species: 'Tetrao urogallus',
      description: 'Глухарь держится преимущественно в сплошных высокоствольных хвойных, а также в смешанных лесах, редко в лиственных. Очень любит моховые болота в лесу, богатые ягодами. Ведёт в целом оседлый образ жизни, но иногда предпринимает перекочёвки с гор в долины и обратно.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Capercaillie_%288751340764%29.jpg/1024px-Capercaillie_%288751340764%29.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WDTGKKSKNG/XC469024-Western%20Capercaillie%20Lek.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Агуйа',
      species: 'Geranoaetus melanoleucus',
      description: 'Агуйа распространён в Южной Америке. Он населяет разнообразные открытые и полуоткрытые ландшафты, а также горные регионы вплоть до высоты 3 000 м над уровнем моря.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Geranoaetus_melanoleucus.JPG/275px-Geranoaetus_melanoleucus.JPG',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XGQWKIYVAD/XC489711-guia%20Serrana%2001.mp3'
    },
    {
      id: 2,
      name: 'Южноамериканская гарпия',
      species: 'Harpia harpyja',
      description: 'Длина тела этого ястреба от 90 до 110 см. Размах крыльев около 2 м. Самка весит 6–9 кг, более мелкий самец 4–4,8 кг. У гарпии оперение на спине тёмно-серого цвета.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Harpyia.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/JPBSNBUUEF/XC436991-Harpy%20Eagle%2C%20181002-006.mp3'
    },
    {
      id: 3,
      name: 'Змееяд',
      species: 'Circaetus gallicus',
      description: 'Змееяд очень скрытен, осторожен, молчалив. Для гнездования избирает удаленные от человека участки леса с полянами и болотами, удобными для охоты. Гнезда строит маленькие, не крупнее, чем у канюка, рыхлые и какие-то небрежные.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Circaetus_gallicus_in_Kiev_Zoo.jpg/800px-Circaetus_gallicus_in_Kiev_Zoo.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC380056-circaete%20cris%20couple.mp3'
    },
    {
      id: 4,
      name: 'Стервятник',
      species: 'Neophron percnopterus',
      description: 'Оперение стервятника окрашено в белый цвет с чёрными длинными перьями по краям крыльев, что особенно заметно в полёте. В области горла перья имеют желтоватый оттенок. Голова у стервятника лысая, со складками, и ярко-жёлтой, иногда даже оранжевой кожей.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Egyptian_vulture.jpg/275px-Egyptian_vulture.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ILUHRFXDNU/percnoptere%20dEgypte%20chickcall.mp3'
    },
    {
      id: 5,
      name: 'Орлан',
      species: 'Haliaeetus',
      description: 'Орланы обитают по берегам морей, крупных озёр и рек. Гнёзда устраивают на деревьях, реже на скалах. В кладке от 1 до 4 яиц. Кормятся рыбой, мелкими млекопитающими, птицами, падалью.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Riesenseeadler.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YBXAQXNZZP/XC503707-Goa%20Odxel%20White-bellied%20Sea%20Eagle%2022-Oct-2019%20AAM%20E.mp3'
    },
    {
      id: 6,
      name: 'Шахин',
      species: 'Falco pelegrinoides',
      description: 'Внешним видом и поведением похож на сапсана, но немного мельче, верх светлее, низ охристый с менее развитым рисунком, на макушке и затылке имеются ярко-рыжие пятна. Длина тела 33—39 см. Самки крупнее самцов.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/W%C3%BCstenfalke.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZAAPUBHXSQ/XC313699-Barbary%20Falcon%20%281%29.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Клюв длинный, острый и слегка изогнут вниз; в сезон размножения жёлтый, в остальное время тёмно-бурый (основание подклювья всегда голубое). В отличие от более крупного чёрного дрозда клюв приплюснут с боков и не такой мощный. Радужная оболочка глаз каряя, или тёмно-бурая.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/European_Starling_2006.jpg/266px-European_Starling_2006.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC525308-200207_1721%201732%20Star.%20D%2C%20LEV.%20Stephan%20Risch.mp3'
    },
    {
      id: 2,
      name: 'Серый сорокопут',
      species: 'Lanius excubitor',
      description: 'Крупный сорокопут размером с дрозда-рябинника, с большой головой, короткими закруглёнными крыльями и достаточно длинным ступенчатым хвостом. Длина 23—28 см, размах крыльев 35—39 см, вес около 60—80 г. Верх чаще всего пепельно-серый, однако у отдельных подвидов он может быть как более светлым, так и тёмным.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lanius_excubitor%2C_Chilham%2C_Kent_4.jpg/800px-Lanius_excubitor%2C_Chilham%2C_Kent_4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC523763-Great%20Grey%20Shrike%20Uvda%20Song%2026%20Jan.mp3'
    },
    {
      id: 3,
      name: 'Лазоревка',
      species: 'Cyanistes caeruleus',
      description: 'В окрасе заметно отличается от других видов синиц, прежде всего, сине-лазоревой шапочкой и тёмно-синими тонкими полосками по обеим сторонам клюва, которые проходят через глаза и далее смыкаются на затылке. Ещё одна тёмно-синяя полоса проходит вокруг шеи, образуя подобие ошейника.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/ParusCaeruleus.jpg/275px-ParusCaeruleus.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC524759-Cyanistes%20caeruleus_2020.02.04_11.40_01.mp3'
    },
    {
      id: 4,
      name: 'Полевой жаворонок',
      species: 'Alauda arvensis',
      description: 'Полевой жаворонок размером немного крупнее воробья и имеет неяркую, но привлекательную окраску оперения. Спина у него серого цвета, иногда коричнево-жёлтая с пёстрыми вкраплениями, оперение живота белого цвета, грудь, довольно широкая для изящной птички, имеет коричневые пёстрые перья.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Skylark_2%2C_Lake_District%2C_England_-_June_2009.jpg/275px-Skylark_2%2C_Lake_District%2C_England_-_June_2009.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC523258-2019-10-26%20Cap%20Ferret%20Alouette%20des%20champs%20plusieurs%20types%20de%20cris.mp3'
    },
    {
      id: 5,
      name: 'Трясогузка',
      species: 'Motacilla',
      description: 'Трясогузки — перелётные птицы. Большинство трясогузок держится возле воды отдельными семьями или небольшими стайками; гнездятся трясогузки на земле или в дуплах. В отличие от большинства мелких птиц по земле передвигается не прыжками, а бегом.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Motacilla_alba_alba_cropped.JPG/1280px-Motacilla_alba_alba_cropped.JPG',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC523246-2019-10-25%20Cap%20Ferret%20Bergeronnette%20printaniere%20type%20flava%20tardive%20migr.mp3'
    },
    {
      id: 6,
      name: 'Лесной конёк',
      species: 'Anthus trivialis',
      description: 'Длина тела до 16 см. Верх буровато-серый, с черновато-бурыми пестринами. Низ светло-охристый. На груди и боках тёмные пестрины, крайние рулевые белые.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Anthus_triviallis_%28Marek_Szczepanek%29.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC523224-2019-10-27%20Biscarosse%20Pipit%20des%20arbres%20migr%20tardive.mp3'
    }
  ]
];

export default birdsData;
