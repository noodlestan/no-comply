export const capitalize = (s: string): string => {
    if (s.length < 1) {
        return '';
    }
    return (s[0]?.toUpperCase() + s.slice(1)) as Capitalize<typeof s>;
};
