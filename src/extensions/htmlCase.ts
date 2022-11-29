import { registerCommand } from '../util/extensions-util';
import { covertSpecialCase } from '../util/specialCaseUtils';
import { HYPHEN } from '../util/words-utils';

export const registerCommandKebabCase = () => {
	return registerCommand('theandtor.convertConstant.kebab-case', (word: string) => covertKebabCase(word));
};

export const covertKebabCase = (text: string = ''): string => {
    return covertSpecialCase(text, HYPHEN, false, false);
}
