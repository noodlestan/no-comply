export const isCopyPasteKeyboardEvent = (ev: KeyboardEvent): boolean => {
    return (ev.ctrlKey || ev.metaKey) && (ev.key === 'c' || ev.key === 'v');
};
