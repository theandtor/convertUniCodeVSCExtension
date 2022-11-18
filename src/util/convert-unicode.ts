const arrayUni = [
    { text: 'á', uni: '\\u00E1' },
    { text: 'é', uni: '\\u00E9' },
    { text: 'ú', uni: '\\u00FA' },
    { text: 'í', uni: '\\u00ED' },
    { text: 'ó', uni: '\\u00F3' },
]

export const convertUniCode = (text: string) => {
    let newText = '';

    for (let index = 0; index < text.length; index++) {
        const element = text[index];

        const indexFind = arrayUni.findIndex((e) => e.text === element);
        
        if (indexFind !== -1) {
            newText = newText + arrayUni[indexFind].uni;
        } else {
            newText = newText + element;
        }
    }

    return newText;
};