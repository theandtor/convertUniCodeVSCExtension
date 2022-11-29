import { HYPHEN, isLowerCase, isUpperCase, UNDERSCORE } from "./words-utils";
const _ = require('lodash');

const convertNayusByCondition = (allMayus: boolean, character: string) => allMayus && !_.isNil(character) ? character.toUpperCase() : character.toLowerCase();

export const covertSpecialCase = (text: string = '', separatorSymbol: string, startMayus: boolean, allMayus: boolean): string => {
    let newText = '';

    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        const elementPrev = index - 1 >= 0 ? text[index - 1] : '';
        const letterByCondition = convertNayusByCondition(allMayus, element);

        if (startMayus && index === 0) {
            newText = newText + element.toUpperCase();
        } else if ((isLowerCase(elementPrev) && isUpperCase(element))
                    || elementPrev === HYPHEN
                    || elementPrev === UNDERSCORE) {
            newText = newText + separatorSymbol + letterByCondition;
        } else if (element !== HYPHEN && element !== UNDERSCORE) {
            newText = newText + letterByCondition;
        }
    }

    return newText;
};