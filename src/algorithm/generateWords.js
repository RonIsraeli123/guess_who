const ENGLISH_WORDS = [
  ['Number', 'Numbers'],
  ['Orange', 'Apple'],
  ['Cat', 'Cute'],
  ['Chocolate', 'Caramel'],
  ['Love', 'Hate'],
  ['Sea', 'Shore'],
  ['Song', 'Lyrics'],
  ['Fish', 'Fire'],
  ['Computer', 'Keyboard'],
  ['Sun', 'Rain'],
  ['Party', 'Quiet'],
  ['Winter', 'Spring'],
  ['Page', 'Pen'],
  ['Bag', 'Document'],
  ['Car', 'Road'],
  ['Station', 'Train'],
  ['Book', 'Page'],
  ['Verb', 'Noun'],
  ['Coffee', 'Cup'],
  ['Summer', 'Ice'],
  ['End', 'Beginning'],
  ['Window', 'Door'],
  ['Salt', 'Pepper'],
  ['Treatment', 'Problem'],
  ['Picture', 'Frame'],
  ['Screen', 'Computer'],
  ['Sign', 'Picture'],
  ['Pay', 'Half'],
  ['New', 'Old'],
  ['Shoe', 'Sock'],
  ['Research', 'Development'],
  ['Air Conditioner', 'Greenhouse'],
  ['Kitchen', 'Living Room'],
  ['Woman', 'Man'],
  ['Watch', 'Goal'],
  ['House', 'Apartment'],
  ['Light', 'Darkness'],
  ['Once', 'Again'],
  ['Chair', 'Table'],
  ['Flower', 'Branch'],
  ['Tooth', 'Life'],
  ['Falafel', 'Burekas'],
  ['Road', 'Railway'],
  ['Queen', 'King'],
  ['Energy', 'Laziness'],
  ['Secret', 'Revealed'],
  ['Sign', 'Face'],
  ['Cell', 'Ball'],
  ['Pair', 'Grandchild'],
  ['Height', 'Width'],
  ['Glove', 'Horn'],
  ['Dinosaur', 'Paleozoic'],
  ['Meter', 'Kilometer'],
  ['Ballad', 'Rock'],
  ['Bag', 'Bag'],
  ['Party', 'Party'],
  ['Spoon', 'Knife'],
  ['Water', 'Fire'],
  ['Football', 'Basketball'],
  ['Butterfly', 'Bee'],
  ['Balloon', 'Trouble'],
  ['Night', 'Day'],
  ['Half', 'Full'],
  ['King', 'Queen'],
  ['Like', 'As'],
  ['Food', 'Drink'],
  ['Host', 'Invitation'],
  ['Music', 'Art'],
  ['Bag', 'Computer'],
  ['Lesson', 'Teacher'],
  ['Language', 'Word'],
  ['Clouds', 'Sun'],
  ['End', 'Beginning'],
  ['Magnet', 'Output'],
  ['Beach', 'Sea'],
  ['Speech', 'Silence'],
  ['Dream', 'Reality'],
  ['Coin', 'Area'],
  ['Stairs', 'Level'],
  ['Distance', 'Close'],
  ['Agriculture', 'Industry'],
  ['Rain', 'Sun'],
  ['Model', 'Animal'],
  ['Air Conditioner', 'Refrigerator'],
  ['Mechanics', 'Physics'],
  ['Name', 'Number'],
  ['Star', 'Planet'],
  ['Engine', 'Brain'],
  ['Ball', 'Glasses'],
  ['Book', 'Author'],
  ['Coffee', 'Beer'],
  ['Jump', 'Spread'],
  ['Face', 'Body'],
  ['Family', 'Individual'],
  ['Cellular', 'Television'],
  ['Tooth', 'Tongue'],
  ['Button', 'Keyboard'],
  ['Refrigerator', 'Television'],
  ['Music', 'Sports'],
  ['Dream', 'Seriousness'],
  ['Sugar', 'Salt'],
  ['Voice', 'Image'],
  ['Bag', 'Chocolate'],
  ['Thank You', 'Parade'],
  ['Sunset', 'Sunrise'],
  ['Hammer', 'Nail'],
  ['Thunder', 'Lightning'],
  ['Dolphin', 'Whale'],
  ['Coffee', 'Tea'],
  ['Pen', 'Paper'],
  ['Sun', 'Moon'],
  ['Tree', 'Leaf'],
  ['Mountain', 'Valley'],
  ['Fire', 'Water'],
  ['Book', 'Chapter'],
  ['Ocean', 'Desert'],
  ['Sky', 'Earth'],
  ['Rose', 'Tulip'],
  ['Cat', 'Dog'],
  ['Fish', 'Bird'],
  ['Sunrise', 'Sunset'],
  ['Mirror', 'Reflection'],
  ['Knife', 'Fork'],
  ['Shoe', 'Sock'],
  ['Hat', 'Glove'],
  ['River', 'Lake'],
  ['Apple', 'Orange'],
  ['Sword', 'Shield'],
  ['Cloud', 'Rain'],
  ['Bridge', 'Tunnel'],
  ['Brick', 'Mortar'],
  ['Chair', 'Table'],
  ['Key', 'Lock'],
  ['Music', 'Silence'],
  ['Whisper', 'Shout'],
  ['Star', 'Planet'],
  ['Map', 'Compass'],
  ['Seed', 'Fruit'],
  ['Candle', 'Match'],
  ['Wind', 'Breeze'],
  ['Winter', 'Summer'],
  ['Road', 'Path'],
  ['Sail', 'Anchor'],
  ['Echo', 'Noise'],
  ['North', 'South'],
  ['Forest', 'Field'],
  ['Diamond', 'Ruby'],
  ['Thorn', 'Rose'],
  ['Gold', 'Silver'],
  ['Horse', 'Carriage'],
  ['Clock', 'Watch'],
  ['Chocolate', 'Vanilla'],
  ['Rainbow', 'Cloud'],
  ['Eagle', 'Owl'],
  ['Root', 'Branch'],
  ['Dream', 'Reality'],
  ['Helmet', 'Armor'],
  ['Camera', 'Lens'],
  ['Foot', 'Hand'],
  ['Microphone', 'Speaker'],
  ['Island', 'Continent'],
  ['Cactus', 'Flower'],
  ['Necklace', 'Ring'],
  ['Whale', 'Shark'],
  ['Train', 'Plane'],
  ['Sculpture', 'Painting'],
  ['Wizard', 'Sorcerer'],
  ['Chess', 'Checkers'],
  ['Dawn', 'Dusk'],
  ['Comedy', 'Tragedy'],
  ['Moonlight', 'Starlight'],
  ['Puzzle', 'Riddle'],
  ['Raindrop', 'Snowflake'],
  ['Salt', 'Pepper'],
  ['Adventure', 'Journey'],
  ['Storm', 'Calm'],
  ['Hope', 'Despair'],
  ['Camera', 'Tripod'],
  ['Cliff', 'Cave'],
  ['Cherry', 'Plum'],
  ['Guitar', 'Piano'],
  ['Ink', 'Paint'],
  ['Robot', 'Alien'],
  ['Lighthouse', 'Beacon'],
  ['Harmony', 'Dissonance'],
  ['Fog', 'Mist'],
  ['Puzzle', 'Maze'],
  ['Ant', 'Spider'],
  ['Sunflower', 'Daisy'],
  ['Raincoat', 'Umbrella'],
  ['Echo', 'Whisper'],
  ['Lighthouse', 'Ship'],
  ['Ice', 'Fire'],
  ['Key', 'Door'],
  ['Moonbeam', 'Sunbeam'],
  ['Pebble', 'Boulder'],
  ['Harbor', 'Port'],
  ['Maple', 'Oak'],
  ['Hope', 'Regret'],
  ['Blossom', 'Petal'],
  ['Mountain', 'Hill'],
  ['Alley', 'Street'],
  ['Alchemy', 'Chemistry'],
  ['Sunflower', 'Rose'],
];

