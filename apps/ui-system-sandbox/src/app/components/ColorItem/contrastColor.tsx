export const contrastColor = (value: string): string => {
    const matches = value.match(/hsla?\(\d+,\d+%,(\d+)(,\d+)?%\)/);
    const l = Number(matches?.[1]) || 0;
    return l > 50 ? 'black' : 'white';
};
