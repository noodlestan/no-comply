const ALLOWED_KEYS = ['a', 'c', 'v', 'x'];

export const isTextEditingShortcut = (ev: KeyboardEvent): boolean => {
    return (ev.ctrlKey || ev.metaKey) && ALLOWED_KEYS.includes(ev.key);
};
