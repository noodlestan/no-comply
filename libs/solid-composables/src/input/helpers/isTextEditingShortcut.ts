const TEXT_EDITING_SHORTCUT_KEYS = ['a', 'c', 'v', 'x'];

export const isTextEditingShortcut = (ev: KeyboardEvent): boolean => {
	return (ev.ctrlKey || ev.metaKey) && TEXT_EDITING_SHORTCUT_KEYS.includes(ev.key);
};