const HEBREW_WORDS = [
  ['מספר', 'מספרים'],
  ['תפוז', 'תפוח'],
  ['חתול', 'חמוד'],
  ['שוקולד', 'קרמיל'],
  ['אהבה', 'שנאה'],
  ['ים', 'חוף'],
  ['שיר', 'מילים'],
  ['דג', 'אש'],
  ['מחשב', 'מקלדת'],
  ['שמש', 'גשם'],
  ['מסיבה', 'שקט'],
  ['חורף', 'אביב'],
  ['דף', 'עט'],
  ['תיק', 'מסמך'],
  ['מכונית', 'כביש'],
  ['תחנה', 'רכבת'],
  ['ספר', 'עמוד'],
  ['פועל', 'שם'],
  ['קפה', 'כוס'],
  ['קיץ', 'קרח'],
  ['סוף', 'התחלה'],
  ['חלון', 'דלת'],
  ['מלח', 'פלפל'],
  ['תיקול', 'בעיה'],
  ['תמונה', 'מסגרת'],
  ['מסך', 'מחשב'],
  ['שלט', 'תמונה'],
  ['שלם', 'חצי'],
  ['חדש', 'ישן'],
  ['נעל', 'גרב'],
  ['מחקר', 'פיתוח'],
  ['מזגן', 'חממה'],
  ['מטבח', 'סלון'],
  ['אישה', 'גבר'],
  ['שעון', 'מטרה'],
  ['בית', 'דירה'],
  ['אור', 'חושך'],
  ['פעם', 'שוב'],
  ['כיסא', 'שולחן'],
  ['פרח', 'ענף'],
  ['שן', 'חיים'],
  ['פלאפל', 'בורקס'],
  ['כביש', 'מסילה'],
  ['מלכה', 'מלך'],
  ['מרץ', 'עצלנות'],
  ['סוד', 'גלוי'],
  ['סימן', 'פני'],
  ['תא', 'כדור'],
  ['זוג', 'נכד'],
  ['גובה', 'רוחב'],
  ['כפפה', 'קרן'],
  ['דינוזואר', 'פלאוזואר'],
  ['מטר', 'קילומטר'],
  ['בלדה', 'רוק'],
  ['תיק', 'תיק'],
  ['מסיבה', 'מסיבה'],
  ['כף', 'סכין'],
  ['מים', 'אש'],
  ['כדורגל', 'כדורסל'],
  ['פרפר', 'דבורה'],
  ['בלון', 'מזיק'],
  ['לילה', 'יום'],
  ['חצי', 'מלא'],
  ['מלך', 'מלכה'],
  ['כמו', 'כפי'],
  ['אוכל', 'שתייה'],
  ['אורח', 'מזמין'],
  ['מוזיקה', 'אמנות'],
  ['תיק', 'מחשב'],
  ['שיעור', 'מורה'],
  ['שפה', 'מילה'],
  ['עננים', 'שמש'],
  ['סוף', 'התחלה'],
  ['מגנט', 'פלט'],
  ['חוף', 'ים'],
  ['דיבור', 'שקט'],
  ['חלום', 'מציאות'],
  ['מטבע', 'שטח'],
  ['מדרגה', 'רמה'],
  ['מרחק', 'קרוב'],
  ['חקלאות', 'תעשייה'],
  ['גשם', 'שמש'],
  ['דגם', 'חיה'],
  ['מזגן', 'מקרר'],
  ['מכניקה', 'פיזיקה'],
  ['שם', 'מספר'],
  ['כוכב', 'פלאנטה'],
  ['מחילה', 'מוח'],
  ['כדור', 'משקפת'],
  ['ספר', 'מחבר'],
  ['קפה', 'בירה'],
  ['קפיצה', 'התפשטות'],
  ['פנים', 'גוף'],
  ['משפחה', 'יחיד'],
  ['סלולרי', 'טלוויזיה'],
  ['שן', 'לשון'],
  ['כפתור', 'מקלדת'],
  ['מקרר', 'טלוויזיה'],
  ['מוזיקה', 'ספורט'],
  ['חלום', 'רצינות'],
  ['סוכר', 'מלח'],
  ['קול', 'תמונה'],
  ['תיק', 'שוקולד'],
  ['תודה', 'מצעד'],
  ['פטיש', 'מסמר'],
  ['רעם', 'ברק'],
  ['דולפין', 'לוויתן'],
  ['קפה', 'תה'],
  ['עט', 'נייר'],
  ['שמש', 'ירח'],
  ['עץ', 'עלה'],
  ['הר', 'עמק'],
  ['אש', 'מים'],
  ['ספר', 'פרק'],
  ['אוקיינוס', 'מדבר'],
  ['שמיים', 'אדמה'],
  ['ורד', 'צבעוני'],
  ['חתול', 'כלב'],
  ['דג', 'ציפור'],
  ['זריחה', 'שקיעה'],
  ['מראה', 'השתקפות'],
  ['סכין', 'מזלג'],
  ['נעל', 'גרב'],
  ['כובע', 'כפתור'],
  ['נהר', 'אגם'],
  ['תפוח', 'תפוז'],
  ['חרב', 'מגן'],
  ['ענן', 'גשם'],
  ['גשר', 'מנהרה'],
  ['לבנה', 'טיח'],
  ['כיסא', 'שולחן'],
  ['מפתח', 'מנעול'],
  ['מוזיקה', 'שקט'],
  ['לשון', 'דיבור'],
  ['כוכב', 'כוכבית'],
  ['מפה', 'מצפן'],
  ['זרע', 'פרי'],
  ['נר', 'גפן'],
  ['רוח', 'זרם'],
  ['חורף', 'קיץ'],
  ['דרך', 'נתיב'],
  ['מפרש', 'עקב'],
  ['הד', 'רעש'],
  ['צפון', 'דרום'],
  ['יער', 'שדה'],
  ['יהלום', 'רובי'],
  ['קוץ', 'ורד'],
  ['זהב', 'כסף'],
  ['סוס', 'מרכולת'],
  ['שעון', 'שעון יד'],
  ['שוקולד', 'וניל'],
  ['קשת', 'ענן'],
  ['נשר', 'ינשוף'],
  ['שורש', 'סנפיר'],
  ['חלום', 'מציאות'],
  ['קסדה', 'שריין'],
  ['מצלמה', 'עדשה'],
  ['רגל', 'יד'],
  ['מיקרופון', 'רמקול'],
  ['אי', 'יבשה'],
  ['קקטוס', 'פרח'],
  ['צמיג', 'גלגל'],
  ['תכשיט', 'טבעת'],
  ['לוויתן', 'כריש'],
  ['רכבת', 'מטוס'],
  ['פסל', 'ציור'],
  ['קוסם', 'כוח'],
  ['שחמט', 'דמקה'],
  ['עמוד', 'מחצבה'],
  ['קטליזטור', 'תקריב'],
  ['שלג', 'ברק'],
  ['מלח', 'פלפל'],
  ['הרפתקה', 'מסע'],
  ['סערה', 'שקט'],
  ['תקווה', 'יאוש'],
  ['מצלמה', 'טריפוד'],
  ['צוק', 'מערה'],
  ['דובדבן', 'אשכולית'],
  ['גיטרה', 'פסנתר'],
  ['דיו', 'צבע'],
  ['רובוט', 'יצור זר'],
  ['מגדל שמש', 'פנס'],
  ['הרמוניה', 'דיסוננס'],
  ['ערפל', 'טורף'],
  ['פאזל', 'חידה'],
  ['טינה', 'כפית'],
  ['מקור', 'פלט'],
  ['מבוך', 'לילה'],
  ['נמל', 'נמלה'],
  ['קיץ', 'חורף'],
  ['מיון', 'מדע'],
  ['ראש', 'זנב'],
  ['נסיעה', 'טיול'],
  ['סתם', 'צמיג'],
  ['מציאות', 'פעולה'],
  ['עיצוב', 'פסיק'],
  ['סיר', 'קוסקוס'],
  ['דמיון', 'מציאות'],
  ['פרח', 'עלה'],
  ['הר', 'גבעה'],
  ['סמטה', 'רחוב'],
  ['אלכימיה', 'כימיה'],
  ['חמאה', 'גבינה'],
  ['כחול', 'צהוב'],
  ['ספר', 'עיתון'],
];

const shuffleFunc = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateWords = (players, language) => {
  let goodGuys = 0;
  let badGuys = 0;
  // const noWordGuy = 1;

  // even players number
  if (players % 2 === 0) {
    goodGuys = players / 2;
    badGuys = players / 2 - 1;
  }
  // odd players number
  else {
    goodGuys = Math.ceil(players / 2);
    badGuys = Math.ceil(players / 2) - 2;
  }
  let WORDS = [];
  let noWordArray = [];

  if (language === 'hebrew') {
    WORDS = HEBREW_WORDS;
    noWordArray = ['חסר מילה'];
  } else {
    WORDS = ENGLISH_WORDS;
    noWordArray = ['No Word'];
  }
  const wordsPair = shuffleFunc(WORDS)[0];
  const goodWord = wordsPair[0];
  const badWord = wordsPair[1];

  const goodArray = Array(goodGuys).fill(goodWord);
  const badArray = Array(badGuys).fill(badWord);
  let wordsResult = goodArray.concat(badArray).concat(noWordArray);
  const result = {
    wordsResult: shuffleFunc(wordsResult),
    option: { goodWord: goodWord, badWord: badWord },
  };
  return result;
};

export default generateWords;
