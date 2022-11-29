import { registerCommand } from '../util/extensions-util';
import { HYPHEN, isLowerCase, isUpperCase, UNDERSCORE } from '../util/words-utils';
const _ = require('lodash');

export const registerCommandCamelCaseStartMayus = () => {
	return registerCommand('theandtor.convertConstant.CamelCase', (word: string) => covertCamelCase(word, true));
};

export const registerCommandCamelCaseStartLower = () => {
	return registerCommand('theandtor.convertConstant.camelCase', (word: string) => covertCamelCase(word, false));
};

export const covertCamelCase = (text: string = '', startMayus: boolean): string => {
    let newText = '';

    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        const elementPrev = index - 1 >= 0 ? text[index - 1] : '';

        if (startMayus && index === 0) {
            newText = newText + element.toUpperCase();
        } else if ((isLowerCase(elementPrev) && isUpperCase(element))
                    || elementPrev === HYPHEN
                    || elementPrev === UNDERSCORE) {
            newText = newText + element.toUpperCase();
        } else if (element !== HYPHEN && element !== UNDERSCORE) {
            newText = newText + element.toLowerCase();
        }
    }

    return newText;
};