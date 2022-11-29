const _ = require('lodash');

export const HYPHEN = '-';
export const UNDERSCORE = '_';
export const IS_LETTER_REGEX = /[a-zA-Z]/;
export const isLetter = (character: string = ''): boolean =>  IS_LETTER_REGEX.test(character);
export const isUpperCase = (character: string): boolean => !_.isEmpty(character) && isLetter(character) && character === character.toUpperCase();
export const isLowerCase = (character: string): boolean => !_.isEmpty(character) && isLetter(character) && character === character.toLowerCase();
