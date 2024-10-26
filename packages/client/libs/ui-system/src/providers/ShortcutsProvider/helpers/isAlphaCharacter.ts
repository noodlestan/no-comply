export const isAlphaCharacter = (key: string): boolean => {
    const k = key.toLowerCase();
    return k >= 'a' && k <= 'z';
};
