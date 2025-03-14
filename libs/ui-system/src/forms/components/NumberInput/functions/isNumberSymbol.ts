export const isNumberSymbol = (key: string): boolean => {
    const numberPattern = /^[0-9]$/;
    return numberPattern.test(key);
};
