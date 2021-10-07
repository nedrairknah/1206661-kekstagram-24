const randomInteger = function (from, to) {
  if (from >= 0 && to >= 0) {
    if (to > from) {
      const number = Math.floor(Math.random() * (to - from) + from);
      return number;
    } else {
      return 'значение до меньше или ровно значению от - так нельзя';
    }

  } else {
    return 'отрицательные числа нельзя';
  }
};

randomInteger (3, 33);

const lengthCheck = function (stringToCheck, maxLength) {
  if (stringToCheck <= maxLength) {
    return true;
  } else {
    return false;
  }
};

lengthCheck (100, 500);


///////////////////////////////////////////////////////////////////////////////////////////


// const IDNUMBER = [
//   //рандомное число 1-25, не должен повторяться
// ];

// const URLADDRESS = [
//   //рандомное число 1-25, не должен повторяться
// ];

const DESCRIPTION = [
  'смотрю в окно',
  'бегу по мосту',
  'ем торт',
  'ковыряю в носу',
];

// let likesAmount = [
//   //рандомное число 15-200
// ];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// let comments = [
//   {
//     id: 777,
//     avatar: '',
//     message: '',
//     name: '',
//   }
// ]


const NAMES = [
  'Александр',
  'Дмитрий',
  'Максим',
  'Сергей',
  'Андрей',
  'Алексей',
  'Артём',
  'Илья',
  'Кирилл',
  'Михаил',
  'Никита',
  'Матвей',
  'Роман',
  'Егор',
  'Арсений',
  'Иван',
  'Денис',
  'Евгений',
  'Даниил',
  'Тимофей',
  'Владислав',
  'Игорь',
  'Павел',
  'Владимир',
  'Руслан',
];

const commenstAmount = 3;

// generateComment ();
// console.log(groupOfComments);


const USER_AMOUNT = 25;

const createArrayOrderedNumbers = (elements) => Array.from({length: elements}, (el1, el2) => el2 + 1);

const DESCRIPTION_IDS = createArrayOrderedNumbers(USER_AMOUNT);
const PHOTO_NUMBERS = createArrayOrderedNumbers(USER_AMOUNT);
const COMMENT_IDS = createArrayOrderedNumbers(USER_AMOUNT);

const getRandomArrayElement = (elements) => {
  const random = randomInteger (0, elements.length - 1);
  const result = elements[random];
  elements.splice(random, 1);
  return result;
};

const generateUser = () => {
  const randomName = NAMES[randomInteger(0, NAMES.length - 1)];
  const randomID = getRandomArrayElement(DESCRIPTION_IDS);
  const randomURL = getRandomArrayElement(PHOTO_NUMBERS);
  const randomDescription = DESCRIPTION[randomInteger(0, DESCRIPTION.length - 1)];
  const randomLikes = randomInteger(15, 200);

  const generateComment = () => {
    const COMMENTID = getRandomArrayElement(COMMENT_IDS);
    const COMMENTORNAME = NAMES[randomInteger(0, NAMES.length - 1)];
    const randomImg = randomInteger(1, 6);
    const randomMessage = MESSAGES[randomInteger(1,6)];


    return {
      commentId: COMMENTID,
      avatar: `img/avatar-${  randomImg  }.svg`,
      message: randomMessage,
      name: COMMENTORNAME,
    };
  };
  const groupOfComments = Array.from({length: commenstAmount}, generateComment);


  return {
    name: randomName,
    id: randomID,
    url: `photos/${  randomURL  }.jpg`,
    description: randomDescription,
    likes: randomLikes,
    comments: {
      groupOfComments,
    },
  };

};

const packOfUsers = Array.from({length: USER_AMOUNT}, generateUser);

generateUser ();
// eslint-disable-next-line no-console
console.log(packOfUsers);
