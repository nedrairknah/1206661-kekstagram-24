import {getRandomInteger} from './get-random-integer.js';

const DESCRIPTION = [
  'смотрю в окно',
  'бегу по мосту',
  'ем торт',
  'ковыряю в носу',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

const COMMENTS_AMOUNT = 3;

const USER_AMOUNT = 25;

const createArrayOrderedNumbers = (elements) => Array.from({length: elements}, (el1, el2) => el2 + 1);

const DESCRIPTION_IDS = createArrayOrderedNumbers(USER_AMOUNT);
const PHOTO_NUMBERS = createArrayOrderedNumbers(USER_AMOUNT);
const COMMENT_IDS = createArrayOrderedNumbers(USER_AMOUNT);

const getRandomArrayElement = (elements) => {
  const RANDOM = getRandomInteger (0, elements.length);
  const RESULT = elements[RANDOM];
  elements.splice(RANDOM, 1);
  return RESULT;
};

const generateComment = () => {
  const COMMENT_ID = getRandomArrayElement(COMMENT_IDS);
  const COMMENTOR_NAME = NAMES[getRandomInteger(0, NAMES.length - 1)];
  const RANDOM_IMG = getRandomInteger(1, 6);
  const RANDOM_MESSAGE = MESSAGES[getRandomInteger(1,6)];


  return {
    commentId: COMMENT_ID,
    avatar: `img/avatar-${  RANDOM_IMG  }.svg`,
    message: RANDOM_MESSAGE,
    name: COMMENTOR_NAME,
  };
};


const generateUser = () => {
  const RANDOM_NAME = NAMES[getRandomInteger(0, NAMES.length - 1)];
  const RANDOM_ID = getRandomArrayElement(DESCRIPTION_IDS);
  const RANDOM_URL = getRandomArrayElement(PHOTO_NUMBERS);
  const RANDOM_DESCRIPTION = DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)];
  const RANDOM_LIKES = getRandomInteger(15, 200);

  const COMMENTS_GROUP = Array.from({length: COMMENTS_AMOUNT}, generateComment);


  return {
    name: RANDOM_NAME,
    id: RANDOM_ID,
    url: `photos/${  RANDOM_URL  }.jpg`,
    description: RANDOM_DESCRIPTION,
    likes: RANDOM_LIKES,
    comments: {
      groupOfComments: COMMENTS_GROUP,
    },
  };

};

const USERS = Array.from({length: USER_AMOUNT}, generateUser);

generateUser ();
// eslint-disable-next-line no-console
console.log(USERS);

export {USERS};
