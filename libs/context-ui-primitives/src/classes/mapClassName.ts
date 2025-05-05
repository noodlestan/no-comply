export const mapClassName = (styles: Record<string, string>, className: string): string => {
    if (!(className in styles)) {
        const names = Object.keys(styles).join(' ');
        console.error(`Class "${className}" not found in styles "${names}"`);
    }
    return styles[className] as string;
};
