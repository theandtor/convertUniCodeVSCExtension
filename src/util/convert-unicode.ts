const arrayUni = [
    // minus
    { text: 'á', uni: '\\u00E1' },
    { text: 'é', uni: '\\u00E9' },
    { text: 'í', uni: '\\u00ED' },
    { text: 'ó', uni: '\\u00F3' },
    { text: 'ú', uni: '\\u00FA' },
    { text: 'ñ', uni: '\\u00F1' },

    // mayus
    { text: 'Á', uni: '\\u00C1' },
    { text: 'É', uni: '\\u00C9' },
    { text: 'Í', uni: '\\u00CD' },
    { text: 'Ó', uni: '\\u00D3' },
    { text: 'Ú', uni: '\\u00DA' },
    { text: 'Ñ', uni: '\\u00D1' },
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