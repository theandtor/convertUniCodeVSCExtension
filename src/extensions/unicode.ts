import { convertUniCode } from '..//util/convert-unicode';
import { registerCommand } from '../util/extensions-util';

export const registerCommandUnicode = () => {
    return registerCommand('theandtor.unicodeconverterfiles.convertFile', (word: string) => convertUniCode(word));
}