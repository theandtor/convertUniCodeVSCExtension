import { registerCommand } from '../util/extensions-util';
import { covertSpecialCase } from '../util/specialCaseUtils';
import { UNDERSCORE } from '../util/words-utils';

export const registerCommandSnakeCase = () => {
	return registerCommand('theandtor.convertConstant.snake_case', (word: string) => covertSnakeCase(word));
};

export const registerCommandScreamingSnakeCase = () => {
	return registerCommand('theandtor.convertConstant.SCREAMING_SNAKE_CASE', (word: string) => covertScreamingSnakeCase(word));
};

export const covertSnakeCase = (text: string = ''): string => {
    return covertSpecialCase(text, UNDERSCORE, false, false);
}

export const covertScreamingSnakeCase = (text: string = ''): string => {
    return covertSpecialCase(text, UNDERSCORE, false, true);
}